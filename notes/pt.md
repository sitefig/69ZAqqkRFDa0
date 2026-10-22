# Notes for pt

Machine draft. Not reviewed by a native speaker. Entries: core 767, findings 272 (all 1039 keys). Updated 2026-10-22 to source hash fa87591c: 224 keys added, 98 orphans removed, 3 keys moved bundle.

## Formality and style

European Portuguese (pt-PT) spelling and vocabulary: "palavra-passe", "iniciar sessão", "ficheiro", "ecrã", "equipa", "ligação", "rastreio", "transferir". Formal address through the third-person imperative ("Introduza", "Clique") and "o seu/a sua"; "você" is avoided. If Brazilian Portuguese is wanted, this file set needs a separate pass. Quotes use « ».

## Terms I was unsure about

- Incidente, Auditoria, Constatação for "finding" (Achado is more informal), Evidência, Gravidade (Alta / Média / Baixa).
- "Rastreio / Rastrear agora" for crawl; "Execuções de rastreio" for crawl runs.
- "Falha" for the Fail result, "Falhou" for failed, "com falhas" for failing, "Por rever" for review.
- "Plano" for plan; "Gratuito" for the Free plan; "Aceite" (not "Aceito") for accepted in pt-PT.
- "Faturação", "Monitorização", "Agendamento" for schedule, "Equipa", "Função" for role.
- "TI" for IT (tecnologias de informação).
- "Gestor de tickets" for ticket tracker.

## Fifteen riskiest strings for the native reviewer

1. Pt-PT vs pt-BR: Whole file set is European Portuguese.
2. Você / O próprio: "You" in the decisions table is rendered "O próprio" to avoid "você"; a reviewer may prefer another word.
3. Bem-vindo de volta: Masculine default for "Welcome back".
4. Falha / Falhou: Fail vs failed.
5. Aprovado: "Pass" result.
6. Sem problemas: "Clean" in an audit table.
7. Não foi possível decidir: "Could not be decided" (engine state).
8. À sua maneira: "Run it your way".
9. Os dados ganham vida: "The data lights up".
10. Profissional de marketing: "Marketeer" role.
11. Subcontratantes sentence (Supabase and Cloudflare): Legal text (RGPD terms), needs legal review.
12. Responsabilidade sentence: Legal text, needs legal review.
13. Será encaminhado para a Google: Formal future tense used instead of "Vai".
14. Falta cerca de {n} hora.: Plural forms with "de" for the many category.
15. Constatação: "Finding" noun used in 30 or more strings; check it reads naturally.

## Added in the 2026-10-22 update

- Fixed phrasing "Rastrear agora" is now quoted as «Rastrear agora» where the source quotes "Crawl now".
- Log in / Log out wording: "Iniciar sessão" and "Terminar sessão" (also "Terminar sessão em todo o lado"); the old Sign in/out keys are removed.
- "Todas as horas / Todos os minutos / A cada {n} dias": the "one" form omits {n}; check it reads as a schedule label.
- "Send to IT" is "Enviar para a TI"; "TI" with article may need review.
- "Confiança" for Confidence, "Alcance" for Reach, "Destaque" for Headline, "Sem alterações" for Untouched: single words with little context.
- "O motor guarda no máximo 2000 linhas por constatação": "motor" for engine here, but "Engine" may be kept elsewhere; check consistency.
- Legal text, needs legal review: the Supabase/Cloudflare "subcontratantes" sentence, the login-records retention sentences, the account-deletion and data-export sentences, "Os relatórios circulam ... ligação cifrada".
- Dark ("Escuro"), Language ("Idioma"), Menu, Search ("Pesquisar"), show ("mostrar") and password ("palavra-passe") were re-checked against their new notes and left unchanged.

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
