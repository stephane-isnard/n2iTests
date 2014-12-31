#!/bin/bash
#é
me=`basename $0`
IFS='.' read -a array <<< "$me"
fichier="${array[0]}.js" 
fichierSansExt="${array[0]}"

if [ ! -d datas/scripts/$fichierSansExt ]; then
    mkdir datas/scripts/$fichierSansExt
fi
if [ ! -d datas/scripts/$fichierSansExt/captures ]; then
    mkdir datas/scripts/$fichierSansExt/captures
else
    rm datas/scripts/$fichierSansExt/captures/capture*
fi
cat \
./src/head.js \
./lib/partenaire_create.js \
./lib/login_partenaire.js \
./lib/defi_create.js \
./src/capture.js \
./src/logout.js \
./lib/login_admin.js \
./lib/defi_display.js \
./lib/defi_delete.js \
./lib/partenaire_display.js \
./lib/partenaire_delete.js \
./src/logout.js \
./src/foot.js \
> scripts/$fichier

casperjs test scripts/$fichier

