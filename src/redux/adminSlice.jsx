// src/redux/adminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    notifications: [],
    dashboardStats: {
      totalRevenue: 0,
      totalOrders: 0,
      totalCustomers: 0,
      totalProducts: 0,
      revenueChange: 0,
      ordersChange: 0,
      customersChange: 0,
      productsChange: 0,
    },
    salesData: {
      monthlyData: [],
      categories: [],
      dailySales: [],
    },
    topProducts: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift({
        id: Date.now(),
        read: false,
        ...action.payload,
      });
    },
    markNotificationAsRead: (state, action) => {
      const notification = state.notifications.find(
        (n) => n.id === action.payload
      );
      if (notification) {
        notification.read = true;
      }
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
    updateDashboardStats: (state, action) => {
      state.dashboardStats = { ...state.dashboardStats, ...action.payload };
    },
    updateSalesData: (state, action) => {
      state.salesData = { ...state.salesData, ...action.payload };
    },
    setTopProducts: (state, action) => {
      state.topProducts = action.payload;
    },
  },
});

export const {
  addNotification,
  markNotificationAsRead,
  clearNotifications,
  updateDashboardStats,
  updateSalesData,
  setTopProducts,
} = adminSlice.actions;
export default adminSlice.reducer;

