#!/bin/bash


# --- Conponent replacer ---

comp_names=$(ls -1 src/components)
comp_names=${comp_names/ /$'\n'/}

components=""

for comp in $comp_names; do
	components="${components} ./src/components/${comp}"
done

for filename in ./projects/*; do
	cmd="./scripts/CR ${filename} ./build/${filename} ${components}"
	echo $cmd
	$cmd
done

cmd="./scripts/CR src/index.html build/index.html ${components}"
echo $cmd
$cmd
