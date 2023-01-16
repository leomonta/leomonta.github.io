#!/bin/bash

CMD="npx tailwindcss -m -i ./src/style/base.css -o ./build/style/base.css"
echo $CMD
$CMD