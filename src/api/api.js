import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Utility to add JWT
export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};
