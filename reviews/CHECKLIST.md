# Review checklist for a native reviewer

Written 2026-11-17 (ticket 064). One language per review, both bundles (`core`, `findings`).

Get the sheet: `node tools/review-sheet.mjs <lang>` writes `.work/review-<lang>.csv` (open it in a spreadsheet as UTF-8). Fill `correction` for every row you change and `comment` for questions. Leave the rest empty.

## For every row

1. Meaning. The text says what the English says, no more and no less. Check the `where` column (file and line in the app) and `note` when the English alone is unclear.
2. Placeholders. Every `{name}` of the English is in the text, spelled the same, in a position that works in your language. A placeholder is never translated or removed. `{n}` may be left out only in the `zero`, `one` and `two` forms.
3. Grammar around a placeholder. Case, gender, article and word order still work when the value is a number, a name or a URL.
4. Tone. Formal or informal address as set in `notes/<lang>.md`. Error messages are calm and say what to do.
5. Terms. The words match `glossary.md` and `notes/<lang>.md`. Product and technical terms that stay in English (robots.txt, hreflang, Core Web Vitals) stay.
6. Length. A text more than 3 times as long as the English is cut or flagged. A button text fits a button.
7. Punctuation. Quote marks, spacing before colons, decimal separator and ellipsis follow the language's rules.
8. No machine artefacts. No half-translated phrases, no English words left by accident, no literal calques.

## Plural rows

The `form` column is the plural category of your language and `examples` lists numbers that use it. Read the text with those numbers in `{n}`: "1", "2", "5", "1.5", "21" and so on.

- Every category named in the sheet must have a text. Do not add forms the language does not have.
- Languages with 4 or 5 categories (cs, lt, pl, sk, ga, mt and others) need the most care. Test each example number.
- Where two categories read the same, that is fine.

## Findings bundle

Findings texts are read by site owners. Prefer plain words. The names of the six modules, the severity words and the statuses must be the same everywhere.

## Layout check (de, fi, el, hu, nl, lt)

After the text is final, load the app in this language at 400 percent zoom (320 CSS pixels wide) and check that buttons, table headers and the navigation still show their text without clipping or horizontal scroll.

## Sign-off

The reviewer writes name, date and language in the pull request. Only then the maintainer sets `reviewed_by` and `reviewed_on` in `status.json` and the status to `reviewed`. Without a named reviewer the status stays `drafted`.
