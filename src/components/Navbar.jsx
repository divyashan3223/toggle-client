import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition duration-300">
          Logo
        </h1>
        <nav className="flex gap-5">
          <Link to="/login">
            <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300">
              Signup
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
