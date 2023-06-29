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
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    } 
    const removeFromCart = (product)=>{
                const  updatedCart = state.products.filter((currentProduct)=> currentProduct.id !==product.id);

                updatePrice(updatedCart)

                dispatch({
                    type:"remove",
                payload: updatedCart
                })
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }

    const updatePrice = (products)=>{
            let total = 0 ;
            products.forEach(product=>{
                total += product.amount;
            })

            dispatch({
                type:"update price",
                payload: total
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }

    // const quantity = (products)=>{
    //     let qty = 0;
    //         products.forEach(product=>{
    //         qty += product.qty
    //     })

    //     dispatch({
    //         type: "increase quantity",
    //         payload: qty
    //     })
    // }

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
    
   
