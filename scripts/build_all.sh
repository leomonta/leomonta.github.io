#!/bin/bash

./component_replacer.sh

./copy_style.sh

./tsc_compile.sh

./compile_tailwindcss.sh
