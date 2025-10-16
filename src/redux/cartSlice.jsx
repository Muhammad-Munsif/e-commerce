import { createSlice } from "@reduxjs/toolkit";
import { setProducts } from "./productSlice";

const initialState = {
    products : [],
}

const cartSlice = createSlice( {
    name : 'cart',
    initialState : initialState,
    reducers : {
        
        },
    })

// export const {setProducts} = cartSlice.actions;
export default cartSlice.reducer;