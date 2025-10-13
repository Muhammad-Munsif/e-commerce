import React from "react";
// import { product } from '../data/product';
import Person from "../assets/person1.webp";
import {
  Menu,
  MenuIcon,
  MenuSquare,
  MessageCircle,
  NotebookIcon,
} from "lucide-react";
const Card = () => {
  return (
    <div className="bg-white w-full p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <MenuIcon className="w-10 h-10 text-gray-400 hover:text-gray-600 hover:cursor-pointer" />
          <h1 className="font-bold text-2xl">Admin Layout</h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <NotebookIcon className="w-10 h-10 text-blue-500" />
          <MessageCircle className="w-10 h-10 text-blue-600" />
          <div>
            <img
              src={Person}
              alt=""
              className="w-10 h-10 rounded-full flex justify-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
