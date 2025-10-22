import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";

const Shop = () => {
  const products = useSelector((state) => state.product);
  const [showAll, setShowAll] = useState(false);

  const productList = products.products || [];
  const displayedProducts = showAll ? productList : productList.slice(0, 10);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24 ">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer mb-8">
        {displayedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {productList.length > 10 && (
        <div className="flex justify-center">
          <button
            onClick={toggleView}
            className="bg-red-600 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 "
          >
            {showAll ? "Show Less" : `Show More (${productList.length - 10})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
