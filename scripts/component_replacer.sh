#!/bin/bash

source colors

# --- Conponent replacer ---

comp_names=$(ls -1 ./components)
comp_names=${comp_names/ /$'\n'/}

components=""

for comp in $comp_names; do
	components="${components} ./components/${comp}"
done

for filename in ./src/projects/*; do
	file_dest=$(echo $filename | rev | cut -d'/' -f-2 | rev)
	printf "${BBlue}./scripts/CR${Cyan} ${filename} ./build/${file_dest}${components}${Reset}\n"
	./scripts/CR ${filename} ./build/${file_dest} ${components}
done

printf "${BBlue}./scripts/CR${Cyan} src/index.html build/index.html${components}${Reset}\n"
./scripts/CR src/index.html build/index.html$components
