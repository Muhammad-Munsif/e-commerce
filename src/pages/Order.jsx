import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {

  const navigate = useNavigate()

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
      <p>
        Your order has ben placed successfully you will receive an email
        comfirmation shortly
      </p>
      <div className="mt-6 p-4 text-gray-100 rounded-lg border-1 border-gray-200">
        <h3 className="text-lg mb-2 font-semibold">Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">shipping Information</h3>
          <p>{order.shippingInformation.name}</p>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zipcode}</p>
        </div>
        <div className="mt-4 ">
          <h3 className="text-md font-semibold mb-2">Porducts Ordered</h3>
          {
            order.products.map((product) => (
              <div key={product.id} className="flex justify-center mt-2">
                <p>{product.name} (x{product.quantity})</p>
                <p>{product.price} * {product.quantity}</p>
              </div>
            ))
          }
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price</span>
          <span className="font-semibold">{order.totalPrice.toFixed(2)}</span>
        </div>
        <div className="mt-6">
          <button className="bg-green-500 py-2 px-4 text-white hover:bg-green-600">Order Tracking</button>
          <button className="bg-red-500 py-2 px-4 text-white hover:bg-red-800" onClick={() => navigate('/')}>Continue Shipping</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
