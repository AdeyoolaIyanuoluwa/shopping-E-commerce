import React, { useContext  } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { CartContext } from './cartContext';
// import  from '../pages/Products/cartProduct';
import Cart from '../pages/Products/cart';

const CartItems = () => {
    // const {products, total} = useContext(CartContext)
          
    const cart=()=>{
          <Cart/>
    }

  return (
    <div>
       <button onClick={cart}><span><AiOutlineShoppingCart /><span>Cart 0</span></span></button>
        


        
    </div>
  )
}

export default CartItems