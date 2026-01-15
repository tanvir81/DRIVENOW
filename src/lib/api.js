import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Function calls go to Next.js API routes (which proxy to backend)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
