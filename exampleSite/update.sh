#!/bin/bash

echo "Updating node modules : "
echo "npx npm-check-updates -u && npm install"

npx npm-check-updates -u && npm install

echo "Updating Pico submodule : "
echo "git submodule foreach git pull origin master"

git submodule foreach git pull origin master

