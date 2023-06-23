import React, { useContext } from 'react'
import { CartContext } from '../../container/cartContext'

const CartProduct = ({product}) => {
        const {removeFromCart} = useContext(CartContext)

    const handleRemove=()=>{
        removeFromCart(product)
    }
  return (
    <div>
        <img src={product.imageUrl} alt={product.productName + "clothes"} />
        <div>
            <p>{product.productName}</p>
            <p>${product.amount}</p>
        </div>
        <button onClick={handleRemove}>
            Remove
        </button>
    </div>
  )
}

export default CartProduct