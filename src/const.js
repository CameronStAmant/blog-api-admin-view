const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'hhttps://rocky-coast-78937.herokuapp.com/';

export default baseUrl;
