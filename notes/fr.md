# Notes for fr

Machine draft. Not reviewed by a native speaker. Entries: core 767, findings 272 (all 1039 keys), synced to source hash fa87591c on 2026-10-22.

## Formality and style

Formal "vous". Button labels use the infinitive for actions ("Supprimer le compte") and the imperative "vous" form in instructions ("Ajoutez votre domaine"). French typography: a non-breaking space is inserted before : ; ? ! and inside « » by the build step of this draft (the JSON files contain U+00A0). Quotes use « ».

## Terms I was unsure about

- "Crawl" kept as noun ("Lancer le crawl"); "Exécutions de crawl" for "Crawl runs". "Explorer/exploration" is used only in descriptive text.
- Constat for "finding", Preuve for "evidence", Gravité for "severity" (Élevée / Moyenne / Faible).
- "Échec" for the Fail result, "Échoué" for failed, "en échec" for failing, "Non vérifié" for not checked.
- "Offre" for "plan" (Forfait, Plan and Abonnement are alternatives); "Gratuite" for the Free plan, which needs the feminine noun "offre" before it.
- "Surveillance" for monitoring, "Alerte" for alert, "Planification" for schedule.
- "Se connecter" for both log in and sign in; "Se déconnecter" for sign out.
- "Faux positif", "Risque accepté", "Écarté" for dismissed.

## Fifteen riskiest strings for the native reviewer

1. Gratuite / Choisir Gratuite: The adjective "Gratuite" stands alone as plan name; gender agreement.
2. Marketeur: Role name; a French native may prefer "Responsable marketing".
3. Sans problème: "Clean" in an audit table.
4. N'a pas pu être décidé: "Could not be decided" (engine state).
5. À votre façon: "Run it your way".
6. Les données prennent vie: "The data lights up".
7. Constat d'audit: "Audit finding".
8. Environ {n} d'heures restantes.: Plural "many" form for numbers like 1 000 000; formal but unusual.
9. Offre / Abonnement: Plan vs billing vocabulary; check against the Stripe checkout wording.
10. Sous-traitants sentence (Supabase and Cloudflare): Legal text (RGPD terms), needs legal review.
11. Responsabilité sentence: Legal text, needs legal review.
12. Base juridique et normative: Legal and standards basis.
13. Régime de cookies sentence ("Votre connexion est conservée ..."): Technical and legal.
14. Une page ... est comptée une fois pour chaque incident ...: Counting rule explanation; check meaning.
15. Moins d'une minute restante.: Word order of "Less than a minute left."

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

## Round 2 (source hash fa87591c, 2026-10-22)

Removed 98 orphan keys, added 224 keys, rechecked Dark ("Sombre") and Language ("Langue"), moved Crawl runs, Summary (to core) and Running (to findings) with values re-set to "Exécutions de crawl", "Résumé", "En cours" (bundle change, old values not kept). "Sign in" wording became "Log in" in the source; fr stays "Se connecter" / "Se déconnecter". Quoted button names use « Lancer le crawl ».

New risky keys:
- Legal text, needs legal review: the Supabase/Cloudflare processors paragraph ("Les comptes et les connexions sont gérés par Supabase ..."), the transit encryption paragraph ("Les rapports circulent ..."), and the "Votre connexion est conservée dans le stockage propre à votre navigateur ..." paragraph.
- "Untouched" = "Non touché" and "Not handled yet" = "Pas encore traité": two close states, wording unsure.
- "Headline" = "Titre principal", "Reach" = "Portée", "Confidence" = "Confiance": one-word labels with little context.
- "Hourly" / "Daily" are rendered as "Toutes les heures" / "Tous les jours".
- "Compared with crawl {previous}: new incidents {new}, fixed incidents {fixed}." is "{new} nouveaux incidents, {fixed} incidents corrigés"; the plural agreement depends on the values.
- "Connected to a channel in {team}." assumes {team} reads naturally after "de".
- "sus.bot home page" = "Accueil sus.bot" (logo link, leads to the project list).
- "add_domain answered offline for {host}" keeps the code name add_domain.
