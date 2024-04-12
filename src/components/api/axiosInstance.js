import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://oxudown-001-site1.ktempurl.com/api/', // Cambia esta URL por la URL de tu backend
});

// Función para establecer el token de autenticación en Axios
const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export { axiosInstance, setAuthToken };
