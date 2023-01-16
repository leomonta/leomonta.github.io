#!/bin/bash

CMD="npx tailwindcss -i ./src/style/base.css -o ./build/style/base.css"
echo $CMD
$CMD