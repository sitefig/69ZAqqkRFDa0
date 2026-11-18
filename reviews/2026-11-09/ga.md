# ga review, 2026-11-09

Changed: 0. Kept: 18 differ entries. Patch is empty. Reference coverage for Irish is thin: only WordPress, Mozilla, MediaWiki, Django admin, GNOME/GTK and Drupal fragments, many entries come from one source and some have clear errors (wp-core "scéilín" for status, mw "príobháideachais"). Conservative review, no native check.

Kept (earlier 2026-10-27 decisions stand, no new source contradicts them):
- pasfhocal family (Change/Confirm/Current/New password, Enter your password): "pasfhocal" is in 26 strings; the references use "focal faire" (django, mw, wp) which is the older form. Both are valid Irish; consistency wins.
- Enter your email address.: "Cuir isteach" used in 11 strings; mw "iontráil" is a single source.
- Disconnect (Dícheangail): gtk "dínasc"/"dícheangal" are the same verb family; ours is the imperative.
- Latest, Overview (Forbhreathnú; gnome "foramharc" is the sense of preview), Please log in again, Skip to main content, Your domain (reference is the object form after a verb), not logged in, good (maith; Drupal "réasúnta" means reasonable), Standard (noun, a document kind).
- Privacy Policy (Beartas Príobháideachta): matches the standard genitive of príobháideacht; mw "polasaí príobháideachais" is the nonstandard form.
- Status (Stádas): gtk and mw also use "stádas"; wp-core "scéilín" is wrong sense and wp-admin "riocht" is a single source.
- Server error (Earráid freastalaí): "earráid" is the usual word; django "botún" is colloquial.
- Schedule: file uses "sceideal" (26 strings), matching wp-core.

Glossary rows to change: severity: info for ga says "faisnéiseach" but the app uses "Eolas" (adopted from wp-admin on 2026-10-27); update the glossary row to "eolas" or revisit the severity word in a native review. Also "schedule" row says "sceidealú" while the file uses "sceideal"; the row should read "sceideal".
