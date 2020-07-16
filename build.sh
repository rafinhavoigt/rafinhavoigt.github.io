#!/bin/bash
# Build the entire website to a minified version
# depends on htmlmin
function listFile(){
    find $PWD -name "*.html"
    find $PWD -name "*.css"
    find $PWD -name "*.js"
}

for file in $(listFile); do
    htmlmin $file > temp.file
    rm $file
    mv temp.file $file
done
