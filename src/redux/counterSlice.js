import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    counter: 0
}

// reducer
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state,action) => {
            state.counter = state.counter + action.payload
            console.log(state);
        },
        decrementCounter: (state,action) => {
            if(state.counter > 0){
                state.counter = state.counter - action.payload
            }
        }
    }
})


// actions
export const {incrementCounter,decrementCounter} = counterSlice.actions;
export default counterSlice.reducer;