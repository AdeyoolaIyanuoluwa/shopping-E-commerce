import React, { useContext } from 'react'
import { CartContext } from '../../container/cartContext';
import CartProduct from './cartProduct';

const Cart = () => {
const {products, total} = useContext(CartContext)
  return (
    <div>
        <span>Total: ${total}</span>
        
        {products.map((cartitems, i)=>
        <>
            <CartProduct key={i} product={cartitems} classname="cart"/>
            
          </>
        )}
    </div>
  )
}

export default Cart