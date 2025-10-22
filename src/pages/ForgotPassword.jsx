// src/Components/ForgotPassword.jsx
import React, { useState } from "react";

const ForgotPassword = ({ openLogin, openSignUp }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset for:", email);
    // Handle forgot password logic
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <p className="text-gray-600 mb-4">Enter your email to reset your password</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-3 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 py-2 text-white rounded hover:bg-red-700">
            Send Reset Link
          </button>
        </div>
      </form>
      
      <div className="text-center mb-4">
        <button 
          className="text-red-800 hover:underline font-medium"
          onClick={openLogin}
        >
          ← Back to Login
        </button>
      </div>

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

export default ForgotPassword;