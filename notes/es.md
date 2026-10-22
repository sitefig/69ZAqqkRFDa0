# Notes for es

Machine draft. Not reviewed by a native speaker. Entries: core 681, findings 232 (all 913 keys, 16 plural keys).

## Formality and style

Formal "usted" and "su". Button labels use the infinitive ("Eliminar la cuenta"), as is normal in Spanish software. Opening question marks and exclamation marks are included. Quotes use curly double quotes.

## Terms I was unsure about

- Incidencia for "incident"; Auditoría for "audit"; Hallazgo for "finding"; Evidencia for "evidence"; Gravedad for "severity" (Alta / Media / Baja).
- Rastreo / rastrear for crawl ("Rastrear ahora"); "Ejecuciones de rastreo" for crawl runs.
- "Fallo" for the Fail result, "Fallido" for failed, "con fallos" for failing, "Por revisar" for review.
- "Plan" for plan; "Gratuito" for the Free plan.
- "Informe" for report, "Equipo" for team, "Monitorización" for monitoring, "Programación" for schedule, "Titularidad" for ownership.
- "TI" for IT (tecnologías de la información), the usual short form in Spanish business text.
- "Ticket" and "gestor de tickets" for ticket tracker.

## Fifteen riskiest strings for the native reviewer

1. TI: Abbreviation for IT; some readers expect "IT". Appears in many strings.
2. Fallo / Fallido: Fail vs failed.
3. Correcto: "Pass" result.
4. En buen estado: "Healthy".
5. Sin problemas: "Clean" in an audit table.
6. No se pudo decidir: "Could not be decided" (engine state).
7. A su manera: "Run it your way".
8. Los datos cobran vida: "The data lights up".
9. Especialista en marketing: "Marketeer" role.
10. Titularidad: "Ownership" of a domain; "Propiedad" is used for "Property" in Search Console.
11. Encargados del tratamiento sentence (Supabase and Cloudflare): Legal text (RGPD terms), needs legal review.
12. Responsabilidad sentence: Legal text, needs legal review.
13. Marco de Privacidad de Datos UE-EE. UU.: Official name of the data transfer framework.
14. Queda aproximadamente {n} hora.: Plural forms with "de" for the many category.
15. Cita: "Citation" in the standards table; could be "Referencia legal".

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

Machine draft, not reviewed. Removed 101 orphan keys, added 227 (core 767, findings 272). Dark, Language, Menu, Search, password and show kept: the new notes match the existing wording.

New risky or doubtful items:

- Legal text, needs legal review: "Accounts and logins are handled by Supabase ..." (encargados del tratamiento, contrato de encargo de tratamiento), "Reports travel between our servers and your browser ...", "Your login is kept in your browser's own storage ...", "Download a copy of everything in your account ...", "Login records: ...".
- "Log in" and "Sign in" now both read "Iniciar sesión", "Log out" reads "Cerrar sesión", as before.
- "Check" (findings label) is "Comprobación"; "Failing" "Con fallos"; "Running" "En ejecución"; "Hourly" "Cada hora" (same text as the one form of "Every {n} hours").
- "Reach" as "Alcance" and "Confidence" as "Confianza" have no context beyond the source file.
- "Untouched" as "Sin tocar", "Still open" as "Aún abiertas" (gender assumes incidencias), "Not handled yet" as "Aún sin tratar".
- "Slack and email alerts for it are paused with it": "ella" refers to the schedule; check the real frame.
- "Active." and "Active, renews on {date}." use masculine "Activo" (plan subscription); may need "Activa" depending on the noun.
- "Use at least {mINPASSWORD} characters" keeps the odd placeholder name from the source; the source likely has a bug there.
- Plural "many" forms use "{n} de ..." as in the first round.
