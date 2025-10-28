import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
} from "recharts";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Get data from Redux store
  const adminState = useSelector((state) => state.admin);
  const orders = useSelector((state) => state.orders.orders);
  const products = useSelector((state) => state.product.products);
  const cart = useSelector((state) => state.cart);

  const notifications = adminState.notifications;
  const dashboardStats = adminState.dashboardStats;
  const salesData = adminState.salesData;
  const topProducts = adminState.topProducts;

  // Transform orders for recent orders table
  const recentOrders = useMemo(() => {
    return orders
      .slice()
      .sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date))
      .slice(0, 5)
      .map((order) => ({
        id: order.id || order.orderNumber,
        customer: order.shippingInformation?.name || order.customer || "Guest",
        date: order.date || order.createdAt?.split("T")[0] || new Date().toISOString().split("T")[0],
        amount: order.totalPrice || 0,
        status: order.status || "processing",
        items: order.products?.length || 0,
      }));
  }, [orders]);

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use data from Redux store
  const dashboardData = useMemo(() => ({
    overview: {
      totalRevenue: dashboardStats.totalRevenue || orders.reduce((sum, order) => sum + (order.totalPrice || 0), 0),
      totalOrders: dashboardStats.totalOrders || orders.length,
      totalCustomers: dashboardStats.totalCustomers || new Set(orders.map(o => o.shippingInformation?.email || o.customer)).size,
      totalProducts: dashboardStats.totalProducts || products.length,
      revenueChange: dashboardStats.revenueChange,
      ordersChange: dashboardStats.ordersChange,
      customersChange: dashboardStats.customersChange,
      productsChange: dashboardStats.productsChange,
    },
    sales: {
      monthlyData: salesData.monthlyData || [],
      categories: salesData.categories || [],
      dailySales: salesData.dailySales || [],
    },
    topProducts: topProducts || [],
  }), [dashboardStats, salesData, topProducts, orders, products]);

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
          <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">
            {title}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 sm:mt-2 truncate">
            {value}
          </p>
          <div
            className={`flex items-center mt-1 sm:mt-2 ${
              change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {change >= 0 ? (
              <FaArrowUp className="w-3 h-3 mr-1" />
            ) : (
              <FaArrowDown className="w-3 h-3 mr-1" />
            )}
            <span className="text-xs sm:text-sm font-medium">
              {Math.abs(change)}% from last month
            </span>
          </div>
        </div>
        <div className={`p-2 sm:p-3 rounded-full ml-4 flex-shrink-0 ${color}`}>
          {React.cloneElement(icon, {
            className: "w-4 h-4 sm:w-6 sm:h-6 text-white",
          })}
        </div>
      </div>
    </div>
  );

  const SalesChart = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-0">
          Monthly Revenue
        </h3>
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
              tick={{ fill: "#6b7280", fontSize: isMobile ? 10 : 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: isMobile ? 10 : 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, "Amount"]}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                fontSize: isMobile ? "12px" : "14px",
              }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={isMobile ? 2 : 3}
              dot={{ fill: "#3b82f6", strokeWidth: 2, r: isMobile ? 3 : 4 }}
              activeDot={{ r: isMobile ? 4 : 6, fill: "#1d4ed8" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#10b981"
              strokeWidth={isMobile ? 1 : 2}
              strokeDasharray="5 5"
              dot={{ fill: "#10b981", strokeWidth: 2, r: isMobile ? 2 : 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const DailySalesChart = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
        Daily Sales Performance
      </h3>
      <div className="h-48 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dashboardData.sales.dailySales}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: isMobile ? 10 : 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: isMobile ? 10 : 12 }}
            />
            <Tooltip
              formatter={(value, name) => {
                if (name === "sales")
                  return [`$${value.toLocaleString()}`, "Sales"];
                return [value, "Orders"];
              }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                fontSize: isMobile ? "12px" : "14px",
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
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
        Sales by Category
      </h3>
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
              formatter={(value) => [`${value}%`, "Percentage"]}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                fontSize: isMobile ? "12px" : "14px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
        {dashboardData.sales.categories.map((category, index) => (
          <div
            key={category.name}
            className="flex items-center justify-between text-xs sm:text-sm"
          >
            <div className="flex items-center truncate">
              <div
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1 sm:mr-2 flex-shrink-0"
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="text-gray-600 truncate">{category.name}</span>
            </div>
            <span className="font-medium text-gray-900 ml-1">
              {category.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const RecentOrdersTable = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-0">
          Recent Orders
        </h3>
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
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">
                Order ID
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">
                Customer
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">
                Amount
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 truncate max-w-[80px] sm:max-w-none">
                  {order.customer}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600">
                  {order.date}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900">
                  ${order.amount}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    <span className="ml-1 capitalize hidden sm:inline">
                      {order.status}
                    </span>
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
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
        Top Products
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {dashboardData.topProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-3 sm:p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaShoppingBag className="w-3 h-3 sm:w-5 sm:h-5 text-gray-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                  {product.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  ${product.price}
                </p>
              </div>
            </div>
            <div className="text-right ml-2 sm:ml-4">
              <p className="font-medium text-gray-900 text-sm sm:text-base">
                ${product.revenue.toLocaleString()}
              </p>
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
    <div className="flex min-h-screen bg-gray-50 ">
      {" "}
      {/* Added pt-16 for navbar spacing */}
      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Sidebar */}
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto min-w-0">
        

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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Products Management
              </h2>
              <TopProducts />
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-700">
                  Full products management interface coming soon...
                </p>
              </div>
            </div>
          )}

          {activeTab === "customers" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Customers
              </h2>
              <p className="text-gray-600">
                Customer management interface coming soon...
              </p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Settings
              </h2>
              <p className="text-gray-600">Settings interface coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
