# Lithuanian (lt) notes

Unreviewed machine draft. No native reviewer has looked at it. 681 core and 232 findings entries, all present.

## Formality

Polite plural "jūs" form throughout (Prisijunkite, Pasirinkite). Buttons use the infinitive (Išsaugoti, Ištrinti), which is usual for Lithuanian UI.

## Plural handling

Categories are one, few, many, other. To stay grammatical with any number, plural entries use a "Noun: {n}" shape ("Puslapių: {n}", "Neišlaikyta: {n}") with identical text in all four forms. Time left uses the abbreviations "val." and "min.", which do not decline. A reviewer may want real declined forms for the highest-traffic strings ("{n} pages", "{n} projects").

## Unsure terms

- Crawl: "skenavimas" (scanning), as in the glossary. A reviewer may prefer "tikrinimas" or an established SEO term.
- Incident: "incidentas" (loanword); Finding: "radinys".
- Ticket: "užduotis" and tracker "užduočių sistema". Real ticket systems say "bilietas" or "užklausa"; "užduotis" reads clearer.
- Severity: "svarba" (reads as importance). "Didelė/Vidutinė/Žema svarba" is used for High/Medium/Low.
- Roles CEO, CMO, CTO, DPO are spelled out (Generalinis direktorius, Rinkodaros vadovas, Technologijų vadovas, Duomenų apsaugos pareigūnas).
- "Offline" -> "Neprisijungta" (status of what is unclear). "Healthy" -> "Viskas gerai".
- Search Console, Slack, Stripe, Supabase, Cloudflare, Jira etc. kept as brands. Plan names Free and Pro kept.
- "AI" -> "DI" (dirbtinis intelektas) as in the glossary.

## Riskiest keys for the native reviewer

1. Incident sentence: "An incident is one rule and check with every page it affects..." (findings)
2. "Clean means the rules ran and found nothing. Could not be checked means..." (findings)
3. "A page with more than one incident is counted once for each incident..." (findings)
4. "Failing and to-review incidents are counted apart. Content is a view across SEO, QA and AI..." (findings)
5. "An invitation gives access as soon as it is accepted. Revoking one takes it back before that happens." (core)
6. "A feature you open before its stage simply unlocks. Your stage never goes down." (core)
7. "Alerts are part of monitoring, a paid feature..." (core)
8. "To the extent the law allows, Sitefig SARL-S is not liable..." (legal text, core)
9. "Our legitimate interest in keeping the service available..." (GDPR basis, core)
10. "Access, correction, deletion, portability, objection, and withdrawal of consent." (GDPR rights, core)
11. "Written from the check name; no specific guidance yet. This affects {fields}." (core)
12. "Your decision for all incidents of this rule: {status}. Why: {reason}" (placeholder grammar, core)
13. "Required for risk accepted and false positive." (status names must match the words.json translations, core)
14. "Day 1 · Starter", "Week 2 · Growing", "Month 3+ · Expert" (stage names, core)
15. "Backfill 16 months" (core)

Uncertain items counted: about 30 (the terms above plus these 15 keys).

## Ambiguities in the English source

- "Status" and "State" both exist as keys; translated "Statusas" and "Būsena".
- "Property" and "Ownership" are both "Nuosavybė" (Search Console property vs domain ownership). Probably need different words.
- "Done:" and "Done" (findings: "Atlikta") are used both as a step label and a status.
- "Review" as a noun status vs "To review" as a group: "Peržiūra" vs "Peržiūrėti".
- "Case" (findings) -> "Atvejis"; unclear if a legal case or a support case.
- "Items" -> "Elementai".
- The description text "Nothing was saved" is repeated in many sentences; kept literal.

## Update 2026-10-22 (source hash fa87591c)

224 keys added, 98 removed (orphans deleted), 3 keys moved between bundles with their translations kept (Running, Crawl runs, Summary). Dark, Language, Menu, Search, show and password were re-read against their new notes. "password" changed from "slaptažodis" to "slaptažodį" (accusative) so that "rodyti slaptažodį" is grammatical when read together.

New risky keys: "Accounts and logins are handled by Supabase..." (privacy, legal, needs legal review), "Reports travel between our servers and your browser over an encrypted connection..." (privacy), "Your email address and password, so you can log in..." and "Your login is kept in your browser's own storage..." (privacy, legal review), "Deletes your account, profile, plan, purchases and dashboards right away..." (account deletion), "Written from the check name; no specific guidance yet. The parts written this way: {fields}.", "Rules that could not be decided: {undecided}. Rules that do not apply to this site: {notApplicable}...", "Saved. Schedule for {domain}: {period}. The first crawl starts one period from now...".
Not translated on purpose: the identifier add_domain and the DNS name _sus-bot.{domain}.
Nothing in this update is reviewed. Legal paragraphs need legal review.

- Button names in quotes use Lithuanian quotation marks („Skenuoti dabar“) as in the existing "Prisiminti mane" text.
- "Every {n} days/hours/minutes" has four real forms (one, few, many, other), for example "Kas {n} dieną / dienas / dienos / dienų". Other plural labels use the "Noun: {n}" shape in all four forms.
- "Confidence" is "Patikimumas", "Reach" is "Aprėptis" (guesses from usage).
- "Search Console property" changed from "Nuosavybė" to "savybė" in the glossary only; the key "Search Console property" is "Search Console savybė".
- "Nothing was charged." is "Pinigai nenurašyti."
