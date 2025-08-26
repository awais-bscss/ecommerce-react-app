import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";
import logoimage from "./images/logo.jpg";
import Header from "./Header";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // check login status from localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact" },
    { to: "/privacy", label: "Privacy" },
    { to: "/signup", label: "Signup" },
    // Login tab sirf tabhi dikhana jab user login na ho
    ...(!isLoggedIn ? [{ to: "/login", label: "Login" }] : []),
  ];

  return (
    <>
      <Header />
      <nav className={`${styles.navbar} bg-white shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <img
                src={logoimage}
                alt="Logo"
                className={`${styles.logo} h-12 w-12 object-contain`}
              />
            </div>

            {/* Search Bar */}
            <div className="flex items-center flex-1 mx-4">
              <div
                className={`${styles.searchContainer} relative w-full max-w-md`}
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${styles.searchInput} w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `${styles.navLink} ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    } hover:text-blue-600 transition-colors`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Logout Button (sirf tabhi dikhega jab login hai) */}
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div
                className={`${styles.mobileMenu} flex flex-col space-y-2 pb-4`}
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `${styles.navLink} ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700"
                      } block py-2 px-4 hover:bg-gray-100 rounded-md`
                    }
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </NavLink>
                ))}

                {/* Logout button in mobile menu */}
                {isLoggedIn && (
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
