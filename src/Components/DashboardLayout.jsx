import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingBag,
  FaUsers,
  FaDollarSign,
  FaChartLine,
  FaBoxOpen,
  FaShippingFast,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowUp,
  FaArrowDown,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaShoppingCart,
  FaStar,
  FaEye,
} from "react-icons/fa";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);

  // Mock data - replace with actual API calls
  const dashboardData = {
    overview: {
      totalRevenue: 45236.89,
      totalOrders: 1247,
      totalCustomers: 892,
      totalProducts: 156,
      revenueChange: 12.5,
      ordersChange: 8.3,
      customersChange: 15.7,
      productsChange: 5.2,
    },
    sales: {
      monthlyData: [
        { month: "Jan", sales: 12000 },
        { month: "Feb", sales: 19000 },
        { month: "Mar", sales: 15000 },
        { month: "Apr", sales: 22000 },
        { month: "May", sales: 28000 },
        { month: "Jun", sales: 32000 },
        { month: "Jul", sales: 45236 },
      ],
      categories: [
        { name: "Electronics", value: 45 },
        { name: "Clothing", value: 25 },
        { name: "Home & Garden", value: 15 },
        { name: "Books", value: 10 },
        { name: "Other", value: 5 },
      ],
    },
    recentOrders: [
      {
        id: "ORD-123456",
        customer: "John Doe",
        date: "2024-01-20",
        amount: 139.97,
        status: "delivered",
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
      {
        id: "ORD-123458",
        customer: "Mike Johnson",
        date: "2024-01-19",
        amount: 234.5,
        status: "processing",
        items: 5,
      },
      {
        id: "ORD-123459",
        customer: "Sarah Wilson",
        date: "2024-01-18",
        amount: 67.99,
        status: "delivered",
        items: 1,
      },
      {
        id: "ORD-123460",
        customer: "Tom Brown",
        date: "2024-01-18",
        amount: 156.75,
        status: "cancelled",
        items: 2,
      },
    ],
    topProducts: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        sales: 142,
        revenue: 14198.58,
        rating: 4.5,
      },
      {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        sales: 89,
        revenue: 17799.11,
        rating: 4.3,
      },
      {
        id: 3,
        name: "Phone Case",
        price: 19.99,
        sales: 234,
        revenue: 4677.66,
        rating: 4.7,
      },
      {
        id: 4,
        name: "Laptop Stand",
        price: 49.99,
        sales: 78,
        revenue: 3899.22,
        rating: 4.4,
      },
    ],
  };

  useEffect(() => {
    // Simulate API calls
    setRecentOrders(dashboardData.recentOrders);
    setNotifications([
      {
        id: 1,
        type: "order",
        message: "New order #ORD-123461 received",
        time: "5 min ago",
        read: false,
      },
      {
        id: 2,
        type: "stock",
        message: "Low stock alert for Wireless Headphones",
        time: "1 hour ago",
        read: false,
      },
      {
        id: 3,
        type: "payment",
        message: "Payment failed for order #ORD-123455",
        time: "2 hours ago",
        read: true,
      },
    ]);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <FaCheckCircle className="w-4 h-4" />;
      case "shipped":
        return <FaShippingFast className="w-4 h-4" />;
      case "processing":
        return <FaBoxOpen className="w-4 h-4" />;
      case "cancelled":
        return <FaExclamationTriangle className="w-4 h-4" />;
      default:
        return <FaBoxOpen className="w-4 h-4" />;
    }
  };

  const StatCard = ({ title, value, change, icon, color }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <div className={`flex items-center mt-2 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? <FaArrowUp className="w-3 h-3 mr-1" /> : <FaArrowDown className="w-3 h-3 mr-1" />}
            <span className="text-sm font-medium">{Math.abs(change)}% from last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  const RecentOrdersTable = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <button 
          onClick={() => navigate("/orders")}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Order ID</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Amount</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900">{order.id}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{order.customer}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{order.date}</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">${order.amount}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="ml-1 capitalize">{order.status}</span>
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button 
                    onClick={() => navigate(`/orders/${order.id}`)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const TopProducts = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Products</h3>
      <div className="space-y-4">
        {dashboardData.topProducts.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                <FaShoppingBag className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{product.name}</p>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">${product.revenue.toLocaleString()}</p>
              <div className="flex items-center text-sm text-gray-600">
                <FaStar className="w-3 h-3 text-yellow-400 mr-1" />
                <span>{product.rating}</span>
                <span className="mx-2">•</span>
                <span>{product.sales} sales</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SalesChart = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Sales Overview</h3>
      <div className="h-64 flex items-end space-x-2">
        {dashboardData.sales.monthlyData.map((month, index) => (
          <div key={month.month} className="flex flex-col items-center flex-1">
            <div
              className="w-full bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700"
              style={{ height: `${(month.sales / 50000) * 100}%` }}
            />
            <span className="text-xs text-gray-600 mt-2">{month.month}</span>
            <span className="text-xs font-medium text-gray-900">${(month.sales / 1000).toFixed(0)}k</span>
          </div>
        ))}
      </div>
    </div>
  );

  const CategoryDistribution = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Sales by Category</h3>
      <div className="space-y-4">
        {dashboardData.sales.categories.map((category) => (
          <div key={category.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-900">{category.name}</span>
              <span className="text-gray-600">{category.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${category.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
        <div className="p-6 border-b border-gray-200">
          <h1 className={`text-xl font-bold text-gray-800 ${!sidebarOpen && 'hidden'}`}>ShopDashboard</h1>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FaCog className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <nav className="mt-6">
          {[
            { id: "overview", name: "Overview", icon: FaChartLine },
            { id: "orders", name: "Orders", icon: FaShoppingBag },
            { id: "products", name: "Products", icon: FaBoxOpen },
            { id: "customers", name: "Customers", icon: FaUsers },
            { id: "analytics", name: "Analytics", icon: FaDollarSign },
            { id: "settings", name: "Settings", icon: FaCog },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className={`ml-3 font-medium ${!sidebarOpen && 'hidden'}`}>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FaSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                  <FaBell className="w-5 h-5" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-600">Admin</p>
                </div>
                <FaUserCircle className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  title="Total Revenue"
                  value={`$${dashboardData.overview.totalRevenue.toLocaleString()}`}
                  change={dashboardData.overview.revenueChange}
                  icon={<FaDollarSign className="w-6 h-6 text-white" />}
                  color="bg-green-500"
                />
                <StatCard
                  title="Total Orders"
                  value={dashboardData.overview.totalOrders.toLocaleString()}
                  change={dashboardData.overview.ordersChange}
                  icon={<FaShoppingBag className="w-6 h-6 text-white" />}
                  color="bg-blue-500"
                />
                <StatCard
                  title="Total Customers"
                  value={dashboardData.overview.totalCustomers.toLocaleString()}
                  change={dashboardData.overview.customersChange}
                  icon={<FaUsers className="w-6 h-6 text-white" />}
                  color="bg-purple-500"
                />
                <StatCard
                  title="Total Products"
                  value={dashboardData.overview.totalProducts.toLocaleString()}
                  change={dashboardData.overview.productsChange}
                  icon={<FaBoxOpen className="w-6 h-6 text-white" />}
                  color="bg-orange-500"
                />
              </div>

              {/* Charts and Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <SalesChart />
                </div>
                <div>
                  <CategoryDistribution />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <RecentOrdersTable />
                </div>
                <div>
                  <TopProducts />
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div>
              <RecentOrdersTable />
            </div>
          )}

          {activeTab === "products" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Products Management</h2>
              <p className="text-gray-600">Products management interface coming soon...</p>
            </div>
          )}

          {activeTab === "customers" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Customers</h2>
              <p className="text-gray-600">Customers management interface coming soon...</p>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h2>
              <p className="text-gray-600">Advanced analytics coming soon...</p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
              <p className="text-gray-600">Settings interface coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;