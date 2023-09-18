import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				gintoBold: ['Ginto Bold', 'sans-serif'],
				gintoMedium: ['Ginto Medium', 'sans-serif'],
			},
		},
	},
	plugins: [],
	darkMode: 'class',
} satisfies Config;
