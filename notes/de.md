# Notes for de

Machine draft. Not reviewed by a native speaker. Entries: core 681, findings 232 (all 913 keys, 16 plural keys).

## Formality and style

Formal "Sie" in sentences and imperatives ("Fügen Sie ... hinzu"). Button labels use the bare verb or noun phrase without "Sie" ("Konto löschen"), the normal form for German business software. Nouns are capitalised; "Report" is kept as the loan word, "Bericht" is used nowhere, to match the product and the role names (CEO-Report).

## Terms I was unsure about

- Vorfall for "incident" (Incident would also be common in IT; Vorfall reads better for a business audience).
- Befund for "finding" and Nachweis for "evidence".
- "Crawl" and "crawlen" stay in English as is usual in German SEO tools; "Rastreo"-style translations would not be recognised.
- Tarif for "plan" (Abonnement, Paket and Plan are alternatives). "Free" and "Pro" are kept as plan names.
- "Zu prüfen" for "To review" and "Check" for "check" are close in meaning. Nicht bestanden / Fehlgeschlagen / Nicht prüfbar are three separate states.
- Datenschutzbeauftragter is masculine generic for the role "Data protection officer"; the other role names (Entwickler, Projektleiter) are also masculine generic.

## Fifteen riskiest strings for the native reviewer

1. Abrechnung / Tarif: Billing and plan terms must match the checkout wording of the product.
2. Nicht bestanden: Fail vs Failing vs Failed; check in the real tables.
3. Zu prüfen: Review vs Check.
4. Unauffällig: "Clean" in an audit table; may need a more neutral word.
5. Konnte nicht entschieden werden: "Could not be decided" (engine state), awkward in German.
6. Auf Ihre Weise: "Run it your way", a marketing heading.
7. Marketer: Role name; "Marketer" vs "Marketing-Spezialist".
8. Ein Vorfall ... Check ... Regel: Explanation of an incident (key starting "An incident is one rule and check").
9. Die Daten erwachen zum Leben: "The data lights up", literal and slightly florid; check tone.
10. Lokaler Speicher / Cookies sentence in the privacy page: Legal text, needs legal review: "Ihre Anmeldung wird im eigenen Speicher Ihres Browsers gehalten ..."
11. Haftung sentence ("Soweit gesetzlich zulässig, haftet Sitefig SARL-S nicht ..."): Legal text, needs legal review.
12. Auftragsverarbeiter sentence (Supabase and Cloudflare): Legal text (GDPR terms), needs legal review.
13. Entscheidung der Engine: {decision} ({by}).: "Engine" kept as loan word; "Regel-Engine" vs "Regelmaschine".
14. Teile der Website: "Parts of the site" (URL sections); "Bereiche" may read better.
15. Einen Blick wert: "Worth a look", a soft severity label.

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

## Update 2026-10-22 (source hash fa87591c)

Machine draft, not reviewed. Removed 98 orphan keys, added 224 (core 681 -> 767 entries incl. moved keys, findings 272). "Crawl runs" and "Summary" moved to core, "Running" to findings. Dark ("Dunkel") and Language ("Sprache") fit their new notes and are unchanged. "Sign in" and "Log in" are both "Anmelden", "Sign out" and "Log out" both "Abmelden".

New risky keys:

- Legal text, needs legal review: "Accounts and logins are handled by Supabase ...", "Reports travel between our servers and your browser ...", "Your login is kept in your browser's own storage ...", "Login records: ...", "Deletes your account ...", "Download a copy of everything ...".
- "Confidence" = Verlässlichkeit, "Reach" = Reichweite, "Court case" = Gerichtsverfahren, "Search Console property" = Search-Console-Property (Property kept as loan word).
- "Failing" (state) = Fehlgeschlagen, same word as the glossary "failed (run)"; the two cannot be told apart in a table.
- "Every {n} days/hours/minutes": the "one" form is "Jeden Tag" etc. without {n}.
- "Written from the check name ... {fields}" and "{base} The engine keeps at most ..." depend on how {fields} and {base} are filled.
- "{mINPASSWORD}" is kept as written in the source; it looks like a typo for a placeholder name and should be checked in the app.
- "Their email address"/"Tool"/"Runs" orphans removed; "Day 1: getting started" and "Week 2: growing" are now full labels.
