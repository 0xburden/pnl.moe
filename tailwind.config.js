const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			...defaultTheme.colors,
			sexy: '#b00b69',
		},
		fontFamily: {
			display: ['\'Press Start 2P\'', 'cursive'],
			body: ['Inconsolata', 'monospace'],
		},
		extend: {},
	},
	plugins: [],
}
