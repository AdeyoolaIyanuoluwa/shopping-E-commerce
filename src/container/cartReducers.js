
export const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    total: 0,
    products: [],
}

 const cartReducer =(state,action)=> {
    switch(action.type){
        case "add":
            return {
                ...state,
                products: action.payload,
                cartItems: action.payload,
             }
        case "remove":
            return{...state,
                products: action.payload,
                cartItems: action.payload,
            }
        case "update price":
                return {
                    ...state,
                    total: action.payload,
                    cartItems: action.payload,
                }
            default: throw Error ("cannot match case in reducer")
    }
}
export default cartReducer 