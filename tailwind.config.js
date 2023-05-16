/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'mrsool-green': '#00BF6F',
        'mrsool-green-hover': '#039256'
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('flowbite/plugin')],
}