// node tools/merge-patch.mjs [dir]   Merges <dir>/patch.<lang>.json into src/<lang>/{core,findings}.json.
// A patch is { "core": { "<English key>": "<text or plural object>" }, "findings": { ... } }. It is checked against the
// source strings first; a language with errors is skipped and reported. Files are written sorted, one trailing newline.
import { existsSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadInputs, checkDictionary, toJson } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = process.argv[2] ?? join(root, '.work');
const inp = loadInputs(root);
let failed = 0;
for (const f of readdirSync(dir).filter((n) => /^patch\.[a-z]{2}\.json$/.test(n)).sort()) {
  const lang = f.slice(6, 8);
  const patch = JSON.parse(readFileSync(join(dir, f), 'utf8'));
  const next = {};
  let bad = 0;
  for (const bundle of ['core', 'findings']) {
    const path = join(root, 'src', lang, `${bundle}.json`);
    const base = existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : {};
    const entries = { ...base, ...(patch[bundle] ?? {}) };
    const r = checkDictionary(inp.source, { schema: 'i18n-dict/1', lang, bundle, source: inp.source.hash.slice(0, 8), entries }, lang);
    for (const e of r.errors) { console.log(`${lang} ${bundle}: ${e}`); bad++; }
    next[path] = entries;
  }
  if (bad) { console.log(`${lang}: skipped, ${bad} errors`); failed++; continue; }
  for (const [path, entries] of Object.entries(next)) writeFileSync(path, toJson(entries, 2));
  console.log(`${lang}: merged`);
}
process.exit(failed ? 1 : 0);
