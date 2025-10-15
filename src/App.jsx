// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';


function App() {
  return (
    // <Provider store={store}>
      <Router>
        <div className="">
          <Navbar />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/products" element={<Products />} /> */}
              {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
              {/* <Route path="/cart" element={<Cart />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    // </Provider>
  );
}

export default App;
