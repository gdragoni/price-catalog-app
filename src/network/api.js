import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

api.interceptors.request.use(async (config) => {
  if(api.store && api.store.getState().user.token.length > 0) {
    config.headers.Authorization = `Bearer ${api.store.getState().user.token}`;
  }
  return config;
}, error => error);

api.interceptors.response.use(response => response,
  error => {
    if(error.response && error.response.status == 401) {
      if(api.store) {
        api.store.dispatch({type: 'CLEAR_USER'});
      }
    }
    return Promise.reject(error);
});

export default api;