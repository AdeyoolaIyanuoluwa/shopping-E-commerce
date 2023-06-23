import React, { createContext, useReducer} from 'react'
import reducer,  { initialState } from './cartReducers'


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product) =>{
            const updatedCart = state.products;
            updatedCart.push(product);

                updatePrice(updatedCart)

            dispatch({
                type:"add",
                payload: updatedCart
            })
    } 
    const removeFromCart = (product)=>{
                const  updatedCart = state.products.filter((currentProduct)=> currentProduct.id !==product.id);

                updatePrice(updatedCart)

                dispatch({
                    type:"remove",
                payload: updatedCart
                })
    }
    // const quantity = (products)=>{
    //     let qty = 0

    // }
    const updatePrice = (products)=>{
            let total = 0 ;
            products.forEach(product=>{
                total += product.amount;
            })

            dispatch({
                type:"update price",
                payload: total
            })
    }

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart, 
    }
    return <CartContext.Provider value={value}>
                {children}
        </CartContext.Provider>
}
    
   
