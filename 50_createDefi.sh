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
./lib/createPartenaire.js \
./lib/loginPartenaire.js \
./lib/createDefi.js \
./src/capture.js \
./src/logout.js \
./lib/loginAdmin.js \
./lib/allerDefi.js \
./lib/deleteDefi.js \
./lib/allerPartenaire.js \
./lib/deletePartenaire.js \
./src/logout.js \
./src/foot.js \
> scripts/$fichier

casperjs test scripts/$fichier
