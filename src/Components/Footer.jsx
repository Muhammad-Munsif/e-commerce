import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-4 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 border-b border-gray-700 pb-10">
          {/* 1. e-Shop Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Easyshop</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Your one-stop shop for all your needs. Shop with us and experience
              the best online shopping experience.
            </p>
          </div>
          {/* 2. Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* 3. Follow Us / Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-gray-800 transition duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-gray-800 transition duration-300"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-gray-800 transition duration-300"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-gray-800 transition duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
            {/* Email Subscription */}
            <form className="flex mt-6">
              <input
                type="email"
                placeholder="Your email"
                className="py-3 px-4 w-full text-sm bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Enter your email"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 text-sm transition duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Footer Bottom / Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-xs text-gray-500">
          <p className="mb-2 sm:mb-0">
            &copy; 2025 Easyshop. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
