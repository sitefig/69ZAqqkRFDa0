# Croatian (hr) translation notes

Machine draft, not reviewed by a native speaker. 767 core and 272 findings entries (source hash fa87591c, round 2 on 2026-10-22: 90 core and 8 findings orphans removed, 177 core and 50 findings keys added).

## Terms I was unsure about

- AI: "UI" (umjetna inteligencija), as in the glossary. It also reads as "user interface", so "UI alat" may confuse; a reviewer may prefer "AI alat".
- Crawl is "skeniranje" (glossary). "Scheduled crawls" is "zakazana skeniranja", "crawl runs" is "pokretanja skeniranja".
- Audit stays "audit" (plural "auditi"); "Audit finding" is "Nalaz audita".
- Incident stays "incident". Failing is "neuspjeli" for incidents and "neuspjelo" as a result word.
- Open (status) is "Otvoren", but "Otvoreni: {n}" in counters.
- Ticket is "tiket", tracker is "sustav za tikete".
- Magic link is "poveznica za prijavu". Plain link is "poveznica".
- Rule engine is "mehanizam pravila" (a calque; "engine" has no standard Croatian word).
- Host name: "naziv hosta".
- "Breadcrumb" (aria-label) is "Navigacijska putanja".
- "Starter" (stage name, "Day 1 · Starter") is "Početnik"; "Growing" is "Rast"; "Expert" is "Stručnjak".
- "Review" used alone (key "Review") is "Za pregled", following the glossary status.
- "Forbidden" (http 403 heading) is "Zabranjeno".

## Formality

Formal plural address (vi, vaš, imperatives such as "Dodajte"), written in lowercase as in most Croatian web UI. Buttons that act on the page use the imperative singular ("Dodaj projekt", "Spremi"), matching the usual hr software style. Quotes use „ ” where the source has quotes. Dates use the Croatian style ("1. listopada 2026.") and thousands use a dot ("5.000").

## Placeholder grammar

Croatian counts and values force case agreement, so strings with {n}, {event}, {status}, {reason} use the colon pattern ("Stranice: {done} od {n}.", "Otvoreni: {n}"). Plain counters with a noun ("{n} stranica", "{n} projekt") use the one, few and other forms. Where the value is already a translated word (status, severity, phase), it sits after a colon or at the end.

## The 15 riskiest keys

1. "To the extent the law allows, Sitefig SARL-S is not liable for indirect..." (liability clause, legal text).
2. "These terms are governed by the law of Luxembourg..." (governing law, legal text).
3. "For anything else, write to us at https://sus.bot/contact/..." (CNPD complaint wording, legal text).
4. "Analytics, if you agree to it, is provided by Google (Google Analytics) and Microsoft (Microsoft Clarity)..." (transfer wording, EU-US framework name).
5. "Your consent, for analytics. You can withdraw it at any time..." (GDPR consent wording).
6. "Access, correction, deletion, portability, objection, and withdrawal of consent." (rights list, terminology).
7. "Accounts and sign-ins are handled by Supabase..." ("processors" rendered as "izvršitelji obrade").
8. "Not found in crawl {crawl}, so it counts as fixed." (placeholder is an id, "ispravljenim" agreement).
9. "{event} {phase}." and "{event} {reason}." (unknown event value; I added a colon, which may not fit).
10. "{n} {severity}" (severity is a translated adjective; gender may not agree with "n").
11. "Review" (one word, status or action unclear; chose "Za pregled").
12. "Crawl {crawl}: {n} pages crawled, {results} with results." (restructured with colons).
13. "sus.bot is being rewired" (idiom; chose "prolazi preinake").
14. "Written from the check name; no specific guidance yet. This affects {fields}." (shortened second sentence to "Zahvaćeno: {fields}.").
15. "Day 1 · Starter" and the other stage names (product naming decision).

## Ambiguities in the English source

- "AI" and "UI" clash in Croatian: the glossary form for AI is "UI".
- "Review" as a lone key, and "Fixed to review" or "New to review", are fragments whose gender cannot be matched.
- "Failed" and "Fail" and "Failing" are used for result, state and counters; Croatian needs different forms and I used "Neuspjelo" and "Neuspjeli".
- "{event}" and "{phase}" placeholders hold unknown words, so no sentence can agree with them.
- "Sign in" and "Log in" are both mapped to "Prijava"; the English uses both words for one action.
- "Open" is a status in some places and a verb in others.

## Uncertain items

About 25: the 15 above plus the stage names, "Breadcrumb", "Forbidden", "Healthy" ("Ispravno"), "Kind" ("Vrsta") and "Basis" ("Osnova").

## Round 2 (source fa87591c)

- "Sign in" and "Log in" are now separate English words, both rendered as "Prijava"; "Log out" and "Sign out" as "Odjava". Whole sentences that used the old wording were retranslated.
- Note changes: "Dark" is now "Tamna tema", "Search" is "Traži" (button), "password" is "lozinku" (accusative, so "prikaži lozinku" reads right), "Language" and "Menu" unchanged.
- Plurals use colon forms with the same text in one, few and other ("Neuspjeli incidenti: {n}"). "Every {n} days/hours/minutes" use "Svakih {n} dan/dana", "h", "min".
- New risky keys: "Court case" ("Sudski slučaj"), "EU directive" ("Direktiva EU-a"), the processor sentence with Supabase and Cloudflare, "Reports travel between our servers and your browser over an encrypted connection..." and the account deletion and data download sentences. These are privacy and legal wording and need legal review.
- Doubtful: "Failing" as "Neuspjeli" (gender), "Reach" as "Doseg", "Showing what {name} needs." (unknown {name}), "Search Console property" as "Svojstvo (Search Console)", "Daily" and "Hourly" as "Svaki dan" and "Svaki sat", "Connected to a channel in {team}" (team may need a different case), "add_domain answered offline for {host}" (technical message, partly translated).
