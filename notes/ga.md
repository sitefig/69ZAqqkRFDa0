# Irish (ga) notes

Status: unreviewed machine draft, written 2026-10-22. No native speaker has read it. Files: `src/ga/core.json` (681 entries) and `src/ga/findings.json` (232 entries), flat key to value, sorted keys. The validator (`scripts/i18n-check.ts`, run on a wrapped copy with the `i18n-dict/1` envelope) reports 0 errors and 0 missing for both.

## Decisions

- Address: second person singular ("tú", "do"), as in Irish government software. The plural "sibh" is not used.
- Standard: Caighdeán Oifigiúil spelling, with fadas.
- Plurals: the five categories one, two, few, many, other. Irish nouns stay singular after numerals, so most forms repeat the singular noun. The two-form uses "dhá" without {n} (allowed by the contract). Mutations are written out for nouns where they show: "{n} thionscadal" (few, lenition), "{n} dtionscadal" (many, eclipsis), "{n} tionscadal" (one, other). Hours use "uair an chloig" with the special plural "uaire" for 3 to 10.
- Placeholders sit where no mutation or case change is needed. Where a placeholder follows a preposition (for example "Ar ais chuig {project}") the preposition chosen causes no mutation. If a project name or crawl label is used after "i" or "faoi", the real Irish form would mutate and the draft cannot do that.
- Brand and code terms kept: sus.bot, Supabase, Cloudflare, Stripe, Slack, Search Console, GA4, robots.txt, Disallow:, User-agent:, GET, http 403, Enter, Escape, JSON, PDF, CSV.
- Words not translated on purpose: "QA", "SEO", "AI" (in this draft "AI" is kept, since "intleacht shaorga" is long for a nav label).

## Terms that need an expert (all of them)

1. "crawl" as scanadh / scanóir / scananna: no settled Irish term. "Scan anois" for the button "Crawl now". The plural "scananna" and "rití scanta" (crawl runs) are unverified.
2. "incident" as teagmhas: the usual Irish word for incident, but IATE may prefer another term in the security context.
3. "finding" as fionnachtain (audit finding); the audit sense may be "toradh" or "constaic" in official audit texts.
4. "audit" as iniúchadh, plural iniúchtaí: check plural form.
5. "evidence" as fianaise, "evidence rows" as "sraitheanna fianaise".
6. "false positive" as "dearfach bréagach".
7. "risk accepted" as "riosca glactha", "dismissed" as "diúltaithe" (could be read as rejected), "resolved" as "réitithe", "fixed" as "socraithe".
8. "billing" as "billeáil": a loan form. An expert may prefer "sonrascadh" or "ag soláthar sonrasc".
9. "plan" as "plean" (subscription plan); "Free" as "Saor in aisce".
10. "integrations" as "comhtháthaithe" (plural of comhtháthú).
11. "monitoring" as "monatóireacht"; "schedule" as "sceideal"; "alert" as "foláireamh" (plural foláirimh).
12. "magic link" rendered as "nasc logála isteach" (login link). Original idea is a one-time login link; "nasc aon-úsáide" is used once.
13. "IT" (the team) as "TF" (teicneolaíocht an eolais). Check whether "TF" is understood; the English "IT" may be safer.
14. "tracker" or "ticket tracker" as "córas ticéad". "ticket" as "ticéad".
15. "extension" (browser) as "breiseán"; "dashboard" as "painéal".
16. "property" (Search Console) as "maoin": probably wrong register. May need "suíomh" or "maoin" as in Google's own Irish text, if any.
17. "breadcrumb" as "conair nascleanúna".
18. "backfill 16 months" as "Líon siar 16 mhí": unclear meaning for Irish readers.
19. "critical change" as "athrú criticiúil".
20. "severity" as "déine", with "ard", "meánach", "íseal"; "déine mheánach" has lenition on the adjective after a feminine noun.
21. "Info" as "Faisnéis".
22. "Controller" as "rialaitheoir"; "processor" as "próiseálaí"; "data processing agreement" as "comhaontú próiseála sonraí"; "EU-US Data Privacy Framework" as "Creat um Príobháideacht Sonraí AE-SAM" (official Irish name not checked).
23. Data subject rights list: "léirscriosadh" (erasure), "iniomparthacht" (portability), "agóid" (objection), "tarraingt siar toilithe" (withdrawal of consent). Check against the Irish text of the GDPR.
24. "Commission nationale pour la protection des données (CNPD)" is left in French; "Lucsamburg" is the Irish for Luxembourg.
25. Legal wording of the terms and privacy sections (liability, governing law, legitimate interest: "leas dlisteanach", "dliteanas", "caillteanas indíreach nó de thoradh"). A lawyer who reads Irish should review these.
26. "Guideline" as "treoirlíne" and "Directive" as "treoir", "Regulation" as "rialachán", "Law" as "dlí", "Standard" as "caighdeán", "Jurisdiction" as "dlínse", "Citation" as "luanamh".
27. Role names: CEO "Príomhfheidhmeannach", CMO "Príomhoifigeach margaíochta", CTO "Príomhoifigeach teicneolaíochta", "Margaitheoir", "Oifigeach cosanta sonraí" (this one is the official GDPR term).
28. "Hash" as "hais" (content hash); "selector" as "roghnóir"; "bytes" as "bearta" (check: "beart" also means action).
29. "Hover/keyboard" strings: "Enter opens the first match" kept with the key name Enter.
30. Numbers with mutation: "{n} oscailte", "{n} ag teip" and the like keep digits unmutated.
31. "Day 1 · Starter", "Week 2 · Growing", "Month 3+ · Expert" stage names: "Tosaitheoir", "Ag fás", "Saineolaí".
32. "Offline" as "As líne"; "Healthy" as "Sláintiúil".

## Riskiest keys (check first)

1. "Crawl {crawl}: {n} pages crawled, {results} with results." (the meaning of {results} is a count of pages; the Irish "torthaí ar {results}" may read oddly)
2. "{n} audits with findings" (mutation after numerals of "iniúchadh")
3. "{n} failing incidents, {review} to review." (mutation of "teagmhas" in all five forms)
4. "About {n} hours left." (special plural "uaire", eclipsis after 7 to 10)
5. "{n} dismissed by decisions, still counted in the totals above"
6. "{event} {n} URLs." (what {event} stands for is unknown, so grammar after it is a guess)
7. "{event} {reason}." and "{event} {phase}." (kept as source: join of fragments in code, cannot be made grammatical)
8. "Exclusions" ("eisiaimh" may be the wrong plural)
9. "To the extent the law allows, Sitefig SARL-S is not liable for indirect or consequential loss ..." (legal)
10. "These terms are governed by the law of Luxembourg ..." (legal)
11. "Accounts and sign-ins are handled by Supabase ..." (legal terms for processors)
12. "Access, correction, deletion, portability, objection, and withdrawal of consent." (GDPR terms)
13. "Choose the property" (Search Console)
14. "Backfill 16 months"
15. "Email me a magic link instead"

## Source ambiguities

- "Crawl {crawl}: {results} with results." Not clear whether {results} is a number of pages or a number of results.
- "{n} {severity}" and "{event} ..." strings join a number or a verb with another placeholder, so gender, mutation and word order cannot be right in all cases.
- "Fixed to review" and "Fixed failing" are labels of status transitions; the draft reads them as "ag teip, socraithe" and "le hathbhreithniú, socraithe".
- "All" is used as a filter label; "Uile" is a guess.
- "Items" is translated as "Míreanna" without context.
- "Run it your way", "The data lights up", "Tell us" and similar headings are marketing copy; the Irish is literal and may need rewording.
- "View for" ends the string with a preposition and a role placeholder is added elsewhere; "Amharc do" may need a case change.
