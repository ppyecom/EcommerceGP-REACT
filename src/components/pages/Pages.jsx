import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../common/header/Header'
import Home from '../home/Home'
import Products from '../products/Products'
import './pages.css'
import ProtectedRoute from './ProtectedRoute'

const Pages = () => {



  return (
    <>
    <Header />
    <div className="container-pages">
      
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProtectedRoute>
            <Products/>
            </ProtectedRoute>}/>
      </Routes>
    </div>
    </>
    
  )
}

export default Pages