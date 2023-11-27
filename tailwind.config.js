/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT( {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
      },
      colors: {
        "color-primary": "var(--color-primary)",
        "color-primary-light": "var(--color-primary-light)",
        "color-primary-dark": "var(--color-primary-dark)",
        "color-white": "var(--text-white)",
        "color-black": "var(--color-black)",
        "color-black-light": "var(--color-black-light)",
        "color-gray": "var(--color-gray)",
        "section-bg": "var(--color-section-bg)",
        
      }
    },
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
});
