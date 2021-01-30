#!/bin/sh

echo "Updating node modules : "
echo "npx npm-check-updates -u && npm install"
npx npm-check-updates -u && npm install

echo "Updating Pico submodule : "
echo "git submodule foreach git pull origin master"
git submodule foreach git pull origin master

echo "Updating theme resources : "
npm ls postcss-cli > /dev/null
if [ $? == 1 ] ; then
  echo "cp -r themes/pico//exampleSite/resources ."
  cp -r themes/pico//exampleSite/resources .
fi