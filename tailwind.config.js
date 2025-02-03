/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-left': "url('../images/hero-left-bg.jpg')",
        'hero-right': "url('../images/hero-right-bg.jpg')",
        'subscribe-bg': "url('../images/subscribe-bg-color.png')",
        'subscribe-dog': "url('../images/subscribe-dog.png')",
        'bg': "url('../subscribe-bg.jpg')",
      },
      fontFamily: {
        'gaegu': ['Gaegu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

