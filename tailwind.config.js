/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-left': "url('../images/hero-left-bg.jpg')",
        'hero-right': "url('../images/hero-right-bg.jpg')",
      },
      fontFamily: {
        'gaegu': ['Gaegu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

