# Finnish (fi) notes

Unreviewed machine draft. No native reviewer has checked it.

## Formality

Imperative and impersonal forms are used, "sinä" and "te" are avoided. Where a pronoun is unavoidable (legal text, "Your decision"), the informal second person singular is used ("tilisi", "päätöksesi"). A native reviewer should decide whether the legal pages need "te".

## Terms I was unsure about

- crawl: "skannaus" (scan). "Indeksointi" was rejected because it means indexing.
- incident: "poikkeama"; finding: "havainto".
- fail: "Ei läpäisty" and plural "ei läpäisseet" (noun use); dismissed: "Hylätty"; false positive: "Väärä positiivinen".
- plan: "paketti"; ticket: "tiketti"; tracker: "tikettijärjestelmä".
- "Disallow:" and "User-agent:" are kept as code terms. "Free" and "Pro" kept as plan names.
- Role titles (CEO, CMO, CTO) are written out as job titles, not initialisms.
- "Audit" is "auditointi".
- "Deny" is "Estä" (button); a reviewer may prefer "Kiellä".

## 15 riskiest keys

1. Alerts are part of monitoring, a paid feature... (long alert paragraph)
2. To the extent the law allows, Sitefig SARL-S is not liable... (liability, legal)
3. Our legitimate interest in keeping the service available...
4. Analytics, if you agree to it, is provided by Google...
5. A page with more than one incident is counted once for each incident...
6. Clean means the rules ran and found nothing...
7. Crawl {crawl}: {n} pages crawled, {results} with results.
8. {n} pages: {fail} failing, {review} to review
9. {n} dismissed by decisions, still counted in the totals above
10. {n} failing incidents, {review} to review.
11. Fixed to review / New to review / Fixed failing (status labels)
12. These terms are governed by the law of Luxembourg...
13. Scheduled crawls, change comparison and alerts are a paid feature...
14. Showing results from {loaded} of {total} incidents. Keep typing to narrow.
15. Deny / Allow access (OAuth consent wording)

## English source ambiguities

- "Fail", "Failing", "Failed" are separate states; Finnish uses three different words, check they read well in tables.
- "Review" is both a noun and a status; "Tarkistettava" is used as status.
- "Reports" in the privacy text mean audit reports, but "Report" also appears for the printed role report.
- "Done" appears both as a status and as a step label ("Done:").
- Placeholders such as {project}, {status}, {reason} are inserted in the nominative, so sentences were phrased with a colon to avoid case endings.
- "{n} {severity}" has no sentence context; word order is kept.
- Sentence 4 of the privacy page ("Why we are allowed to") is an incomplete English heading; the Finnish is a free reading.

## Update 2026-10-22 (source hash fa87591c)

224 keys added, 98 removed (orphans deleted), 3 keys moved between bundles with their translations kept (Running, Crawl runs, Summary). Dark, Language, Menu, Search, password and show were re-read against their new notes and kept.

New risky keys: "Accounts and logins are handled by Supabase..." (privacy, legal, needs legal review), "Reports travel between our servers and your browser over an encrypted connection..." (privacy), "Your email address and password, so you can log in..." and "Your login is kept in your browser's own storage..." (privacy, legal review), "Deletes your account, profile, plan, purchases and dashboards right away..." (account deletion), "Written from the check name; no specific guidance yet. The parts written this way: {fields}.", "Rules that could not be decided: {undecided}. Rules that do not apply to this site: {notApplicable}...", "Saved. Schedule for {domain}: {period}. The first crawl starts one period from now...".
Not translated on purpose: the identifier add_domain and the DNS name _sus-bot.{domain}.
Nothing in this update is reviewed. Legal paragraphs need legal review.

- Plural keys such as "{n} failing incidents" are written as "Ei läpäisseitä poikkeamia: {n}" in both forms, because Finnish number agreement ("1 poikkeama", "2 poikkeamaa") does not fit labels with an adjective. "{n} evidence rows" and "{n} incidents ({severities})" do have real one and other forms.
- "Every {n} days" is "{n} päivän välein"; the one form is "Joka päivä".
- "Confidence" is "Luotettavuus"; "Reach" is "Laajuus" (guess from usage).
- "Failing" is "Ei läpäisseet" as in the existing keys; a reviewer may prefer a shorter adjective.
- Impersonal wording is used where possible; "sinä" forms appear as "tilisi", "pakettisi" as before.
- "Connected to a channel in {team}." is "Yhdistetty kanavaan tiimissä {team}." The case of {team} cannot be adjusted if the team name is foreign.
- Language names in "These texts are in X" are avoided with two labels.
