import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e5080f2ce0196c2ade78cf44c42a09f0',
    language: 'es-ES',
  },
});

export default movieDb;
