import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://task-tracker-backend-0tru.onrender.com';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
