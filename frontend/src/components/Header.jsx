import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">MyWebsite</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to="/signin"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
