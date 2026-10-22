# Estonian (et) draft notes

Unreviewed machine draft. No native speaker has checked it.

## Formality

Impersonal imperatives where possible, otherwise polite plural "teie/te" (e.g. "Logige sisse", "Teie konto"). Short button labels use the bare imperative ("Salvesta", "Kustuta"), as is usual in Estonian software.

## Terms I was unsure about

- Crawl as "skannimine" (scan), "Crawl now" as "Skanni kohe". Alternatives: "roomamine", "indekseerimine" (wrong meaning).
- Incident as "vahejuhtum"; finding as "leid"; evidence as "tõendid".
- Plan as "pakett" (Free = Tasuta, Pro unchanged).
- Ticket as "pilet", ticket tracker as "piletisüsteem". Could be misread as an event ticket; "ülesanne" is the alternative.
- "Choose the property" (Search Console) as "ressurss"; Google's Estonian UI term should be checked.
- Fail/Pass as "Ebaõnnestunud/Läbitud"; "Failing" as "ebaõnnestuvad".
- Accessibility as "juurdepääsetavus" (some use "ligipääsetavus").
- AI module label as "Tehisintellekt" (long for a tab; "AI" may be preferred).
- "Wired" in "sus.bot is being rewired" rendered as "kaabeldust uuendatakse", which is literal.
- Legal pages (terms, privacy) need a lawyer's review in Estonian.

## 15 riskiest keys (check first)

1. The privacy and terms paragraphs: "To the extent the law allows, Sitefig SARL-S is not liable..."
2. "Analytics, if you agree to it, is provided by Google..."
3. "Google and Microsoft may also use the analytics data..."
4. "For anything else, write to us at https://sus.bot/contact/..."
5. "Accounts and sign-ins are handled by Supabase..."
6. "These terms are governed by the law of Luxembourg..."
7. "Alerts are part of monitoring, a paid feature..."
8. "Scheduled crawls, change comparison and alerts are a paid feature..."
9. "A page with more than one incident is counted once for each incident..."
10. "Clean means the rules ran and found nothing. Could not be checked means..."
11. "Failing and to-review incidents are counted apart. Content is a view across SEO, QA and AI..."
12. "{done} of {n} pages." (case of {n} after the ending "-st"; reads wrong for some numbers)
13. "{n} dismissed by decisions, still counted in the totals above"
14. "{found} audits found something, {clean} found nothing and {notChecked} could not be checked."
15. "Choose the property" and "Sign-in records: ..." (terminology).

## English source ambiguities

- "Fail" and "Failed" appear as a result and as a run state; both are translated, with different words.
- "Review" is used as a noun status and as "to review"; I used "Ülevaatamiseks" for the status.
- "Open" as a status and as a verb (not told apart by the key).
- "Written from the check name; no specific guidance yet." is vague about what is written.
- "You" (row heading) is rendered "Teie".
- Some English source strings contain a trailing "·" page-title pattern; kept as is.
- Plural keys such as "{n} projects" have no zero form in Estonian, so only one and other are given.
