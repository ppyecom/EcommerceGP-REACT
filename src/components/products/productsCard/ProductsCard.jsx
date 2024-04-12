import React from 'react'
import './productsCard.css'

const ProductsCard = ({codeProduct, name, descripcion, price}) => {
  return (
    <div>
      {codeProduct}
      {name}
      {descripcion}
      {price}
    </div>
  )
}

export default ProductsCard