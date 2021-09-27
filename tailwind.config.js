const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        home: '100px 1fr',
        layout: '74px 1fr 95px',
        post: '500px auto auto',
        postTitle: '100px 1fr',
      },
      gridAutoRows: {
        post: '4fr 1fr',
      },
      blur: {
        xs: '2px',
      },
    },
    height: {
      lg: '36rem',
      postCoverPhoto: '140px',
      post: '200px',
    },
    padding: {
      lg: '40px',
      md: '20px',
      smd: '8px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      cyan: '#388087',
      'hover-cyan': '#4DB0BA',
      'dark-cyan': '#333333',
      'dark-red': '#873838',
      'hover-dark-red': '#BA4D4D',
      'dark-green': '#1C4044',
    },
    purge: {
      content: ['./src/**/*.html'],
    },
  },
  variants: {
    extend: { backgroundColor: ['active'], borderColor: ['active'] },
  },
  plugins: [],
};
