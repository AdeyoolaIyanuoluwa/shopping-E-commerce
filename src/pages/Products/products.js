import React from 'react'
import { ProductData } from '../../Mockdata/productData'
import "../Products/products.css"
import CartItems from '../../container/cartItems';
import EachProduct from './eachProduct';


const Products = () => { 
  return (
    <div className='products-mainbox'>
            <div className='cart-box'>
                <h1 className='products-text'>NEW ARRIVALS</h1>
                
            </div>

        <div className='products-container'>
            {ProductData.map((product, i)=>(  
                <EachProduct key={i} product={product}/>
            ))}
        </div>

          <div className='cart'> 
                 <CartItems/>
          </div>                                
            
    </div>
  )
}

export default Products