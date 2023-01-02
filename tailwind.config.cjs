/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				quicksand: "Quicksand",
			},
			colors: {
				"segursat-primary": "#F8951D",
				"segursat-primary-hover": "#F78C08",
				"white-primary": "#FFFFFF",
				"white-secondary": "#F8F8F8",
				"white-tertiary": "#E8E9EB",
				"dark-mode-primary": "#1D1E24",
				"dark-mode-secondary": "#23262B",
			},
		},
	},
	plugins: [],
};
