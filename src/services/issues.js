import API from './api';

export const issuesAPI = {
  list: () => API.get('/issues'),
  create: (data) => API.post('/issues', data),
  update: (id, data) => API.put(`/issues/${id}`, data),
  remove: (id) => API.delete(`/issues/${id}`)
};