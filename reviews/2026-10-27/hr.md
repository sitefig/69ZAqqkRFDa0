# Croatian (hr): review of 2026-10-27

24 strings corrected out of 1349 reviewed. Format: English | was | now | why.

- 'Screenshot of {url}, {device}, crawled {date}.' | Snimka zaslona od {url}, {device}, skenirano {date}. | Snimka zaslona stranice {url}, {device}, skenirano {date}. | "od" is a calque of English "of"; genitive of the page is natural.
- "That address can't be used" | Ta adresa se ne može koristiti | Ta se adresa ne može koristiti | Clitic "se" goes in second position; matches the sibling string.
- 'This link cannot be used.' | Ova poveznica se ne može koristiti. | Ova se poveznica ne može koristiti. | Clitic order; now identical in form to the string without the full stop.
- 'An AI tool' | AI alat | UI alat | Glossary renders AI as UI; "Connect an AI tool" already uses "UI alat".
- 'Choose the property' | Odaberite svojstvo | Odaberite resurs | Search Console property is "resurs" in Google's Croatian Search Console; "svojstvo" means attribute.
- 'Search Console property' | Svojstvo (Search Console) | Resurs (Search Console) | Same term as above; "resurs" is Google's Croatian term for a property.
- 'Cookie banner' | Natpis o kolačićima | Obavijest o kolačićima | "Natpis" means inscription; "obavijest" is the usual Croatian cookie notice (WP uses obavijest for notice).
- 'Citation' | Citat | Navod | Legal citation; WP core uses "navod" for citation ("citat" means a quote).
- 'Search name or citation' | Traži po nazivu ili citatu | Traži po nazivu ili navodu | Follows the Citation term.
- 'No page failed to load in this crawl.' | Nijedna stranica nije se učitala s pogreškom u ovom skeniranju. | Nijedna se stranica u ovom skeniranju nije uspjela učitati. | Clitic order and unnatural "učitala s pogreškom".
- 'This incident stored no evidence rows.' | Ovaj incident nije spremio redove s dokazima. | Ovaj incident nije spremio nijedan redak dokaza. | Matches "Retci dokaza" used elsewhere; "redove s dokazima" was inconsistent.
- 'Monitoring (optional)' | Praćenje (neobavezno) | Praćenje (neobvezno) | Same spelling as the other "(neobvezno)" strings.
- 'Required for risk accepted and false positive. Up to 500 characters.' | Obavezno za Rizik prihvaćen i Lažno pozitivno. Do 500 znakova. | Obvezno za Rizik prihvaćen i Lažno pozitivno. Do 500 znakova. | "Obvezno" matches "obvezna/neobvezno" used elsewhere in the app.
- 'Email opens your own email app. If nothing happens, copy the message instead.' | Poveznica otvara vašu aplikaciju za e-poštu. Ako se ništa ne dogodi, umjesto toga kopirajte poruku. | Slanje e-poštom otvara vašu aplikaciju za e-poštu. Ako se ništa ne dogodi, umjesto toga kopirajte poruku. | "Poveznica" was added; the English names the Email button.
- 'Invitation revoked. That address cannot join with it now.' | Pozivnica je opozvana. S tom adresom se više nije moguće pridružiti. | Pozivnica je opozvana. Ta se adresa njome više ne može pridružiti. | Clitic order; "with it" is the invitation, not the address.
- 'Slack and email alerts for it are paused with it and nothing was deleted. Upgrade and it resumes where it left' | Slack i e-mail upozorenja za njega pauzirani su zajedno s njim i ništa nije obrisano. Nadogradite paket i nastavit će se | Upozorenja putem Slacka i e-pošte za njega pauzirana su zajedno s njim i ništa nije obrisano. Nadogradite paket i nastav | "e-mail" is not used elsewhere; the app says e-pošta.
- 'The crawl reads your site once. It does not repeat by itself.' | Skeniranje čita vaše web-mjesto jednom. Ne ponavlja se samo. | Skeniranje čita vaše web-mjesto jednom. Ne ponavlja se samo od sebe. | "Samo se ne ponavlja" is ambiguous ("only").
- 'The crawl reads {domain} once. It does not repeat by itself.' | Skeniranje jednom čita {domain}. Samo se ne ponavlja. | Skeniranje jednom čita {domain}. Ne ponavlja se samo od sebe. | Same fix as the sibling string.
- 'The crawl tried to take a screenshot of this page and could not. The findings and the source are not affected.' | Skeniranje je pokušalo snimiti ovu stranicu i nije uspjelo. Nalazi i izvor nisu zahvaćeni. | Skeniranje je pokušalo snimiti zaslon ove stranice i nije uspjelo. Nalazi i izvor nisu zahvaćeni. | "Snimiti stranicu" is imprecise; a screenshot is "snimka zaslona".
- 'The database gave an answer we do not know. Nothing was saved.' | Baza podataka dala je odgovor koji ne poznajemo. Ništa nije spremljeno. | Baza podataka vratila je odgovor koji ne prepoznajemo. Ništa nije spremljeno. | Same wording as the sibling "Nothing was requested" string.
- 'This crawl is not available. The latest crawl is one link away.' | Ovo skeniranje nije dostupno. Najnovije skeniranje udaljeno je jednu poveznicu. | Ovo skeniranje nije dostupno. Najnovije skeniranje je jedan klik dalje. | "Udaljeno jednu poveznicu" is a calque.
- 'Validating your link with the login service. This takes a second.' | Provjera vaše poveznice u servisu za prijavu. Traje sekundu. | Provjera vaše poveznice u usluzi za prijavu. Traje sekundu. | "Servis" replaced by "usluga", the term used for service elsewhere.
- 'You need an account to see anything here. Keep your password to yourself: anyone who has it can read everythin' | Za sve što je ovdje potreban vam je račun. Lozinku čuvajte za sebe: tko je ima, može pročitati sve što može i vaš račun  | Da biste ovdje bilo što vidjeli, potreban vam je račun. Lozinku čuvajte za sebe: tko je ima, može pročitati sve što može | Original word order was awkward and ambiguous.
- 'There are no role texts for this yet. They are written for audits that have a failing or review item.' | Za ovo još nema tekstova po ulogama. Pišu se za audite koji imaju neuspjelu ili stavku za pregled. | Za ovo još nema tekstova po ulogama. Pišu se za audite koji imaju neuspjelu stavku ili stavku za pregled. | Missing noun after "neuspjelu".

## Second pass: adopt WordPress and Mozilla wording (2026-10-27)

39 labels differed from the references for the identical English: 13 adopted, 26 kept with a reason (a: different sense, b: register, c: consistency with the file, d: grammar or gender).

- 'Change password' | Promijeni lozinku | Promijeni lozinku | kept: (c) "lozinka" in 40 strings, ref uses "zaporka" (mw)
- 'Confirm new password' | Potvrdite novu lozinku | Potvrdite novu lozinku | kept: (b) ref is informal imperative
- 'Connected' | Povezano | Povezano | kept: (c) "povezano" in 34 strings
- 'Create your account' | Otvorite svoj račun | Otvorite svoj račun | kept: (b) ref is informal and adds "suradnički"
- 'Dark' | Tamna tema | Tamna | adopted wp-core
- 'Dismiss' | Odbaci | Zatvori | adopted wp-core
- 'Display name' | Prikazano ime | Prikazano ime | kept: (a) ref is "show date", wrong sense
- 'Email address' | E-adresa | Adresa e-pošte | adopted mw
- 'Email sent' | E-poruka poslana | E-poruka poslana | kept: (c) "e-poruka" in 9 strings for a message
- 'Enter your password.' | Unesite svoju lozinku. | Unesite svoju lozinku. | kept: (c) "lozinka" in 40 strings, ref uses "zaporka"
- 'Free' | Besplatan | Besplatan | kept: (a) "slobodna" is not a free plan
- 'Items' | Stavke | Stavke | kept: (d) ref "stavki" is genitive plural, label needs nominative plural
- 'Log out everywhere' | Odjava svugdje | Odjava odasvud | adopted wp-admin vocabulary (noun phrase, not the informal "me" sentence: (b))
- 'Logging in…' | Prijava… | Prijavljivanje… | adopted mw
- 'None' | Nema | Ništa | adopted mw, wp-admin, wp-core
- 'Not connected.' | Nije povezano. | Nije povezano. | kept: (d) ref is masculine, our subject agrees neuter with "Povezano"
- 'Please log in again' | Prijavite se ponovno | Ponovno se prijavite | adopted wp-core
- 'Privacy Policy' | Politika privatnosti | Politika privatnosti | kept: (c) "Politika privatnosti" in two keys, only one is in the differ list
- 'Revoke' | Opozovi | Opozovi | kept: (d) same verb, ref is infinitive, buttons here are imperative
- 'Sessions' | Sesije | Sesije | kept: (c) "sesije" in 3 strings
- 'Skip to main content' | Preskoči na glavni sadržaj | Skoči do glavnog sadržaja | adopted wp-admin
- 'Terms' | Uvjeti | Uvjeti | kept: (a) "pojmovi" is vocabulary terms, here legal terms
- 'You' | Vi | Vi | kept: (b) ref is informal "ti", project uses "Vi"
- 'Zoom in' | Povećaj | Uvećaj | adopted moz
- 'Zoom out' | Smanji | Umanji | adopted moz
- 'good' | dobra | dobra | kept: (d) ref is neuter, "lozinka" is feminine
- 'legal' | pravno | pravno | kept: (a) ref is the English loanword "legal" from Firefox
- 'none' | nema | ništa | adopted mw, wp-admin, wp-core
- 'password' | lozinku | lozinku | kept: (d) ref is nominative, label needs accusative "lozinku"
- 'strong' | jaka | jaka | kept: (d) ref is neuter, "lozinka" is feminine
- 'weak' | slaba | slaba | kept: (d) ref is neuter, "lozinka" is feminine
- 'Check' | Provjera | Provjera | kept: (a) ref is "include" (mw) or an imperative verb
- 'Citation' | Navod | Navod | kept: (a) ref is a quotation, here a legal citation
- 'Desktop' | Desktop | Stolno računalo | adopted wp-core (device sense, not "radna površina")
- 'Failed' | Neuspjelo | Neuspjelo | kept: (c) "neuspjelo" in 35 strings
- 'Fixed' | Ispravljeno | Ispravljeno | kept: (a) "fiksno" is fixed/static
- 'Mobile' | Mobilni | Mobilno | adopted wp-core
- 'Resolved' | Riješeno | Riješeno | kept: (d) ref masculine, state labels here are neuter
- 'Standard' | Standard | Standard | kept: (a) ref is "standard/default" or "article", here a standard
