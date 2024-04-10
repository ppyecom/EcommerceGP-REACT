import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5062/api/', // Cambia esta URL por la URL de tu backend
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
