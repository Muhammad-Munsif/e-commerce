import React from "react";

const Order = ({ order }) => {
  return (
    <div>
      <h2>Thank you for your order</h2>
      <p>
        Your order has ben placed successfully you will receive an email
        comfirmation shortly
      </p>
      <div>
        <h3>Order Summary</h3>
        <p>Order Number: {}</p>
        <p>shippingInformation: {}</p>
      </div>
    </div>
  );
};

export default Order;
