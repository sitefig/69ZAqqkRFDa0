# Slovenian (sl) machine draft notes

Machine draft, not reviewed by a native speaker. 767 core and 272 findings entries (source hash fa87591c, second round 2026-10-22: 98 orphans removed, 227 added; the first-round figures were 681 and 232); `node tools/check.mjs --strict` reports 0 errors, 0 warnings and 0 missing for sl.

## Terms I was unsure about

- audit: glossary says "revizija" (Slovenian "revizija" usually means financial audit; "pregled" would be more neutral). Kept the glossary term everywhere, including "Audit finding" as "Ugotovitev revizije".
- crawl: "skeniranje" (glossary). The software that crawls is "skener" in the terms text; in the sus.bot description (864) "iskalni roboti UI" is used for AI crawlers.
- rule engine: not in the glossary. Chose "motor pravil".
- plan: "paket" (glossary); the plan named "Free" is "Brezplačen" and "Pro" is unchanged.
- "Case" (words.json): "Primer", could also mean a legal case or a support case.
- "Directive" (words.json): "Direktiva", could be a robots.txt directive or an EU directive.
- "Run" / "Runs" (crawl runs): "izvedba/izvedbe".
- "State" is "Stanje" and "Status" is "Status"; the English uses both for different columns.
- "Engine decision" is "Odločitev motorja pravil".
- "Healthy" is "V redu"; "Clean" is "Čisto"; "Failed" (a step) is "Ni uspelo" while "Fail" (result) is "Neuspešno".
- "Dismissed" is "Zavrnjeno" (glossary), and "Deny" on the consent page is "Zavrni". Same word for two different actions.
- "Marketeer" is "Tržnik"; "Data protection officer" is "Pooblaščena oseba za varstvo podatkov".
- "AI" is "UI" (glossary), so "AI tool" is "orodje UI".

## Second round (2026-10-22)

- The English now says "log in" and "log out" where the first round had "sign in" and "sign out". Slovenian keeps "prijava" and "odjava" for both, so the old wording of those sentences carried over.
- Interval plurals ("Every {n} days", hours, minutes) decline in all four categories (Vsak dan, Vsaka {n} dneva, Vsake {n} dni, Vsakih {n} dni). The count phrases "{n} failing incidents", "{n} open incidents", "{n} incidents to review", "{n} pages affected" use the colon form in all four categories, as before. "{n} rules could not be checked" also uses the colon form.
- "Running" (findings) is "V teku"; the first round had "Teče" in core under a different bundle. "Headline" is "Naslov"; "Reach" is "Doseg"; "Untouched" is "Nedotaknjeno"; "Check" (column) is "Preverjanje"; "Groups" is "Skupine". All are short words with little context.
- Action buttons keep the short singular imperative ("Znova poveži Search Console", "Pošlji na IT"); sentences use the polite plural. Same mix as the first round.
- The Dark, Language, Menu, Search, password and show translations were re-read against the new notes and kept.
- Legal-sounding new keys that need a legal read: the Supabase and Cloudflare processors paragraph ("obdelovalca", "pogodba o obdelavi podatkov"), "Deletes your account ... right away" and the data download text.
- "Day 1: getting started", "Week 2: growing" and "Month 3 and later: expert use" are rendered with ordinal numbers and a colon ("1. dan: začetek").
- Fragment-like keys that remain: "Connected to {name}, {where}." ({where} is inserted text; case unknown) and "Report for the role: {role}".

## Formality

Formal "vi" (vikanje) throughout, imperatives in the plural/polite form ("Dodajte", "Preverite"). Button labels that name an action in a menu or on a tile use the short singular imperative form like many Slovenian apps ("Skeniraj zdaj", "Shrani", "Izbriši račun"); sentences addressed to the user use the polite form. This mix could be unified by the reviewer.

Typographic quotes are Slovenian low-high quotes where the English source has straight quotes: „Prenesi moje podatke“, „Zapomni si me“, „{title}“. The quoted button names match the translation of the button labels.

## Riskiest keys for a native reviewer

1. "A report describes what a file says, not what a crawler does. robots.txt is a request, not an access control. ..." legal text; "crawler" translated as "skener".
2. "To the extent the law allows, Sitefig SARL-S is not liable for indirect or consequential loss ..." liability wording.
3. "These terms are governed by the law of Luxembourg, and disputes go to the competent courts of Luxembourg. ..." legal register.
4. "Analytics, if you agree to it, is provided by Google (Google Analytics) and Microsoft (Microsoft Clarity). ..." the EU-US Data Privacy Framework is rendered "okvir EU-ZDA za varstvo podatkov"; check the official Slovenian name.
5. "For anything else, write to us at https://sus.bot/contact/ ... (CNPD)." supervisory authority naming and the 30-day answer.
6. "Accounts and sign-ins are handled by Supabase. ..." processor and data processing agreement terms ("obdelovalec", "pogodba o obdelavi podatkov").
7. "Our legitimate interest in keeping the service available and preventing abuse." GDPR basis phrase ("zakoniti interes").
8. "Alerts are part of monitoring, a paid feature. ... Set it up under Settings, Schedule and monitoring." long, with menu path names that must match nav labels.
9. "{n} dismissed by decisions, still counted in the totals above" and the other count phrases ("{n} failing", "{n} open", "{n} to review"): rewritten as "label: {n}" to avoid case and gender agreement with the number, in all four plural forms.
10. "{n} pages: {fail} failing, {review} to review, worst severity {severity}": the plural noun agrees with {n}; the other numbers follow a colon form; {severity} is an inserted word of unknown gender, put at the end.
11. "{event} {n} URLs." / "{event} {phase}." / "{event} {reason}.": the event word is inserted from elsewhere, so I put a colon after it.
12. "Crawl {crawl}: {n} pages crawled, {results} with results.": participle "skenirane" agrees with n in each plural form; check "{results} z rezultati".
13. "{found} audits found something, {clean} found nothing and {notChecked} could not be checked." rewritten as a list with colons.
14. "Decision undone for \"{title}\". The incident is open again." the title is inserted inside quotes.
15. "Your plan does not include findings yet. ... the tools only return findings on the Pro plan." "tools" are AI tools; "orodja" could be confused with other tools.

## Ambiguities in the English source

- "Run", "Runs" and "Crawl" are used for the same thing in places (crawl runs), and "Crawl now" is both a button and a name quoted in running text.
- "Review" (verb to review) and "to review" (status) and "Review" as a word; used as a status the translation is "Za pregled".
- "Account email" and "Email address" and "Email" differ in context only (label vs tab).
- "Source" in "Pick a source" vs. "Source" as a column.
- "Tool" in the OAuth pages means an AI tool; the key "Tool" alone is not tied to AI.
- "Fix" as noun ("Popravek") and as a verb in fragments ("Fixed failing" is a status chip; I read it as "popravljeni neuspešni").
- Fragments such as "Continue with", "Returns to", "back by", "Sent to" assume that a value follows, and word order in sl may need a case ("Nadaljuj z", "Vrne se na") that the following value cannot take.
- "Their email address" assumes an invited person.

## Count of uncertain items

About 40: the 15 above, plus the term choices in the first section and the fragments in the last section.
