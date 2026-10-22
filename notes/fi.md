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
