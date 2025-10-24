// Components/WishlistIcon.jsx (for your navigation header)
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const WishlistIcon = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);

  return (
    <Link to="/wishlist" className="relative">
      <FaHeart className="text-xl text-gray-700 hover:text-red-500 transition-colors" />
      {wishlistItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {wishlistItems.length}
        </span>
      )}
    </Link>
  );
};

export default WishlistIcon;