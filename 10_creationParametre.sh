#!/bin/bash
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
./lib/login_admin.js \
./lib/parametre_display.js \
./src/capture.js \
./lib/parametre_create.js \
./lib/parametre_delete.js \
./src/capture.js \
./src/foot.js \
> scripts/$fichier

casperjs test scripts/$fichier
