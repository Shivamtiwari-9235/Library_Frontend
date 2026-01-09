import API from './api';

export const studentsAPI = {
  list: () => API.get('/students'),
  create: (data) => API.post('/students', data),
  update: (id, data) => API.put(`/students/${id}`, data),
  remove: (id) => API.delete(`/students/${id}`)
};