// Components/CategoryFilter.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const navigate = useNavigate();
  
  const categories = [
    { name: 'All', path: '/shop' },
    { name: 'Electronics', path: '/electronics' },
    { name: 'Fashion', path: '/fashion' },
    { name: 'Home & Kitchen', path: '/home-kitchen' },
    { name: 'Beauty', path: '/beauty' },
    { name: 'Sports', path: '/sports' }
  ];

  const handleCategoryClick = (category) => {
    onCategoryChange(category.name);
    navigate(category.path);
  };

  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map(category => (
          <button
            key={category.name}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category.name
                ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;