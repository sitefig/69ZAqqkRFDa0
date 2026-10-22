# Notes for it

Machine draft. Not reviewed by a native speaker. Entries: core 681, findings 232 (all 913 keys, 16 plural keys).

## Formality and style

Formal "Lei" in sentences and instructions ("Aggiunga il suo dominio"). Button labels use the plain imperative ("Salva", "Elimina account"), the usual form in Italian software, so labels are "tu" imperative while sentences are "Lei". This mix is deliberate and should be confirmed by a native reviewer. Quotes use « ».

## Terms I was unsure about

- Incidente, Audit (invariable), Rilievo for "finding", Evidenze for "evidence", Gravità for "severity" (Alta / Media / Bassa).
- "Scansione / Scansiona ora" for crawl; "Esecuzioni di scansione" for crawl runs.
- "Non superato" for Fail and failing, "Non riuscito" for failed, "Superato" for pass, "Da rivedere" for review.
- "Piano" for plan; "Gratuito" for the Free plan.
- "Report" kept as loan word (Rapporto is an alternative); "Team", "Account", "Password", "Business" are kept.
- "Monitoraggio", "Pianificazione", "Avviso" for alert.
- "Falso positivo", "Rischio accettato", "Scartato" for dismissed.

## Fifteen riskiest strings for the native reviewer

1. Imperative mix (Salva vs Salvi): Lei vs tu forms in labels; see formality note.
2. Benvenuti, il suo account è pronto: Gender-neutral workaround for "Welcome".
3. Ci fa piacere rivederla: "Welcome back".
4. Superato / Non superato: Pass and fail results.
5. Nessun problema: "Clean" in an audit table.
6. Non è stato possibile decidere: "Could not be decided" (engine state).
7. A modo suo: "Run it your way".
8. I dati prendono vita: "The data lights up".
9. Rilievo: "Finding"; Risultato and Riscontro are alternatives.
10. Responsabili del trattamento sentence (Supabase and Cloudflare): Legal text (GDPR terms), needs legal review.
11. Responsabilità sentence: Legal text, needs legal review.
12. Titolare del trattamento: Controller wording in privacy and terms footers.
13. Rimane circa {n} ora.: Plural forms with "di" for the many category.
14. Resta collegata finché è connesso qui: Gender agreement of the extension (feminine) with the user.
15. Citazione: "Citation" in the standards table; could be "Riferimento".

## Ambiguities in the English source

- "Fail", "Failing", "Failed": the result word (rule did not pass), the state of an incident, and a crawl or step state share one English word each. They are translated as three different terms (see glossary rows fail, failing, failed).
- "Review" / "To review": a state that asks a person to look, not a verb of the UI. "Items to review", "New to review", "Fixed to review" are short fragments whose grammar depends on the noun they were cut from.
- "Open" is both a status and a verb ("Open a project first."). "Fixed failing", "New failing", "Fixed to review" are used as labels of counters.
- "State" (modules-audits) and "Status" (audits-detail, decisions) are both column heads; the draft keeps them apart only where the language has two words.
- "Property" (Search Console property), "Case" (a legal case in the standards table), "Directive" (robots.txt directive), "Kind", "Basis", "Items" have no context beyond the source file name.
- "Free" and "Pro" are plan names in "Choose Free" / "Choose Pro". Pro is kept as a name; Free is translated as the word for free of charge where the plan name is meant.
- "{reason}. Nothing was saved." and "{event} {phase}." assume that {reason} and {event} arrive without a final full stop and as a full sentence. If they carry their own full stop the sentences get a double stop.
- "{n} {severity}" needs the severity word (High, Medium, Low) in a form that fits a number in front of it; the draft uses the dictionary form from the glossary.
- "You" in the decisions table (who decided) is a table cell, not a sentence.
- "Business" (view for Business or IT) means the non-technical side of a company.
- The strings "Your decision for all incidents of this rule: {status}. Why: {reason}" join a status word from words.json to a sentence; the status word must work after a colon.

## Update 2026-10-22 (second round, new source hash fa87591c)

Machine draft, not reviewed. Entries now: core 767, findings 272. 224 keys added, 98 removed (orphans deleted, including 8 findings-bundle keys that moved to core), noteChanged keys Dark, Language, Menu, Search, password, show re-checked and kept. "Sign in/out" strings became "Log in/out" in English; Italian keeps "Accedi" / "Esci" and "connesso" for logged-in state.

New risky or uncertain items:
- Legal text, needs legal review: "Accounts and logins are handled by Supabase ... processors under a data processing agreement" (Responsabili del trattamento), "Reports travel ... over an encrypted connection ... signed", "Your login is kept in your browser's own storage ...", "Login records: ...", the account data download and deletion sentences.
- "Reach" (findings column, no note): "Diffusione", meaning guessed as how many pages are affected.
- "Confidence": "Affidabilità"; "Court case": "Causa giudiziaria"; "Groups": "Gruppi"; "Headline": "Titolo".
- "Daily" / "Hourly": "Ogni giorno" / "Ogni ora", must fit after "Schedule for {domain}: {period}".
- "Every {n} ..." and "{n} ..." plurals: the `many` category (millions in Italian) uses the same text as `other`.
- "{n} rules could not be checked": "regola non verificabile / regole non verificabili", shortened.
- "Slack and email alerts for it are paused with it": "it" is the schedule; translated as "la pianificazione" in the first mention, gender of the reference unconfirmed.
- Placeholders such as {reason}, {state}, {what}, {where} are assumed to arrive as plain text without final full stop; sentences like "{reason}. Riprovi." depend on it.
- Imperative buttons use the plain imperative; sentences use "Lei" (e.g. "Prema", "Acceda"). "Back to your projects" / "Go to your projects" are labels but use "suoi" (Lei) for consistency with the sentences; reviewer to decide on the label form.
