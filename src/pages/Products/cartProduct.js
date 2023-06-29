import React, { useContext } from 'react'
import { CartContext } from '../../container/cartContext'
import "./cartproduct.css"

const CartProduct = ({product}) => {
        const {removeFromCart} = useContext(CartContext)

    const handleRemove=()=>{
        removeFromCart(product)
    }
  return (
    <div className='cart-bx'>

        <img className='cart-image' src={product.imageUrl} alt={product.productName + "clothes"} />

        <div className='cart-name'>
            <p clasName="cart-name">{product.productName}</p>
            <p clasName="cart-amount">${product.amount}</p>
        </div>
        
        <button className='product-button' onClick={handleRemove}>
            Remove
        </button>
    </div>
  )
}

export default CartProduct