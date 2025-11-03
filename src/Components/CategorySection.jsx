import React from "react";
import Person3 from "../assets/person3.jpg";
import Women from "../assets/women.jpg";
import Kids from "../assets/kid.jpg";
const CategorySection = () => {
  const categories = [
    {
      tital: "Men",
      imageUrl: Person3,
    },
    {
      tital: "Women",
      imageUrl: Women,
    },
    {
      tital: "Kids",
      imageUrl: Kids,
    },
  ];
  return (
    <div className="bg-white ">
      <div className="container mx-auto mt-2 px-4 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative h-64 transfrom transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={category.imageUrl}
              alt="img not found"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-20 left-12">
              <p className="text-xl font-bold">{category.tital}</p>
              <p className="text-gray-600">View All</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategorySection;
