import axios from 'axios';

const API = axios.create({
  baseURL: '/api',  // Vite proxy magic!
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const authAPI = {
  login: (data) => API.post('/auth/login', data)
};

export const booksAPI = {
  stats: () => API.get('/books/stats'),
  list: (search) => API.get(`/books${search ? `?search=${search}` : ''}`),
  create: (data) => API.post('/books', data),
  update: (id, data) => API.put(`/books/${id}`, data),
  remove: (id) => API.delete(`/books/${id}`)
};

export default API;
