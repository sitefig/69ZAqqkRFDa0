// node tools/sync-source.mjs [path-to-app]   Copies the app's source strings and language list into source/.
// Default app path is ../app (the sitefig-v3 workspace layout). Run, review the diff, then retranslate.
import { copyFileSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const app = resolve(root, process.argv[2] ?? '../app');
const from = { 'source-strings.json': join(app, 'i18n/source-strings.json'), 'languages.json': join(app, 'config/app/languages.json') };
for (const [name, p] of Object.entries(from)) copyFileSync(p, join(root, 'source', name));
const s = JSON.parse(readFileSync(join(root, 'source/source-strings.json'), 'utf8'));
const date = new Date().toISOString().slice(0, 10);
writeFileSync(join(root, 'source/README.md'), `# Snapshot of the app's source strings

Do not edit the JSON files here. They are copies.

- \`source-strings.json\`: copy of \`i18n/source-strings.json\` of the app repo (schema ${s.schema}, ${s.count} strings, hash ${s.hash.slice(0, 8)}). The app makes it with \`npm run i18n:extract\`.
- \`languages.json\`: copy of \`config/app/languages.json\` of the app repo (the 24 codes and endonyms).
- Copied on ${date}.

Refresh: \`node tools/sync-source.mjs [path-to-app-repo]\`, then \`node tools/check.mjs\`. Keys the app removed show up as orphans (errors); new keys show up as missing.
`);
console.log(`copied ${s.count} strings, hash ${s.hash.slice(0, 8)}`);
