import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home'

const Routes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routes
