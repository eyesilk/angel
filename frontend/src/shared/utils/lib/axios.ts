import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('accessToken');
  return config;
});

export default instance;
