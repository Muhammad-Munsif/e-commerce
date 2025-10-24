// Components/CartIcon.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <Link to="/cart" className="relative">
      <FaShoppingCart className="text-xl text-gray-700 hover:text-blue-600 transition-colors" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;