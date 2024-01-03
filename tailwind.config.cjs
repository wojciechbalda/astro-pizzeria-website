const defaultTheme = require("tailwindcss/defaultTheme");


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "linear-gradient(356deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url('../heroBg.webp')",
				'hero-pattern':
				  "linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../featuresBg.webp')",
			  },
			  fontFamily: {
				sans: ["Red Hat Text Variable", ...defaultTheme.fontFamily.sans],
			  },
		},
	},
	plugins: [],
}
