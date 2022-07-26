/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary  : '#EF3651',
        secondary: '#1E1F28',
        terceary : '#2A2C36',
      }
    },
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
