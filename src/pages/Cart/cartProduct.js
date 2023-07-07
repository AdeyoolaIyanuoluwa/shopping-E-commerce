import React, { useContext } from 'react'
import { CartContext } from '../../container/cartContext'
import "./cartproduct.css"
import { ProductData } from '../../Mockdata/productData'

const CartProduct = ({product, index}) => {
        const {removeFromCart} = useContext(CartContext)
          
    const handleRemove=()=>{
        removeFromCart(product)
        //   {...product, quantity: product.quantity - 1, updatedAmount: product.updatedAmount - product.amount}, index)
        // ProductData[index].quantity = product.quantity - 1 
        // ProductData[index].updatedAmount = product.updatedAmount - product.amount
        
    }
  return (
    
    <div className='cart-bx'>

        <img className='cart-image' src={product.imageUrl} alt={product.productName + "clothes"} />

        <div className='cart-name'>
            <p className="cart-name">{product.productName}</p>
            <p clasName="cart-amount">${product.totalAmount}</p>
            <p>{product.quantity}</p>
            {/* <p>{product.updatedAmount}</p> */}
        </div>
        
        <button className='product-button' 
        onClick={handleRemove}
        >
            Remove
        </button>
    </div>
  )
}

export default CartProduct