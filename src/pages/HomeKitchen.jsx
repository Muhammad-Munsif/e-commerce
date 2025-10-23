// pages/HomeKitchen.jsx
import React from 'react';
import { FaUtensils, FaBed, FaBroom, FaLightbulb, FaTruck, FaStar } from 'react-icons/fa';
import { IoHome, IoRestaurant } from 'react-icons/io5';
import { GiKitchenKnives, GiVacuumCleaner } from 'react-icons/gi';
import ProductGrid from '../Components/ProductGrid';
import ProductCard from '../Components/ProductCard';
import { productsData } from '../data/productsData';

const HomeKitchen = () => {
  const homeKitchenProducts = productsData.filter(product => product.category === 'Home & Kitchen');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 pt-40 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <IoHome className="text-4xl text-orange-600" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Home & Kitchen
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your living spaces with our premium home essentials and kitchen innovations
          </p>
        </div>

        {/* Quick Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <GiKitchenKnives className="text-3xl text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-semibold text-gray-800">Kitchen</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <FaBed className="text-3xl text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-semibold text-gray-800">Bedroom</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <GiVacuumCleaner className="text-3xl text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-semibold text-gray-800">Cleaning</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <FaLightbulb className="text-3xl text-yellow-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-semibold text-gray-800">Lighting</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <IoRestaurant className="mr-3 text-orange-600" />
            Home Essentials
          </h2>
          <ProductGrid>
            {homeKitchenProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 md:p-8 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center">
                <FaStar className="mr-2" />
                Spring Home Refresh
              </h3>
              <p className="opacity-90 flex items-center">
                <FaTruck className="mr-2" />
                Get 20% off on all home decor items this season
              </p>
            </div>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center">
              <FaUtensils className="mr-2" />
              Shop the Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeKitchen;