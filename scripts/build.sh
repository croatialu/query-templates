#! /bin/bash

rm -rf ./dist

mkdir -p ./dist

cp ./templates/default/vue-query.ejs ./dist/vue-query.ejs
cp ./templates/default/react-query.ejs ./dist/react-query.ejs

cp ./templates/modular/vue-query.ejs ./dist/vue-query-modular.ejs
cp ./templates/modular/react-query.ejs ./dist/react-query-modular.ejs
