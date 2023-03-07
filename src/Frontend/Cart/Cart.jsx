import React, { useCallback, useContext } from 'react'
import { AppContext } from '../UseContext/Context'
import useRazorpay from 'react-razorpay'

export const Cart = () => {
  const { cartData} = useContext(AppContext)
  let totalPrice = 0
  const RazorPay = useRazorpay();
  const razorPayDisplay = useCallback(async (total) => {
    const option = {
      key: "rzp_test_xtuMFCi0ca5tmU",
      amount: total*100,
      currency: "INR",
      name: "game-store",
      description: "Gaming Transaction",
      handler: (resp) => {
        console.log(resp)
      },
      prefill: { 
        name: "Dhiraj Chaudhari",
        email: "dhirajchaudhari789@gmail.com",
        contact: "1234568600"
      },
      notes: {
        address: "work address"
      },
      theme: {
        color: "#3399cc"
      }
    }
    const rzp1 = new RazorPay(option);
    rzp1.open()
  }, [RazorPay])
  return (
    <div>
      {cartData.map((item) => {
        totalPrice = totalPrice + parseInt(item.price)
        // total.current.price = total.current.price + item.price
        return (
          <div>
            <img src="" alt="" />
            <div>{item.title}</div>
            <div className='item-price'>{item.price}</div>
          </div>
        )
      })}
      <div className='billing-info'>
        <div>total:{totalPrice}</div>
        <button onClick={() => { razorPayDisplay(totalPrice) }}>Checkout</button>
      </div>
    </div>
  )
}
