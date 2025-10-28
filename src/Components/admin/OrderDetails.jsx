// src/components/admin/OrderDetails.js (Simplified Test Version)
import React from "react";
import { FaTimes } from "react-icons/fa";

const OrderDetails = ({ order, isOpen, onClose }) => {
  console.log("OrderDetails rendered:", { isOpen, order: order?.id });

  if (!isOpen || !order) {
    console.log("OrderDetails not rendering - condition not met");
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-bold">Order Details - {order.id}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-gray-700">Customer:</label>
              <p className="text-gray-900">{order.customer}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Date:</label>
              <p className="text-gray-900">{order.date}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Amount:</label>
              <p className="text-gray-900">${order.amount}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Status:</label>
              <p className="text-gray-900 capitalize">{order.status}</p>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Items:</label>
              <p className="text-gray-900">{order.items}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
              Update Status
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

export default OrderDetails;
