// src/components/admin/AdminHeader.js (Simplified for use with navbar)
import React from "react";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import Navbar from "../Navbar";

const AdminHeader = ({ sidebarOpen, setSidebarOpen, isMobile }) => {
  return (
    <>
      <header className="lg:hidden bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 lg:px-6 py-3">
      
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <FaBars className="w-5 h-5" />
            </button>

            {/* Page Title */}
            <div className="ml-4">
              <h1 className="text-lg font-semibold text-gray-900">
                Admin Panel
              </h1>
            </div>
          </div>
         
          <div className="flex items-center space-x-3">
            
            <button className="p-2 text-gray-600 hover:text-gray-900 relative">
              <FaBell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

           
            <div className="flex items-center space-x-2">
              <FaUserCircle className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default AdminHeader;
