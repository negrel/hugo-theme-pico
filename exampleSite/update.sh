#!/bin/bash

echo "Updating node modules : "
echo "npx ncu -u && npm install"

npx ncu -u && npm install

echo "Updating Pico submodule : "
echo "git submodule foreach git pull origin master"

git submodule foreach git pull origin master

