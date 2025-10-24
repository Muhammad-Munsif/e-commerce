// pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { FaStar, FaShoppingCart, FaHeart, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);
  
  const productId = parseInt(id);
  const product = productsData.find(p => p.id === productId);

  // Check if product is in wishlist
  const isInWishlist = wishlistItems.some(item => item.id === productId);

  const handleAddToCart = () => {
    if (!product) return;
    
    dispatch(addToCart(product));
    toast.success("Product Added to Cart!", {
      position: "top-right",
      theme: "light",
      autoClose: 3000,
    });
  };

  const handleWishlistToggle = () => {
    if (!product) return;

    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.info("Removed from Wishlist", {
        position: "top-right",
        theme: "light",
        autoClose: 2000,
      });
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to Wishlist!", {
        position: "top-right",
        theme: "light",
        autoClose: 2000,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    const rating = Math.floor(product.rating);
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i < rating ? "text-yellow-500" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image Section */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md bg-gray-50 rounded-lg p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Product Info Section */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {renderStars()}
                    <span className="text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  <span className="text-green-600 font-semibold">In Stock</span>
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-green-600 ml-2 text-sm">Free Shipping</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
                
                <button
                  onClick={handleWishlistToggle}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-3 ${
                    isInWishlist 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <FaHeart className={isInWishlist ? 'text-white' : 'text-red-500'} />
                  {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <FaTruck className="text-blue-600 text-xl mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <FaShieldAlt className="text-green-600 text-xl mx-auto mb-2" />
                  <p className="text-sm text-gray-600">2-Year Warranty</p>
                </div>
                <div className="text-center">
                  <FaUndo className="text-purple-600 text-xl mx-auto mb-2" />
                  <p className="text-sm text-gray-600">30-Day Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;