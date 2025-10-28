// src/components/admin/OrderTracking.js (Simplified Test Version)
import React from "react";
import { FaTimes, FaTruck } from "react-icons/fa";

const OrderTracking = ({ order, isOpen, onClose }) => {
  console.log("OrderTracking rendered:", { isOpen, order: order?.id });

  if (!isOpen || !order) {
    console.log("OrderTracking not rendering - condition not met");
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaTruck className="w-6 h-6" />
            <h2 className="text-xl font-bold">Order Tracking - {order.id}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">
              Tracking Information
            </h3>
            <p className="text-green-700">
              Tracking Number: TRK-{order.id.replace("ORD-", "")}
            </p>
            <p className="text-green-700">Status: In Transit</p>
            <p className="text-green-700">Estimated Delivery: 2024-01-25</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium">Order Shipped</p>
                <p className="text-sm text-gray-600">2024-01-21 09:30 AM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium">In Transit</p>
                <p className="text-sm text-gray-600">2024-01-22 02:15 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium">Out for Delivery</p>
                <p className="text-sm text-gray-600">Current Location</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors">
              Update Tracking
            </button>
            <button
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors"
              onClick={() => onClose()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
