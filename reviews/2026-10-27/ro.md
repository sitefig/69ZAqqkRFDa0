# Romanian (ro): review of 2026-10-27

16 strings corrected out of 1349 reviewed. Format: English | was | now | why.

- 'Healthy' | Sănătos | În regulă | 'Sănătos' is a calque; a status reads 'În regulă'.
- 'Showing what {name} needs.' | Se afișează ce are nevoie {name}. | Se afișează de ce are nevoie {name}. | 'ce are nevoie' lacks the preposition 'de'.
- 'Slack is set up under Alerting' | Slack se configurează la Alerte | Slack se configurează la Alertare | The section is called 'Alertare'; 'Alerte' is the other heading.
- 'The database had nothing to say. Nothing changed.' | Baza de date nu a răspuns nimic. Nu s-a schimbat nimic. | Baza de date nu a oferit niciun răspuns. Nu s-a schimbat nimic. | 'a răspuns nimic' is ungrammatical.
- 'What to do' | Ce de făcut | Ce trebuie făcut | 'Ce de făcut' is not idiomatic.
- 'Wrap long lines' | Împărțiți rândurile lungi | Încadrați rândurile lungi | Mozilla uses 'încadrează rândurile lungi' (word wrap); 'împărțiți' means split.
- '{reason}. Nothing was charged.' | {reason}. Nu s-a taxat nimic. | {reason}. Nu s-a încasat nimic. | 'taxat' means taxed; matches 'Nu s-a încasat nimic' used for checkout.
- 'Five worst open failing incidents' | Cele cinci cele mai grave incidente deschise cu eșec | Cele mai grave cinci incidente deschise cu eșec | Double 'cele' in the original.
- 'Choose a status and what it applies to. Nothing was saved.' | Alegeți o stare și ce acoperă. Nu s-a salvat nimic. | Alegeți o stare și la ce se aplică. Nu s-a salvat nimic. | 'ce acoperă' does not say 'applies to'.
- 'Email opens your own email app. If nothing happens, copy the message instead.' | E-mailul se deschide aplicația dumneavoastră de e-mail. Dacă nu se întâmplă nimic, copiați mesajul. | E-mailul deschide aplicația dumneavoastră de e-mail. Dacă nu se întâmplă nimic, copiați mesajul. | 'se deschide aplicația' was ungrammatical.
- 'Invitation revoked. That address cannot join with it now.' | Invitația a fost revocată. Această adresă nu se mai poate alătura cu ea. | Invitația a fost revocată. Această adresă nu se mai poate alătura folosind-o. | 'se alătura cu ea' is unnatural.
- 'Only the companies named above, and anyone we are legally obliged to tell. We do not sell data.' | Doar companiile menționate mai sus și oricine pe care suntem obligați legal să îl informăm. Nu vindem date. | Doar companiile menționate mai sus și orice persoană pe care suntem obligați legal să o informăm. Nu vindem date. | 'oricine pe care' is wrong case.
- 'Your reports are paused while we work on the service. Nothing has been lost, and everything you already have i' | Rapoartele dumneavoastră sunt întrerupte cât lucrăm la serviciu. Nu s-a pierdut nimic, iar tot ce aveți deja rămâne neat | Rapoartele dumneavoastră sunt întrerupte cât timp lucrăm la acest serviciu. Nu s-a pierdut nimic, iar tot ce aveți deja  | 'lucrăm la serviciu' means 'we are at work'.
- 'sus.bot reports what your robots.txt tells search engines, AI crawlers and anyone else who reads it. This site' | sus.bot raportează ce spune fișierul dumneavoastră robots.txt motoarelor de căutare, crawlerelor IA și oricui altcuiva î | sus.bot raportează ce spune fișierul dumneavoastră robots.txt motoarelor de căutare, crawlerelor IA și oricui altcuiva c | Missing relative 'care'.
- 'Failing and to-review incidents are separate, worst first. Group them by URL pattern to see which part of the ' | Incidentele cu eșec și cele de revizuit sunt separate, cele mai grave primele. Grupați-le după modelul de URL pentru a v | Incidentele cu eșec și cele de revizuit sunt separate, cele mai grave primele. Grupați-le după modelul de URL pentru a v | Double 'o' made the sentence unreadable.
- 'Grouped by module. The text of a finding comes from your site or about it.' | Grupat pe module. Textul unei constatări provine de pe site-ul dumneavoastră sau despre acesta. | Grupat pe module. Textul unei constatări provine de pe site-ul dumneavoastră sau se referă la acesta. | 'provine ... despre' does not agree.

## Second pass: adopt WordPress and Mozilla wording (2026-10-27)

46 labels differed from the references for the identical English: 7 adopted, 39 kept with a reason (a: different sense, b: register, c: consistency with the file, d: grammar or gender).

- 'Cancel' | Anulați | Anulați | kept: b: reference informal 'anulează', same verb
- 'Change password' | Schimbați parola | Schimbați parola | kept: c: reference is a noun or informal; file uses polite imperative
- 'Confirm new password' | Confirmați parola nouă | Confirmați parola nouă | kept: b: informal imperative, same verb
- 'Copy' | Copiați | Copiați | kept: b: informal imperative, same verb
- 'Create account' | Creați contul | Creați contul | kept: c: reference is a noun or informal; file uses polite imperative
- 'Dark' | Întunecat | Întunecată | adopted wp-core
- 'Disconnect' | Deconectați | Deconectați | kept: b: informal imperative, same verb
- 'Dismiss' | Închideți | Închideți | kept: a: 'respinge' means reject, a toast only closes
- 'Display name' | Nume afișat | Nume de afișat | adopted wp-core
- 'Email address' | Adresa de e-mail | Adresă de e-mail | adopted mw
- 'Enter your email address.' | Introduceți adresa de e-mail. | Introduceți adresa dumneavoastră de e-mail. | adopted mw/wp-core
- 'Free' | Free | Free | kept: a: plan name, reference 'liber' means unrestricted
- 'General' | General | General | kept: a: reference is plural for 'Setări generale', ours is the page name
- 'Go to line' | Mergeți la rândul | Mergeți la rândul | kept: b: reference informal, same vocabulary
- 'Group by' | Grupare după | Grupare după | kept: b: reference informal imperative, same verb
- 'Latest' | Cea mai recentă | Cea mai recentă | kept: d: reference is plural, ours is singular for one crawl
- 'Loading…' | Se încarcă… | Se încarcă… | kept: a: reference 'încarc' is first person, wrong for a status
- 'Log out' | Deconectare | Deconectare | kept: c: 'Deconectare' used 20 times
- 'Log out everywhere' | Deconectați-vă peste tot | Deconectați-vă peste tot | kept: c: Deconectare family
- 'Logging in…' | Se face autentificarea… | Autentificare în curs… | adopted mw
- 'Please log in again' | Vă rugăm să vă autentificați din nou | Vă rugăm să vă autentificați din nou | kept: b: informal 'te rog', same vocabulary
- 'Revoke' | Revocați | Revocați | kept: b: informal imperative, same verb
- 'Save' | Salvați | Salvați | kept: b: informal imperative, same verb
- 'Save changes' | Salvați modificările | Salvați modificările | kept: b: informal imperative, same verb
- 'Send reset link' | Trimiteți linkul de resetare | Trimiteți linkul de resetare | kept: c: file uses 'link' (39 hits), 'legătură' twice
- 'Skip to main content' | Treceți la conținutul principal | Treceți la conținutul principal | kept: b: informal imperative 'sari'
- 'Try again' | Încercați din nou | Încercați din nou | kept: b: informal imperative, same verb
- 'Type the new password again.' | Introduceți din nou parola nouă. | Introduceți din nou parola nouă. | kept: b: informal imperative; file uses Introduceți
- 'Undo' | Anulați | Anulați | kept: b: informal imperative, same verb
- 'Wrap long lines' | Încadrați rândurile lungi | Încadrați rândurile lungi | kept: b: informal imperative, same vocabulary already used
- 'You' | Dumneavoastră | Dumneavoastră | kept: b: informal 'tu', project uses 'dumneavoastră'
- 'Zoom in' | Măriți | Măriți | kept: b: informal imperative, same verb
- 'Zoom out' | Micșorați | Micșorați | kept: b: informal imperative, same verb
- 'current' | curent | actual | adopted moz/mw/wp-admin/wp-core
- 'hide' | ascundeți | ascundeți | kept: b: informal imperative, same verb
- 'legal' | juridic | juridic | kept: a: reference is a proper name (US legal)
- 'not logged in' | neautentificat | neautentificat | kept: d: reference is a full sentence, label here is a status fragment
- 'show' | afișați | afișați | kept: b: informal imperative; file uses afișați
- 'Check' | Verificare | Verificare | kept: b: informal imperative, same verb
- 'Close' | Închideți | Închideți | kept: b: informal imperative, same verb
- 'Done' | Finalizat | Gata | adopted moz/mw/wp-core
- 'Failed' | Eșuat | Eșuat | kept: d: same word, reference is feminine, ours matches the other status labels
- 'Fixed' | Remediat | Remediat | kept: a: reference 'fixă' means fixed-position
- 'Info' | Informativă | Informativă | kept: d: parallel with severity adjectives (Medie), reference is the noun 'informații'
- 'Kind' | Tip | Tip | kept: a: reference 'gen' means gender or genre, here it is the type
- 'Show more' | Afișați mai multe | Afișați mai multe | kept: b: informal imperative; file uses afișați
