// pages/Beauty.jsx
import React from "react";
import { FaRegSmile, FaShippingFast, FaStar, FaHeart } from "react-icons/fa";
import { GiLipstick, GiPerfumeBottle } from "react-icons/gi";
import { IoSkullSharp, IoBrushSharp } from "react-icons/io5";
import { MdFace, MdEmail } from "react-icons/md";
import ProductGrid from "../Components/ProductGrid";
import ProductCard from "../Components/ProductCard";
import { productsData } from "../data/productsData";

const Beauty = () => {
  const beautyProducts = productsData.filter(
    (product) => product.category === "Beauty"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 container mx-auto mt-28 px-4 md:px-16 lg:px-8 py-4 flex flex-col md:flex-row space-x-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center my-4">
            <GiLipstick className="text-4xl text-rose-600" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Beauty & Cosmetics
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your perfect beauty routine with our premium skincare,
            makeup, and wellness products
          </p>
        </div>

        {/* Beauty Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdFace className="text-rose-600 text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Skincare</h3>
            <p className="text-gray-600 text-sm">
              Nourish and protect your skin
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IoBrushSharp className="text-pink-600 text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Makeup</h3>
            <p className="text-gray-600 text-sm">Express your unique style</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GiPerfumeBottle className="text-purple-600 text-2xl" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Fragrance</h3>
            <p className="text-gray-600 text-sm">
              Signature scents for every occasion
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRegSmile className="mr-3 text-rose-600" />
            Beauty Essentials
          </h2>
          <ProductGrid>
            {beautyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <FaHeart className="text-3xl text-rose-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Beauty Tips & Offers
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Subscribe to get expert beauty advice, exclusive offers, and new
            product launches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap flex items-center justify-center">
              <FaStar className="mr-2" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
