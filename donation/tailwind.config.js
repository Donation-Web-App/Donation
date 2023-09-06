/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
        		"primary": "#02463e",
        		"background": "#fafafa"
			},
			width: {
				"formWidth": "550px"
			}
		},
	},
	plugins: [],
};

