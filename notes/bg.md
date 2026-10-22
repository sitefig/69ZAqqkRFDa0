# Bulgarian (bg) machine draft notes

Machine draft, not reviewed by a native speaker. 681 core and 232 findings entries.

## Terms I was unsure about

- "Engine" in "rule engine" and "Engine decision": "механизъм за правила" (Решение на механизма за правила).
- "Alerts" (nav) is "Сигнали" per the glossary; "Alerting" (settings page title) is "Известия" to keep the two apart.
- "Property" (Search Console property) is "имот". A reviewer may prefer "ресурс" or "свойство".
- "Controller" (GDPR) is "администратор на данните"; "processors" is "обработващи данни".
- "Case" in words.json is "Случай". The meaning is not clear from the key.
- "Starter" and "Growing" and "Expert" stage names are translated (Начален, Растеж, Експерт); "Pro" and "Free" follow the glossary (Pro, Безплатен); "Business" is "Бизнес".
- "Crawl run" is "изпълнение на обхождане", "Runs" is "Изпълнения".
- "Deny" is "Откажи" and "Cancel" is "Отказ", so the two buttons differ.
- "Healthy" is "В добро състояние".
- Lowercase labels (for example "rule applied", "requested", "back by") are lowercase in bg too.

## Formality

Formal "Вие" with capital "В" for the second person (Вашият, Ви), as is usual in Bulgarian business software. Buttons use the plural polite imperative ("Създайте акаунт"), except short action labels that name an action ("Запази", "Изтегли моите данни", "Изтрий акаунта ми"), which use the singular imperative common on Bulgarian buttons. These two styles are mixed on purpose; a reviewer may want one.

## Riskiest keys for a native reviewer

1. "To the extent the law allows, Sitefig SARL-S is not liable ..." (liability clause, legal text).
2. "These terms are governed by the law of Luxembourg, and disputes go to the competent courts of Luxembourg. Questions first, though: ..." (legal text and a light tone).
3. "For anything else, write to us at https://sus.bot/contact/ ... Commission nationale pour la protection des données (CNPD)." (authority name kept in French; no Bulgarian rendering used).
4. "Accounts and sign-ins are handled by Supabase. ..." (processor wording under GDPR).
5. "Analytics, if you agree to it, is provided by Google ... EU-US Data Privacy Framework." (framework name translated, official Bulgarian name not checked).
6. "The service is provided as it stands. ..." (disclaimer, "в наличния ѝ вид").
7. "Engine decision: {decision} ({by})." (placeholders with unknown grammar; "{by}" may be a name or a word).
8. "{event} {n} URLs." (the English glues an unknown event word to the count; I added a colon).
9. "{event} {phase}." and "{event} {reason}." (same problem).
10. "Showing results from {loaded} of {total} incidents. Keep typing to narrow." (plural noun after a placeholder number; wrong for a total of 1).
11. "None of the {loaded} loaded match." (number then "заредени" with no noun).
12. "Case" (one word, unknown sense).
13. "Property" ("Choose the property"; Search Console term).
14. "Two of those you can exercise yourself, at once: \"Download my data\" ..." (quotes the two button labels; they must stay equal to the button translations).
15. "Your sign-in is kept in your browser's own storage. ... \"Remember me\" ..." (same: quoted label must equal the checkbox label).

## Ambiguities in the English source

- "Crawl now needs JavaScript. You can also press it on the Overview page." Here "it" is the button; the sentence is built around a button label used as a noun.
- "It cannot change anything in your account" (AI tool) versus "It carries what was found" and "It says in plain words" (no clear subject). I dropped the subject in bg for the last two.
- "Done" and "Done:" are used for both a status and a step label.
- "Failing" is both a status word ("Failed", "Fail", "failing") with several keys; bg uses "Неуспешно" for the result values and "неуспешни" for the adjective.
- "Review" and "To review" are separate keys, both rendered "За преглед".
- Placeholders that take an unknown word: {event}, {phase}, {by}, {status}, {reason}, {severity}. Gender and case in bg depend on them, so I put them after a colon where I could.
- Singular plural forms: some plural keys ("{n} failing", "{n} to review") have identical English one and other forms; bg differs in gender or number for them.

## Uncertain items

About 25: the 15 above plus the glossary-gap choices (account, name, new, password, standard, jurisdiction, law, regulation, history, invitation, open, to review, severity words in glossary were taken from the filled cells; the empty cells were chosen here: акаунт, име, нов, парола, стандарт, юрисдикция, закон, регламент, история, покана, отворен, за преглед).
