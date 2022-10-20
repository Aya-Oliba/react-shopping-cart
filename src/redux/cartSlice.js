import { createSlice } from "@reduxjs/toolkit";
// initial state
const initialState = {
    cartProductsMap: {},
    cartTotalPrice: 0,
    addToCartBtnIsDisabled: false
}
/* 
{
    2: {
        id:2,
        name:kjkjk,
        count:2
    }
}

*/

// reducer
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state,action) => {
            if (state.cartProductsMap[action.payload.id]){
                state.cartProductsMap[action.payload.id]['count'] += 1;
            }else {
                state.cartProductsMap[action.payload.id] = action.payload;
                state.cartProductsMap[action.payload.id]['count'] = 1;
            }
            state.cartTotalPrice += action.payload.price;
            state.addToCartBtnIsDisabled = true;
        },
        removeFromCart: (state,action) => {
            delete state.cartProductsMap[action.payload.id];
            state.cartTotalPrice -= action.payload.price * action.payload.count ;
        }
        
    }
})

// actions

export const {addToCart} = cartSlice.actions
export const {removeFromCart} = cartSlice.actions



export default cartSlice.reducer;