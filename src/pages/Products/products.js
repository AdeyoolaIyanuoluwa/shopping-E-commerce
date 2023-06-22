import React from 'react'
import { ProductData } from '../../Mockdata/productData'
import "../Products/products.css"
import SecondaryButton from '../../components/Button/secondary';
import CartItems from '../../container/cartItems';
import { CartReducer } from '../../container/cartReducers';


const Products = () => {
  console.log(ProductData);
  return (
    <div className='products-mainbox'>
            <div className='cart-box'>
                <h1 className='products-text'>NEW ARRIVALS</h1>
               <div className='cart'> 
                 <CartItems/>
                    </div>
            </div>
        <div className='products-container'>
            {ProductData.map((product, i)=>(
              <>
                    <div key={i} className='products'>
                      <div className='product-image'><img className='images' src={product.imageUrl} alt="" /></div>
                     <div className='text-div'>

                     <div>
                        <p className='product-name'>{product.productName}</p>
                      </div>
                      <div className='addtocart'> 
                        <span className='product-amount'>${product.amount}</span>
                    
                          {/* <SecondaryButton addtocart={()=>dispatch({type: "ADD_TO_CART"})} parent="Add to Cart"/> */}
                          <SecondaryButton  parent="Add to Cart"/>
                          
                      </div>
                     </div>
                    </div>
                    
              </>
            ))}
          </div>
        
       
    </div>
  )
}

export default Products