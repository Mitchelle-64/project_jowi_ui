/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {

  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: colors.cyan,
        'light-blue': colors.cyan[200],
        'dark-blue': colors.cyan[700],
        'light-yellow': colors.amber[200],
        white: colors.white,
        black: colors.black

    },
    
  },
  plugins: [],
}}
