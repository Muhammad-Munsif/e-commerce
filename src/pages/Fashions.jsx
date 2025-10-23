// pages/Fashion.jsx
import React from 'react';
import { FaTshirt, FaShoePrints, FaGem, FaShippingFast, FaRecycle } from 'react-icons/fa';
import { IoShirtSharp, IoBagHandle } from 'react-icons/io5';
import { GiNecklace, GiRunningShoe } from 'react-icons/gi';
import ProductGrid from '../Components/ProductGrid';
import ProductCard from '../Components/ProductCard';
import { productsData } from '../data/productsData';

const Fashions = () => {
  const fashionProducts = productsData.filter(product => product.category === 'Fashion');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaTshirt className="text-4xl text-pink-600" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fashion Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Express your style with our curated collection of trendy and timeless fashion pieces
          </p>
        </div>

        {/* Fashion Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <IoShirtSharp className="text-3xl text-blue-500 mx-auto mb-3" />
            <div className="font-semibold text-gray-800">Clothing</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <GiRunningShoe className="text-3xl text-green-500 mx-auto mb-3" />
            <div className="font-semibold text-gray-800">Footwear</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <IoBagHandle className="text-3xl text-yellow-500 mx-auto mb-3" />
            <div className="font-semibold text-gray-800">Bags</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <GiNecklace className="text-3xl text-purple-500 mx-auto mb-3" />
            <div className="font-semibold text-gray-800">Accessories</div>
          </div>
        </div>

        {/* Category Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-pink-500">
            <div className="flex items-center mb-4">
              <FaTshirt className="text-pink-500 text-xl mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Spring Collection</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Discover our latest spring styles featuring light fabrics, vibrant colors, and comfortable fits perfect for the season.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
              View Collection
              <FaShippingFast className="ml-2" />
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <FaRecycle className="text-green-500 text-xl mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Sustainable Fashion</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Explore our eco-friendly collection made from sustainable materials and ethical manufacturing processes.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
              Learn More
              <FaGem className="ml-2" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaTshirt className="mr-3 text-pink-600" />
              Latest Fashion
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                <IoShirtSharp className="mr-2" />
                All Items
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                <FaTshirt className="mr-2" />
                Clothing
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                <FaShoePrints className="mr-2" />
                Footwear
              </button>
            </div>
          </div>
          <ProductGrid>
            {fashionProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>
      </div>
    </div>
  );
};

export default Fashions;