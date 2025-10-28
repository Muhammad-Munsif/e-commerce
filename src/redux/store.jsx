// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.jsx";
import productSlice from "./productSlice.jsx";
import wishlistSlice from "./wishlistSlice.jsx";
import orderSlice from "./orderSlice.jsx";
import adminSlice from "./adminSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    wishlist: wishlistSlice,
    orders: orderSlice,
    admin: adminSlice,
  },
});

export default store;
