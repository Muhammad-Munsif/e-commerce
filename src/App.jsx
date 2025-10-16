// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from './pages/Home';
import Shop from './pages/Shop';


function App() {
  return (
      <Router>
        <div className="">
          <Navbar />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
              {/* <Route path="/cart" element={<Cart />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
