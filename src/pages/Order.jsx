import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaHome,
  FaShoppingBag,
  FaShippingFast,
  FaDollarSign,
  FaQuestionCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";

const Order = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-40 px-4 md:px-16 lg:px-8 py-4 flex flex-col md:flex-row space-x-2">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <IoIosCheckmarkCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Thank you for your order!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your order has been placed successfully. You will receive an email
            confirmation shortly.
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Order Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <div className="flex items-center">
              <FaShoppingBag className="w-5 h-5 text-white mr-2" />
              <h3 className="text-xl font-semibold text-white">
                Order Summary
              </h3>
            </div>
            <p className="text-blue-100 mt-1 ml-7">
              Order Number:{" "}
              <span className="font-mono">{order.orderNumber}</span>
            </p>
          </div>

          <div className="p-6 space-y-8">
            {/* Shipping Information & Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shipping Information */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 mr-2 text-gray-600" />
                  Shipping Information
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium">
                    {order.shippingInformation.name}
                  </p>
                  <p>{order.shippingInformation.address}</p>
                  <p>
                    {order.shippingInformation.city},{" "}
                    {order.shippingInformation.zipcode}
                  </p>
                </div>
              </div>

              {/* Order Status */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <FaCheckCircle className="w-5 h-5 mr-2 text-gray-600" />
                  Order Status
                </h4>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Confirmed
                  </span>
                  <span className="ml-2 text-sm text-gray-600">Processing</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Expected delivery: 3-5 business days
                </p>
              </div>
            </div>

            {/* Products Ordered */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FaShoppingBag className="w-5 h-5 mr-2 text-gray-600" />
                Products Ordered
              </h4>
              <div className="space-y-3">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-medium text-gray-900">
                          {product.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Quantity: {product.quantity} × ${product.price}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-900">
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Price */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center text-lg">
                <span className="font-semibold text-gray-900 flex items-center">
                  <FaDollarSign className="w-5 h-5 mr-1 text-gray-600" />
                  Total Amount
                </span>
                <span className="text-2xl font-bold text-blue-700">
                  ${order.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => navigate(`/track-order/${order.orderNumber}`)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <MdOutlineLocalShipping className="w-5 h-5 mr-2" />
                Track Your Order
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <FaHome className="w-5 h-5 mr-2" />
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p className="flex items-center justify-center">
            <FaQuestionCircle className="w-4 h-4 mr-2" />
            Need help?
            <button
              onClick={() => navigate("/contact-support")}
              className="text-blue-600 hover:text-blue-800 underline ml-1"
            >
              Contact our support team
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
