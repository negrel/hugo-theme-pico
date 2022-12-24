const path = require('path')

const themeDir = path.join(__dirname, '..', '..')

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss')(path.join(themeDir, 'assets', 'config', 'tailwind.config.js')),
		require('autoprefixer'),
	]
}
