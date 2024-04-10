import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../common/header/Header'
import Home from '../home/Home'
import Products from '../products/Products'
import './pages.css'
import ProtectedRoute from './ProtectedRoute'

const Pages = () => {

  const [autorizado, setAutorizado] = useState(false)


  return (
    <>
    <Header />
    <div className="container-pages">
      
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/products' Component={Products}/>
          
      </Routes>
    </div>
    </>
    
  )
}

export default Pages