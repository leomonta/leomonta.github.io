#!/bin/bash


# --- Conponent replacer ---

comp_names=$(ls -1 src/components)
comp_names=${comp_names/ /$'\n'/}

components=""

for comp in $comp_names; do
	components="${components} ./src/components/${comp}"
done

echo $components
echo

for filename in ./projects/*; do
	cmd="./CR ${filename} ./built/${filename} ${components}"
	echo $cmd
	$cmd
done

cmd="./CR src/index.html built/index.html ${components}"
echo $cmd
$cmd
