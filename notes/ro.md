# Romanian (ro) draft notes

Status: unreviewed machine draft. 681 core and 232 findings entries, no native review yet.

## Decisions

- Address: formal. Imperatives use the polite plural ("Adăugați", "Alegeți") and "dumneavoastră" for possessives. Account actions that the source words in the first person ("Delete my account", "Download my data") stay first person: "Șterge-mi contul", "Descarcă-mi datele".
- Diacritics: comma-below ș and ț only.
- Plurals: one, few, other. `few` covers 0 and 2 to 19; `other` (20 and up, fractions) uses "de" before the noun ("{n} de pagini"). The `one` form keeps `{n}`.
- "Crawl" is rendered as "scanare" (button "Scanați acum"), per the glossary. "crawler" stays in English where the source means the bot type (robots.txt text).
- Severity words are feminine ("Ridicată", "Medie", "Scăzută", "Informativă") to agree with "severitate".
- "Fail" is "Eșuat" as a result label and "cu eșec" in noun phrases ("incidente cu eșec"). "To review" is "de revizuit".
- "ticket tracker" is "sistem de tichete"; "Controller" (data controller) is "operator".
- HTTP and file terms (GET, Disallow:, User-agent:, http 403, robots.txt, 404 Not Found) are unchanged. "Free" and "Pro" plan names are unchanged.

## Terms needing a native reviewer

- "scanare" for crawl (versus "accesare" or "parcurgere"). Check that it does not read as a security scan.
- "Fals pozitiv" and "Risc acceptat" as decision statuses.
- "Constatare" for finding versus "rezultat".
- "Dovezi" for Evidence (plural noun used as a heading).
- "Citare" in the standards table (Citation); "Referință" may be more usual.
- "Sistem de tichete" for tracker.
- "Backfill 16 months" as "Completare retroactivă pe 16 luni".
- "Healthy" as "Sănătos" (a status of a project).
- "Case" in the legal vocabulary as "Caz" (court case).
- "Nu a putut fi verificat" for "Could not be checked" versus the glossary "neverificat".
- Legal sections (terms, privacy: keys starting with a number, "To the extent the law allows...", "Controller...") need a lawyer-level read in Romanian.
- "Cale de navigare" for Breadcrumb (aria-label).
- "Hash" kept in English in "Content hash".

## 15 riskiest keys

1. To the extent the law allows, Sitefig SARL-S is not liable for indirect or consequential loss ...
2. These terms are governed by the law of Luxembourg ...
3. For anything else, write to us at https://sus.bot/contact/ ... (CNPD)
4. Analytics, if you agree to it, is provided by Google ... EU-US Data Privacy Framework.
5. Your consent, for analytics. You can withdraw it ...
6. Two of those you can exercise yourself, at once ...
7. Alerts are part of monitoring, a paid feature ...
8. Required for risk accepted and false positive. Up to 500 characters.
9. Fixed failing / Fixed to review / New failing / New to review (short status labels, meaning inferred)
10. Failing, low or info
11. Clean means the rules ran and found nothing. Could not be checked means ...
12. Not found in crawl {crawl}, so it counts as fixed.
13. {event} {n} URLs. (the event word is unknown, so grammar after it is a guess)
14. Run it your way / The data lights up / Worth a look (marketing phrases)
15. Citation

## Source ambiguities

- "Press Send to IT" names a button that is spelled "Send it to IT" elsewhere. Both are translated as "Trimiteți-l către IT".
- "{event} {phase}." and "{event} {reason}.": the value of `{event}` is not described, so no agreement is possible.
- "Status" and "State" are both "Stare"; the source uses both for different columns.
- "Fixed to review" and "Fixed failing" read like counts of items that were failing or to review and are now fixed. Translated that way.
- "Business" and "IT" lens labels are left as "Business" and "IT".
- "This is the site we audit": rendered as "site-ul pe care îl auditează sus.bot" because "we" is the service.
- "Required for risk accepted and false positive" refers to status names; they are inflected here as plain nouns.
- Hash "Content hash" and "Case" lack a note on meaning.

## Update 2026-10-22 (source strings rewritten as whole sentences)

Machine draft, not reviewed. 227 keys added, 101 orphans removed, no existing key changed in meaning. The six keys with new notes (Dark, Language, Menu, Search, password, show) were re-read against the notes and kept.

- "Log in" and "Sign in" are both "Autentificare"; "Log out" is "Deconectare". The new source says "log in" where the old one said "sign in"; the Romanian is the same.
- Quotes around "Crawl now" in sentences are rendered as „Scanați acum”.
- Interval labels: "În fiecare zi", "La fiecare {n} zile", "La fiecare {n} de zile" (same for hours and minutes). "Hourly" is "Din oră în oră".
- "Court case" is "Caz în instanță"; "EU directive" is "Directivă UE". Native check needed.
- Doubts: "Reach" as "Acoperire" (no note on meaning); "Untouched" as "Neatins"; "Maintenance started" as "Mentenanța a început"; "Expected back by" as "Revenire estimată până la" (what follows is unknown); "Not handled yet" as "Netratat încă"; "Confidence" as "Încredere".
- Legal paragraphs again needing a lawyer-level read: the Supabase/Cloudflare processors paragraph, "Reports travel between our servers...", and the login-records and "Your login is kept in your browser's own storage" paragraphs.
- Placeholder names like {mINPASSWORD}, {trim} and {accountEmail} are kept as in the source.
