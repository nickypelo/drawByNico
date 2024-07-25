/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			"maxWidth": {
				"primary": "1140px"
			},
			"fontFamily": {
				"roboto": ['Roboto', 'sans-serif']
			},
			"height": {
				"80v": "70vh"
			},
			"minHeight":{
				"70v": "70vh"
			},
			"backgroundImage":{
				"front": "url('./src/images/Website/lupe-real.jpg')",
				"footer": "url('./src/images/Website/collection-light.jpg')",
				"head": "url('./src/images/Website/collection.jpg')"
			}
		},
	},
	plugins: [],
}
