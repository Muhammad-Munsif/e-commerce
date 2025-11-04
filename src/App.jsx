// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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
import TrackYourOrder from "./Components/TrackYourOrder";
import DashboardLayout from "./Components/DashboardLayout";
import AdminLayout from "./Components/admin/AdminLayout";
import Error404 from "./Components/Error404";

function App() {
  const [order, setOrder] = useState(null);

  return (
    <Router>
      <div className="min-h-screen ">
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
            <Route path="/track-order" element={<TrackYourOrder />} />
            <Route path="/track-order/:orderId" element={<TrackYourOrder />} />
            <Route path="/dashboard" element={<DashboardLayout />} />
            <Route path="/admins" element={<DashboardLayout />} />
            <Route path="/admin/*" element={<AdminLayout />} />

            {/* 404 Page - Add this if you want */}
            <Route
              path="*"
              element={<Error404/> }
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
