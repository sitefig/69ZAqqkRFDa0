// node tools/check.mjs [--strict]   Validates src/<lang>/{core,findings}.json (I18N.md 19).
// Exit 1 on errors. Missing keys are a warning unless --strict.
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadInputs, checkAll } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const strict = process.argv.includes('--strict');
const inp = loadInputs(root);
const { rows, errors, missingTotal } = checkAll(inp);

const cell = (b) => `${b.have}/${b.total}`;
const lines = [['lang', 'status', 'core', 'findings', 'missing', 'errors', 'warnings']];
for (const r of rows) {
  const miss = Object.values(r.bundles).reduce((n, b) => n + b.missing.length, 0);
  lines.push([r.lang, r.status, cell(r.bundles.core), cell(r.bundles.findings), String(miss), String(r.errors.length), String(r.warnings.length)]);
}
const w = lines[0].map((_, i) => Math.max(...lines.map((l) => l[i].length)));
for (const l of lines) console.log(l.map((c, i) => c.padEnd(w[i])).join('  ').trimEnd());

const show = (label, xs) => { for (const x of xs.slice(0, 20)) console.log(`${label} ${x}`); if (xs.length > 20) console.log(`${label} ... ${xs.length - 20} more`); };
show('ERROR', errors);
for (const r of rows) {
  show(`ERROR ${r.lang}`, r.errors);
  show(`warn  ${r.lang}`, r.warnings);
  for (const [b, v] of Object.entries(r.bundles)) if (v.missing.length) console.log(`warn  ${r.lang} ${b}: ${v.missing.length} missing keys, e.g. ${JSON.stringify(v.missing.slice(0, 3))}`);
}
const missingLangs = inp.languages.filter((l) => !inp.dirs.includes(l.code)).map((l) => l.code);
if (missingLangs.length) console.log(`no src folder yet: ${missingLangs.join(' ')}`);

const bad = errors.length + rows.reduce((n, r) => n + r.errors.length, 0);
console.log(`${rows.length} languages, ${bad} errors, ${missingTotal} missing keys${strict ? ' (strict)' : ''}`);
process.exit(bad || (strict && (missingTotal || missingLangs.length)) ? 1 : 0);
