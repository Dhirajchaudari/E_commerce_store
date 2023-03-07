import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../UseContext/Context'
import './Header.css'
export const Header = () => {
    const {cartData} = useContext(AppContext)
    const navigate = useNavigate()
  return (
      <div className='header'>
        <div className='store-logo'><h1>Games Store</h1></div>
        <div className='cart-logo' onClick={()=>{navigate('/cart')}}><h1>Cart-<span>{cartData.length}</span></h1></div>
    </div>
  )
}
