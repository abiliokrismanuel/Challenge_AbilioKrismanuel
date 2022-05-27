//tailwind.config.js
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx','./public/**/*.html'], //add this line
  darkMode: `media`, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkblue: '#0D28A6',
        backgroundGrey: '#F1F3FF',
        primaryGrey: '#CFD4ED'

    }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}