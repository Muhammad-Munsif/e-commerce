import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import Person from "../assets/person2.jpg";
import InfoSection from "../Components/InfoSection";
import CategorySection from "../Components/CategorySection";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../Components/ProductCard";
import Shop from "./Shop";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
  return (
    <div>
      <div className="bg-white ">
        <div className="container mx-auto mt-2 px-4 md:px-16 lg:px-24 py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full h-full md:w-3/12 ">
            <div className="bg-red-600 text-xs px-2 py-2.5 font-bold text-white">
              Shop by Categories
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border border-gray-300 h-[350px]">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center font-medium text-sm"
                >
                  <div className="w-2 h-2 border border-red-500 mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative rounded-lg">
            <img src={Person} alt="not found" className="w-full h-full" />
            <div className="absolute top-32 left-8">
              <p className="text-gray-600 mb-4">code with Munsif</p>
              <h2 className="text-3xl font-bold">Welcome to EasyShop</h2>
              <p className="text-xl mt-2.5 text-gray-800 font-bold">
                Million + Products
              </p>
              <button className="text-white rounded bg-red-600 hover:bg-red-700 mt-2.5 px-8 py-1.5 transform transition-transform duration-300 hover:scale-105"
              onClick={() => navigate('/shop')}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 ">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};
export default Home;
