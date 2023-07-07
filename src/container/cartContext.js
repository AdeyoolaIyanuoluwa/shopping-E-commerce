import React, { createContext, useReducer} from 'react'
import reducer,  { initialState } from './cartReducers'


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product) =>{
        
        let updatedCart = [];
        
        const eachProduct = state.products.filter((e) => e.id === product.id )[0];
        
        if(eachProduct){
            const quantity = ++eachProduct.quantity
            const totalAmount = eachProduct.amount * quantity;
            updatedCart = state.products.map(obj =>
                obj.id === eachProduct.id ? { ...eachProduct, quantity, totalAmount } : obj
            );
        } else {
            const totalAmount = product.amount;
            updatedCart = [...state.products, { ...product, quantity: 1, totalAmount }];
        }

                updatePrice(updatedCart)

        dispatch({
            type:"add",
            payload: updatedCart
        })
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    } 

    const removeFromCart = (product)=>{
        let updatedCart = state.products.map(obj => {
            // obj.id === product.id ? { ...eachProduct, quantity, totalAmount } : obj
            if(obj.id === product.id){
                if(obj.quantity > 1){   
                    const newQty = obj.quantity - 1;
                    const totalAmount = obj?.amount * newQty;
                    return { ...obj, quantity: newQty, totalAmount }
                }
            } else {
                return obj
            }
        });

        console.log({ updatedCart })
        
    
// 
        updatePrice(updatedCart)

        dispatch({
            type:"remove",
            payload: updatedCart
        })
        // localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }

    const updatePrice = (products)=>{
            // console.log({ products })
            let total = 0 ;
            products.forEach(product=>{
                total += (product.totalAmount);  
                
            })

            dispatch({
                type:"update price",
                payload: total
            })
            console.log({products});
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart, 
    }
    return (
        <CartContext.Provider value={value}>
                {children}
        </CartContext.Provider>
    )
}
    
   
