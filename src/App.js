import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from './Frontend/Cart/Cart'
import { Home } from './Frontend/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
