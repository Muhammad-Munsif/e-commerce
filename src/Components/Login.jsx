// src/Components/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ openSignUp }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-3 border border-gray-300 rounded"
            autoComplete="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full py-2 px-3 border border-gray-300 rounded"
            autoComplete="current-password"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>

          <button
            type="button"
            className="text-red-800 hover:underline font-medium"
            onClick={() => navigate("/forget-password")}
          >
            Forgot Password?
          </button>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 py-2 text-white rounded-lg hover:bg-red-700"
          >
            Login
          </button>
        </div>
      </form>

      <div className="text-center">
        <span className="text-gray-700">Don't have an Account? </span>
        <button
          className="text-red-800 hover:underline font-medium"
          onClick={openSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
