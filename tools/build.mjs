// node tools/build.mjs   Validates, then writes dist/manifest.json and dist/dict/<bundle>.<lang>.<hash8>.json.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadInputs, checkAll, buildDist } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const inp = loadInputs(root);
const { rows, errors } = checkAll(inp);
const bad = [...errors, ...rows.flatMap((r) => r.errors)];
if (bad.length) {
  for (const e of bad.slice(0, 30)) console.error(`ERROR ${e}`);
  console.error(`build stopped: ${bad.length} errors (run node tools/check.mjs)`);
  process.exit(1);
}
const { files, manifest } = buildDist(inp);
const dist = join(root, 'dist');
rmSync(dist, { recursive: true, force: true });
for (const [path, bytes] of files) {
  mkdirSync(dirname(join(dist, path)), { recursive: true });
  writeFileSync(join(dist, path), bytes);
}
console.log(`dist: ${files.size - 1} dictionary files, ${Object.keys(manifest.languages).length} languages, source ${manifest.source}`);
