import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { zip } from './zip.mjs'

const root = fileURLToPath(new URL('../', import.meta.url))
const { version } = JSON.parse(await readFile(`${root}package.json`, 'utf8'))
const metadata = {
  moss: { name: { zh: 'MOSS · 毛毡', en: 'MOSS · Felt' }, description: { zh: '柔软、安静的薄荷绿小伙伴', en: 'A soft, quiet mint-green companion' } },
  zip: { name: { zh: 'ZIP · 漫画', en: 'ZIP · Comic' }, description: { zh: '机灵、调皮的多彩漫画小蚁', en: 'A clever, playful, colorful cartoon ant' } }
}
const digest = (data) => createHash('sha256').update(data).digest('hex')
const catalog = { format: 1, pets: [] }
await mkdir(`${root}dist`, { recursive: true })
for (const [id, details] of Object.entries(metadata)) {
  const folder = `${root}pets/${id}`
  const assets = {}, entries = []
  for (const file of ['poses.webp', 'walk.webp', 'face.webp']) {
    const bytes = await readFile(`${folder}/${file}`)
    assets[file] = { size: bytes.length, sha256: digest(bytes) }; entries.push([file, bytes])
  }
  const rig = JSON.parse(await readFile(`${folder}/rig.json`, 'utf8'))
  const manifest = { format: 1, id, version, ...details, rig, assets }
  const manifestBytes = Buffer.from(JSON.stringify(manifest, null, 2) + '\n')
  await writeFile(`${folder}/manifest.json`, manifestBytes)
  const archive = zip([['manifest.json', manifestBytes], ...entries])
  await writeFile(`${root}dist/${id}-${version}.zip`, archive)
  catalog.pets.push({ id, version, ...details, size: archive.length, sha256: digest(archive), url: `https://github.com/flyhero/antumi-pets/releases/download/pets-v${version}/${id}-${version}.zip`, preview: `data:image/png;base64,${(await readFile(`${folder}/preview.png`)).toString('base64')}` })
  console.log(`${id}-${version}.zip ${archive.length} bytes ${digest(archive)}`)
}
await writeFile(`${root}catalog.json`, JSON.stringify(catalog, null, 2) + '\n')
await writeFile(`${root}dist/catalog.json`, JSON.stringify(catalog, null, 2) + '\n')
