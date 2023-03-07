import React, { useState } from 'react'

const AppContext = React.createContext();

const CartProvider = (props) => {
    const [cartData, setCartData] = useState([]);
    const addCartData = (data) =>{
        setCartData([...cartData, data])
    }
  return (
    <AppContext.Provider value={{cartData, addCartData}}>
        {props.children}
    </AppContext.Provider>
  )
}
export  {CartProvider ,AppContext}
