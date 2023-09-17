#!/bin/bash

source colors

printf "${BBlue}cp${Cyan} -r ./src/* ./build/${Reset}\n"
cp -r ./src/* ./build/
