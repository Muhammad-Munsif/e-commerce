import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaCheckCircle,
  FaHome,
  FaShoppingBag,
  FaShippingFast,
  FaDollarSign,
  FaQuestionCircle,
  FaMapMarkerAlt,
  FaClock,
  FaBoxOpen,
  FaTruckLoading,
} from "react-icons/fa";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { MdOutlineLocalShipping, MdOutlinePending } from "react-icons/md";
import { HiCheckBadge } from "react-icons/hi2";

const TrackYourOrder = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [loading, setLoading] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [searchOrderId, setSearchOrderId] = useState(orderId || "");

  // Get orders from Redux store
  const orders = useSelector((state) => state.orders.orders);
  const currentOrder = useSelector((state) => state.orders.currentOrder);

  // Find order from Redux store
  const order = useMemo(() => {
    if (orderId || searchOrderId) {
      const foundOrder = orders.find(
        (o) =>
          o.id === orderId ||
          o.orderNumber === orderId ||
          o.id === searchOrderId ||
          o.orderNumber === searchOrderId
      );
      if (foundOrder) {
        // Transform order data for tracking view
        return {
          orderNumber: foundOrder.id || foundOrder.orderNumber,
          status: foundOrder.status || "processing",
          orderDate: foundOrder.createdAt || new Date().toISOString(),
          estimatedDelivery:
            foundOrder.estimatedDelivery ||
            new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
          trackingNumber:
            foundOrder.trackingNumber ||
            `TRK-${foundOrder.id?.replace("ORD-", "") || "000000"}`,
          carrier: foundOrder.carrier || "Standard Shipping",
          shippingInformation: foundOrder.shippingInformation || {
            name: foundOrder.customer || "Guest",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            country: "USA",
          },
          products: foundOrder.products || [],
          totalPrice: foundOrder.totalPrice || 0,
          trackingHistory: foundOrder.trackingHistory || [],
        };
      }
    }
    return currentOrder
      ? {
          orderNumber: currentOrder.id || currentOrder.orderNumber,
          status: currentOrder.status || "processing",
          orderDate: currentOrder.createdAt || new Date().toISOString(),
          estimatedDelivery:
            currentOrder.estimatedDelivery ||
            new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
          trackingNumber:
            currentOrder.trackingNumber ||
            `TRK-${currentOrder.id?.replace("ORD-", "") || "000000"}`,
          carrier: currentOrder.carrier || "Standard Shipping",
          shippingInformation: currentOrder.shippingInformation || {},
          products: currentOrder.products || [],
          totalPrice: currentOrder.totalPrice || 0,
          trackingHistory: currentOrder.trackingHistory || [],
        }
      : null;
  }, [orders, currentOrder, orderId, searchOrderId]);

  const handleTrackOrder = (e) => {
    e.preventDefault();
    if (trackingNumber.trim() || searchOrderId.trim()) {
      // Navigate to track with the provided ID
      navigate(`/track-order/${searchOrderId || trackingNumber}`);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return <IoIosCheckmarkCircle className="w-6 h-6 text-green-500" />;
      case "processing":
        return <MdOutlinePending className="w-6 h-6 text-blue-500" />;
      case "shipped":
        return <FaShippingFast className="w-6 h-6 text-purple-500" />;
      case "out_for_delivery":
        return <FaTruckLoading className="w-6 h-6 text-orange-500" />;
      case "delivered":
        return <HiCheckBadge className="w-6 h-6 text-green-600" />;
      case "cancelled":
        return <IoIosCloseCircle className="w-6 h-6 text-red-500" />;
      default:
        return <FaClock className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "out_for_delivery":
        return "bg-orange-100 text-orange-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Order Confirmed";
      case "processing":
        return "Processing";
      case "shipped":
        return "Shipped";
      case "out_for_delivery":
        return "Out for Delivery";
      case "delivered":
        return "Delivered";
      case "cancelled":
        return "Cancelled";
      default:
        return "Pending";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto mt-40 px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto mt-40 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Search Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShippingFast className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Track Your Order
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enter your order number or tracking number to check the status of
              your delivery
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <form onSubmit={handleTrackOrder} className="space-y-6">
              <div>
                <label
                  htmlFor="orderId"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Order Number
                </label>
                <input
                  type="text"
                  id="orderId"
                  value={searchOrderId}
                  onChange={(e) => setSearchOrderId(e.target.value)}
                  placeholder="e.g., ORD-123456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="text-center text-gray-500">OR</div>

              <div>
                <label
                  htmlFor="trackingNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tracking Number
                </label>
                <input
                  type="text"
                  id="trackingNumber"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="e.g., TRK-7890123456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <FaShippingFast className="w-5 h-5 mr-2" />
                Track Order
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-40 px-4 md:px-16 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShippingFast className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Track Your Order
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time updates on your order delivery status
          </p>
        </div>

        {/* Order Tracking Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          {/* Order Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-2 md:mb-0">
                <FaShoppingBag className="w-5 h-5 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">
                  Order Tracking
                </h3>
              </div>
              <div className="text-blue-100">
                Order Number:{" "}
                <span className="font-mono">{order.orderNumber}</span>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Current Status */}
            <div className="text-center py-4">
              <div className="flex justify-center mb-4">
                {getStatusIcon(order.status)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {getStatusText(order.status)}
              </h3>
              <p className="text-gray-600">
                {order.status === "delivered"
                  ? "Your order has been delivered"
                  : order.status === "cancelled"
                  ? "Your order has been cancelled"
                  : `Estimated delivery: ${formatDate(
                      order.estimatedDelivery
                    )}`}
              </p>
            </div>

            {/* Tracking Timeline */}
            <div className="border-l-2 border-gray-200 ml-4 pl-8 space-y-8">
              {order.trackingHistory.map((event, index) => (
                <div key={index} className="relative">
                  <div
                    className={`absolute -left-11 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      index === order.trackingHistory.length - 1
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {getStatusIcon(event.status)}
                  </div>
                  <div
                    className={`p-4 rounded-lg ${
                      index === order.trackingHistory.length - 1
                        ? "bg-blue-50 border border-blue-200"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {event.description}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {event.location}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:text-right">
                        <p className="text-sm text-gray-500">
                          {formatDate(event.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tracking Information */}
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
                    {order.shippingInformation.city},
                    {order.shippingInformation.state}
                    {order.shippingInformation.zipcode}
                  </p>
                </div>
              </div>

              {/* Tracking Details */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <FaShippingFast className="w-5 h-5 mr-2 text-gray-600" />
                  Tracking Details
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">Tracking Number:</span>
                    {order.trackingNumber}
                  </p>
                  <p>
                    <span className="font-medium">Carrier:</span>
                    {order.carrier}
                  </p>
                  <p>
                    <span className="font-medium">Order Date:</span>
                    {formatDate(order.orderDate)}
                  </p>
                </div>
              </div>
            </div>

            {/* Products Ordered */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FaBoxOpen className="w-5 h-5 mr-2 text-gray-600" />
                Products Ordered
              </h4>
              <div className="space-y-3">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => navigate("/")}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <FaHome className="w-5 h-5 mr-2" />
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/contact-support")}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <FaQuestionCircle className="w-5 h-5 mr-2" />
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Need immediate assistance?{" "}
            <button
              onClick={() => navigate("/contact-support")}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Contact our support team
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackYourOrder;
