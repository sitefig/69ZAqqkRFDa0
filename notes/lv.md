# Latvian (lv) notes

Unreviewed machine draft. No native speaker has checked it. Status stays `drafted`.

## Register

Formal "jūs" (plural-polite), imperatives in the plural-polite form ("Pievienojiet", "Izvēlieties"). Short buttons use the infinitive ("Saglabāt", "Dzēst", "Skenēt tagad"), the usual style for Latvian software.

## Plurals

Categories are zero, one, other. Forms use the genitive plural in zero ("0 lapu", "10 lapu"), nominative singular in one ("1 lapa", "21 lapa") and nominative plural in other ("2 lapas"). For "{n} URL" the word is indeclinable, so all three forms are alike. Where the English plural was a label with a count ("{n} failing"), the Latvian puts the count after a colon ("Neizturēti: {n}") so one wording fits all forms.

## Unsure terms

- crawl: "skenēšana" (scanning) instead of "rāpošana"; "crawler" in the privacy text is "rāpulis"/"MI rāpuļi". A reviewer may prefer one family of words.
- incident: loanword "incidents".
- finding: "konstatējums"; "Finding" and "To review" ("Jāpārskata") sit close to each other in lists.
- ticket / ticket tracker: "uzdevums" / "uzdevumu sistēma", glossary says "pieteikums"; "uzdevums" read better next to Jira and GitHub Issues. Glossary column left as is.
- "Pass"/"Fail": "Izturēts"/"Neizturēts".
- "Plan": "plāns"; "Free" is "Bezmaksas".
- "Marketeer" is "Mārketinga speciālists", "Data protection officer" is "Datu aizsardzības speciālists".
- "Engine decision" and "rule engine": "noteikumu dzinējs".
- "Risk accepted" and "False positive" are statuses; the reason prompts name them as statuses.
- Legal text in terms and privacy (sections 1 to 9): plain translation, not checked against Latvian legal usage. "Pārzinis" is the GDPR controller term.
- "Backfill 16 months": "Aizpildīt 16 mēnešus".
- "Allow list" in "You're not on the allow list": "atļauto saraksts".

## 15 riskiest keys (core unless marked)

1. Terms section 5 to 9 headings and "To the extent the law allows, Sitefig SARL-S is not liable..."
2. "For anything else, write to us at https://sus.bot/contact/ ..." (CNPD complaint text)
3. "Analytics, if you agree to it, is provided by Google..." (data transfer wording)
4. "Our legitimate interest in keeping the service available and preventing abuse."
5. "To perform our contract with you: ..."
6. "Failing and to-review incidents are counted apart. Content is a view across SEO, QA and AI..." (findings)
7. "Clean means the rules ran and found nothing. Could not be checked means..." (findings)
8. "{n} pages: {fail} failing, {review} to review" (findings, plural with three placeholders)
9. "{n} dismissed by decisions, still counted in the totals above" (plural)
10. "{done} of {n} pages." (plural, "no ... lapām")
11. "Crawl {crawl}: {n} pages crawled, {results} with results." (plural)
12. "Decision undone for \"{title}\". The incident is open again."
13. "Required for risk accepted and false positive. Up to 500 characters."
14. "Your account can't open this. It may belong to a plan you're not on..."
15. "Deletes your account, profile, plan, purchases and dashboards right away..."

## English source ambiguities

- "Case", "Basis", "Kind", "State", "Items" have no context; read as legal case, legal basis, type of standard, state of an item, and counted items.
- "Review" is both a noun (status) and a verb context ("To review"); both rendered "Jāpārskata".
- "Sign in" and "Log in" are different keys in English but one word in Latvian ("Pieteikties").
- "Runs" and "Crawls" both become "Skenēšanas reizes".
- "Written from the check name; no specific guidance yet." could mean the text was generated from the check name.
- Two near-duplicate version strings (647, 648) differ only by "controller" and "operated by".
- "Disallow:", "User-agent:", "GET", "http 403", "http 404" kept as code terms.

## Update 2026-10-22 (source hash fa87591c)

224 keys added, 98 removed (orphans deleted), 3 keys moved between bundles with their translations kept (Running, Crawl runs, Summary). Dark, Language, Menu, Search, show and password were re-read against their new notes. "password" changed from "parole" to "paroli" (accusative) so that "rādīt paroli" is grammatical when read together.

New risky keys: "Accounts and logins are handled by Supabase..." (privacy, legal, needs legal review), "Reports travel between our servers and your browser over an encrypted connection..." (privacy), "Your email address and password, so you can log in..." and "Your login is kept in your browser's own storage..." (privacy, legal review), "Deletes your account, profile, plan, purchases and dashboards right away..." (account deletion), "Written from the check name; no specific guidance yet. The parts written this way: {fields}.", "Rules that could not be decided: {undecided}. Rules that do not apply to this site: {notApplicable}...", "Saved. Schedule for {domain}: {period}. The first crawl starts one period from now...".
Not translated on purpose: the identifier add_domain and the DNS name _sus-bot.{domain}.
Nothing in this update is reviewed. Legal paragraphs need legal review.

- Plural labels use the colon shape ("Neizturētie incidenti: {n}") in all three categories, as before. "Every {n} days" has real forms: "Reizi {n} dienā" (one), "Reizi {n} dienās" (zero, other). The one category also covers 21, 31, so no word for "every day" is possible.
- "Confidence" is "Pārliecība", "Reach" is "Aptvērums" (guesses from usage).
- "Crawler" in the sentence about a crawl request is "rāpulis" as in the existing privacy text.
- "Search Console property" stays "īpašums"; Google's Latvian interface may use "resurss".
- "Day 1: getting started" is "1. diena: sākums".
