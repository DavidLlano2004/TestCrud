import axios from 'axios';

export const apiDataRandom = axios.create({
  baseURL: import.meta.env.VITE_URL_RANDOM_DATA,
});


