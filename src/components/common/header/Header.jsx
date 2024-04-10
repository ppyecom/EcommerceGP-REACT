import React, { useEffect, useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import PopLogin from '../../popups/login/PopLogin'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    const [popup, setpopup] = useState(false)
    const location = useLocation()

    useEffect(() => {
      console.log('La ruta es :',location.pathname)
    }, [location])
    

  return (
    <>
        <header className={location.pathname !== '/' ? 'headerDiferent' : ''}>
            <div className="container-header">
                <div className="logox">
                    <img className='imagen-logo' src="./images/GuenapPeru.png" alt="Guenap Peru" />
                </div>
                <div className="secciones-page">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Productos</Link></li>
                            <li>Sedes</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>
                </div>

                <div className="icons-inter">
                    <FontAwesomeIcon className='icon-h' icon={faMagnifyingGlass} />
                    <FontAwesomeIcon className='icon-h' icon={faUser} onClick={() => setpopup(true)}/>
                    <FontAwesomeIcon className='icon-h' icon={faCartShopping} />
                </div>

                <div className="toggle-menu">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>

            {
                popup && (
                    <PopLogin trigger={popup} setTrigger={setpopup}>
                        
                    </PopLogin>
                )
            }
        </header>
    </>
  )
}

export default Header