import React from 'react';
import Person from '../assets/person2.jpg'
const Home = () => {
  const Categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Automative"
];


  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12'>
          
            <div className='bg-red-600 text-xs px-2 py-2.5 font-bold text-white'>Shop by Categories</div>
            <ul className='space-y-4 bg-gray-100 p-3 border'>
              {
                Categories.map((category, index) => (
                  <li key={index} className='flex items-center font-medium text-sm'>
                    <div className='w-2 h-2 border border-red-500 mr-2'></div>
                    {category}
                  </li>
                ))
              }
            </ul>
            </div>
          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative rounded-lg'>
              <img src={Person} alt="not found" className='w-full h-full'/>
              <div className='absolute top-32 left-8'>
                <p>code with Munsif</p>
                <h2>Welcome to EasyShop</h2>
                <p>Million + Products</p>
                <button>SHOP NOW</button>
              </div>
          </div>
        </div>
      </div>

  );
};

export default Home;