/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        chakra: ['"Chakra Petch"', 'sans-serif'],
      },
      maxHeight: {
        terms: '250vh',
      },
      colors: {
        customGray: '#202020',
      },
      scale: {
        '60': '0.6',
        '95': '.95',
        '85': '.85',
      },
      colors: {
        'lagune': '#007ACC',
        'customBlack': '#0d0d0d',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}