// node tools/review-sheet.mjs <lang> [out.csv]   Review sheet for one language: one row per English string and plural form.
// Columns: bundle, key, form, english, draft, where, note, examples. A reviewer fills `correction` and `comment`.
// `examples` lists numbers for the plural category (Intl.PluralRules), so the reviewer can judge the form.
// Writes to out.csv (default .work/review-<lang>.csv); .work/ is not committed. See reviews/CHECKLIST.md.
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const lang = process.argv[2];
if (!lang || !existsSync(join(root, 'src', lang))) {
  console.error('usage: node tools/review-sheet.mjs <lang> [out.csv]');
  process.exit(2);
}
const source = JSON.parse(readFileSync(join(root, 'source', 'source-strings.json'), 'utf8')).entries;
const read = (b) => {
  const p = join(root, 'src', lang, `${b}.json`);
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : {};
};
const dict = { core: read('core'), findings: read('findings') };

export function examples(code, max = 4) {
  const rules = new Intl.PluralRules(code);
  const out = {};
  for (const n of [0, 1, 2, 3, 4, 5, 11, 12, 21, 22, 25, 100, 101, 102, 1.5, 0.5]) (out[rules.select(n)] ??= []).push(n);
  return Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.slice(0, max).join(' ')]));
}

const csv = (v) => `"${String(v ?? '').replaceAll('"', '""')}"`;
const ex = examples(lang);
const rows = [['bundle', 'key', 'form', 'english', 'draft', 'where', 'note', 'examples', 'correction', 'comment']];
for (const [key, s] of Object.entries(source)) {
  const draft = dict[s.bundle]?.[key];
  if (draft === undefined) continue;
  if (s.plural && typeof draft === 'object') {
    for (const [form, text] of Object.entries(draft)) rows.push([s.bundle, key, form, s.forms?.[form] ?? s.forms?.other ?? key, text, s.where?.[0] ?? '', s.note ?? '', ex[form] ?? '', '', '']);
  } else {
    rows.push([s.bundle, key, '', key, typeof draft === 'string' ? draft : JSON.stringify(draft), s.where?.[0] ?? '', s.note ?? '', '', '', '']);
  }
}
const out = process.argv[3] ?? join(root, '.work', `review-${lang}.csv`);
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, '﻿' + rows.map((r) => r.map(csv).join(',')).join('\n') + '\n', 'utf8');
console.log(`${rows.length - 1} rows -> ${out}`);
