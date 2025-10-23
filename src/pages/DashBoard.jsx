// pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUsers,
  FaMoneyBillWave,
  FaBox,
  FaArrowUp,
  FaArrowDown,
  FaTags,
} from "react-icons/fa";

const Dashboard = () => {
  // Mock data - replace with actual data from your API
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+12%",
      isPositive: true,
      icon: FaMoneyBillWave,
      color: "bg-green-500",
    },
    {
      title: "Orders",
      value: "2,845",
      change: "+8%",
      isPositive: true,
      icon: FaShoppingCart,
      color: "bg-blue-500",
    },
    {
      title: "Customers",
      value: "12,254",
      change: "-2%",
      isPositive: false,
      icon: FaUsers,
      color: "bg-purple-500",
    },
    {
      title: "Products",
      value: "1,432",
      change: "+5%",
      isPositive: true,
      icon: FaBox,
      color: "bg-orange-500",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      date: "2024-01-15",
      amount: "$234.00",
      status: "Delivered",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      date: "2024-01-15",
      amount: "$156.00",
      status: "Processing",
    },
    {
      id: "#ORD-003",
      customer: "Mike Johnson",
      date: "2024-01-14",
      amount: "$89.00",
      status: "Shipped",
    },
    {
      id: "#ORD-004",
      customer: "Sarah Wilson",
      date: "2024-01-14",
      amount: "$345.00",
      status: "Delivered",
    },
    {
      id: "#ORD-005",
      customer: "Tom Brown",
      date: "2024-01-13",
      amount: "$67.00",
      status: "Cancelled",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 pt-24">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <div
                    className={`flex items-center mt-2 text-sm ${
                      stat.isPositive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.isPositive ? (
                      <FaArrowUp className="mr-1" />
                    ) : (
                      <FaArrowDown className="mr-1" />
                    )}
                    <span>{stat.change} from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${stat.color} text-white`}>
                  <Icon className="text-xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Orders
            </h3>
            <Link
              to="/dashboard/orders"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-sm font-medium text-gray-600">
                    Order ID
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">
                    Customer
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">
                    Amount
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {order.customer}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {order.amount}
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/dashboard/products/new"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center"
            >
              <FaBox className="text-2xl text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Add Product</p>
            </Link>
            <Link
              to="/dashboard/categories"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-center"
            >
              <FaTags className="text-2xl text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">
                Manage Categories
              </p>
            </Link>
            <Link
              to="/shop"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors text-center"
            >
              <FaShoppingCart className="text-2xl text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">View Store</p>
            </Link>
            <Link
              to="/dashboard/analytics"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors text-center"
            >
              <FaMoneyBillWave className="text-2xl text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">
                View Analytics
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
