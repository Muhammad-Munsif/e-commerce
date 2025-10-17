import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState("");
  const onCloseModel = () => {
    setAddress(newAddress);
    setIsModelOpen(false);
  };
  return (
    <div>
      <input
        onChange={(e) => setNewAddress(e.target.value)}
        type="text"
        placeholder="Enter New Address"
        className="border p-2 w-full mb-4"
      />
      <div className="flex justify-end  text-white">
        <button
          className="bg-gray-500 rounded px-4 py-2 mr-2"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 rounded px-4 py-2"
          onClick={onCloseModel}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
