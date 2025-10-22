import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import NoFoundImg from "../assets/no-found.webp";
const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24 ">
      {filterProducts.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <img src={NoFoundImg} alt="" className="w-96 h-96"/>
        </div>
      )}
    </div>
  );
};

export default FilterData;
