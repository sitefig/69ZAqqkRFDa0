# Notes for nl

Machine draft. Not reviewed by a native speaker. Entries: core 681, findings 232 (all 913 keys, 16 plural keys).

## Formality and style

Formal "u" and "uw" throughout. Button labels use the plain imperative ("Account verwijderen"). Quotes use curly double quotes.

## Terms I was unsure about

- Incident, audit, module, team and content are kept as Dutch loan words that are normal in business Dutch.
- Bevinding for "finding", Bewijs for "evidence".
- "Crawl" kept as noun and verb ("Nu crawlen"); "Crawl-uitvoeringen" for "Crawl runs".
- Abonnement for "plan"; "Gratis" for the Free plan.
- "Ernst" for "severity" (Prioriteit and Zwaarte are alternatives); Hoog / Gemiddeld / Laag.
- "Fout-positief" for "false positive" is the form used in most Dutch security tools; "Vals positief" is also seen.
- "Te beoordelen" for review, "Niet geslaagd" for fail, "Mislukt" for failed.

## Fifteen riskiest strings for the native reviewer

1. Ernst: Severity word; check against Dutch tools.
2. Niet geslaagd / Mislukt: Fail vs failed.
3. Kon niet worden beslist: "Could not be decided" (engine state).
4. Schoon: "Clean" in an audit table.
5. Op uw eigen manier: "Run it your way".
6. De gegevens komen tot leven: "The data lights up".
7. Uitvoeringen: "Runs" nav entry.
8. Marketeer: Role name kept as "Marketeer" (Dutch word, same meaning).
9. Uitsluitingen sentence: "Exclusions are not connected yet..." tense and wording.
10. Verwerkersovereenkomst sentence (Supabase and Cloudflare): Legal text, needs legal review.
11. Aansprakelijkheid sentence: Legal text, needs legal review.
12. Rechtsgrond / persoonsgegevens sentence in reports.json: Legal wording.
13. Search Console-verkeer: Compound with a brand name, hyphen use.
14. Nog ongeveer {n} uur.: Plural of "uur" is the same; check natural phrasing with "Nog".
15. Doorsturen naar de regelengine: "Rule engine" as "regelengine".

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

## Round 2 (source rewrite, 2026-10-22)

Machine draft, not reviewed. Removed 101 orphan keys, added 227 (core 177, findings 50). "Dark" changed to "Donker thema" (switch label); "Language", "Menu", "Search", "password", "show" kept. "Log in/out" is Inloggen/Uitloggen throughout, "Sign in" (extension button) stays Aanmelden.

Doubts for the reviewer:
- Legal text needs legal review: the Supabase/Cloudflare processors paragraph ("Accounts en logins ... verwerkersovereenkomst"), the login storage and cache paragraph ("Uw login wordt bewaard ..."), the data export and account deletion paragraphs, and the report transport sentence ("Rapporten reizen via een versleutelde verbinding ...").
- "Mislukt" is used for "Failing" (counters like "{n} mislukte incidenten"); "Niet geslaagd" stays for the Fail result.
- "Zo verifieert u" / "Zo lost u het op" for the headings "How to verify" / "How to fix"; "Waarom het ertoe doet" for "Why it matters".
- "These texts are in {textLanguage}": written as "in het {textLanguage}", which assumes the language name is a neuter noun (Nederlands, Duits). It breaks if the name is given in another form.
- "Elke {n} uur" has no plural change on purpose; "Verwacht terug om" may need a date form if the value is a date, not a time.
- "Search Console-property" keeps the English term; "Onaangeroerd" for "Untouched" is literal.
