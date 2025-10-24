// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.jsx";
import productSlice from "./productSlice.jsx";
import wishlistSlice from "./wishlistSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    wishlist: wishlistSlice,
  },
});

export default store;
