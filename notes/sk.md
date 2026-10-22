# Slovak (sk) translation notes

Machine draft. No native speaker has read it.

## Terms I was unsure about

- crawl: "prehľadávanie" (glossary). "Crawl runs" is "Behy prehľadávania". "Crawl now" is "Prehľadať teraz" everywhere, including the sentences that mention the button.
- ticket tracker: "systém na tikety" (glossary). "ticket" is "tiket".
- Search Console "property": "Vlastnosť". Slovak Search Console may use another word; check against the Google UI.
- stage (onboarding "Day 1 · Starter", "Week 2 · Growing", "Month 3+ · Expert"): "etapa". "Starter" and "Expert" are kept in English because they look like fixed names; "Growing" is "Rast".
- "Status" and "State" are both "Stav". "Open" (status) is "Otvorený" to follow the glossary, but the English sources use it as a bare label, so the gender may need to change.
- "rule engine" is kept in English in running text, as a product component name.
- "References" is "Zdroje" because "Odkazy" is already "links".
- "Terms & Conditions" is "Podmienky používania".
- "Revoke" is "Odvolať" so it differs from "Cancel" ("Zrušiť").
- "Search" (a label) is "Vyhľadávanie" per the glossary; a button might want "Hľadať".

## Formality

Formal address with "vy" (vykanie) throughout: "Váš účet", "Zadajte", "Vyberte". Imperatives use the plural/formal form. Where the English addresses the user in a sentence about "you", the text keeps "vy" with a capital only in the sense of the possessive "Váš" at the start of a label, matching sentence case; mid-sentence "vaše" is lowercase.

## Fifteen riskiest keys for a native reviewer

1. "Two of those you can exercise yourself, at once: \"Download my data\" gives you everything we hold about you in one file, and \"Delete my account\" removes it. Both are in your account settings." The quoted button names must match the Slovak labels "Stiahnuť moje údaje" and "Vymazať môj účet".
2. "To the extent the law allows, Sitefig SARL-S is not liable for indirect or consequential loss ..." Legal liability wording.
3. "These terms are governed by the law of Luxembourg, and disputes go to the competent courts of Luxembourg. Questions first, though: https://sus.bot/contact/" Legal wording.
4. "Analytics, if you agree to it, is provided by Google (Google Analytics) and Microsoft (Microsoft Clarity). They may process this data in the United States, under the EU-US Data Privacy Framework." Data-transfer wording.
5. "For anything else, write to us at https://sus.bot/contact/ and we answer within 30 days. You may also complain to the Luxembourg supervisory authority ..." Check "dozorný orgán" and the CNPD name.
6. "Reports are stored encrypted in transit, are signed so they cannot be altered unnoticed, and are served only after your sign-in has been checked." The English "stored encrypted in transit" is odd; I wrote "prenášajú šifrovane".
7. "A new version is posted here with a new effective date. ... Using the service after that date accepts the new version." Check that "prijímate novú verziu" reads as acceptance in a legal sense.
8. "Accounts and sign-ins are handled by Supabase. ..." Processor wording ("sprostredkovatelia", "zmluva o spracúvaní údajov").
9. "None of the {loaded} loaded match." The count placeholder sits in a genitive phrase ("z {loaded} načítaných"), which is awkward when the value is 1.
10. "Showing results from {loaded} of {total} incidents. Keep typing to narrow." Reworded because the Slovak double "z ... z" is clumsy.
11. "{n} dismissed by decisions, still counted in the totals above" and the other count phrases with {n}: all four plural forms are the same on purpose ("Zamietnuté rozhodnutiami: {n}, ...") to avoid case agreement.
12. "Crawl {crawl}: {n} pages crawled, {results} with results." The four plural forms use participle agreement ("prehľadaná/é/nej/ných"); check the "many" form for fractions.
13. "Choose the property" and "Property" (Search Console). Term check against Google's Slovak UI.
14. "Day 1 · Starter", "Week 2 · Growing", "Month 3+ · Expert": stage names that may be fixed English names.
15. "New here?" is "Ste tu prvýkrát?" to avoid a gendered adjective; "Fixed to review" and "New failing" are compact label pairs that read as terse Slovak.

## Ambiguities in the English source

- "Open" (status) and "Review" (status vs verb): the label could be a status, a verb or an adjective; Slovak needs gender and form. I used the glossary forms ("Otvorený", "Na posúdenie").
- "State" and "Status" have no context in the source list.
- "Name" (findings bundle) has no object; I used "Názov".
- "None" and "none" are bare words; gender and case follow a noun I cannot see.
- "back by", "Returns to", "Sent to": fragments that precede a value; I assumed a time or address follows.
- "{n} {severity}": I reordered it to "{severity}: {n}" because the English order forces agreement between a number and a severity word.
- "Actions" (decisions UI) could mean buttons or steps; I used "Akcie".

## Uncertain items

About 25 keys: the fifteen above plus Search, Open, State, Name, None, Actions, Property, Terms & Conditions, back by and Returns to.

## Update 2026-10-22 (source hash fa87591c)

Removed 98 orphan keys, added 224 (core 177, findings 47 after moving 3 misfiled entries), changed 0 existing translations by hand. Ambiguous fragments such as "home", "just now" and "{n} {severity}" were replaced in the source by whole sentences; their old translations were reused where the meaning is the same. The sign-in wording in the source is now "log in / log out", Slovak stays Prihlásiť sa / Odhlásiť sa. The noteChanged keys Dark (Tmavá), Language (Jazyk), Menu (Ponuka), password (heslo) and show (zobraziť) still fit their notes. Search stays Vyhľadávanie per glossary although the note says it is a button; Hľadať may read better.

New risky keys:

- "Active, renews on {date}." and "Active.": the subject (plan, schedule) is not given, so I used the neuter Aktívne, which may need a gender change.
- "Slack and email alerts for it are paused with it ...": "it" is the monitoring; the Slovak uses masculine "ním", "skončil".
- "These texts are in {textLanguage}. The findings are in {findingsLanguage}.": rewritten as "Jazyk týchto textov: ..." because a language name from Intl.DisplayNames is nominative and does not fit "v jazyku".
- "{base} The engine keeps at most 2,000 rows ...": "Rule engine" kept in English, no-break space in 2 000.
- "Every {n} days/hours/minutes": all four plural forms declined by hand (Každé {n} dni, Každých {n} dňa, Každých {n} dní); check the many form.
- Plural keys with a colon form (Neprešlé incidenty: {n}, Riadky dôkazov: {n}) use the same text in all categories on purpose.
- Legal-adjacent, needs legal review: the Supabase and Cloudflare processors paragraph, the encrypted-connection and signed-reports sentence, the account deletion and data download sentences.
- "Court case" is Súdny prípad and "EU directive" is Smernica EÚ (labels of legal references; check against the standards texts).
- "Confidence" is Spoľahlivosť; "Reach" is Dosah; "Groups" is Skupiny. All three are bare labels with no context.
- "Maintenance started" is Údržba sa začala, assumed to be a status line.
- Glossary: no new rows added.
