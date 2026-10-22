# Swedish (sv) notes

Unreviewed machine draft. No native reviewer has checked it.

## Formality

"du" throughout, the norm in Swedish business software. Imperatives for buttons, infinitive-free labels.

## Terms I was unsure about

- Crawl: "genomsökning" (verb "genomsök"). "Crawl" is also common in Swedish SEO circles.
- Incident kept as "incident" (usual in Swedish IT); "Finding" is "fynd".
- "Accepted" is "Godkänd" per glossary, which sits close to "Godkänt" (Pass). "Accepterad" would separate them better.
- "Evidence" is "underlag" (glossary), "evidence rows" "underlagsrader".
- "Ticket" is "ärende", tracker "ärendesystem".
- "Free" is "Gratis"; "Pro" kept. "Plan" is "abonnemang".
- "Business | IT" lens: "Affärer" for Business is stiff; "Verksamhet" may read better.
- "Controller" (privacy) is "personuppgiftsansvarig"; "processors" "personuppgiftsbiträden".
- "Case" (standards context) is "Fall"; may need "Rättsfall".
- "Day 1 · Starter", "Month 3+ · Expert" stage names are translated ("Nybörjare", "Expert").

## 15 riskiest keys

1. "Alerts are part of monitoring, a paid feature. ..." (long, mixes "Disallow: /")
2. "To the extent the law allows, Sitefig SARL-S is not liable ..." (legal)
3. "Accounts and sign-ins are handled by Supabase. ..." (legal, GDPR terms)
4. "For anything else, write to us at https://sus.bot/contact/ ..." (CNPD)
5. "Analytics, if you agree to it, is provided by Google ..." (legal)
6. "These terms are governed by the law of Luxembourg ..." (legal)
7. "Failing" / "Underkänt" vs "To review" / "Att granska" (status vocabulary)
8. "{n} pages: {fail} failing, {review} to review" (grammar with counts)
9. "{n} dismissed by decisions, still counted in the totals above" (number agreement)
10. "Accepted" / "Risk accepted" / "False positive" decision labels
11. "A page with more than one incident is counted once for each incident ..."
12. "Written from the check name; no specific guidance yet. This affects {fields}."
13. "Showing results from {loaded} of {total} incidents. Keep typing to narrow."
14. "The host name could not be resolved." (DNS wording)
15. "You're not on the allow list"

## English source ambiguities

- "Fixed to review" / "Fixed failing" (core 202, 204) read as status pairs; translated as "Åtgärdade underkända" / "Åtgärdade att granska".
- "Basis" (legal basis vs general basis) translated "Grund".
- "Kind", "State", "Tool", "Property" have no context; translated as "Typ", "Tillstånd", "Verktyg", "Egenskap" (Search Console property).
- "Fail" as result is "Underkänt" but "Failed" (a run) is "Misslyckades".
- "Case" has no context.

## Update 2026-10-22 (source hash fa87591c)

224 keys added, 98 removed (orphans deleted), 3 keys moved between bundles with their translations kept (Running, Crawl runs, Summary). Dark, Language, Menu, Search, password and show were re-read against their new notes and kept.

New risky keys: "Accounts and logins are handled by Supabase..." (privacy, legal, needs legal review), "Reports travel between our servers and your browser over an encrypted connection..." (privacy), "Your email address and password, so you can log in..." and "Your login is kept in your browser's own storage..." (privacy, legal review), "Deletes your account, profile, plan, purchases and dashboards right away..." (account deletion), "Written from the check name; no specific guidance yet. The parts written this way: {fields}.", "Rules that could not be decided: {undecided}. Rules that do not apply to this site: {notApplicable}...", "Saved. Schedule for {domain}: {period}. The first crawl starts one period from now...".
Not translated on purpose: the identifier add_domain and the DNS name _sus-bot.{domain}.
Nothing in this update is reviewed. Legal paragraphs need legal review.

- "Audit: {name}" is "Granskning: {name}" to match the existing "Audit" = "Granskning". Elsewhere "audit" may read as "revision" to a Swedish accountant.
- "Confidence" is "Konfidens"; "Säkerhet" is ambiguous.
- "Reach" is "Omfattning"; the meaning is a guess from the usage.
- "Every {n} days" is "Var {n}:e dag"; the one form is "Varje dag".
- "Log out" in the extension text uses the same word as the "Log out" key ("Logga ut").
- "Text language / findings language" sentence is written as two labels so the language name needs no inflection.
- "{length} things to fix." is "Saker att åtgärda: {length}." (not a plural key).
