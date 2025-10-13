// src/pages/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const {
    items,
    totalQuantity,
    totalAmount,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-12">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Start shopping to add items to your cart
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Continue Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {items.map((item) => (
                <div key={item.id} className="border-b last:border-b-0">
                  <div className="p-6">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="ml-6 flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">${item.price}</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 rounded-full hover:bg-gray-100 transition duration-300"
                        >
                          <Minus className="w-5 h-5 text-gray-600" />
                        </button>

                        <span className="text-lg font-semibold w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 rounded-full hover:bg-gray-100 transition duration-300"
                        >
                          <Plus className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>

                      <div className="ml-6 text-right">
                        <p className="text-lg font-semibold text-gray-800">
                          ${item.totalPrice.toFixed(2)}
                        </p>
                        <button
                          onClick={() => deleteFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition duration-300 mt-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="mt-4">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-semibold transition duration-300"
              >
                Clear Entire Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({totalQuantity})</span>
                  <span className="font-semibold">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">$0.00</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">
                    ${(totalAmount * 0.1).toFixed(2)}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(totalAmount * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="inline-flex items-center justify-center w-full text-blue-600 hover:text-blue-700 font-semibold transition duration-300"
              >
                Continue Shopping
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
