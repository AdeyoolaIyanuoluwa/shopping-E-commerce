import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
          const navigate = useNavigate()
    const cart=()=>{
        navigate("/cart")
    }

  return (
    <div>
       <button onClick={cart}><span><AiOutlineShoppingCart /><span>Cart 0</span></span></button>
        


        
    </div>
  )
}

export default CartItems