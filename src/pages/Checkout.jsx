import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(false);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
      <div className="flex flex-col justify-between md:flex-row space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border border-gray-200 p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border border-gray-100"
                />
              </div>
            </div>
          </div>
          {/* shipping Card section  */}
          <div className="border border-gray-200 p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="addresss"
                  placeholder="Enter your address"
                  className="w-full px-3 py-2 border border-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  className="w-full px-3 py-2 border border-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="number"
                  name="zipcode"
                  placeholder="Enter your country zipcode"
                  className="w-full px-3 py-2 border border-gray-100"
                />
              </div>
            </div>
          </div>
          {/* Payment Method code section  */}
          <div className="border border-gray-200 p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>
            {paymentMethod === "dc" && (
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold m-2">Card Number</label>
                  <input type="text" placeholder="Enter your card number" className="border-1 border-gray-200 w-full rounded p-2" required/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Card Holder Name</label>
                    <input type="text" placeholder="Enter card holder name" className="border-1 border-gray-200 w-full rounded p-2" required/>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-700 font-semibold mb-2">Expire Date</label>
                      <input type="text" placeholder="MM/YY" className="border-1 border-gray-200 p-2 rounded w-full" required/>
                    </div>
                    <div className="w-1/2 ml-2">
                      <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                      <input type="text" className="w-full p-2 border-1 border-gray-200 rounded mb-2" required/>
                    </div>
                  </div>
              </div>
            )}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-md"></div>
      </div>
    </div>
  );
};

export default Checkout;
