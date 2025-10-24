// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import FilterData from "./pages/FilterData";
import ProductDetail from "./pages/ProductDetail";
import ContactSupport from "./Components/ContactSupport";
import Faq from "./Components/Faq";
import About from "./Components/About";
import ForgotPassword from "./pages/ForgotPassword";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import HomeKitchen from "./pages/HomeKitchen";
import Beauty from "./pages/Beauty";
import Sports from "./pages/Sports";
import { ToastContainer } from "react-toastify";
import Wishlist from "./pages/Wishlist";

// Dashboard Components
// import DashboardLayout from './Components/DashboardLayout';
// import Dashboard from './pages/Dashboard';
// import Orders from './pages/dashboard/Orders';
// import Products from './pages/dashboard/Products';
// import Customers from './pages/dashboard/Customers';
// import Categories from './pages/dashboard/Categories';
// import Analytics from './pages/dashboard/Analytics';
// import Settings from './pages/dashboard/Settings';
// import ProductForm from "./pages/dashboard/ProductForm";

function App() {
  const [order, setOrder] = useState(null);

  return (
    <Router>
      <div className="">
        <Navbar />
        <main className="">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={<Checkout setOrder={setOrder} />}
            />
            <Route
              path="/order-confirmation"
              element={<Order order={order} />}
            />
            <Route path="/filter-data" element={<FilterData />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact-support" element={<ContactSupport />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/forget-password" element={<ForgotPassword />} />

            {/* Category Pages */}
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/home-kitchen" element={<HomeKitchen />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/wishlist" element={<Wishlist />} />

            {/* Dashboard Routes */}
            {/* <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<Products />} />
              <Route path="customers" element={<Customers />} />
              <Route path="categories" element={<Categories />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="settings" element={<Settings />} />
              <Route path="products/new" element={<ProductForm />} />
            </Route> */}

            {/* 404 Page - Add this if you want */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                      404
                    </h1>
                    <p className="text-xl text-gray-600">Page not found</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
