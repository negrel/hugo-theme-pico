const path = require('path')

//const themeDir = path.join(__dirname, 'themes', 'pico') + '/'
const themeDir = path.join(__dirname)

console.log(themeDir);

const purgecss = require('@fullhuman/postcss-purgecss')({
	// Specify the paths to all of the template files in your project
	content: [
		path.join(themeDir,'layouts,' , '**', '*.html'),
		path.join(themeDir, 'exampleSite', 'content', '**', '*.html'),
		path.join('layouts', '**', '*.html'),
		path.join('content', '**', '*.html'),
	],

	// This is the function used to extract class names from your templates
	defaultExtractor: content => {
		// Capture as liberally as possible, including things like `h-(screen-1.5)`
		const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

		// Capture classes within other delimiters like .block(class="w-1/2") in Pug
		const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

		return broadMatches.concat(innerMatches)
	}
})

module.exports = {
	plugins: [
		require('postcss-import')({
			path: [themeDir]
		}),
		require('tailwindcss')(path.join(themeDir, 'tailwind.config.js')),
		require('autoprefixer')({
			path: [themeDir]
		}),
		...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
	]
}
