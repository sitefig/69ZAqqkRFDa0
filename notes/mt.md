# Maltese (mt) notes

Status: unreviewed machine draft. No native reviewer has seen it. The manifest status must stay `drafted`. Maltese has the fewest reviewers, so every item below needs an expert.

Coverage: 767 core entries and 272 findings entries, all present (updated 2026-10-22 to the rewritten source strings: 177 core and 50 findings keys added, 101 orphan keys deleted). `node tools/check.mjs --strict`: 0 errors, 0 missing for mt. Plural entries use the five categories one, two, few, many, other.

## Register

Imperative singular without a formal pronoun ("Agħżel", "Idħol"), which is the usual form in Maltese software. Maltese has no T-V distinction in the imperative, so there is no formality choice to make beyond avoiding colloquial wording. Sentences with placeholders are phrased so that no agreement depends on the inserted value.

## Plural forms

Intl.PluralRules('mt'): one = 1, two = 2, few = 3 to 10, many = 11 to 19, other = 20 and above and fractions. Drafted as: paġna / żewġ paġni / {n} paġni / {n} paġna / {n} paġna. The `one` and `two` forms omit {n} (allowed by section 9.5). Numeral agreement for adjectives and participles in sentences such as "{n} open" and "{n} dismissed" (miftuħin / miftuħ, miċħudin / miċħud) is a guess and must be checked.

## Terms for the expert, all of them

1. Crawl, as noun and verb: "skan" and "skennja" (from skennjar). A descriptive alternative is "ġbir ta' paġni". No official EU term was known to the drafter.
2. Audit: "awditu" (plural "awditi"), the EU Maltese form. Verb "awditja".
3. Finding: "sejba" (plural "sejbiet"). Check against the EU audit wording ("konstatazzjoni" may be preferred in formal texts).
4. Incident: "inċident".
5. False positive: drafted as "allarm falz" (false alarm), a plain phrase instead of a calque. The source also says "false alarm" in a description. Check whether "pożittiv falz" or similar is the established term.
6. Risk accepted: "riskju aċċettat".
7. Dismissed (decision status): "miċħud" (rejected). The English sense is closer to "set aside"; check.
8. Severity: "severità". Levels: "għolja", "medja", "baxxa", "Info" kept as "Info" (feminine to agree with severità). Check whether "informattiva" is better.
9. Fail and pass as result labels: "Falliment" and "Għadda". "Failed" (run state) is "Falla". "b'falliment" for "failing". Check naturalness.
10. Review (status): "Reviżjoni" and "għal reviżjoni" for "to review".
11. Not checked / could not be checked: "ma setax jiġi vverifikat".
12. Clean (audit result): "Nadif". It may read as "tidy"; an expert should choose, for example "Xejn misjub".
13. Evidence: "evidenza" (also "prova"). "Evidenza" is a loan from Italian and is common in Maltese EU texts, but check.
14. Billing: "fatturazzjoni". Invoices: "fatturi".
15. Monitoring: "monitoraġġ". Schedule: "skeda" (noun). Scheduled crawls: "skans skedati".
16. Alerts: "twissijiet". Alerting (settings heading): also "Twissijiet".
17. Integrations: "integrazzjonijiet".
18. Overview: "Ħarsa ġenerali".
19. Settings: "Issettjar" (noun from "issettja"). EU texts use "Settings" loosely; check for "Settings" as "Issettjar" vs "Konfigurazzjoni".
20. Password: kept as "password". Email: kept as "email" (also "Indirizz tal-email"). Brand and tool words (Google, Slack, Stripe, JSON, CSV, PDF, IT, CEO, CMO, CTO, SEO, QA) kept.
21. AI: "IA" (intelliġenza artifiċjali). In "Content is a view across SEO, QA and AI" the abbreviation IA is used.
22. Domain: "dominju".
23. Data protection officer: "Uffiċjal tal-protezzjoni tad-data" (the GDPR Maltese wording).
24. Terms and conditions: "Termini u kundizzjonijiet". Privacy: "Privatezza". Privacy policy: "Politika tal-privatezza".
25. Legal text sections (terms of service and privacy policy, keys starting with a number, and long paragraphs about processors, liability, governing law, rights): drafted quickly and need a legal-language review. Terms such as "kontrollur", "proċessuri", "kunsens", "Qafas tal-UE u tal-Istati Uniti dwar il-Privatezza tad-Data" (EU-US Data Privacy Framework) were taken from known GDPR wording but not verified.
26. Cookies: kept "cookies". Local storage: "ħażna lokali".
27. Landing pages, templates, tracker, ticket, dashboard, screenshot, selector, hash, cache, query, host: kept as English loanwords in code-like or product use. An expert should decide which have accepted Maltese equivalents.
28. Rule engine: "magna tar-regoli". Engine decision: "Deċiżjoni tal-magna".
29. Role names: "Maniġer tal-proġett", "Żviluppatur", "Marketer", "Speċjalista tal-SEO".
30. Law, regulation, directive, standard, guideline: "liġi", "regolament", "direttiva", "standard", "linja gwida". Jurisdiction: "ġurisdizzjoni".
31. Breadcrumb: "Mogħdija tan-navigazzjoni" is a plain description; check.
32. "Group by" as "Iggruppa skont" and "grouped by" as "miġbur skont". Group by URL pattern: "mudell tal-URL".
33. Welcome and onboarding stage names: "Day 1 · Starter", "Week 2 · Growing", "Month 3+ · Expert" keep the English stage names Starter and Expert; "Growing" is translated as "Qed jikber".
34. "Magic link": "link maġiku", a literal calque.

## 15 riskiest keys

1. "False positive" (and the words in "Required for risk accepted and false positive..." and "Say why...")
2. "Dismissed"
3. "Clean"
4. "Fail" / "Failed" / "Failing" family
5. "To the extent the law allows, Sitefig SARL-S is not liable..." (liability clause)
6. "Analytics, if you agree to it, is provided by Google ..." (EU-US Data Privacy Framework)
7. "Accounts and sign-ins are handled by Supabase..." (processors)
8. "For anything else, write to us at https://sus.bot/contact/ ..." (supervisory authority)
9. "These terms are governed by the law of Luxembourg..."
10. "{n} dismissed by decisions, still counted in the totals above" (plural agreement)
11. "{n} open", "{n} failing", "{n} to review" (plural, short forms)
12. "{n} pages: {fail} failing, {review} to review, worst severity {severity}"
13. "Failing and to-review incidents are counted apart. Content is a view across SEO, QA and AI..."
14. "Crawl now" and the whole crawl/skan term family
15. "Pages affected" / "Affected pages" (nav and incident wording), and "Probable cause"

## Source ambiguities

- Lowercase fragments such as "back by", "requested", "started", "current", "home", "show", "hide", "just now", "the cause", "the headline", "the steps" have no stated context. Translated as stand-alone words; the real use may need a different grammatical form.
- "Sign in" and "Log in" are both rendered "Idħol"; "Sign out" is "Oħroġ".
- "Status" and "State" are both rendered "Stat".
- "Items" is "Oġġetti", "Kind" is "Tip"; "Case" (a legal-document type in words.json) is "Każ".
- "Marketeer" is a spelling variant; rendered "Marketer".
- The keys "Disallow:" and "User-agent:" are robots.txt directives and are left in English.
- "A new version ... at least 14 days beforehand" uses the Maltese numeral form "14-il jum".
- "{n} {severity}" is kept as is; the position of the severity word relative to the count may need agreement in context.

## Round 2 (2026-10-22): new and doubtful items

Still an unreviewed machine draft. Moved between bundles: "Crawl runs" and "Summary" (now core), "Running" (now findings). "Sign in" and "Sign out" keys became "Log in" and "Log out" (Idħol, Oħroġ); the notes above that say "Sign in" apply to "Log in".

Doubtful terms and phrases:

35. "Fiduċja" for the finding column "Confidence"; "Firxa" for "Reach" (meaning is a guess, maybe "Kopertura").
36. "Kawża tal-qorti" for "Court case" and "Direttiva tal-UE" for "EU directive".
37. "Dalwaqt" (Shortly), "Għadu kif" (Just now), "Mhux mibdul" (Untouched), "Mistenni lura sa" (Expected back by), "Titlu ewlieni" (Headline), "Passi" (Steps): stand-alone words without grammatical context.
38. "Tħaddim tal-iskan" for "Crawl runs"; "Is-sistema tal-iskan" for "the crawler" (descriptive, no loanword).
39. Date and name placeholders are written after a colon ("Imqabbad: {date}", "Imqabbad ma' {channel}, tim: {team}") because Maltese prepositions (fi, f', fid-) and articles change with the inserted value.
40. Counts without a plural form are written as "label: {n}" ("Affarijiet li jridu jissewwew: {length}", "Sekondi biex tkun tista' tibgħat email oħra: {left}", "Għadd minimu ta' karattri: {mINPASSWORD}") to avoid numeral agreement.
41. "Ordnat skont {column}, mill-iżgħar għall-akbar" (ascending) and "mill-akbar għall-iżgħar" (descending) assume the column holds numbers; for text or dates the wording is loose.
42. Plural agreement of "miftuħin / miftuħ", "ma setgħux jiġu vverifikati" with "{n} regola" (11 and above) is a guess; "Kull {n} ijiem / jum", "{n} sigħat / siegħa" follow the usual Maltese numeral rules but need a native check.
43. "Kompli bi GitHub / Google / LinkedIn" (preposition bi before a brand name).
44. "Ma ttieħed l-ebda ħlas" for "Nothing was charged"; "Il-bażi tad-dejta" for "database".
45. "Kont" is used for account; "kontijiet" in the plural (existing).
46. "Manutenzjoni" for maintenance (alternative: "tiswija" or "manteniment").
47. "Tneħħi l-konnessjoni ma' {name}?" uses the question form of "disconnect".
48. noteChanged keys rechecked and kept: Dark "Skur", Language "Lingwa", Menu "Menu", Search "Fittex", password "password", show "uri".

Legal paragraphs needing review (new wording): the Supabase and Cloudflare processors paragraph, the login records text, the account deletion and data download texts, "Reports travel between our servers and your browser..." (encryption and signing). "mingħajr ma jidher" for "unnoticed" is a loose rendering.

New risky keys: "{n} projects on the {plan} plan.", "{n} rules could not be checked...", "Every {n} days/hours/minutes", "Rules that could not be decided: {undecided}...", the "Crawl {crawl}..." family, "{domain}" sentences rewritten with the domain after a colon.

`node tools/build.mjs` stops while other languages still have errors (808 at the last run), so no mt build output was produced.
