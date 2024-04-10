
import axios from 'axios';

// Variable para almacenar el token de autorización
let authToken = null;

// Configurar interceptor para agregar encabezado de autorización a todas las solicitudes
axios.interceptors.request.use(
    config => {
        // Si el token está presente, agregarlo al encabezado de autorización
        if (authToken) {
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

const postLogin = async (usuario, password) => {
    const data = {
        usern: usuario,
        pass: password
    };

    try {
        const queryString = Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');

        // Enviar la solicitud de autenticación
        const resp = await axios.post(`http://localhost:5062/api/Autenticacion/Validar?${queryString}`, data);

        // Extraer el token de la respuesta y almacenarlo
        authToken = resp.data.token;

        return authToken;
    } catch (error) {
        console.error('Error en la solicitud a la API:', error.message);
        throw error;
    }
}

export default postLogin;



/*
import axios from 'axios';

const postLogin = async (usuario, password) => {
    const data = {
        usern: usuario,
        pass: password
    };

    try {
        const queryString = Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');

        const resp = await axios.post(`http://localhost:5062/api/Autenticacion/Validar?${queryString}`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return resp.data;
    } catch (error) {
        console.error('Error en la solicitud a la API:', error.message);
        throw error;
    }
}

export default postLogin;




/*
const postLogin = async(usuario,password) => {
    const data = {
        usern: usuario,
        pass: password
    };

    try {
        const queryString = Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');

        const resp = await fetch(`http://localhost:5062/api/Autenticacion/Validar?${queryString}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            }
        });

        if (!resp.ok) {
            console.error('Error en la solicitud a la API:', resp.status, resp.statusText);
            throw new Error('Error en la solicitud a la API');
        }

        return await resp.json();
    } catch (error) {
        console.error('Error en la solicitud a la API:', error.message);
        throw error;
    }
}

export default postLogin;

/*
const getLanguages = async(lenguajes) => {
  
    const url = lenguajes;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}
*/