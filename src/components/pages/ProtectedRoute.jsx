import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({ children }) => {

  const [isValid, setIsValid] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp > currentTime) {
          setIsValid(true);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    setIsChecking(false);
  }, []);

  if (isChecking) {
    // Opcionalmente mostrar algún componente de carga mientras se verifica el token
    return <div>Checking authentication...</div>;
  }

  // Si el token es válido, permite acceder a la ruta
  if (isValid) {
    return children;
  }


    // Si no está autenticado, redirige al usuario a la página de inicio
    return <Navigate to="/" replace />
}

export default ProtectedRoute