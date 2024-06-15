/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#ffae00",
        secondary: "#f6f6f6",
        majorblack: "#000000",
        majorwhite: "#ffffff",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
};
