import React, { createContext, useReducer} from 'react'
import reducer,  { initialState } from './cartReducers'


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product) =>{
        console.log(product, '--');
            const updatedCart = [...state.products, product];
            // const data = updatedCart?.filter((item) => )
            const unique = [...new Map(updatedCart.map((m) => [m.id, m])).values()];
        console.log(unique);
            // updatedCart.push(product);

                updatePrice(updatedCart)

            dispatch({
                type:"add",
                payload: unique
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    } 
    const removeFromCart = (product, index)=>{
        state.products[index] = product
                const  updatedCart = product.quantity === 0 ? state.products.filter((currentProduct)=> currentProduct.id !==product.id) : state.products;

                updatePrice(updatedCart)

                dispatch({
                    type:"remove",
                payload: updatedCart
                })
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }

    const updatePrice = (products)=>{
            let total = 0 ;
            // state.products.forEach(product=>{
            products.forEach(product=>{
                total += (product.updatedAmount);
            })

            dispatch({
                type:"update price",
                payload: total
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }
    // const getUpdatedamount = ()=>{
    //     let updatedAmount = 0
    //     for(const product in products){
    //         if(products[product]>0){
    //             let product = products.map
    //         }
    //     }
    // }

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
    
   
