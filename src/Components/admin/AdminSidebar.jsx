// src/components/admin/AdminSidebar.js (With Tailwind Scrollbar)
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaTags,
  FaChartBar,
  FaCog,
  FaTimes,
  FaSignOutAlt,
  FaStore,
} from "react-icons/fa";

const AdminSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  isMobile,
  currentPath,
}) => {
  const navigate = useNavigate();

  const menuItems = [
    { path: "/admin", label: "DashboardLayout", icon: FaTachometerAlt },
    { path: "/admin/products", label: "Products", icon: FaBox },
    { path: "/admin/orders", label: "Orders", icon: FaShoppingCart },
    { path: "/admin/users", label: "Users", icon: FaUsers },
    { path: "/admin/categories", label: "Categories", icon: FaTags },
    { path: "/admin/analytics", label: "Analytics", icon: FaChartBar },
    { path: "/admin/settings", label: "Settings", icon: FaCog },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-gray-50 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Sidebar Header - Fixed */}
        <div className="flex items-center justify-between h-16 px-4 bg-gray-900 flex-shrink-0">
          <div className="flex items-center">
            <FaStore className="w-8 h-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">
              Admin Panel
            </span>
          </div>
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Navigation Container with Scroll */}
        <div className="flex-1 flex flex-col min-h-0">
          <nav className="flex-1 overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;

                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`
                      w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors
                      ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }
                    `}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="ml-3 font-medium truncate">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Bottom Actions - Fixed at bottom */}
          <div className="flex-shrink-0 border-t border-gray-700 px-4 py-4 space-y-2">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
            >
              <FaStore className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3 font-medium truncate">Back to Store</span>
            </button>

            <button
              onClick={() => {
                // Implement logout logic
                navigate("/");
              }}
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
            >
              <FaSignOutAlt className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3 font-medium truncate">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
