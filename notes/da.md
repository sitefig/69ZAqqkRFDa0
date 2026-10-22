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
