import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4000',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('accessToken');
  return config;
});

export default instance;
