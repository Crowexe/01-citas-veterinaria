/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'custom-black': '#2c2c2c',
        'custom-gray': '#373737',
      },
    },
  },
  plugins: [],
}
