#!/bin/sh

echo "Updating Pico submodule : "
echo "git submodule foreach git pull origin master"
git submodule foreach git pull origin master

# Check npm & npx installation
no_npm=false;
if ! npm="$(type -p "npm")" || [ -z $npm ]; then
	no_npm=true;
fi
no_npx=false;
if ! npx="$(type -p "npx")" || [ -z $npx ]; then
	no_npw=true;
fi

# Update node module
if [ "$no_npx" = false ] && [ "$no_npm" = false ] && [ -f "package.json" ]; then
	echo "Updating node modules : "
	echo "npx npm-check-updates -u && npm install"
	npx npm-check-updates -u --packageFile package.json && npm install
fi


no_postcss_cli=true;
if [ "$no_npm" = false ]; then
	npm ls postcss-cli > /dev/null

	if [ $? = 0 ]; then
		no_postcss_cli=false
	fi
fi


if [ "$no_postcss_cli" = true ]; then
	echo "Updating theme resources : "
	echo "cp -r ./themes/pico/exampleSite/resources ."
	cp -r ./themes/pico/exampleSite/resources .
fi

script_path="./themes/pico/exampleSite/update.sh"
if [ -f "$script_path" ]; then
	echo "Updating update.sh : "
	echo "cp \"$script_path\" ."
	cmp --silent "./update.sh" "$script_path" || cp "$script_path" .
fi
