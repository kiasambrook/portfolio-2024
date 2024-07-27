/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{html,js}", flowbite.content()],
  safelist: [
    {pattern: /(bg|text|border)-./}
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [flowbite.plugin()],
};
