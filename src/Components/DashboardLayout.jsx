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
  FaShoppingCart,
  FaStar,
  FaBars,
  FaTimes,
  FaHome,
  FaList,
} from "react-icons/fa";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        { month: "Jan", sales: 12000, revenue: 11000 },
        { month: "Feb", sales: 19000, revenue: 18000 },
        { month: "Mar", sales: 15000, revenue: 14000 },
        { month: "Apr", sales: 22000, revenue: 21000 },
        { month: "May", sales: 28000, revenue: 26500 },
        { month: "Jun", sales: 32000, revenue: 30000 },
        { month: "Jul", sales: 45236, revenue: 42000 },
      ],
      categories: [
        { name: "Electronics", value: 45, color: "#3b82f6" },
        { name: "Clothing", value: 25, color: "#ef4444" },
        { name: "Home & Garden", value: 15, color: "#10b981" },
        { name: "Books", value: 10, color: "#f59e0b" },
        { name: "Other", value: 5, color: "#8b5cf6" },
      ],
      dailySales: [
        { day: "Mon", sales: 4200, orders: 45 },
        { day: "Tue", sales: 5800, orders: 62 },
        { day: "Wed", sales: 5100, orders: 54 },
        { day: "Thu", sales: 7200, orders: 78 },
        { day: "Fri", sales: 8900, orders: 91 },
        { day: "Sat", sales: 11500, orders: 104 },
        { day: "Sun", sales: 9800, orders: 87 },
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
        return <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />;
      case "shipped":
        return <FaShippingFast className="w-3 h-3 sm:w-4 sm:h-4" />;
      case "processing":
        return <FaBoxOpen className="w-3 h-3 sm:w-4 sm:h-4" />;
      case "cancelled":
        return <FaExclamationTriangle className="w-3 h-3 sm:w-4 sm:h-4" />;
      default:
        return <FaBoxOpen className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  const StatCard = ({ title, value, change, icon, color }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{title}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 sm:mt-2 truncate">{value}</p>
          <div className={`flex items-center mt-1 sm:mt-2 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? <FaArrowUp className="w-3 h-3 mr-1" /> : <FaArrowDown className="w-3 h-3 mr-1" />}
            <span className="text-xs sm:text-sm font-medium">{Math.abs(change)}% from last month</span>
          </div>
        </div>
        <div className={`p-2 sm:p-3 rounded-full ml-4 flex-shrink-0 ${color}`}>
          {React.cloneElement(icon, { className: "w-4 h-4 sm:w-6 sm:h-6 text-white" })}
        </div>
      </div>
    </div>
  );

  const SalesChart = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-0">Monthly Revenue</h3>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-1 sm:mr-2"></div>
            <span className="text-xs sm:text-sm text-gray-600">Revenue</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
            <span className="text-xs sm:text-sm text-gray-600">Sales</span>
          </div>
        </div>
      </div>
      <div className="h-48 sm:h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dashboardData.sales.monthlyData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: isMobile ? 10 : 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: isMobile ? 10 : 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip 
              formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: isMobile ? '12px' : '14px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3b82f6" 
              strokeWidth={isMobile ? 2 : 3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: isMobile ? 3 : 4 }}
              activeDot={{ r: isMobile ? 4 : 6, fill: '#1d4ed8' }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#10b981" 
              strokeWidth={isMobile ? 1 : 2}
              strokeDasharray="5 5"
              dot={{ fill: '#10b981', strokeWidth: 2, r: isMobile ? 2 : 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const DailySalesChart = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Daily Sales Performance</h3>
      <div className="h-48 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dashboardData.sales.dailySales}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: isMobile ? 10 : 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: isMobile ? 10 : 12 }}
            />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'sales') return [`$${value.toLocaleString()}`, 'Sales'];
                return [value, 'Orders'];
              }}
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: isMobile ? '12px' : '14px'
              }}
            />
            <Bar 
              dataKey="sales" 
              fill="#8b5cf6" 
              radius={[4, 4, 0, 0]}
              name="Sales"
            />
            <Bar 
              dataKey="orders" 
              fill="#f59e0b" 
              radius={[4, 4, 0, 0]}
              name="Orders"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const CategoryChart = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Sales by Category</h3>
      <div className="h-48 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dashboardData.sales.categories}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
              outerRadius={isMobile ? 60 : 80}
              fill="#8884d8"
              dataKey="value"
            >
              {dashboardData.sales.categories.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Percentage']}
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: isMobile ? '12px' : '14px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
        {dashboardData.sales.categories.map((category, index) => (
          <div key={category.name} className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center truncate">
              <div 
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1 sm:mr-2 flex-shrink-0"
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="text-gray-600 truncate">{category.name}</span>
            </div>
            <span className="font-medium text-gray-900 ml-1">{category.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  const RecentOrdersTable = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-0">Recent Orders</h3>
        <button 
          onClick={() => navigate("/orders")}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium self-start sm:self-auto"
        >
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">Order ID</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">Customer</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">Date</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">Amount</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">Status</th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900">{order.id}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 truncate max-w-[80px] sm:max-w-none">{order.customer}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600">{order.date}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900">${order.amount}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="ml-1 capitalize hidden sm:inline">{order.status}</span>
                  </span>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <button 
                    onClick={() => navigate(`/track-order/${order.id}`)}
                    className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium"
                  >
                    Track
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Top Products</h3>
      <div className="space-y-3 sm:space-y-4">
        {dashboardData.topProducts.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-3 sm:p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaShoppingBag className="w-3 h-3 sm:w-5 sm:h-5 text-gray-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{product.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">${product.price}</p>
              </div>
            </div>
            <div className="text-right ml-2 sm:ml-4">
              <p className="font-medium text-gray-900 text-sm sm:text-base">${product.revenue.toLocaleString()}</p>
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <FaStar className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 mr-1" />
                <span>{product.rating}</span>
                <span className="mx-1 sm:mx-2">•</span>
                <span>{product.sales} sales</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 pt-16"> {/* Added pt-16 for navbar spacing */}
      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed sm:relative z-30 bg-white shadow-lg transition-all duration-300 h-[calc(100vh-4rem)] ${
        sidebarOpen ? 'w-64 translate-x-0' : '-translate-x-full sm:translate-x-0 sm:w-20'
      }`}>
        <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between sm:justify-center">
          <h1 className={`text-xl font-bold text-gray-800 ${!sidebarOpen && 'sm:hidden'}`}>Dashboard</h1>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 sm:hidden"
          >
            <FaTimes className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 hidden sm:block"
          >
            <FaList className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <nav className="mt-4 sm:mt-6">
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
              onClick={() => {
                setActiveTab(item.id);
                if (isMobile) setSidebarOpen(false);
              }}
              className={`w-full flex items-center px-4 sm:px-6 py-3 text-left transition-colors ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className={`ml-3 font-medium ${!sidebarOpen && 'sm:hidden'}`}>{item.name}</span>
            </button>
          ))}
          
          {/* Back to Home Link */}
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center px-4 sm:px-6 py-3 text-left text-gray-600 hover:bg-gray-50 transition-colors mt-4 border-t border-gray-200"
          >
            <FaHome className="w-5 h-5 flex-shrink-0" />
            <span className={`ml-3 font-medium ${!sidebarOpen && 'sm:hidden'}`}>Back to Shop</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto min-w-0">
        {/* Dashboard Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 sm:hidden"
              >
                <FaBars className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 capitalize">{activeTab}</h1>
                <p className="text-sm text-gray-600 hidden sm:block">
                  {activeTab === "overview" && "Your store performance overview"}
                  {activeTab === "orders" && "Manage and track customer orders"}
                  {activeTab === "products" && "Manage your product catalog"}
                  {activeTab === "customers" && "View and manage customer data"}
                  {activeTab === "analytics" && "Detailed analytics and reports"}
                  {activeTab === "settings" && "Store configuration and settings"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                  <FaBell className="w-4 h-4 sm:w-5 sm:h-5" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-600">Store Owner</p>
                </div>
                <FaUserCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-3 sm:p-4 md:p-6">
          {activeTab === "overview" && (
            <div className="space-y-4 sm:space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                <StatCard
                  title="Total Revenue"
                  value={`$${dashboardData.overview.totalRevenue.toLocaleString()}`}
                  change={dashboardData.overview.revenueChange}
                  icon={<FaDollarSign />}
                  color="bg-green-500"
                />
                <StatCard
                  title="Total Orders"
                  value={dashboardData.overview.totalOrders.toLocaleString()}
                  change={dashboardData.overview.ordersChange}
                  icon={<FaShoppingBag />}
                  color="bg-blue-500"
                />
                <StatCard
                  title="Total Customers"
                  value={dashboardData.overview.totalCustomers.toLocaleString()}
                  change={dashboardData.overview.customersChange}
                  icon={<FaUsers />}
                  color="bg-purple-500"
                />
                <StatCard
                  title="Total Products"
                  value={dashboardData.overview.totalProducts.toLocaleString()}
                  change={dashboardData.overview.productsChange}
                  icon={<FaBoxOpen />}
                  color="bg-orange-500"
                />
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <SalesChart />
                <CategoryChart />
              </div>

              <div className="grid grid-cols-1">
                <DailySalesChart />
              </div>

              {/* Tables Section */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
                <div className="xl:col-span-2">
                  <RecentOrdersTable />
                </div>
                <div className="xl:col-span-1">
                  <TopProducts />
                </div>
              </div>
            </div>
          )}

          {/* Other tabs */}
          {activeTab === "orders" && (
            <div className="space-y-6">
              <RecentOrdersTable />
            </div>
          )}

          {activeTab === "products" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Products Management</h2>
              <TopProducts />
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-700">Full products management interface coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === "customers" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Customers</h2>
              <p className="text-gray-600">Customer management interface coming soon...</p>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SalesChart />
                <CategoryChart />
              </div>
              <DailySalesChart />
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

export default Dashboard;