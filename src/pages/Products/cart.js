import React, { useContext } from 'react'
import { CartContext } from '../../container/cartContext';
import CartProduct from './cartProduct';

const Cart = () => {
const {products, total} = useContext(CartContext)
  return (
    <div>
        {products.map((cartitems, i)=>
        <>
            <span>Total: ${total}</span>
            <CartProduct  key={i} product={cartitems}/>
            
          </>
        )}
    </div>
  )
}

export default Cart