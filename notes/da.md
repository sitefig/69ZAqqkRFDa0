# Danish (da) notes

Unreviewed machine draft. No native reviewer has read it.

## Decisions

- Address: "du" (informal), as is usual in Danish business software. "De" would read as stiff. A reviewer may prefer otherwise.
- "Crawl" is translated as "scanning" ("Scan nu" for "Crawl now"). Danish SEO staff often say "crawl" itself; "crawler" is kept in running text where it names a bot type (key 25).
- "Incident" is "hændelse"; "audit" stays "audit" (plural "audits"); "ticket" is "sag", "ticket tracker" is "sagssystem".
- "Plan" is "abonnement", "Free" is "Gratis".
- Quotes: straight double quotes kept where the English has them.

## Unsure terms

- "Case" (findings 20, legal case) is "Sag", same word as ticket. Context differs but a reviewer should confirm.
- "Finding" is "fund"; "Clean" is "Uden fund".
- "Directive", "Regulation" as legal kinds: "Direktiv", "Forordning".
- "Engine decision": "Motorens beslutning" (rule engine = "regelmotor").
- "Stage names" Starter, Expert kept as in English (Day 1 · Starter, Month 3+ · Expert) since they look like product names; "Growing" translated "Voksende".
- "Worth a look": "Værd at se på".
- Placeholder email "dig@firma.dk" used instead of you@company.com.

## Fifteen riskiest keys

1. "Crawl now" (Scan nu): button name used in many sentences.
2. "A page with more than one incident is counted once for each incident, and only the three largest parts of the site are kept..." (findings 2)
3. "To the extent the law allows, Sitefig SARL-S is not liable..." (core 511, legal)
4. "Accounts and sign-ins are handled by Supabase..." (core 39, legal)
5. "For anything else, write to us ... CNPD" (core 205, legal)
6. "Analytics, if you agree to it, is provided by Google..." (core 65)
7. "These terms are governed by the law of Luxembourg..." (core 497)
8. "Two of those you can exercise yourself..." (core 514, refers to button names)
9. "Failing" as adjective vs "Fail" result: "fejlende" vs "Ikke bestået".
10. "{n} dismissed by decisions, still counted..." (core 667, plural)
11. "{event} {n} URLs." (core 661, event is a prefix word from code, grammar may break)
12. "{event} {phase}." / "{event} {reason}." (core 662, 663)
13. "Written from the check name; no specific guidance yet. This affects {fields}." (core 570)
14. "Pass"/"Fail" labels (findings 61, 142)
15. "Item" vs "Page" counts in changes tables (findings 96, 97, 136, 138)

## Ambiguities in the English source

- "{label}: {value}" and "{n} {severity}" give no context; the word order is left unchanged.
- "{event}" and "{phase}" are filled by code with English words or translated words; if the values are not translated, sentences will mix languages.
- "Review" is a noun status in some places and an adjective phrase "to review" in others; both are "til gennemgang".
- Core 22/638 ("stage") means onboarding stage; "trin" used.
- The validator in app/scripts/i18n-check.ts expects the wrapped dict format; the flat files here pass tools/check.mjs.

## Update 2026-10-22 (source hash fa87591c)

224 keys added, 98 removed (orphans deleted), 3 keys moved between bundles with their translations kept (Running, Crawl runs, Summary). Dark, Language, Menu, Search, password and show were re-read against their new notes and kept.

New risky keys: "Accounts and logins are handled by Supabase..." (privacy, legal, needs legal review), "Reports travel between our servers and your browser over an encrypted connection..." (privacy), "Your email address and password, so you can log in..." and "Your login is kept in your browser's own storage..." (privacy, legal review), "Deletes your account, profile, plan, purchases and dashboards right away..." (account deletion), "Written from the check name; no specific guidance yet. The parts written this way: {fields}.", "Rules that could not be decided: {undecided}. Rules that do not apply to this site: {notApplicable}...", "Saved. Schedule for {domain}: {period}. The first crawl starts one period from now...".
Not translated on purpose: the identifier add_domain and the DNS name _sus-bot.{domain}.
Nothing in this update is reviewed. Legal paragraphs need legal review.

- "Confidence" is "Konfidens"; "Sikkerhed" could be read as security. A reviewer may know a better word.
- "Reach" (audit card column) is "Omfang"; the meaning of the English word is a guess from the usage in findings-blocks.ts.
- "Every {n} days/hours/minutes" is "Hver {n}. dag/time/minut"; the one form is "Hver dag" (the English one form has no number).
- "A person has to look at these. They are not failures." is "Disse skal gennemgås af et menneske. De er ikke fejl."
- "These texts are in X. The findings are in Y." is written as "Tekstsprog: X. Fundenes sprog: Y." so the language name does not need a preposition.
- "{length} things to fix." is "Ting at rette: {length}." because the key is not a plural key.
- "Search Console property" is "ejendom", the word Google uses in its Danish interface; not checked.
