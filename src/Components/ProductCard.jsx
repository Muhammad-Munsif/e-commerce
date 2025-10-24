import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("Product Added Successfully", {
      position: "top-left",
      theme: "light",
      autoClose: 3000,
    });
  };

  // Create star rating based on product rating
  const renderStars = () => {
    const stars = [];
    const rating = Math.floor(product.rating);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white shadow-lg hover:shadow-xl p-4 rounded-lg relative transform transition-transform duration-300 hover:-translate-y-1 group cursor-pointer">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col h-32">
          <h3 className="text-lg font-semibold whitespace-normal line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          <div className="mt-auto">
            <p className="text-2xl font-bold text-gray-900">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center mt-2 gap-1">
              {renderStars()}
              <span className="text-gray-500 text-sm ml-1">
                ({product.rating})
              </span>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div
          className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300 cursor-pointer overflow-hidden"
          onClick={(e) => handleAddToCart(e, product)}
        >
          <span className="group-hover:hidden text-lg font-bold">+</span>
          <span className="hidden group-hover:block whitespace-nowrap text-xs font-medium">
            Add to cart
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
