// pages/Electronics.jsx
import React from 'react';
import { FaBolt, FaShieldAlt, FaShippingFast, FaTools, FaStar, FaShoppingCart } from 'react-icons/fa';
import { IoIosPhonePortrait, IoIosWatch } from 'react-icons/io';
import { MdComputer, MdTv, MdHeadset, MdChargingStation } from 'react-icons/md';
import ProductGrid from '../Components/ProductGrid';
import ProductCard from '../Components/ProductCard';
import { productsData } from '../data/productsData';

const Electronics = () => {
  const electronicsProducts = productsData.filter(product => product.category === 'Electronics');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 container mx-auto mt-28 px-4 md:px-16 lg:px-8 py-4 flex flex-col md:flex-row space-x-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MdComputer className="text-4xl text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Electronics
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest gadgets, smart devices, and cutting-edge technology
          </p>
        </div>

        {/* Quick Access Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <IoIosPhonePortrait className="text-3xl text-blue-600 mx-auto mb-3" />
            <div className="font-semibold text-gray-800">Smartphones</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <IoIosWatch className="text-3xl text-green-600 mx-auto mb-3" />
            <div className="font-semibold text-gray-800">Wearables</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <MdComputer className="text-3xl text-purple-600 mx-auto mb-3" />
            <div className="font-semibold text-gray-800">Computers</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <MdTv className="text-3xl text-red-600 mx-auto mb-3" />
            <div className="font-semibold text-gray-800">TV & Audio</div>
          </div>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border-l-4 border-blue-500">
            <div className="text-2xl font-bold text-blue-600 mb-2 flex items-center justify-center">
              <FaShoppingCart className="mr-2" />
              {electronicsProducts.length}
            </div>
            <div className="text-gray-600">Products Available</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600 mb-2 flex items-center justify-center">
              <FaStar className="mr-2" />
              {Math.max(...electronicsProducts.map(p => p.rating))}
            </div>
            <div className="text-gray-600">Highest Rated</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border-l-4 border-purple-500">
            <div className="text-2xl font-bold text-purple-600 mb-2 flex items-center justify-center">
              <MdChargingStation className="mr-2" />
              ${Math.min(...electronicsProducts.map(p => p.price))}
            </div>
            <div className="text-gray-600">Starting From</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <MdHeadset className="mr-3 text-blue-600" />
            Featured Electronics
          </h2>
          <ProductGrid>
            {electronicsProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Our Electronics?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBolt className="text-blue-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Latest Technology</h4>
              <p className="text-gray-600 text-sm">Stay ahead with cutting-edge innovations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-green-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">1-Year Warranty</h4>
              <p className="text-gray-600 text-sm">Comprehensive protection on all products</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShippingFast className="text-purple-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Free Shipping</h4>
              <p className="text-gray-600 text-sm">Free delivery on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTools className="text-orange-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">24/7 technical assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;