import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
  },
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

api.interceptors.request.use((config) => {
  // Ensure X-XSRF-TOKEN header is always present when cookie exists
  if (!config.headers['X-XSRF-TOKEN']) {
    const token = getCookie('XSRF-TOKEN');
    if (token) config.headers['X-XSRF-TOKEN'] = token;
  }
  return config;
});

export async function initCsrfCookie() {
  await api.get('/sanctum/csrf-cookie');
}
