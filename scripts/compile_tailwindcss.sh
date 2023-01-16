#!/bin/bash

source colors

printf "${BBlue}npx${Cyan} tailwindcss -m -i ./src/style/base.css -o ./build/style/base.css${Reset}\n"
npx tailwindcss -m -i ./src/style/base.css -o ./build/style/base.css