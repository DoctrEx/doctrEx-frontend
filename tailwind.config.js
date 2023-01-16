/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#0061FF",
      primaryLight: "#E5EFFB",
    },
  },
  plugins: [],
  important: true,
  darkMode: "class",
}
