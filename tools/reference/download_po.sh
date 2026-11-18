#!/bin/sh
# sh tools/reference/download_po.sh   Downloads more .po files into .reference/po/<project>/<lang>.po (git-ignored):
#   Django (admin, conf), Odoo (web), GitLab, GNOME (gnome-shell, gtk), Drupal core. Data only; never run anything in it.
#   A 404 means the project has no such translation (mt is missing in most); the file is skipped, not an error.
set -e
cd "$(dirname "$0")/../.."
D=.reference/po
get() { mkdir -p "$(dirname "$1")"; code=$(curl -sL -m 180 -o "$1.tmp" -w "%{http_code}" "$2"); if [ "$code" = 200 ]; then mv "$1.tmp" "$1"; else rm -f "$1.tmp"; fi; }
for l in bg cs da de el es et fi fr ga hr hu it lt lv mt nl pl pt ro sk sl sv; do
  get $D/django-admin/$l.po "https://raw.githubusercontent.com/django/django/main/django/contrib/admin/locale/$l/LC_MESSAGES/django.po"
  get $D/django-conf/$l.po "https://raw.githubusercontent.com/django/django/main/django/conf/locale/$l/LC_MESSAGES/django.po"
  get $D/odoo-web/$l.po "https://raw.githubusercontent.com/odoo/odoo/master/addons/web/i18n/$l.po"
  get $D/gnome-shell/$l.po "https://gitlab.gnome.org/GNOME/gnome-shell/-/raw/main/po/$l.po"
  get $D/gtk/$l.po "https://gitlab.gnome.org/GNOME/gtk/-/raw/main/po/$l.po"
  g=$l; [ $l = pt ] && g=pt_PT
  get $D/gitlab/$l.po "https://gitlab.com/gitlab-org/gitlab/-/raw/master/locale/$g/gitlab.po"
  d=$l; [ $l = pt ] && d=pt-pt
  get $D/drupal/$l.po "https://ftp.drupal.org/files/translations/all/drupal/drupal-10.3.0.$d.po"
done
for p in $D/*; do echo "$(basename $p): $(ls $p | wc -l) files"; done
