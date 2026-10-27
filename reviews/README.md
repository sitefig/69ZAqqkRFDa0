# Reviews of the translations

## 2026-10-27: reference check of all 23 languages

Every string (1349 per language) was read by a reviewer against three published translation sets: WordPress translations (core and admin, translate.wordpress.org `.po` exports), Mozilla (Firefox and pdf.js Fluent files, with the English sources), and MediaWiki interface messages (used for Maltese, which the first two do not cover). About 110 labels per language have the identical English in those sets (49 for Maltese, 71 for Irish); about 310 more have a close phrase. The rest were judged on meaning and naturalness.

The reviewers changed only strings that were wrong, unnatural or inconsistent. Formality and quote-mark decisions of the language notes were kept. All results are still machine drafts: `status.json` stays `drafted` until a native reviewer signs off.

| Language | Corrected |
|---|---|
| Bulgarian (bg) | 29 |
| Czech (cs) | 54 |
| Danish (da) | 33 |
| German (de) | 43 |
| Greek (el) | 44 |
| Spanish (es) | 19 |
| Estonian (et) | 54 |
| Finnish (fi) | 62 |
| French (fr) | 31 |
| Irish (ga) | 40 |
| Croatian (hr) | 24 |
| Hungarian (hu) | 50 |
| Italian (it) | 52 |
| Lithuanian (lt) | 34 |
| Latvian (lv) | 58 |
| Maltese (mt) | 72 |
| Dutch (nl) | 52 |
| Polish (pl) | 35 |
| Portuguese (Portugal) (pt) | 43 |
| Romanian (ro) | 16 |
| Slovak (sk) | 61 |
| Slovenian (sl) | 36 |
| Swedish (sv) | 25 |

Each language file lists the old text, the new text and the reason.

## Second pass: WordPress and Mozilla wording preferred

The owner decided to skip native review and to follow WordPress and Mozilla wherever the identical English label appears there. Of 691 labels that still differed, 185 adopted the reference wording and 506 were kept for a stated reason: a different sense of the word in this product (for example "Free", "Check", "Fixed", "Standard", "Terms", "legal"), the project's formal register against an informal reference sentence, consistency with how the rest of the file translates the term, or grammar and gender.

## Open decisions the reviewers could not settle

- Search Console "property" (hr, lt, lv, sv, bg, et, fi, cs, sk): Google's own wording in these languages was not verified; hr, lv and bg now say "resurs" ("ресурс"), lt "nuosavybė".
- Schedule: cs "plán" and sk "časový plán" replaced "rozvrh" (a timetable); cs may prefer "harmonogram".
- de: "Failing" is now "Nicht bestanden" everywhere (it was the same word as "Failed").
- Quote marks: et and lv now use „…“ (et.md and lv.md recorded no choice); revert if straight quotes are wanted.
- Maltese has the least reference data (MediaWiki only). Its verb-form corrections need a native reader first.
- Legal and privacy paragraphs were checked for terminology only. They need a lawyer's read in every language.
