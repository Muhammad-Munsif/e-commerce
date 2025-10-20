import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id]);

  const dispatch = useDispatch()
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Successfully");
  };

  if (!product) return <div>Loading...</div>;
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Product Image detail  */}
        <div className="flex justify-center md:w-1/2 shadow-md md:px-8 h-96">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>
        <div className="flex flex-col items-center gap-y-2 p-4 md:w-1/2 shadow-md md:p-16 h-96">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>
          <div className="flex items-center gap-x-2">
            {/* <label htmlFor="quantity" className='mr-2'>Quantity:</label> */}
            <input
              type="number"
              id="quantity"
              className="border-1 border-gray-200 w-16"
            />
            <button className="bg-red-600 py-1.5 px-4 rounded hover:bg-red-800 text-white" 
            onClick={(e) => handleAddToCart(e, product)}
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" /> Delivery & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>Product description will goes here</p>
      </div>
    </div>
  );
};

export default ProductDetail;
