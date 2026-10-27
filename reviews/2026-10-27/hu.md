# Hungarian (hu): review of 2026-10-27

50 strings corrected out of 1349 reviewed. Format: English | was | now | why.

- 'Ask us' | Kérdezzen minket | Kérdezzen tőlünk | 'Kérdezzen minket' is not idiomatic; 'kérdezni valakitől'.
- 'Need an integration that is not listed? Ask us.' | Olyan integrációra van szüksége, amely nincs a listán? Kérdezzen minket. | Olyan integrációra van szüksége, amely nincs a listán? Kérdezzen tőlünk. | 'Kérdezzen minket' is not idiomatic.
- 'Email me a magic link instead' | Inkább küldjenek egy varázshivatkozást e-mailben | Inkább varázshivatkozást kérek e-mailben | 'Küldjenek' (3rd person plural) is not a sensible UI request form for 'me'.
- 'Email me critical changes' | Küldjenek e-mailt a kritikus változásokról | Kritikus változások küldése e-mailben | 'Küldjenek e-mailt' is an odd impersonal request; checkbox label as noun phrase like the rest.
- 'The database had nothing to say. Nothing changed.' | Az adatbázis nem válaszolt semmit. Nem változott semmi. | Az adatbázis nem adott választ. Nem történt változás. | 'nem válaszolt semmit' is unidiomatic.
- '{reason}. Nothing was added.' | {reason}. Semmi nem lett hozzáadva. | {reason}. Nem adtunk hozzá semmit. | Passive 'lett' calque; active wording is natural Hungarian.
- '{reason}. Nothing was requested.' | {reason}. Semmi nem lett kérve. | {reason}. Nem küldtünk kérést. | Passive 'lett' calque; active wording is natural Hungarian.
- '{reason}. Nothing was saved.' | {reason}. Semmi nem lett mentve. | {reason}. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian. Matches the long sentences.
- '{reason}. Nothing was sent.' | {reason}. Semmi nem lett elküldve. | {reason}. Nem küldtünk el semmit. | Passive 'lett' calque; active wording is natural Hungarian.
- 'Open a domain first. Nothing was requested.' | Előbb nyisson meg egy domaint. Semmi nem lett kérve. | Előbb nyisson meg egy domaint. Nem küldtünk kérést. | Passive 'lett' calque; active wording is natural Hungarian.
- 'URLs found' | Talált URL-ek | Megtalált URL-ek | 'Talált' is active (found something); the URLs were found.
- "You're not on the allow list" | Nincs rajta az engedélyezési listán | Nem szerepel az engedélyezési listán | Subject was wrong: 'Nincs rajta' reads as a statement about something else.
- 'Results' | Találatok | Eredmények | Consistent with 'Eredmény' elsewhere; mw has eredmények.
- '{n} results' | {"one": "{n} találat", "other": "{n} találat"} | {"one": "{n} eredmény", "other": "{n} eredmény"} | Consistent with 'Eredmény' elsewhere.
- 'Related rules not checked' | Kapcsolódó szabályok, amelyek nem lettek ellenőrizve | Nem ellenőrzött kapcsolódó szabályok | Passive 'lett' calque; active wording is natural Hungarian.
- 'No incident was fixed since the crawl before.' | Az előző bejárás óta egyetlen incidens sem lett javítva. | Az előző bejárás óta egyetlen incidenst sem javítottak ki. | Passive 'lett' calque; active wording is natural Hungarian.
- '{n} dismissed by decisions, still counted in the totals above' | {"one": "{n} elvetve döntések által, a fenti összesítésekben még szerepel", "other": "{n} elvetve döntések által, a fent | {"one": "Döntésekkel elvetve: {n}, a fenti összesítésekben továbbra is szerepel", "other": "Döntésekkel elvetve: {n}, a  | Original read as broken Hungarian; natural order.
- 'Choose a status and what it applies to. Nothing was saved.' | Válasszon státuszt és hatókört. Semmi nem lett mentve. | Válasszon státuszt és hatókört. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- 'All fields are required unless marked optional. We check the address and the credential with one read-only req' | Minden mező kötelező, ha nincs megjelölve választhatóként. Mentés előtt egyetlen, csak olvasási kéréssel ellenőrizzük a  | Minden mező kötelező, kivéve a „nem kötelező” megjelölésűeket. Mentés előtt egyetlen, csak olvasási kéréssel ellenőrizzü | 'választhatóként' does not match the UI term 'nem kötelező'.
- 'Alerts are part of monitoring, a paid feature. After a scheduled crawl finds a critical change, we tell you. A' | A riasztások a monitorozás részei, amely fizetős funkció. Ha egy ütemezett bejárás kritikus változást talál, értesítjük  | A riasztások a monitorozás részei, amely fizetős funkció. Ha egy ütemezett bejárás kritikus változást talál, értesítjük  | 'semmi nem kerül elküldésre' is stilted.
- 'Disconnect {name}? Nobody in this account can send tickets until a tracker is connected again. Tickets already' | Leválasztja: {name}? A fiók senkije sem tud jegyet küldeni, amíg újra nem csatlakoztat egy hibakövetőt. A már létrehozot | Leválasztja: {name}? A fiókban senki sem tud jegyet küldeni, amíg újra nem csatlakoztat egy hibakövetőt. A már létrehozo | 'A fiók senkije' is wrong; 'senki a fiókban'.
- 'Not connected yet: sending decisions to the rule engine. A decision is saved for your team here and does not c' | Még nincs bekötve: a döntések elküldése a szabálymotornak. A döntést itt a csapata számára mentjük, és nem változtatja m | Még nincs bekötve: a döntések elküldése a szabálymotornak. A döntést itt a csapata számára mentjük, és nem változtatja m | 'mit jelent a következő bejárás' means 'what the next crawl means', not 'reports'.
- 'Decisions are saved for your team here. Sending them to the rule engine is not connected yet, so a decision do' | A döntéseket itt mentjük a csapata számára. A szabálymotornak való elküldésük még nincs bekötve, ezért a döntés nem vált | A döntéseket itt mentjük a csapata számára. A szabálymotornak való elküldésük még nincs bekötve, ezért a döntés nem vált | 'mit jelent a következő bejárás' means 'what the next crawl means', not 'reports'.
- 'No tracker is connected yet. An admin of this account can connect one in Settings, Integrations. Nothing was s' | Még nincs hibakövető csatlakoztatva. A fiók adminisztrátora a Beállítások, Integrációk részen csatlakoztathat egyet. Sem | Még nincs hibakövető csatlakoztatva. A fiók adminisztrátora a Beállítások, Integrációk részen csatlakoztathat egyet. Nem | Passive 'lett' calque; active wording is natural Hungarian.
- 'Your tracker did not accept the ticket. Nothing was sent. An admin can check the connection in Settings, Integ' | A hibakövető nem fogadta el a jegyet. Semmi nem lett elküldve. Az adminisztrátor a Beállítások, Integrációk részen ellen | A hibakövető nem fogadta el a jegyet. Nem küldtünk el semmit. Az adminisztrátor a Beállítások, Integrációk részen ellenő | Passive 'lett' calque; active wording is natural Hungarian.
- 'Your tracker connection cannot be read right now. An admin should reconnect it in Settings, Integrations. Noth' | A hibakövető-kapcsolata most nem olvasható. Egy adminisztrátornak újra kell csatlakoztatnia a Beállítások, Integrációk r | A hibakövető-kapcsolata most nem olvasható. Egy adminisztrátornak újra kell csatlakoztatnia a Beállítások, Integrációk r | Passive 'lett' calque; active wording is natural Hungarian.
- 'Slack and email alerts for it are paused with it and nothing was deleted. Upgrade and it resumes where it left' | A hozzá tartozó Slack- és e-mail-riasztások szünetelnek, és semmi nem lett törölve. Ha magasabb csomagra vált, ott folyt | A hozzá tartozó Slack- és e-mail-riasztások szünetelnek, és semmit nem töröltünk. Ha magasabb csomagra vált, ott folytat | Passive 'lett' calque; active wording is natural Hungarian.
- 'Slack was not connected. You chose not to allow access.' | A Slack nem lett csatlakoztatva. Úgy döntött, hogy nem engedélyezi a hozzáférést. | A Slack csatlakoztatása nem történt meg. Úgy döntött, hogy nem engedélyezi a hozzáférést. | Passive 'lett' calque; active wording is natural Hungarian.
- 'That comparison is not one we offer. Pick one from the list. Nothing was saved.' | Ezt az összehasonlítást nem kínáljuk. Válasszon a listából. Semmi nem lett mentve. | Ezt az összehasonlítást nem kínáljuk. Válasszon a listából. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- 'That interval is not in your plan. Pick one from the list. Nothing was saved.' | Ez az időköz nincs benne a csomagjában. Válasszon a listából. Semmi nem lett mentve. | Ez az időköz nincs benne a csomagjában. Válasszon a listából. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- 'That password has appeared in a public data breach, so anyone can look it up. A few unrelated words work well.' | Ez a jelszó szerepelt egy nyilvános adatvédelmi incidensben, ezért bárki megtalálhatja. Jól működik néhány egymással nem | Ez a jelszó szerepelt egy nyilvános adatszivárgásban, ezért bárki megtalálhatja. Jól működik néhány egymással nem összef | 'adatvédelmi incidens' is a legal term for the event, not the leak of a password list; 'adatszivárgás' is the usual word.
- 'The crawl {crawl} does not exist for this project, or it has been removed. The link may be old or mistyped.' | A(z) {crawl} bejárás nem létezik ennél a projektnél, vagy el lett távolítva. A hivatkozás lehet régi vagy elírt. | A(z) {crawl} bejárás nem létezik ennél a projektnél, vagy eltávolították. A hivatkozás lehet régi vagy elírt. | Passive 'lett' calque; active wording is natural Hungarian.
- 'The database did not accept that choice. Nothing was saved.' | Az adatbázis nem fogadta el ezt a választást. Semmi nem lett mentve. | Az adatbázis nem fogadta el ezt a választást. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- 'The database gave an answer we do not know. Nothing was requested.' | Az adatbázis ismeretlen választ adott. Semmi nem lett kérve. | Az adatbázis ismeretlen választ adott. Nem küldtünk kérést. | Passive 'lett' calque; active wording is natural Hungarian.
- 'The database gave an answer we do not know. Nothing was saved.' | Az adatbázis ismeretlen választ adott. Semmi nem lett mentve. | Az adatbázis ismeretlen választ adott. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- 'The reason is longer than 500 characters. Shorten it. Nothing was saved.' | Az indoklás hosszabb 500 karakternél. Rövidítse le. Semmi nem lett mentve. | Az indoklás hosszabb 500 karakternél. Rövidítse le. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- 'The service did not answer. Nothing was added. Try again.' | A szolgáltatás nem válaszolt. Semmi nem lett hozzáadva. Próbálja újra. | A szolgáltatás nem válaszolt. Nem adtunk hozzá semmit. Próbálja újra. | Passive 'lett' calque; active wording is natural Hungarian.
- 'This project already has 5,000 decisions, which is the most it keeps. Nothing was saved.' | Ennek a projektnek már 5000 döntése van, ennél többet nem tárol. Semmi nem lett mentve. | Ennek a projektnek már 5000 döntése van, ennél többet nem tárol. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- 'This project is not on your account. Nothing was saved.' | Ez a projekt nem tartozik a fiókjához. Semmi nem lett mentve. | Ez a projekt nem tartozik a fiókjához. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- 'Two of those you can exercise yourself, at once: "Download my data" gives you everything we hold about you in ' | Ezek közül kettőt azonnal, saját maga is gyakorolhat: az „Az adataim letöltése” egyetlen fájlban megadja az Önről tárolt | Ezek közül kettőt azonnal, saját maga is gyakorolhat: „Az adataim letöltése” egyetlen fájlban megadja az Önről tárolt ös | Double article 'a „A fiókom törlése”'.
- 'We could not reach sus.bot. Nothing was sent. Try again.' | Nem értük el a sus.bot-ot. Semmi nem lett elküldve. Próbálja újra. | Nem értük el a sus.bot-ot. Nem küldtünk el semmit. Próbálja újra. | Passive 'lett' calque; active wording is natural Hungarian.
- 'We could not save the connection. Nothing was stored. Try again in a minute.' | A kapcsolatot nem tudtuk elmenteni. Semmi nem lett eltárolva. Próbálja újra egy perc múlva. | A kapcsolatot nem tudtuk elmenteni. Semmi nem tárolódott el. Próbálja újra egy perc múlva. | Passive 'lett' calque; active wording is natural Hungarian.
- "We couldn't delete the account ({reason}). Nothing was deleted; try again, or contact support." | Nem sikerült törölni a fiókot ({reason}). Semmi nem lett törölve; próbálja újra, vagy forduljon az ügyfélszolgálathoz. | Nem sikerült törölni a fiókot ({reason}). Semmit nem töröltünk; próbálja újra, vagy forduljon az ügyfélszolgálathoz. | Passive 'lett' calque; active wording is natural Hungarian.
- 'We use Google Analytics and Microsoft Clarity to see how people use the site: which pages are read, where peop' | A Google Analytics és a Microsoft Clarity segítségével nézzük meg, hogyan használják az emberek az oldalt: mely oldalaka | A Google Analytics és a Microsoft Clarity segítségével nézzük meg, hogyan használják az emberek az oldalt: mely oldalaka | 'semmi nem kerül beállításra' is stilted.
- 'You are logged out. Log in again. Nothing was saved.' | Ki van jelentkezve. Jelentkezzen be újra. Semmi nem lett mentve. | Ki van jelentkezve. Jelentkezzen be újra. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- 'Your plan does not include scheduled crawls and monitoring. Nothing was saved.' | A csomagja nem tartalmaz ütemezett bejárást és monitorozást. Semmi nem lett mentve. | A csomagja nem tartalmaz ütemezett bejárást és monitorozást. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- '{domain} is not a domain of this account. Nothing was requested.' | Ez nem ennek a fióknak a domainje: {domain}. Semmi nem lett kérve. | Ez nem ennek a fióknak a domainje: {domain}. Nem küldtünk kérést. | Passive 'lett' calque; active wording is natural Hungarian.
- '{domain} is not a domain of this account. Nothing was saved.' | Ez nem ennek a fióknak a domainje: {domain}. Semmi nem lett mentve. | Ez nem ennek a fióknak a domainje: {domain}. Semmi nem mentődött. | Passive 'lett' calque; active wording is natural Hungarian.
- '{reason}. The domain is added; try again to continue.' | {reason}. A domain hozzá lett adva; a folytatáshoz próbálja újra. | {reason}. A domain hozzáadva; a folytatáshoz próbálja újra. | Passive 'lett' calque; active wording is natural Hungarian.
- 'sus.bot reports what your robots.txt tells search engines, AI crawlers and anyone else who reads it. This site' | A sus.bot azt jelenti, amit a robots.txt fájlja a keresőmotoroknak, az MI-bejáróknak és mindenki másnak mond, aki olvass | A sus.bot jelentést készít arról, amit a robots.txt fájlja a keresőmotoroknak, az MI-bejáróknak és mindenki másnak mond, | 'azt jelenti' reads as 'means'; the source says 'reports'.

## Second pass: adopt WordPress and Mozilla wording (2026-10-27)

31 labels differed from the references for the identical English: 8 adopted, 23 kept with a reason (a: different sense, b: register, c: consistency with the file, d: grammar or gender).

- 'Accessibility' | Akadálymentesség | Akadálymentesség | kept: (a) ref is the WordPress accessibility-options menu, here the topic
- 'Already have an account?' | Már van fiókja? | Már van fiókja? | kept: (b) ref is informal
- 'Change password' | Jelszó módosítása | Jelszó módosítása | kept: (c) "módosít" in 17 strings, ref is mw only
- 'Confirm new password' | Új jelszó megerősítése | Az új jelszó megerősítése | adopted wp-core
- 'Create your account' | Hozza létre a fiókját | Hozza létre a fiókját | kept: (c) "fiók" in 84 strings, ref says "felhasználói fiók" (mw only)
- 'Dismiss' | Elvetés | Bezárás | adopted wp-core
- 'Enter your email address.' | Adja meg az e-mail-címét. | Adja meg az e-mail-címét. | kept: (b) ref is informal or "we" form
- 'Enter your password.' | Adja meg a jelszavát. | Adja meg a jelszavát. | kept: (b) ref is informal
- 'Go to line' | Ugrás a sorra | Ugrás sorra | adopted moz
- 'Group by' | Csoportosítás | Csoportosítási szempont | adopted wp-core
- 'Log out everywhere' | Kijelentkezés mindenhol | Kijelentkezés minden eszközről | adopted wp-admin
- 'Logging in…' | Bejelentkezés… | Bejelentkezés… | kept: (c) "bejelentkezés" used everywhere, ref "belépés" is mw only
- 'Please log in again' | Jelentkezzen be újra | Kérjük, jelentkezzen be újra | adopted wp-core, formal form kept
- 'Privacy Policy' | Adatvédelmi tájékoztató | Adatvédelmi tájékoztató | kept: (c) "adatvédelmi tájékoztató" in 6 strings
- 'Profile' | Profil | Profil | kept: (c) "profil" in 7 strings
- 'Skip to main content' | Ugrás a fő tartalomra | Ugrás a fő tartalomra | kept: (a) ref drops "main"
- 'Status' | Státusz | Státusz | kept: (c) "állapot" is used for state (8 strings), Status and State stay apart
- 'Terms' | Feltételek | Feltételek | kept: (a) "kifejezések" is vocabulary terms, here legal terms
- 'Try again' | Próbálja újra | Próbálja újra | kept: (b) ref is informal or "we" form
- 'Type the new password again.' | Adja meg újra az új jelszót. | Írja be újra az új jelszót. | adopted wp-admin vocabulary ("írja be"), formal form kept: (b)
- 'You' | Ön | Ön | kept: (b) ref is informal "te", project uses "Ön"
- 'Your domain' | Az Ön domainje | Az Ön domainje | kept: (b) ref is informal
- 'legal' | jogi | jogi | kept: (a) ref is "legal information", label is a one-word kicker
- 'not logged in' | nincs bejelentkezve | nincs bejelentkezve | kept: (b) ref is informal sentence
- 'Check' | Ellenőrzés | Ellenőrzés | kept: (a) ref is "mark" (tick)
- 'Citation' | Hivatkozás | Hivatkozás | kept: (a) ref is a quote, here a legal citation
- 'Desktop' | Asztali gép | Asztali gép | kept: (c) sibling labels "Mobil", "Táblagép" are nouns; "Asztali gép" matches
- 'Failed' | Meghiúsult | Sikertelen | adopted wp-core, matches 34 existing "sikertelen" strings
- 'Fixed' | Javítva | Javítva | kept: (a) "rögzített" is fixed in place
- 'History' | Előzmények | Előzmények | kept: (a) "laptörténet" is page history
- 'Standard' | Szabvány | Szabvány | kept: (a) ref is "default/general", here a standard
