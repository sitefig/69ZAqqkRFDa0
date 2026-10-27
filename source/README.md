# Snapshot of the app's source strings

Do not edit the JSON files here. They are copies.

- `source-strings.json`: copy of `i18n/source-strings.json` of the app repo (schema i18n-source/1, 1349 strings, hash f9043fd1). The app makes it with `npm run i18n:extract`.
- `languages.json`: copy of `config/app/languages.json` of the app repo (the 24 codes and endonyms).
- Copied on 2026-10-27.

Refresh: `node tools/sync-source.mjs [path-to-app-repo]`, then `node tools/check.mjs`. Keys the app removed show up as orphans (errors); new keys show up as missing.
