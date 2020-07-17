import axios from 'axios';

const api = axios.create({
  baseURL: 'https://https://price-catalog-tcc.herokuapp.com/',
});

export default api;