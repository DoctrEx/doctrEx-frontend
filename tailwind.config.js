/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#0061FF",
    },
  },
  plugins: [],
  important: true,
  darkMode: "class",
}
