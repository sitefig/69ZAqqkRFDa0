# Sitefig translations

UI translations for the Sitefig app (app.sitefig.net) in the 23 official EU languages other than English. English is the source and has no file here.

This repository is public on purpose, because GitHub Pages serves it to the browser. It holds UI labels only: button texts, headings, error messages, navigation. It holds no customer data, no keys or tokens, and no finding or audit wording. Do not add any of these.

The contract with the app is `docs/I18N.md` in the app repo (sections 2, 3, 4, 8, 9, 11, 16, 18, 19). This README does not repeat it.

## How the app loads it

The app's boot script reads `manifest.json` from the Pages site, picks the file names for the user's language, and fetches `dict/core.<lang>.<hash8>.json` and, on pages that show findings, `dict/findings.<lang>.<hash8>.json`. It checks the SHA-256 of each file against the manifest and stores it in `localStorage`. If anything fails, English is shown.

- File names carry the first 8 hex digits of the SHA-256 of the file, so a file never changes under its name. Only `manifest.json` changes.
- GitHub Pages sets its own short `Cache-Control` and it cannot be changed. That is why freshness comes from the manifest and not from headers.
- GitHub Pages sends `access-control-allow-origin: *`, which the app's cross-origin fetch needs. The app's CSP `connect-src` must list the Pages origin.
- Each deploy publishes only the files of the current build. An old file name disappears at the next deploy, so a browser holding a manifest from before it can get a 404 and falls back to its cached copy or English.

## Layout

```
src/<lang>/core.json        editable translations, bundle core
src/<lang>/findings.json    editable translations, bundle findings
source/                     snapshot of the app's source-strings.json and languages.json (do not edit)
status.json                 review status per language
glossary.md                 agreed terms
tools/                      check, build, sync-source (Node 22, no dependencies)
tests/                      node --test
dist/                       build output, not committed
```

An `src` file is a flat JSON object: the key is the English string exactly as in `source/source-strings.json`, the value is a string, or for a plural key an object with the plural categories of the language (`one`, `few`, `many`, `other`, and so on, exactly the set `Intl.PluralRules` gives for the language). UTF-8, sorted keys, 2-space indent. A key with no translation is left out. Empty strings, `<`, `>`, and leading or trailing spaces are not allowed. Named placeholders such as `{shown}` must match the English key. `{n}` may be left out of the `zero`, `one` and `two` forms only.

## Commands

```
node tools/check.mjs            validate; missing keys are warnings
node tools/check.mjs --strict   missing keys and missing languages fail too
node tools/build.mjs            check, then write dist/
node tools/sync-source.mjs      refresh source/ from ../app
node --test tests/*.test.mjs
```

The check prints one row per language with translated/total keys per bundle, then the errors and warnings. It exits 1 on errors. Besides the I18N.md section 19 rules it warns when a value is longer than 3 times the English text (English strings under 8 characters are skipped).

## Add a language

The 24 languages are fixed by the app (`source/languages.json`). To fill one:

1. Create `src/<code>/core.json` and `src/<code>/findings.json` in the format above.
2. Run `node tools/check.mjs` and fix the errors.
3. Open a pull request. The language is `drafted` until a native reviewer signs it off.

A new language outside the 24 is a change in the app first, then `node tools/sync-source.mjs`.

## When the English source changes

The app regenerates `i18n/source-strings.json`. Run `node tools/sync-source.mjs`, then `node tools/check.mjs`. Removed English strings show as orphans (errors). New ones show as missing keys (warnings). Changed English wording keeps the old key as an orphan and adds a new missing key.

## Review status

Every language starts as `drafted`: a machine draft that no native speaker has read. A language becomes `reviewed` only when a native reviewer has read it, and then `status.json` names the person and the date:

```json
{ "de": { "status": "reviewed", "reviewed_by": "Name", "reviewed_on": "2026-11-03" } }
```

Nobody sets `reviewed` without a native reviewer. The check fails on `reviewed` without both fields. The app does not show the status in this round. Reviewers for Irish (ga) and Maltese (mt) are scarce, so those two will stay `drafted` longest. The owner names the reviewers.

## CI and deploy

`.github/workflows/pages.yml` runs on every push to `main`: tests, `node tools/check.mjs`, `node tools/build.mjs`, then uploads `dist/` as the Pages artifact and deploys it with `actions/deploy-pages`. The actions are pinned by major tag (v4, v5, v3), not by commit SHA, because the SHAs could not be verified offline. Pin them by SHA before going live. In the repository settings, Pages must use "GitHub Actions" as the source.

## Licence

Licence to be set by the owner. Until then all rights are reserved.
