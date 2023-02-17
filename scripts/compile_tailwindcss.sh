#!/bin/bash

source colors

printf "${BBlue}npx${Cyan} tailwindcss -m -i ./src/style/tw.css -o ./build/style/tw.css${Reset}\n"
npx tailwindcss -m -i ./src/style/tw.css -o ./build/style/tw.css