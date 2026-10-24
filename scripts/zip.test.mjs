import { test } from 'node:test'
import assert from 'node:assert/strict'
import { zip } from './zip.mjs'

test('produces deterministic archives with valid directory offsets and CRC32', () => {
  const archive = zip([['manifest.json', Buffer.from('123456789')]])
  assert.deepEqual(archive, zip([['manifest.json', Buffer.from('123456789')]]))
  assert.equal(archive.readUInt32LE(14), 0xcbf43926)
  const directory = archive.readUInt32LE(archive.length - 6)
  assert.equal(archive.readUInt32LE(directory), 0x02014b50)
  assert.equal(archive.readUInt32LE(directory + 16), 0xcbf43926)
  assert.equal(archive.readUInt32LE(archive.length - 22), 0x06054b50)
})
