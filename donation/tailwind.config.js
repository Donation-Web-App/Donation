/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
        "btn-color": "#0a4c2d",
        "white": "#ffffff"
			},
		},
	},
	plugins: [],
};

