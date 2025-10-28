// src/redux/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    currentOrder: null,
  },
  reducers: {
    addOrder: (state, action) => {
      const newOrder = {
        id: `ORD-${Date.now()}`,
        ...action.payload,
        date: new Date().toISOString().split("T")[0],
        status: "processing",
        createdAt: new Date().toISOString(),
      };
      state.orders.push(newOrder);
      state.currentOrder = newOrder;
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const order = state.orders.find((o) => o.id === orderId);
      if (order) {
        order.status = status;
      }
      if (state.currentOrder && state.currentOrder.id === orderId) {
        state.currentOrder.status = status;
      }
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
});

export const { addOrder, updateOrderStatus, setCurrentOrder, clearCurrentOrder } =
  orderSlice.actions;
export default orderSlice.reducer;

