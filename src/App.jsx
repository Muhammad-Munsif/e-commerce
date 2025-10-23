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
import Electronics from "./pages/Electornics";
import Fashions from "./pages/Fashions";
import HomeKitchen from "./pages/HomeKitchen";
import Beauty from "./pages/Beauty";
import Sports from "./pages/Sports";
import { ToastContainer } from "react-toastify";

function App() {
  const [order, setOrder] = useState(null);
  return (
    <Router>
      <div className="">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />

            {/* Category Pages */}
            {/* <Route
              path="/electronics"
              element={<Shop category="Electronics" />}
            />
            <Route path="/fashion" element={<Shop category="Fashion" />} />
            <Route
              path="/home-kitchen"
              element={<Shop category="Home & Kitchen" />}
            />
            <Route path="/beauty" element={<Shop category="Beauty" />} />
            <Route path="/sports" element={<Shop category="Sports" />} /> */}

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
            // Add these routes to your existing App.jsx
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/fashion" element={<Fashions />} />
            <Route path="/home-kitchen" element={<HomeKitchen />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
