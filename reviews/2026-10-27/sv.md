# Swedish (sv): review of 2026-10-27

25 strings corrected out of 1349 reviewed. Format: English | was | now | why.

- 'Every {n} days' | {"one": "Varje dag", "other": "Var {n}:e dag"} | {"one": "Varje dag", "other": "Med {n} dagars mellanrum"} | Swedish ordinals are 1:a, 2:a, 3:e, so 'Var 2:e dag' is wrong for 2, 21, 22, 31; wording without an ordinal is correct for every n
- 'Every {n} hours' | {"one": "Varje timme", "other": "Var {n}:e timme"} | {"one": "Varje timme", "other": "Med {n} timmars mellanrum"} | Same ordinal problem (2:a, 21:a, 22:a)
- 'Every {n} minutes' | {"one": "Varje minut", "other": "Var {n}:e minut"} | {"one": "Varje minut", "other": "Med {n} minuters mellanrum"} | Same ordinal problem (2:a, 21:a, 22:a, 31:a ...)
- 'Failing, medium severity' | Underkänt, medel allvarlighetsgrad | Underkänt, medelhög allvarlighetsgrad | 'medel allvarlighetsgrad' is ungrammatical; 'medelhög' pairs with 'hög' and 'låg'
- "You're not on the allow list" | Du finns inte på tillåtelselistan | Du finns inte på listan över tillåtna | 'tillåtelselistan' is not an established word
- 'Business' | Affärer | Verksamhet | 'Affärer' means deals or shops; 'verksamhet' is the usual word for the business side (also used in 'för verksamheten')
- 'Showing the Business view.' | Visar vyn Affärer. | Visar vyn Verksamhet. | Follows the label 'Business'
- 'Accepted' | Godkänd | Accepterad | 'Godkänd' collided with 'Godkänt' (Pass); matches 'Risk accepterad'
- 'False positive' | Falskt positiv | Falsklarm | 'Falskt positiv' is not grammatical as a label; 'falsklarm' is already used in the same product (decision text)
- 'Required for risk accepted and false positive. Up to 500 characters.' | Krävs för risk accepterad och falskt positiv. Högst 500 tecken. | Krävs för risk accepterad och falsklarm. Högst 500 tecken. | 'Falskt positiv' is not grammatical as a label; 'falsklarm' is already used in the same product (decision text)
- 'Say why. Risk accepted and false positive need a reason.' | Ange varför. Risk accepterad och falskt positiv kräver en orsak. | Ange varför. Risk accepterad och falsklarm kräver en orsak. | 'Falskt positiv' is not grammatical as a label; 'falsklarm' is already used in the same product (decision text)
- 'No page failed to load in this crawl.' | Ingen sida misslyckades med att laddas i den här genomsökningen. | Ingen sida misslyckades med att läsas in i den här genomsökningen. | 'laddas' is passive-s of the wrong verb; 'läsas in' is the term used elsewhere
- 'The host name could not be resolved.' | Värdnamnet kunde inte matchas till en adress. | Värdnamnet kunde inte slås upp. | 'matchas till en adress' is not the DNS term
- 'Finish setting up' | Slutför installationen | Slutför konfigurationen | 'installationen' means installing software; 'konfiguration' is used for setup elsewhere (din konfiguration)
- '{reason}. Reload the page to try again.' | {reason}. Läs in sidan igen för att försöka på nytt. | {reason}. Ladda om sidan för att försöka på nytt. | 'Ladda om' is used for reload in the other error strings; keeps one term
- '{reason}. Reload to try again.' | {reason}. Läs in igen för att försöka på nytt. | {reason}. Ladda om för att försöka på nytt. | 'Ladda om' is used for reload in the other error strings; keeps one term
- 'The screenshot of this page was removed after the time screenshots are kept.' | Skärmbilden av den här sidan har tagits bort när tiden för hur länge skärmbilder sparas gick ut. | Skärmbilden av den här sidan har tagits bort efter att lagringstiden för skärmbilder gått ut. | Awkward 'tiden för hur länge ... sparas'; plain 'lagringstiden' says the same
- 'The source is not available any more. It may have been removed after the time sources are kept.' | Källan finns inte kvar. Den kan ha tagits bort när tiden för hur länge källor sparas gick ut. | Källan finns inte kvar. Den kan ha tagits bort efter att lagringstiden för källor gått ut. | Awkward 'tiden för hur länge ... sparas'; plain 'lagringstiden' says the same
- 'The source of this page was removed after the time sources are kept.' | Källan för den här sidan har tagits bort när tiden för hur länge källor sparas gick ut. | Källan för den här sidan har tagits bort efter att lagringstiden för källor gått ut. | Awkward 'tiden för hur länge ... sparas'; plain 'lagringstiden' says the same
- 'This image is not available any more. It may have been removed after the time images are kept.' | Den här bilden finns inte kvar. Den kan ha tagits bort när tiden för hur länge bilder sparas gick ut. | Den här bilden finns inte kvar. Den kan ha tagits bort efter att lagringstiden för bilder gått ut. | Awkward 'tiden för hur länge ... sparas'; plain 'lagringstiden' says the same
- 'These terms are governed by the law of Luxembourg, and disputes go to the competent courts of Luxembourg. Ques' | Dessa villkor regleras av luxemburgsk lag, och tvister avgörs av behöriga domstolar i Luxemburg. Fråga oss först, dock:  | Dessa villkor regleras av luxemburgsk lag, och tvister avgörs av behöriga domstolar i Luxemburg. Fråga oss dock först: h | 'Fråga oss först, dock' is not natural word order
- 'This account already has 100 domains, which is the most one account holds.' | Det här kontot har redan 100 domäner, vilket är det mesta ett konto kan ha. | Det här kontot har redan 100 domäner, vilket är det högsta antalet ett konto kan ha. | 'det mesta' means 'most of it', not 'the maximum'
- 'This project already has 5,000 decisions, which is the most it keeps. Nothing was saved.' | Det här projektet har redan 5 000 beslut, vilket är det mesta som sparas. Inget sparades. | Det här projektet har redan 5 000 beslut, vilket är det högsta antalet som sparas. Inget sparades. | 'det mesta' means 'most of it', not 'the maximum'
- 'To the extent the law allows, Sitefig SARL-S is not liable for indirect or consequential loss arising from use' | I den utsträckning lagen tillåter är Sitefig SARL-S inte ansvarigt för indirekta skador eller följdskador som uppstår vi | I den utsträckning som lagen tillåter är Sitefig SARL-S inte ansvarigt för indirekta skador eller följdskador som uppstå | Relative clause needs 'som'
- 'There are no role texts for this yet. They are written for audits that have a failing or review item.' | Det finns inga rolltexter för det här ännu. De skrivs för granskningar som har ett underkänt eller granskningsbart objek | Det finns inga rolltexter för det här ännu. De skrivs för granskningar som har ett underkänt objekt eller ett objekt att | 'granskningsbart objekt' is not idiomatic; wording follows 'Underkända objekt och objekt att granska'

## Second pass: adopt WordPress and Mozilla wording (2026-10-27)

25 labels differed from the references for the identical English: 9 adopted, 16 kept with a reason (a: different sense, b: register, c: consistency with the file, d: grammar or gender).

- 'Dark' | Mörkt | Mörkt | kept: (d) neuter form fits the label
- 'Disconnect' | Koppla från | Koppla från | kept: (c) Disconnect Slack uses Koppla fran
- 'Email sent' | E-post skickad | E-post skickad | kept: (b) same vocabulary, reference is a full sentence
- 'Group by' | Gruppera efter | Gruppera efter | kept: (d) reference grupper is a noun form
- 'Items' | Objekt | Objekt | kept: (a) reference means articles
- 'Loading…' | Läser in… | Läser in… | kept: (c) Loading your tracker also uses Laser in
- 'None' | Inga | Ingen | adopted moz/mw/wp
- 'Result' | Resultat | Resultat | kept: (a) reference is unrelated sense
- 'Send reset link' | Skicka återställningslänk | Skicka återställningslänk | kept: (c) file says aterstallningslank
- 'Skip to main content' | Hoppa till huvudinnehållet | Hoppa till huvudinnehåll | adopted wp-admin
- 'Terms' | Villkor | Villkor | kept: (a) reference means terms as words
- 'Type the new password again.' | Skriv det nya lösenordet igen. | Skriv det nya lösenordet igen. | kept: (d) reference drops the article
- 'Updated' | Uppdaterad | Uppdaterat | adopted wp-admin
- 'Wrap long lines' | Bryt långa rader | Radbryt långa rader | adopted moz vocabulary (radbryt)
- 'legal' | juridik | juridik | kept: (a) moz leaves the English word
- 'none' | inga | ingen | adopted moz/mw/wp
- 'strong' | stark | starkt | adopted wp-core, neuter agrees with losenord
- 'weak' | svag | svagt | adopted wp-core, neuter agrees with losenord
- 'Check' | Kontroll | Kontroll | kept: (a) reference is tick
- 'Citation' | Källhänvisning | Källhänvisning | kept: (a) reference is a different sense
- 'Desktop' | Dator | Stationär dator | adopted wp-core
- 'Failed' | Misslyckades | Misslyckades | kept: (d) status chip, neuter form unknown subject
- 'Fixed' | Åtgärdad | Åtgärdad | kept: (a) reference means pinned
- 'Medium' | Medel | Medel | kept: (a) reference is the image-size sense
- 'Show more' | Visa fler | Visa mer | adopted wp-core
