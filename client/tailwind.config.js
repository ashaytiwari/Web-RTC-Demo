/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        secondary: "#00C8FF",
        tertiary: "A9A9A9",
        text: "ffffff",
        eclipseGray: "#1C1C1E",
        nebulaPurple: "#6A0DAD",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

