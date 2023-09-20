#!/bin/bash

source colors

rm -r build/*

printf "${BBlue}cp${Cyan} -r ./src/* ./build/${Reset}\n"
cp -r ./src/* ./build/
