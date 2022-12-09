/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./views/**/*.{html,js,ejs}", "./*.{html,js,ejs}", "./public/**/*.{html,js,ejs}"],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '767px',
        'max-md': {'raw': '(max-width: 766.99px)'}
      },
      animation: {
        "scaleup": "scale 1s linear infinite",
      },
      keyframes: {
        scale: {
          "0%": { transform: "translate(-50%, -50%) scale(0)", opacity: "1" },
          "100%": { transform: "translate(-50%, -50%) scale(1)", opacity: ".01" },
        }
      }
    },
  },
  plugins: [],
}
