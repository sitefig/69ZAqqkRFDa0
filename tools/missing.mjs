// node tools/missing.mjs [out-dir]   Writes <out-dir>/missing.json: every English string that some language still lacks,
// with its bundle, placeholders, plural forms and where the app shows it, and the plural categories of each language.
// Translators write <out-dir>/patch.<lang>.json ({ "core": {...}, "findings": {...} }); tools/merge-patch.mjs merges them.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadInputs, checkAll } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = process.argv[2] ?? join(root, '.work');
const inp = loadInputs(root);
const { rows } = checkAll(inp);
const keys = new Map();
for (const r of rows) for (const [bundle, v] of Object.entries(r.bundles)) for (const k of v.missing) if (!keys.has(k)) keys.set(k, bundle);
const missing = [...keys].map(([key, bundle]) => {
  const s = inp.source.entries[key];
  return { key, bundle, vars: s.vars, plural: s.plural, forms: s.forms, note: s.note, where: s.where.slice(0, 1) };
});
const languages = inp.languages.filter((l) => l.code !== 'en').map((l) => ({ code: l.code, endonym: l.endonym, plural_categories: [...new Intl.PluralRules(l.code).resolvedOptions().pluralCategories].sort() }));
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'missing.json'), JSON.stringify({ missing, languages }, null, 1));
console.log(`${missing.length} missing keys, ${languages.length} languages -> ${join(out, 'missing.json')}`);
