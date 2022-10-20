import { configureStore } from "@reduxjs/toolkit";
import { cartSlice }  from "./cartSlice";
import { counterSlice } from "./counterSlice";
export const store = configureStore({
    reducer: {
        counterStore: counterSlice.reducer,
        cartStore: cartSlice.reducer
    }
});