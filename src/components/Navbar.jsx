import React from "react";
import { FaConnectdevelop } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold text-black dark:text-white">
        <i class="fa-brands fa-slack"></i> Agent Cypher
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-full border border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
          <i class="fa-solid fa-house-fire"></i> Home
        </button>
        <button className="px-4 py-2 rounded-full border border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
          <i class="fa-regular fa-id-badge"></i> &nbsp; Profile
        </button>
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-full  border-gray-700 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
          <i class="fa-solid fa-user-plus"></i> Sign In
        </button>
        <button className="flex items-center px-4 py-2 rounded-full  bg-blue-400 text-white hover:bg-blue-600">
          <FaConnectdevelop className="w-7 h-8" />
          &nbsp;Connect
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
