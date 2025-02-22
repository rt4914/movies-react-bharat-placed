/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', ...defaultTheme.fontFamily.sans],
        'display': ['Red Hat Display', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
