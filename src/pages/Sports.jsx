// pages/Sports.jsx
import React from "react";
import {
  FaRunning,
  FaDumbbell,
  FaCampground,
  FaBasketballBall,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";
import { IoFootsteps, IoBicycle } from "react-icons/io5";
import { GiTennisRacket, GiSoccerBall } from "react-icons/gi";
import ProductGrid from "../Components/ProductGrid";
import ProductCard from "../Components/ProductCard";
import { productsData } from "../data/productsData";

const Sports = () => {
  const sportsProducts = productsData.filter(
    (product) => product.category === "Sports"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-36 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaRunning className="text-4xl text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sports & Fitness
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Elevate your performance with professional-grade sports equipment
            and fitness gear
          </p>
        </div>

        {/* Sports Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border-2 border-transparent hover:border-green-500 transition-all cursor-pointer group">
            <FaRunning className="text-3xl text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-semibold text-gray-800">Running</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border-2 border-transparent hover:border-blue-500 transition-all cursor-pointer group">
            <FaDumbbell className="text-3xl text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-semibold text-gray-800">Fitness</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border-2 border-transparent hover:border-orange-500 transition-all cursor-pointer group">
            <FaCampground className="text-3xl text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-semibold text-gray-800">Outdoor</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border-2 border-transparent hover:border-red-500 transition-all cursor-pointer group">
            <FaBasketballBall className="text-3xl text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="font-semibold text-gray-800">Team Sports</div>
          </div>
        </div>

        {/* Additional Sports Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm cursor-pointer">
            <IoFootsteps className="text-2xl text-purple-500 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-800">Yoga</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm cursor-pointer">
            <IoBicycle className="text-2xl text-cyan-500 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-800">Cycling</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm cursor-pointer">
            <GiTennisRacket className="text-2xl text-lime-500 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-800">Tennis</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm cursor-pointer">
            <GiSoccerBall className="text-2xl text-emerald-500 mx-auto mb-2" />
            <div className="text-sm font-semibold text-gray-800">Soccer</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaDumbbell className="mr-3 text-green-600" />
            Sports Equipment
          </h2>
          <ProductGrid>
            {sportsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>

        {/* Motivation Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            <FaRunning className="text-4xl text-white opacity-90" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Level Up Your Game?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of athletes who trust our equipment for their
            training and competitions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <FaShippingFast className="mr-2" />
              Shop All Gear
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">
              <FaHeadset className="mr-2" />
              Expert Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
