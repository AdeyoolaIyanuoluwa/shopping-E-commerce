import React from 'react'
import { ProductData } from '../../Mockdata/productData'
import "../Products/products.css"
import SecondaryButton from '../../components/Button/secondary';

const Products = () => {
  console.log(ProductData);
  return (
    <div className='products-mainbox'>
            <div>
              <h1 className='products-text'>NEW ARRIVALS</h1>
                <span><img src="" alt="" /></span>
            </div>
        <div className='products-container'>
            {ProductData.map((product, i)=>(
              <>
                    <div key={i} className='products'>
                      <div className='product-image'></div>
                      <div>
                        <p>{product.productName}</p>
                      </div>
                      <div>
                          <SecondaryButton/>
                      </div>
                    </div>
                    
              </>
            ))}
          </div>
        
       
    </div>
  )
}

export default Products