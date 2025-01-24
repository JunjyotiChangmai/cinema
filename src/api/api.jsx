import axios from 'axios';

const API_KEY = '36fb81da';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = (params = {}) => {
  return axios.get(BASE_URL, {
    params: { apikey: API_KEY, ...params },
  });
};
