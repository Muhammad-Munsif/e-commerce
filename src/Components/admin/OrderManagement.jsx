// src/components/admin/OrderManagement.js (Fixed Version)
import React, { useState } from "react";
import {
  FaEye,
  FaTruck,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
} from "react-icons/fa";
import OrderDetails from "./OrderDetails";
import OrderTracking from "./OrderTracking";

const OrderManagement = () => {
  const [orders] = useState([
    {
      id: "ORD-123456",
      customer: "John Doe",
      date: "2024-01-20",
      amount: 139.97,
      status: "processing",
      items: 3,
    },
    {
      id: "ORD-123457",
      customer: "Jane Smith",
      date: "2024-01-19",
      amount: 89.99,
      status: "shipped",
      items: 2,
    },
  ]);

  // State for modals
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // 'details' or 'tracking'

  const getStatusColor = (status) => {
    switch (status) {
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "processing":
        return FaTruck;
      case "shipped":
        return FaTruck;
      case "delivered":
        return FaCheckCircle;
      case "cancelled":
        return FaTimesCircle;
      default:
        return FaTruck;
    }
  };

  const handleViewDetails = (order) => {
    console.log("View Details clicked for:", order.id);
    setSelectedOrder(order);
    setActiveModal("details");
  };

  const handleTrackOrder = (order) => {
    console.log("Track clicked for:", order.id);
    setSelectedOrder(order);
    setActiveModal("tracking");
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setActiveModal(null);
    setSelectedOrder(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
        <p className="text-gray-600">
          Manage customer orders and track fulfillment
        </p>
      </div>

      {/* Debug Info */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm">
          Debug: Selected Order: {selectedOrder?.id} | Active Modal:{" "}
          {activeModal}
        </p>
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => {
          const StatusIcon = getStatusIcon(order.status);
          return (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {order.id}
                  </h3>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  <StatusIcon className="w-4 h-4 mr-1" />
                  {order.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{order.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium">${order.amount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Items:</span>
                  <span className="font-medium">{order.items}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleViewDetails(order)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center"
                >
                  <FaEye className="w-4 h-4 mr-2" />
                  View Details
                </button>
                <button
                  onClick={() => handleTrackOrder(order)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center"
                >
                  <FaTruck className="w-4 h-4 mr-2" />
                  Track
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modals */}
      {activeModal === "details" && selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          isOpen={true}
          onClose={handleCloseModal}
        />
      )}

      {activeModal === "tracking" && selectedOrder && (
        <OrderTracking
          order={selectedOrder}
          isOpen={true}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default OrderManagement;
