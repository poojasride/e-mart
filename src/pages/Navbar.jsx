import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition border border-[#4F46E5] ${
      isActive
        ? "bg-gradient-to-r from-indigo-600 to-indigo-900 text-white"
        : "text-[#4F46E5] hover:bg-[#E0E7FF]"
    }`;

  return (
    <nav className="bg-[#F8FAFC] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-[#E5E7EB]">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛒</span>
          <h1 className="text-2xl font-bold text-[#4F46E5] tracking-wide">
            UrbanCart
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-lg font-medium items-center">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={navLinkClass}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Actions */}
        <div className=" flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium border border-[#4F46E5] text-[#4F46E5] rounded-lg hover:bg-[#4F46E5] hover:text-white transition">
            Login
          </button>

          <Link
            to="/cart"
            className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg hover:bg-[#3730A3] transition shadow-sm relative"
          >
            Cart
             {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#4F46E5] p-2 rounded-md border border-[#4F46E5]"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="lg:hidden absolute right-6 top-20 w-44 p-1 bg-white border border-[#E5E7EB] rounded-xl shadow-xl overflow-hidden z-50">
            <NavLink onClick={() => setOpen(false)} to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/cart" className={navLinkClass}>
              Cart
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
