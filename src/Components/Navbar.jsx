import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Model";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [isModleOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const handelSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-red-600">
            <Link to="/" onClick={closeMobileMenu}>
              Easyshop
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:block flex-1 max-w-2xl mx-4 lg:mx-8">
            <form onSubmit={handelSearch} className="relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <FaSearch className="text-gray-500 hover:text-blue-600 transition-colors" />
              </button>
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaShoppingCart className="text-lg text-gray-700" />
              {products.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-xs text-white font-semibold">
                  {products.length}
                </span>
              )}
            </Link>

            {/* Desktop Login Button */}
            <button
              className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-10 py-2  rounded-lg transition-colors font-semibold"
              onClick={() => setIsModelOpen(true)}
            >
              Login | Register
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Visible only on mobile */}
        <div className="md:hidden mt-3">
          <form onSubmit={handelSearch} className="relative">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <FaSearch className="text-gray-500 hover:text-blue-600 transition-colors" />
            </button>
          </form>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex justify-center items-center space-x-8 py-3 bg-gray-50 border-t">
        <Link
          to="/"
          className="active text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          About
        </Link>
        <Link
          to="/shop"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Shop
        </Link>
        <Link
          to="/electronics"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Electronics
        </Link>
        <Link
          to="/fashion"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Fashion
        </Link>
        <Link
          to="/home-kitchen"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Home & Kitchen
        </Link>
        <Link
          to="/beauty"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Beauty
        </Link>
        <Link
          to="/sports"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Sports
        </Link>
        <Link
          to="/contact-support"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Dashboard
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white bg-opacity-50 border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {/* Main Links */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Link
                to="/"
                className="p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/shop"
                className="p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
              <Link
                to="/contact-support"
                className="p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>

            {/* Category Links */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/electronics"
                  className="p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Electronics
                </Link>
                <Link
                  to="/fashion"
                  className="p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Fashion
                </Link>
                <Link
                  to="/home-kitchen"
                  className="p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Home & Kitchen
                </Link>
                <Link
                  to="/beauty"
                  className="p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Beauty
                </Link>
                <Link
                  to="/sports"
                  className="p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-sm"
                  onClick={closeMobileMenu}
                >
                  Sports
                </Link>
                <Link
                  to="/dashboard"
                  className="p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
              </div>
            </div>

            {/* Mobile Login Button */}
            <button
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors font-semibold"
              onClick={() => {
                setIsModelOpen(true);
                closeMobileMenu();
              }}
            >
              Login | Register
            </button>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <Model isModelOpen={isModleOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Model>
    </nav>
  );
};

export default Navbar;
