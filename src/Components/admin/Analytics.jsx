// src/components/admin/Analytics.js
import React, { useState } from "react";
import {
  FaChartLine,
  FaShoppingCart,
  FaUsers,
  FaDollarSign,
  FaEye,
  FaShoppingBag,
  FaCalendar,
  FaDownload,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import Footer from "../Footer";

const Analytics = () => {
  const [dateRange, setDateRange] = useState("30days");
  const [activeChart, setActiveChart] = useState("revenue");

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalRevenue: 125430.89,
      totalOrders: 2847,
      totalCustomers: 1892,
      conversionRate: 3.2,
      avgOrderValue: 156.78,
      revenueChange: 15.7,
      ordersChange: 8.3,
      customersChange: 12.1,
      conversionChange: 2.1,
    },
    revenueData: [
      { date: "Jan", revenue: 12000, orders: 45 },
      { date: "Feb", revenue: 19000, orders: 62 },
      { date: "Mar", revenue: 15000, orders: 54 },
      { date: "Apr", revenue: 22000, orders: 78 },
      { date: "May", revenue: 28000, orders: 91 },
      { date: "Jun", revenue: 32000, orders: 104 },
      { date: "Jul", revenue: 45236, orders: 127 },
    ],
    trafficData: [
      { source: "Direct", visitors: 12450, conversion: 4.2 },
      { source: "Google", visitors: 8920, conversion: 3.8 },
      { source: "Facebook", visitors: 5670, conversion: 2.9 },
      { source: "Instagram", visitors: 4230, conversion: 3.1 },
      { source: "Twitter", visitors: 1980, conversion: 2.4 },
    ],
    productPerformance: [
      { name: "Wireless Headphones", sales: 142, revenue: 14198, growth: 12.5 },
      { name: "Smart Watch", sales: 89, revenue: 17799, growth: 8.3 },
      { name: "Phone Case", sales: 234, revenue: 4677, growth: 25.7 },
      { name: "Laptop Stand", sales: 78, revenue: 3899, growth: 5.2 },
      { name: "Bluetooth Speaker", sales: 56, revenue: 6720, growth: 15.8 },
    ],
    customerAcquisition: [
      { month: "Jan", new: 145, returning: 289 },
      { month: "Feb", new: 167, returning: 312 },
      { month: "Mar", new: 132, returning: 278 },
      { month: "Apr", new: 189, returning: 345 },
      { month: "May", new: 201, returning: 389 },
      { month: "Jun", new: 234, returning: 423 },
      { month: "Jul", new: 278, returning: 467 },
    ],
  };

  const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"];

  const StatCard = ({ title, value, change, icon, color }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <div
            className={`flex items-center mt-2 ${
              change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {change >= 0 ? "↗" : "↘"}
            <span className="text-sm font-medium ml-1">
              {Math.abs(change)}% from last period
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      </div>
    </div>
  );

  return (
    <>
    <div className="space-y-6 min-h-screen bg-red-500 ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Comprehensive store performance insights
          </p>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="1year">Last year</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
            <FaDownload className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={`$${analyticsData.overview.totalRevenue.toLocaleString()}`}
          change={analyticsData.overview.revenueChange}
          icon={<FaDollarSign className="w-6 h-6 text-white" />}
          color="bg-green-500"
        />
        <StatCard
          title="Total Orders"
          value={analyticsData.overview.totalOrders.toLocaleString()}
          change={analyticsData.overview.ordersChange}
          icon={<FaShoppingCart className="w-6 h-6 text-white" />}
          color="bg-blue-500"
        />
        <StatCard
          title="Total Customers"
          value={analyticsData.overview.totalCustomers.toLocaleString()}
          change={analyticsData.overview.customersChange}
          icon={<FaUsers className="w-6 h-6 text-white" />}
          color="bg-purple-500"
        />
        <StatCard
          title="Conversion Rate"
          value={`${analyticsData.overview.conversionRate}%`}
          change={analyticsData.overview.conversionChange}
          icon={<FaEye className="w-6 h-6 text-white" />}
          color="bg-orange-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Revenue Overview
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveChart("revenue")}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  activeChart === "revenue"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setActiveChart("orders")}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  activeChart === "orders"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Orders
              </button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData.revenueData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey={activeChart === "revenue" ? "revenue" : "orders"}
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Traffic Sources
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsData.trafficData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ source, percent }) =>
                    `${source} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="visitors"
                >
                  {analyticsData.trafficData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Acquisition */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Customer Acquisition
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.customerAcquisition}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="new" fill="#3b82f6" name="New Customers" />
                <Bar
                  dataKey="returning"
                  fill="#10b981"
                  name="Returning Customers"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Top Performing Products
          </h3>
          <div className="space-y-4">
            {analyticsData.productPerformance.map((product, index) => (
              <div
                key={product.name}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FaShoppingBag className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">
                      {product.sales} sales
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    ${product.revenue.toLocaleString()}
                  </p>
                  <div
                    className={`flex items-center text-sm ${
                      product.growth >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.growth >= 0 ? "↗" : "↘"}
                    <span className="ml-1">{Math.abs(product.growth)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traffic Sources Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Traffic Sources Details
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Visitors
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Conversion Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Estimated Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {analyticsData.trafficData.map((source, index) => (
                <tr key={source.source}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: COLORS[index] }}
                      ></div>
                      <span className="font-medium text-gray-900">
                        {source.source}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {source.visitors.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {source.conversion}%
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    $
                    {Math.round(
                      (source.visitors * source.conversion * 156.78) / 100
                    ).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      <div className=" w-screen px-0 mx-0 max-w-full bg-red-500 mt-3">    
        <Footer/>
      </div>
    </>
  );
};

export default Analytics;
