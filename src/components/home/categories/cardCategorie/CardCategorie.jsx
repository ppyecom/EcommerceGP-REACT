import React from 'react'
import './cardCategorie.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const CardCategorie = ({imagen, categoria}) => {
  return (
    <>
      <div className="cards-completecar">
        <div className="card-cate">
          <div className="img-ca">
            <img src={imagen} className='imagen-cardcate' alt="" />
          </div>
          <div className="text-cate">
              <h5>Explora nuestros productos populares</h5>
              <h2>{categoria}</h2>
          </div>

          <button className='btncate'>
            VER PRODUCTOS
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  )
}

export default CardCategorie