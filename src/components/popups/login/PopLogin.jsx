import React, { useState } from 'react';
import './poplogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { axiosInstance, setAuthToken } from '../../api/axiosInstance';
import axios from 'axios'


const PopLogin = (props) => {
    const [usern, setUser] = useState('adminGP');
    const [pass, setPass] = useState('admin');
    

    const userChange = (event) => {
        setUser(event.target.value);
    };

    const passChange = (event) => {
        setPass(event.target.value);
    };

    const handleLogin = async () => {
        try {
            const data = { usern, pass }
            const queryString = Object.keys(data).map(key => 
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            ).join('&')

          const response = await axiosInstance.post(`Autenticacion/Validar?${queryString}` , data);
    
          const { token } = response.data;
          localStorage.setItem('token', token);
          setAuthToken(token)
          console.log(token)
        } catch (error) {
          console.error('Error de inicio de sesión:', error.message);
        }
      };

    return (props.trigger) ? (
        <>
            <div className="popup">
                <div className="popup-inner">
                    <div className="cred-exit">
                        <button className='button' onClick={() => props.setTrigger(false)}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </div>
                    <div>
                        <h1>INICIAR SESION</h1>
                        <br />
                        <div className="credenciales">
                            <div className="cred-usu">
                                <h3>Usuario</h3>
                                <input className='popupuser' type="text" placeholder='abcd1234' onChange={userChange} value={usern} />
                            </div>
                            <div className="cred-pass">
                                <h3>Contraseña</h3>
                                <input className='popuppass' type="password" placeholder='********' onChange={passChange} value={pass} />
                            </div>
                        </div>
                        <h4>¿Olvidaste tu Contraseña?</h4>

                        <div className="buttons-cred">

                            <button className='button' onClick={handleLogin}>Ingresar
                                <FontAwesomeIcon icon={faArrowRight} className='icon' />
                            </button>

                            <button className='button'>Registrarse
                                <FontAwesomeIcon icon={faAddressCard} className='icon' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;
}

export default PopLogin;
