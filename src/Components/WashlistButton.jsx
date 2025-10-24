// Components/WishlistButton.jsx
import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';
import { toast } from 'react-toastify';

const WishlistButton = ({ product, size = 'md', showText = false }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);
  
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

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

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  return (
    <button
      onClick={handleWishlistToggle}
      className={`
        ${sizeClasses[size]}
        flex items-center justify-center 
        bg-white rounded-full shadow-md 
        hover:shadow-lg transition-all duration-300
        border border-gray-200
        ${isInWishlist ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}
        group
      `}
      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isInWishlist ? (
        <FaHeart className="group-hover:scale-110 transition-transform" />
      ) : (
        <FaRegHeart className="group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
};

export default WishlistButton;