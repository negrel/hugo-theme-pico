# :black_circle: Pico
<p>
	<a href="https://app.netlify.com/sites/sponge-bob/deploys">
		<img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/934b7c29-32b9-4ed5-92e7-79cfba9a27b7/deploy-status">
	</a>
	<a href="https://github.com/negrel/ginger/raw/master/LICENSE">
		<img src="https://img.shields.io/badge/license-MIT-green">
	</a>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fnegrel%2Fhugo-theme-pico?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fnegrel%2Fhugo-theme-pico.svg?type=shield"/></a>
</p>

This theme aims to be minimalist, readable, responsive, light and beautiful. Inspired by **Medium** and **The New York Times**, Pico try to provide the best experience for the reader while having an awesome design. It can be configured as a single page, or as a full-featured site with multiple sections. It is multilingual, responsive, and includes a light and *dark theme*.

You can check the [**example site**](https://sponge-bob.netlify.app/).
![pico example screenshot](https://github.com/negrel/hugo-theme-pico/raw/master/.github/banner.jpg)

Features :
- Multilingual - supports side-by-side content in different language versions
- Syntax highlighting ("one dark" theme)
- Styled Markdown throughout, including post titles
- Customizable pages with widget or [TailwindCSS](https://tailwindcss.com/)
- Straightforward customization via config.toml
- Projects and Blog sections
- Light, CSS bundle is purged and minified thanks to PostCSS
- Light & Dark theme

Developer-friendly :
- Sass files included with instant compiling to CSS thanks to Hugo Pipes and PostCSS
- [TailwindCSS](https://tailwindcss.com/) for rapidly building custom design

## Preview the theme
Pico ships with an fully configured example site. For a quick preview:

```
cd themes/pico/exampleSite/
hugo server --themesDir ../..
```

Then visit `http://localhost:1313/` in your browser to view the example site.

## Getting started

### Requirements
- Extended version of [Hugo](https://gohugo.io/getting-started/installing/) (latest version recommended)  
Some [NPM](https://npmjs.org) packages : 
- [postcss-cli](https://www.npmjs.com/package/postcss-cli)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [@fullhuman/postcss-purgecss](https://www.npmjs.com/package/@fullhuman/postcss-purgecss)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)

Learn how to install and use npm [here](https://www.npmjs.com/get-npm).

### Get the theme

```
# Clone the repository
git clone https://github.com/negrel/hugo-theme-pico.git pico

# Copy the example site
mkdir my_website
cp -r pico/exampleSite/* my_website

# You can delete the cloned repository
rm -rf pico

# Navigate to your website
cd my_website

# Install the node modules and the theme via the script
./setup.sh

# OR manually
# Installing node modules
npm install

# Adding the theme as a submodule (better maintenance than a clone)
# NOTE: my_website/ must be a git repository
git submodule add -f https://github.com/negrel/hugo-theme-pico.git ./themes/pico

# Start the dev server
hugo server
```

Your website is running :smile:, you can start editing content files.

### Multilingual
Pico currently ships with support for 4 languages (fr, en, it, es). Contributions for other language translations are welcome.
To create a new language translation, add the .toml file to the i18n/ folder. See the existing files for the necessary fields.
See the [hugo documentation](https://gohugo.io/content-management/multilingual/) for more details.

### Menu
Pico contains a default menu. If you want to override this, you can do so by editing the menu.main in config.toml.

### Google Analytics
Set googleAnalytics in config.toml to activate Hugo's internal [Google Analytics template](https://gohugo.io/templates/internal/#google-analytics).

### Contributing
If you want to contribute to Pico to add a feature or improve the code contact me at [negrel.dev@protonmail.com](mailto:negrel.dev@protonmail.com), open an [issue](https://github.com/negrel/pico-hugo-theme/issues) or make a [pull request](https://github.com/negrel/pico-hugo-theme/pulls).

## :stars: Show your support
Please give a :star: if this project helped you!

#### :scroll: License
MIT © [Alexandre Negrel](https://www.negrel.dev)


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fnegrel%2Fhugo-theme-pico.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fnegrel%2Fhugo-theme-pico?ref=badge_large)