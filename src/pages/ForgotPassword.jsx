import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = ({ openLogin, openSignUp }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen max-w-7xl container mx-auto mt-40 px-4 md:px-16 lg:px-8 py-4 flex flex-col md:flex-row space-x-2">
        <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
        <div className="text-center py-4">
          <div className="mb-4 flex justify-center">
            <FaEnvelope className="w-12 h-12 text-green-500" />
          </div>
          <p className="text-gray-700 mb-2">
            We've sent a password reset link to
          </p>
          <p className="font-semibold text-gray-900 mb-4">{email}</p>
          <p className="text-gray-600 text-sm mb-6">
            Please check your email and click the link to reset your password.
          </p>
          <button
            onClick={openLogin}
            className="w-full bg-gray-600 py-2 text-white rounded mb-4"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-3 border border-gray-200 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 py-2 text-white rounded"
          >
            Send Reset Link
          </button>
        </div>
      </form>

      <div className="text-center mb-4">
        <button className="text-red-800" onClick={openLogin}>
          ← Back to Login
        </button>
      </div>

      <div className="text-center">
        <span className="text-gray-700">Don't have an Account?</span>
        <button className="text-red-800" onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
