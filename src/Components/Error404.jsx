import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 mt-10">
      <div className="text-center w-full max-w-md p-8 border space-y-6 border-red-200 bg-white rounded-xl shadow-lg">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900">
          404
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 font-medium">
          Page not found
        </p>
        <p className="text-gray-500">
          The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded-lg hover:scale-105 duration-300 transition-all font-medium"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};
export default Error404;
