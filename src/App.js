import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Products from './Components/Products'
import Services from './Components/Services'
import HeaderContact from './Components/HeaderContact'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/headercontact' element={<HeaderContact/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
