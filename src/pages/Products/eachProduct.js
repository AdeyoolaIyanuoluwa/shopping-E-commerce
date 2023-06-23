import { useContext } from 'react';
import SecondaryButton from '../../components/Button/secondary';
import { CartContext } from '../../container/cartContext';

const EachProduct = ({product}) => {
    const {addToCart} = useContext(CartContext)
    
    const addtocart=()=>{
            addToCart(product)
    }
  return (
    <div>
                 <div className='products'>
                    <div className='product-image'>
                        <img className='images' src={product.imageUrl} alt="" />
                    </div>

                     <div className='text-div'>
                        <div>
                            <p className='product-name'>
                                {product.productName}
                            </p>
                        </div>
                        <div className='addtocart'> 
                            <span className='product-amount'>
                                ${product.amount}
                            </span>
                        
                            <div>
                                <SecondaryButton addtocart={addtocart} parent="Add to Cart"/>  
                             </div>   
                        </div>
                     </div>

                </div>
    </div>
  )
}

export default EachProduct