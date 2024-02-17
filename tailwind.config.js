/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['hanken'],
      },
      colors: {
        'Light-red': 'hsl(0, 100%, 67%)',
        'Light-red-light': 'hsla(0, 100%, 67%, .23)',
        'Orangey-yellow': 'hsl(39, 100%, 56%)',
        'Orangey-yellow-alpha': 'hsla(39, 100%, 56%, .2)',
        'Green-teal': 'hsl(166, 100%, 37%)',
        'Green-teal-alpha': 'hsla(166, 100%, 37%, .2)',
        'Cobalt-blue': 'hsl(234, 85%, 45%)',
        'Cobalt-blue-alpha': 'hsla(234, 85%, 45%, .2)',
        'Light-slate-blue': 'hsl(252, 100%, 67%)',
        'Light-royal-blue': 'hsl(241, 81%, 54%)',
        'Violet-blue': 'hsla(256, 72%, 46%, 1)',
        'Persian-blue': 'hsla(241, 72%, 46%, 0)',
       'White': 'hsl(0, 0%, 100%)',
       'Pale-blue': 'hsl(221, 100%, 96%)',
       'Light-lavender': 'hsl(241, 100%, 89%)',
       'Dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
    },
  },
  plugins: [],
}