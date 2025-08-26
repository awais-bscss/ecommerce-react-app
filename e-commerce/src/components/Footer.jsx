import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">© 2025 A-Store. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-blue-400">
              Privacy
            </Link>
            <Link to="/signup" className="hover:text-blue-400">
              Signup
            </Link>
            <Link to="/login" className="hover:text-blue-400">
              Login
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
