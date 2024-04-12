import React, { useEffect, useState } from 'react'
import { productsAPI } from '../../api/productsAPI'

const FetchProductsGet = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
      const getProducts = async() => {
        try {
            const loadPro = await productsAPI()
            setProducts(loadPro)
            setisLoading(false)
        }catch(error){
            console.error("Error en recibir Productos", error)
            setisLoading(true)
        }
      }
    
      getProducts()
    }, [])
    


  return {
    products,
    isLoading
  }
}

export default FetchProductsGet