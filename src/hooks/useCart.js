// src/hooks/useCart.js
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart, clearCart } from '../store/cartSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return {
    items: cart.items,
    totalQuantity: cart.totalQuantity,
    totalAmount: cart.totalAmount,
    addItem: (product) => dispatch(addToCart(product)),
    removeItem: (id) => dispatch(removeFromCart(id)),
    deleteItem: (id) => dispatch(deleteFromCart(id)),
    clearCart: () => dispatch(clearCart()),
  };
};