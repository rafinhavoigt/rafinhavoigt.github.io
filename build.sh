#!/bin/bash
# Build the entire website to a minified version
# depends on htmlmin
function listFiles(){
    find $PWD -name "*.html"
    find $PWD -name "*.css"
    find $PWD -name "*.js"
}
function minify(){ 
    htmlmin --remove-all-empty-space --remove-comments $@
}
for file in $(listFiles); do
    minify $file > temp.file
    rm $file
    mv temp.file $file
done
