import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, User, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cartCount = 3;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contacts", path: "/contacts" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md transition-colors duration-300">
      <div className="h-16 flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="h-full flex items-center">
          <img
            src={assets.logo3}
            alt="Logo"
            className="h-50 w-40 max-h-full object-contain ml-4"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive ? "font-bold underline text-black" : "text-gray-700"
                } hover:underline hover:font-bold ${
                  scrolled ? "hover:text-orange-500" : "hover:text-blue-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 relative">
          {/* Profile Dropdown */}
          <div
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
            className="relative"
          >
            <button className="hover:text-black transition">
              <User size={24} />
            </button>
            {showProfile && (
              <div className="absolute right-0 top-10 w-40 bg-white shadow-lg border rounded-md p-2 z-50">
                <Link to="/profile" className="block py-1 px-2 hover:bg-gray-100">
                  Profile
                </Link>
                <Link to="/orders" className="block py-1 px-2 hover:bg-gray-100">
                  Orders
                </Link>
                <Link to="/logout" className="block py-1 px-2 hover:bg-gray-100">
                  Logout
                </Link>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative hover:text-black transition">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {menuItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 transition duration-200 hover:underline hover:font-bold ${
                      isActive ? "font-bold underline text-black" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {/* Profile in Mobile */}
            <li>
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-1 hover:underline hover:font-bold"
              >
                <User size={20} /> Profile
              </Link>
            </li>
            {/* Cart in Mobile */}
            <li>
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-1 hover:underline hover:font-bold"
              >
                <ShoppingCart size={20} /> Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
