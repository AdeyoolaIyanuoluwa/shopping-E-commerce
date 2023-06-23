import React, { useContext  } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from './cartContext';
import CartProduct from '../pages/Products/cartProduct';

const CartItems = () => {
    const {products, total} = useContext(CartContext)
  return (
    <div>
        <span><AiOutlineShoppingCart /></span>
        <span>Cart 0</span>
        <span>Total: ${total}</span>
        {products.map((cartitems, i)=>
          <>
              <CartProduct key={i} product={cartitems}/>
          </>
        )}
    </div>
  )
}

export default CartItems