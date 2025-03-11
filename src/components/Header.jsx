import React, { useState } from 'react';
import CurrencySwitcher from './CurrencySwitcher';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Main Navigation Bar */}
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand / Logo */}
        <div className="text-xl font-bold">
          <Link to="/">Rafay's Apparel</Link>
        </div>
        {/* Desktop Navigation (visible on medium screens and up) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* You can add other navigation links here */}
          <Link to="/shop" className="hover:underline">Shop</Link>
          <Link to="/about" className="hover:underline">About</Link>
          {/* Currency Switcher is displayed on the nav bar */}
          <CurrencySwitcher />
        </div>
        {/* Hamburger Icon for Mobile (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu (visible when hamburger menu is open) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <nav className="flex flex-col space-y-2">
            {/* Include navigation links as needed */}
            <Link to="/shop" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/about" className="hover:underline" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            {/* Currency Switcher is included inside the hamburger menu */}
            <CurrencySwitcher />
          </nav>
        </div>
      )}
    </header>
  );
}
