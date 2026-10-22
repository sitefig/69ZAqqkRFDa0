# Polish (pl) translation notes

Machine draft of 681 core and 232 findings entries. No native speaker has read it.

## Uncertain terms and choices

- "crawl" (noun) is skanowanie and "Crawl now" is Skanuj teraz, as in the glossary. "Crawl runs" and "Runs" became Uruchomienia skanowania and Uruchomienia.
- "Running" (a state) is Działa, to stay apart from W toku ("In progress").
- "Review" and "To review" are both Do przeglądu. "Overview" is Przegląd, so the two sit close in the nav.
- "Property" (Search Console) is usługa, which is the term in the Polish Search Console. "Choose the property" is Wybierz usługę.
- "Citation" in the standards table is Przywołanie. Odniesienie ("References") and Przywołanie may look alike to a reader.
- "Terms" is Warunki and "Terms & Conditions" is Warunki korzystania, not Regulamin.
- "Case" (words.json) is Przypadek.
- "Healthy" is W dobrym stanie. "Worth a look" is Warto rzucić okiem.
- "The data lights up" is Dane ożywają, a free rendering of an experience page heading.
- "Marketeer" is Marketer.
- Plural entries with an awkward Polish noun use a colon form with the value last, for example Niezaliczone: {n}. All four categories then hold the same text. Only "{n} pages", "{n} projects" and "{n} results" decline (strona, strony, stron, strony; the other category follows the genitive singular, as in I18N.md section 9.4).
- "About {n} hours left" and "About {n} minutes left" use abbreviations (godz., min) in all four categories to avoid declension.
- "5,000" is written 5 000 with a no-break space.

## Formality decisions

Second person singular informal. "Your" is Twój, Twoja or Twoje, lower case mid-sentence. No Pan or Pani. Buttons use the imperative (Zapisz, Zaloguj się) and short labels use nouns. Sentences that would need the user's gender (zalogowany or zalogowana, mógłbyś) were rephrased with impersonal forms such as "Nastąpiło wylogowanie" and "aby można było się zalogować". Quotes where English has quotes use „ ”. In "Decision undone" the inner quotes were dropped to avoid nested quotes.

## Riskiest keys

1. "Two of those you can exercise yourself, at once: ..." (privacy rights): refers to two of the rights listed earlier; rendered as "Dwa z tych praw".
2. "To the extent the law allows, Sitefig SARL-S is not liable ..." (liability): legal wording, needs a lawyer's read.
3. "These terms are governed by the law of Luxembourg ...": "competent courts" is rendered as właściwe sądy.
4. "For anything else, write to us ... (CNPD)": the authority name is kept in French.
5. "Accounts and sign-ins are handled by Supabase ...": processors and data processing agreement are rendered as podmioty przetwarzające and umowa powierzenia przetwarzania danych.
6. "Analytics, if you agree to it, ... EU-US Data Privacy Framework": the Polish official name is Ramy Ochrony Danych UE-USA.
7. "We keep your email address, your plan, and the reports ...": consent and ad statements in the short privacy summary.
8. "Controller: Sitefig SARL-S" and the two "version 1.0 ..." lines: controller is administrator, "operated by" is prowadzi.
9. "A report describes what a file says, not what a crawler does ...": mixes robots.txt as request versus access control.
10. "Alerts are part of monitoring ... Disallow: /": the menu path "Settings, Schedule and monitoring" uses the translated page names.
11. "Crawl {crawl}: {n} pages crawled, {results} with results.": {results} is a number, so the sentence became "przeskanowane strony: {n}, z wynikami: {results}".
12. "None of the {loaded} loaded match.": rewritten as "Brak dopasowań wśród wczytanych: {loaded}."
13. "{event} {n} URLs.": {event} is a words.json value, so it is followed by a colon.
14. "Written from the check name; no specific guidance yet. This affects {fields}.": the value list is placed after a colon.
15. "Not connected yet: sending decisions to the rule engine ...": "rule engine" is silnik reguł, used in several strings.

## Ambiguities in the English source

- "back by" has no object. It looks like a time on the maintenance page; rendered as "wróci do".
- "home" (lower case) could be a nav label or a breadcrumb; rendered as "start".
- "Their email address" does not say whose; rendered as "Adres e-mail tej osoby".
- "Continue with" is followed by a provider name added by the app; rendered as "Kontynuuj przez".
- "Running" and "Done" have no context beyond words.json; they could be states of a crawl or of a step.
- "Review" as a lone word could be a verb (button) or a status; rendered as the status Do przeglądu.
- "Case" has no context in words.json.

## Count of uncertain items

About 34 items: the 15 riskiest keys above plus the term choices and ambiguities.
