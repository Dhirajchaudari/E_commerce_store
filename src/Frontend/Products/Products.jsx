import React, { useContext } from 'react'
import { AppContext } from '../UseContext/Context'
import './Product.css'
export const Products = ({item}) => {
    const { addCartData} = useContext(AppContext)

  return (
    <div className='product-container'>
        <div className='product-title'>{item.title}</div>
        <img src={item.image} alt={item.title}/>
        <div className='product-footer'>
            <div className='product-price'>{item.price}</div>
            <button className='cart-button' onClick={()=>{addCartData(item)}}>Add to Cart</button>
        </div>
    </div>
  )
}
