# Hungarian (hu) draft notes

Status: unreviewed machine draft. No native speaker has read it. Files: `src/hu/core.json` (681 entries) and `src/hu/findings.json` (232 entries), flat key to string objects, plural entries with the categories one and other.

## Formality

Formal address (önözés). Imperatives use the polite third-person form ("Adja meg", "Nyomja meg"), possessives are used only where the sentence needs them ("Az Ön fiókja"). Buttons and short labels use nouns ("Mentés", "Törlés").

## Placeholders

No placeholder carries a suffix. Sentences were reshaped so the placeholder stands after a colon or as its own word ("Vissza ide: {project}", "Bejárás {crawl}:", "Nyelv: {name}"). Numbers before nouns use the singular, so the `one` and `other` forms often read the same. Crawl references use "Bejárás: {crawl}" and similar, because the type of the value ({crawl} may be a number or a date) is not known.

## Terms I was unsure about

- "Domain" is kept as a loanword; "tartomány" would sound odd in this context.
- "Property" (Search Console) is "tulajdon", the term used in the Hungarian Search Console interface; check against the live UI.
- "Incident" is "incidens"; "esemény" is already used for "Events" (log events).
- "Finding" is "megállapítás"; "Audit" kept as "audit".
- "Dismissed" is "Elvetve", "False positive" is "Téves pozitív", "Risk accepted" is "Vállalt kockázat" ("elfogadott kockázat" is the alternative).
- "Review" and "To review" are "Áttekintendő". Reviewers may prefer "Felülvizsgálandó".
- "Fail" as a result is "Sikertelen"; "Failed" (a crawl step) is "Meghiúsult"; "Pass" is "Megfelelt".
- "Clean" is "Hibamentes".
- "Crawl" is "bejárás"; "crawler" is "bejáró". "Crawl now" is "Bejárás indítása". Many sentences repeat this label, so a change must be made everywhere.
- "Magic link" is "varázshivatkozás".
- "Ticket tracker" is "hibakövető"; "ticket" is "jegy".
- Role names in reports: "Marketinges" for Marketeer, "Technológiai igazgató" for CTO, "Marketingigazgató" for CMO, "Vezérigazgató" for CEO. The English source uses the abbreviations; Hungarian companies often keep CEO, CTO and CMO as they are.
- "AI" is "MI" (mesterséges intelligencia). Some Hungarian business text uses "AI".
- Legal sections (terms, privacy) are drafted in plain wording; a lawyer should check them, especially "Adatkezelő", "jogos érdek" and the liability paragraph.
- Example addresses were partly localised ("kollega@example.com", "on@cegneve.hu"); keep or revert as the product team prefers.

## Fifteen riskiest keys

1. "To the extent the law allows, Sitefig SARL-S is not liable ..." (legal liability wording)
2. "These terms are governed by the law of Luxembourg ..."
3. "Accounts and sign-ins are handled by Supabase ..." (processor wording)
4. "Analytics, if you agree to it, is provided by Google ..." (transfer wording)
5. "Our legitimate interest in keeping the service available and preventing abuse."
6. "To perform our contract with you: ..."
7. "For anything else, write to us at https://sus.bot/contact/ ..." (supervisory authority)
8. "Failing, low or info" and the other severity labels (word order with the Info level)
9. "Fixed failing", "Fixed to review", "New failing", "New to review" (elliptic English labels)
10. "{n} {severity}" (the severity word comes from the words list and is not inflected)
11. "{event} {phase}." and "{event} {reason}." (the parts come from code; the colon form is a guess)
12. "Property" and "Choose the property" (Search Console term)
13. "Directive", "Regulation", "Guideline", "Law" (legal category words in the standards list)
14. "Show it is yours" and "Verify ownership" (domain proof flow)
15. "Required for risk accepted and false positive." (quotes status words that must match their own translations)

## Source ambiguities

- "Fixed failing", "New failing" and similar labels have no verb or noun; I read them as "fixed incidents that were failing".
- "Items" and "Kind" appear without context; I used "Elemek" and "Típus".
- "Done" (a word) versus "Done:" (a label) share meaning but are separate keys.
- "State" and "Status" are separate keys; I used "Állapot" and "Státusz".
- "Sign in" and "Log in" both map to "Bejelentkezés" because Hungarian has no clear difference.
- "View for" ends in a role name chosen from a list; the Hungarian "Nézet:" takes it after a colon.
- Plural keys such as "{n} failing" have identical English one and other forms, so the Hungarian forms are identical too.
