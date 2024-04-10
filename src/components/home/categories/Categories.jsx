import React from 'react'
import './categories.css'
import CardCategorie from './cardCategorie/CardCategorie'
import headphone from '/images/headphone.png'
import smartp from '/images/smartphone.png'
import charger from '/images/charger.jpg'

const Categories = () => {
  return (
    <section className='categ'>
        <div className="titulo">
          <h5>Explora nuestros productos populares</h5>
          <h2>Categorias</h2>
        </div>
        <div className="cards-c">
          <CardCategorie imagen={headphone} categoria="Headphones"/>
          <CardCategorie imagen={smartp} categoria="Smartphones"/>
          <CardCategorie imagen={charger} categoria="Cargadores"/>
        </div>
    </section>
  )
}

export default Categories