module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        home: '100px 1fr',
        layout: '50px 1fr 50px',
        post: '2fr auto auto',
        postTitle: '100px 1fr',
      },
    },
    height: {
      lg: '36rem',
    },
  },
  variants: {
    extend: { backgroundColor: ['active'], borderColor: ['active'] },
  },
  plugins: [],
};
