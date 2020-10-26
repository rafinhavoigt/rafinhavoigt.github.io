#!/bin/sh
cat metro.css metro-icons.css custom.css > main.css
minify.sh main.css > main.min.css
