#!/bin/sh
# sh tools/reference/download.sh   Downloads the reference translations into .reference/ (git-ignored, about 60 MB):
#   WordPress core and admin .po files (translate.wordpress.org), Mozilla Fluent files (pdf.js, firefox-l10n) with their
#   English sources, and MediaWiki interface messages (the only source here for Maltese). Data only; never run anything in it.
set -e
cd "$(dirname "$0")/../.."
D=.reference; mkdir -p $D/wp $D/moz $D/mw
get() { code=$(curl -sL -m 120 -o "$1.tmp" -w "%{http_code}" "$2"); if [ "$code" = 200 ]; then mv "$1.tmp" "$1"; else rm -f "$1.tmp"; fi; }
LOCS="bg cs da de el es et fi fr ga hr hu it lt lv mt nl pl pt ro sk sl sv"
for l in $LOCS en; do get $D/mw/$l.json "https://raw.githubusercontent.com/wikimedia/mediawiki/master/languages/i18n/$l.json" & done; wait
for l in $LOCS; do
  get $D/wp/$l.core.po "https://translate.wordpress.org/projects/wp/dev/$l/default/export-translations/?format=po"
  get $D/wp/$l.admin.po "https://translate.wordpress.org/projects/wp/dev/admin/$l/default/export-translations/?format=po"
done
for pair in bg:bg cs:cs da:da de:de el:el es:es-ES et:et fi:fi fr:fr ga:ga-IE hr:hr hu:hu it:it lt:lt lv:lv nl:nl pl:pl pt:pt-PT ro:ro sk:sk sl:sl sv:sv-SE; do
  l=${pair%%:*}; m=${pair##*:}
  get $D/moz/$l.viewer.ftl "https://raw.githubusercontent.com/mozilla/pdf.js/master/l10n/$m/viewer.ftl"
  for f in textActions viewSource; do get $D/moz/$l.$f.ftl "https://raw.githubusercontent.com/mozilla-l10n/firefox-l10n/main/$m/toolkit/toolkit/global/$f.ftl"; done
  get $D/moz/$l.findbar.ftl "https://raw.githubusercontent.com/mozilla-l10n/firefox-l10n/main/$m/toolkit/toolkit/main-window/findbar.ftl"
  get $D/moz/$l.printUI.ftl "https://raw.githubusercontent.com/mozilla-l10n/firefox-l10n/main/$m/toolkit/toolkit/printing/printUI.ftl"
done
E=https://raw.githubusercontent.com/mozilla-firefox/firefox/main/toolkit/locales/en-US/toolkit
get $D/moz/en.viewer.ftl "https://raw.githubusercontent.com/mozilla/pdf.js/master/l10n/en-US/viewer.ftl"
get $D/moz/en.textActions.ftl $E/global/textActions.ftl; get $D/moz/en.viewSource.ftl $E/global/viewSource.ftl
get $D/moz/en.findbar.ftl $E/main-window/findbar.ftl; get $D/moz/en.printUI.ftl $E/printing/printUI.ftl
echo "downloaded: $(ls $D/wp | wc -l) WordPress, $(ls $D/moz | wc -l) Mozilla, $(ls $D/mw | wc -l) MediaWiki files"
