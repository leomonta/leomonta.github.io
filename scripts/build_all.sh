#!/bin/bash

source colors

printf "${BGreen} --- Replacing components ---${Reset}\n\n"

./scripts/component_replacer.sh

printf "\n${BGreen} --- Compiling typescript files ---${Reset}\n\n"

./scripts/tsc_compile.sh

printf "\n${BGreen} --- Copying my css file ---${Reset}\n\n"

./scripts/css_copy.sh

printf "\n${BGreen} --- Compiling tailwind css stylesheets ---${Reset}\n\n"

./scripts/compile_tailwindcss.sh
