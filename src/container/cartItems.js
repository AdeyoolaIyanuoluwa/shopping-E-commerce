import React, { useReducer} from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

// const reducer= (state,action)=>{}
const CartItems = () => {
    // const [cart, dispatch] = useReducer(reducer, 
    //     {count: 0}) 

  return (
    <div>
        <span><AiOutlineShoppingCart /></span>
        <span>Cart 0</span>
    </div>
  )
}

export default CartItems