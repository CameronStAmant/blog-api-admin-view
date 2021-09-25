module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        home: '100px 1fr',
        layout: '50px 1fr 50px',
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
      md: '20px',
    },
  },
  variants: {
    extend: { backgroundColor: ['active'], borderColor: ['active'] },
  },
  plugins: [],
};
