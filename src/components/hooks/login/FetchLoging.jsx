import React, { useEffect, useState } from 'react'
import postLogin from '../../helpers/login/postLogin';

const FetchLoging = (usuario, password) => {
    const [token, setToken] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getToken = async () => {
            try {
                const generateToken = await postLogin(usuario, password);
                setToken(generateToken);
                setIsLoading(false);
            } catch (error) {
                console.error("Error al obtener el token:", error);
                setIsLoading(false);
            }
        };

        getToken();
    }, [usuario, password]);

    return {
        token,
        isLoading
    };
};

export default FetchLoging