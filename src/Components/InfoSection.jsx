import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      tital: "Free Shipping",
      description: "Gets your orders deliverd with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      tital: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      tital: "100% Money Back",
      description: "Full refund if you are not happy",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      tital: "Payment Secure",
      description: "Your payment information to safe with us",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      tital: "Discount ",
      description: "Enjoy the best prices on our products",
    },
  ];
  return (
    <div className="bg-white pb-8 p-12">
      <div className="container mx-auto mt-2 px-4 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border-1 border-gray-300 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.tital}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
