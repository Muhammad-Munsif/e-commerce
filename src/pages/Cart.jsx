import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../assets/emptyCart.jpg";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import Model from "../Components/Model";
import ChangeAddress from "../Components/ChangeAddress";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [address, setAddress] = useState("main street, 12");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-600">
              Review your items and proceed to checkout
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              {/* Table Headers */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 mb-4 text-sm font-semibold text-gray-700">
                <div className="col-span-5">PRODUCT</div>
                <div className="col-span-2 text-center">PRICE</div>
                <div className="col-span-2 text-center">QUANTITY</div>
                <div className="col-span-2 text-center">SUBTOTAL</div>
                <div className="col-span-1 text-center">ACTION</div>
              </div>
              {/* Cart Items List */}
              <div className="space-y-4">
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-contain rounded-lg bg-gray-50 p-2"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-lg font-bold text-gray-900 mt-1">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              className="p-2 hover:bg-gray-100 transition-colors"
                              onClick={() =>
                                dispatch(decreaseQuantity(product.id))
                              }
                            >
                              <FaMinus className="w-3 h-3 text-gray-600" />
                            </button>
                            <span className="px-4 py-2 font-medium">
                              {product.quantity}
                            </span>
                            <button
                              className="p-2 hover:bg-gray-100 transition-colors"
                              onClick={() =>
                                dispatch(increaseQuantity(product.id))
                              }
                            >
                              <FaPlus className="w-3 h-3 text-gray-600" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">
                            ${(product.quantity * product.price).toFixed(2)}
                          </p>
                          <button
                            className="text-red-500 hover:text-red-700 mt-2 p-1"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            <FaTrashAlt className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-5 flex items-center space-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-contain rounded-lg bg-gray-50 p-2"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {product.name}
                          </h3>
                        </div>
                      </div>
                      <div className="col-span-2 text-center">
                        <p className="text-gray-900 font-medium">
                          ${product.price}
                        </p>
                      </div>
                      <div className="col-span-2 flex justify-center">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            className="p-2 hover:bg-gray-100 transition-colors"
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                          >
                            <FaMinus className="w-3 h-3 text-gray-600" />
                          </button>
                          <span className="px-4 py-2 font-medium min-w-12 text-center">
                            {product.quantity}
                          </span>
                          <button
                            className="p-2 hover:bg-gray-100 transition-colors"
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                          >
                            <FaPlus className="w-3 h-3 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2 text-center">
                        <p className="text-gray-900 font-bold">
                          ${(product.quantity * product.price).toFixed(2)}
                        </p>
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <button
                          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          <FaTrashAlt className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      Items ({cart.totalQuantity})
                    </span>
                    <span className="font-medium">
                      ${cart.totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Shipping to:
                      </span>
                      <span className="text-sm font-medium">{address}</span>
                    </div>
                    <button
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                      onClick={() => setIsModelOpen(true)}
                    >
                      Change address
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span>${cart.totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Proceed to Checkout
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Free shipping and returns guaranteed
                </p>
              </div>
            </div>
          </div>
          <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModelOpen={setIsModelOpen}
            />
          </Model>
        </div>
      ) : (
        /* Empty Cart State */
        <div className="flex flex-col items-center justify-center py-16">
          <img
            src={emptyCart}
            alt="Empty cart"
            className="h-64 w-64 object-contain mb-8"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-md">
            Looks like you haven't added any items to your cart yet.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          onClick={() => navigate('/shop')}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
