# :black_circle: Pico
<p>
	<a href="https://app.netlify.com/sites/sponge-bob/deploys">
		<img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/934b7c29-32b9-4ed5-92e7-79cfba9a27b7/deploy-status">
	</a>
	<a href="https://github.com/negrel/ginger/raw/master/LICENSE">
		<img src="https://img.shields.io/badge/license-MIT-green">
	</a>
</p>

This theme aims to be minimalist, readable, responsive, light and beautiful. Inspired by **Medium** and **The New York Times**, Pico try to provide the best experience for the reader while having an awesome design. It can be configured as a single page, or as a full-featured site with multiple sections. It is multilingual, responsive, and includes a light and *dark theme* (*soon*).

You can check the [**example site**](https://sponge-bob.netlify.app/).
![pico example screenshot](https://github.com/negrel/hugo-theme-pico/raw/master/.github/banner.jpg)

Features :
- Multilingual - supports side-by-side content in different language versions
- Syntax highlighting (one dark theme)
- Styled Markdown throughout, including post titles
- Custom index page sections from Markdown files
- Straightforward customization via config.toml
- Projects and Blog sections
- Light, bundle css is purged and minified thanks to PostCSS

Developer-friendly :
- Sass files included with instant compiling to CSS thanks to Hugo Pipes and PostCSS
- TailwindCSS for rapidly building custom design

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
# Create the base file for our static site
hugo new site your_site_name

cd your_site_name

# Get the theme
git clone https://github.com/negrel/pico-hugo-theme themes/pico
```


### Contributing
If you want to contribute to Pico to add a feature or improve the code contact me at [negrel.dev@protonmail.com](mailto:negrel.dev@protonmail.com), open an [issue](https://github.com/negrel/pico-hugo-theme/issues) or make a [pull request](https://github.com/negrel/pico-hugo-theme/pulls).

## :stars: Show your support
Please give a :star: if this project helped you!

#### :scroll: License
MIT © [Alexandre Negrel](https://www.negrel.dev)