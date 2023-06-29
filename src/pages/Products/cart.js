import React, { useContext } from 'react'
import { CartContext } from '../../container/cartContext';
import CartProduct from './cartProduct';
import PrimaryButton from '../../components/Button/primary';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
const {products, total} = useContext(CartContext)
const navigate = useNavigate()
 const shopNow=()=>{
      navigate("/products")
 }
  return (
    <div className='cart-bxx'>
        <div className='cart-box'>
            <h1 className='products-text'>PRODUCTS</h1>
            <span className='total-price'>Total: ${total}</span>
        </div>
        
        <div>
                {products.length === 0 && 
                <div className='empty-cart'>
                  <h1>Your cart is currently empty</h1>
                    <PrimaryButton handleSignup={shopNow} children="SHOP NOW"/>
                </div>}
                 {products.map((cartitems, i)=> <CartProduct key={i} product={cartitems}/>)} 
        </div>
    </div>
  )
}

export default Cart