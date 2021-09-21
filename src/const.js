const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://serene-waters-04286.herokuapp.com';

export default baseUrl;
