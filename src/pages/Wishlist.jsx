// pages/Wishlist.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart, FaTrash, FaShoppingCart, FaRegSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { removeFromWishlist, clearWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
    toast.info("Removed from wishlist", {
      position: "top-right",
      theme: "light",
      autoClose: 2000,
    });
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
    toast.info("Wishlist cleared", {
      position: "top-right",
      theme: "light",
      autoClose: 2000,
    });
  };

  const handleAddToCartFromWishlist = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Added to cart!", {
      position: "top-right",
      theme: "light",
      autoClose: 2000,
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 pt-28">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <FaRegSadTear className="text-6xl text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Start adding items you love to your wishlist!
          </p>
          <Link
            to="/"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
          >
            <FaHeart />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <FaHeart className="text-3xl text-red-500" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
              <p className="text-gray-600">{wishlistItems.length} items</p>
            </div>
          </div>
          
          {wishlistItems.length > 0 && (
            <button
              onClick={handleClearWishlist}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <FaTrash />
              Clear All
            </button>
          )}
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <div className="flex items-center text-yellow-500">
                    <FaHeart className="text-red-500 mr-1" />
                    <span className="text-gray-600 text-sm">({product.rating})</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCartFromWishlist(product)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={() => handleRemoveFromWishlist(product.id)}
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors flex items-center justify-center"
                    aria-label="Remove from wishlist"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;