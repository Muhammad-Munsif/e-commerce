import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center  w-3/12 sm:w-full p-5 border space-y-4 border-red-500 bg-white rounded-lg shadow-md ">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600">Page not found</p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg hover:scale-105 duration-300 transition-all"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};
export default Error404;
