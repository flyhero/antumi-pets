import {test} from 'node:test'
import assert from 'node:assert/strict'
import {execFileSync} from 'node:child_process'
import {readFile} from 'node:fs/promises'
import {createHash} from 'node:crypto'
const root=new URL('../',import.meta.url)
const digest=data=>createHash('sha256').update(data).digest('hex')

test('builds reproducible typing packages without changing the legacy catalog',async()=>{
  const legacy=await readFile(new URL('catalog.json',root))
  const build=()=>execFileSync(process.execPath,[new URL('scripts/build.mjs',root).pathname])
  build()
  const catalog=JSON.parse(await readFile(new URL('catalog-v2.json',root),'utf8'))
  const first=[]
  for(const entry of catalog.pets){
    const manifest=JSON.parse(await readFile(new URL(`pets/${entry.id}/manifest.json`,root),'utf8'))
    assert.equal(manifest.version,'1.1.0')
    assert.ok(manifest.rig.typing.near.clip&&manifest.rig.typing.far.clip)
    for(const file of ['typing.webp','typing-base.webp']){
      const bytes=await readFile(new URL(`pets/${entry.id}/${file}`,root))
      assert.deepEqual(manifest.assets[file],{size:bytes.length,sha256:digest(bytes)})
    }
    const archive=await readFile(new URL(`dist/${entry.id}-${entry.version}.zip`,root))
    assert.equal(digest(archive),entry.sha256)
    first.push([entry.id,digest(archive)])
  }
  build()
  for(const [id,sha] of first)assert.equal(digest(await readFile(new URL(`dist/${id}-1.1.0.zip`,root))),sha)
  assert.deepEqual(await readFile(new URL('catalog.json',root)),legacy)
  assert.deepEqual(await readFile(new URL('dist/catalog.json',root)),await readFile(new URL('catalog-v2.json',root)))
})
