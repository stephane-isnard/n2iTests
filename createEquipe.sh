#!/bin/bash
#éé
me=`basename $0`
IFS='.' read -a array <<< "$me"
fichier="${array[0]}.js" 
fichierSansExt="${array[0]}"

if [ ! -d datas/$fichierSansExt ]; then
    mkdir datas/$fichierSansExt
fi
if [ ! -d datas/$fichierSansExt/captures ]; then
    mkdir datas/$fichierSansExt/captures
else
    rm datas/$fichierSansExt/captures/capture*
fi
cat \
./src/head.js \
./lib/createLeader.js \
./lib/createEquipe.js \
./lib/deleteEquipe.js \
./src/capture.js \
./src/foot.js \
> $fichier

casperjs test $fichier