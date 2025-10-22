// components/ProductGrid.jsx
import React from 'react';

const ProductGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
      {children}
    </div>
  );
};

export default ProductGrid;