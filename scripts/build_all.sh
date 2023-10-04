#!/bin/bash

source colors

printf "${BGreen} --- Copying everything as base ---${Reset}\n\n"

./scripts/copy_everything.sh

printf "\n${BGreen} --- Replacing components ---${Reset}\n\n"

./scripts/component_replacer.sh

# printf "\n${BGreen} --- Compiling typescript files ---${Reset}\n\n"

# this also removes the old index_utils.js
# ./scripts/tsc_compile.sh
