# Czech (cs) machine draft notes

This is a machine draft. No native reviewer has read it.

## Terms I was unsure about

- State and Status (two keys) are both "Stav". The English "State" has no context in the source list.
- Property (Search Console, "Choose the property", "Property"): "Prostředek", the term used in the Czech Search Console.
- Run / Runs: "Běh", "Běhy" (crawl runs). "Crawl" is "procházení" per glossary; "crawler" in the terms text is kept as "crawler".
- Terms & Conditions: "Smluvní podmínky"; Terms: "Podmínky"; Privacy Policy: "Zásady ochrany osobních údajů".
- Clean and Healthy: both "V pořádku". Czech has no short word that separates them.
- Business (persona label): "Byznys".
- Case (words.json): "Případ", assumed to mean a real-world legal case.
- Regulation: "Nařízení", Guideline: "Doporučení", Law: "Zákon", Jurisdiction: "Jurisdikce".
- References (findings.ts) is "Reference", not "Odkazy", to avoid a clash with link ("odkaz").
- Engine / rule engine: "engin pravidel" (loanword), short "engin".
- Invited: "Pozván" (masculine singular label).
- Phase words in words.json use the reflexive present: "Analyzuje se", "Sestavuje se seznam URL", "Spouštějí se pravidla".

## Formality

Formal "vy" (vykání) throughout, imperatives in the plural-polite form ("Zvolte", "Přidejte"). Buttons use the infinitive ("Uložit", "Smazat účet"), as in common Czech business software. Quotes are Czech low-high ones („ “) where the English has quotes.

## Riskiest keys for a native reviewer

1. "To the extent the law allows, Sitefig SARL-S is not liable for indirect or consequential loss..." (legal liability wording).
2. "These terms are governed by the law of Luxembourg, and disputes go to the competent courts of Luxembourg..." (legal).
3. "For anything else, write to us at https://sus.bot/contact/ ... Commission nationale pour la protection des données (CNPD)." (legal, authority name kept).
4. "Our legitimate interest in keeping the service available and preventing abuse." (GDPR basis wording).
5. "Access, correction, deletion, portability, objection, and withdrawal of consent." (GDPR rights terminology).
6. "A new version is posted here ... Using the service after that date accepts the new version." (legal acceptance wording).
7. "A report describes what a file says, not what a crawler does..." (key terms "report", "crawler" kept).
8. "Crawl {crawl}: {n} pages crawled, {results} with results." (plural with colon phrasing to avoid agreement on {results}).
9. "{n} dismissed by decisions, still counted in the totals above" (all four plural forms are identical because I used "Zamítnuto rozhodnutími: {n}").
10. "{shown} of the {loaded} loaded match. {total} in all." (word order changed to "Odpovídá {shown} z {loaded} načtených").
11. "the cause", "the headline", "the references", "the steps", "the summary" (lowercase fragments with unknown sentence frame; case may be wrong).
12. "back by", "started", "requested", "untouched", "shortly", "just now" (maintenance and 403 fragments; I guessed they are labels before a value).
13. "Fixed failing" / "Fixed to review" / "New failing" / "New to review" (short compound labels; "Opravené neprošlé" is terse).
14. "Choose the property" (Search Console term "Prostředek" versus "Vlastnost").
15. "Written from the check name; no specific guidance yet. This affects {fields}." (the placeholder is a list, so I put it after a colon).

## Ambiguities in the English source

- "Fix" / "Fixed" / "Fixed failing": noun, adjective and status share forms; Czech needs gender and number.
- "Check" is both a noun (kontrola) and used as "How to check: {check}", where the value is a check name.
- "Open" appears as a status ("Otevřený"), a verb ("Open a project first") and in "Open an incident or an opportunity". Czech needs different forms.
- "Review" as status ("K posouzení") versus the verb in "Required for ...".
- "State" and "Status" cannot be told apart; see above.
- Lowercase fragments in the maintenance page and findings.ts ("the cause", "back by") have no visible sentence frame, so grammatical case is guessed (nominative).
- "Crawl now" is both a button ("Procházet teď", glossary) and a noun phrase in sentences like "Press Crawl now"; I kept the same text in both places, which is correct in nominative only.
- "Items" is used for incidents and audits; I used "Položky".

## Uncertain items

About 25 keys, listed above under the riskiest keys and the ambiguities.
