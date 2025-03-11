import { useCart } from '../context/CartContext';
import { ShoppingCart, ChevronDown, MessageCircle, Instagram, Facebook, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import CurrencySwitcher from './CurrencySwitcher';
import PropTypes from 'prop-types';

export default function Navigation({ categories, isOpen, setIsOpen, activeDropdown, setActiveDropdown, menuRef }) {
  const { cartItems } = useCart();

  const toggleDropdown = (title) => {
    setActiveDropdown(title === activeDropdown ? null : title);
  };

  return (
    <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-gradient-to-r from-purple-900 via-black to-black rounded-full shadow-xl py-2 px-6 flex justify-between items-center">
        {/* Hamburger Menu (Mobile) */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Name */}
        <Link to="/" className="text-white text-2xl font-bold max-md:-ml-4">
          Rafay's Apparel
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6 text-gray-300">
          {Object.entries(categories).map(([title, items]) => (
            <div key={title} className="relative group">
              <Link to="#" className="flex items-center hover:text-white cursor-pointer">
                {title}
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                {items.map(item => (
                  <Link 
                    key={item}
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-900"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/copyright" className="hover:text-white">Copyright</Link>
          <Link to="/about" className="hover:text-white">About Us</Link>
          <CurrencySwitcher />
        </div>

        {/* Mobile Menu Overlay */}
        <div
          ref={menuRef}
          className={`fixed top-20 right-4 w-64 bg-gradient-to-br from-purple-900 via-black to-black rounded-lg shadow-xl transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <div className="p-4 space-y-4">
            {Object.entries(categories).map(([title, items]) => (
              <div key={title} className="relative">
                <button
                  className="flex items-center justify-between w-full text-white"
                  onClick={() => toggleDropdown(title)}
                >
                  {title}
                  <ChevronDown className={`transition-transform ${
                    activeDropdown === title ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeDropdown === title && (
                  <div className="ml-4 mt-2 space-y-2">
                    {items.map(item => (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="block text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/copyright"
              className="block text-white hover:text-purple-300"
              onClick={() => setIsOpen(false)}
            >
              Copyright
            </Link>

            <Link
              to="/about"
              className="block text-white hover:text-purple-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <CurrencySwitcher />

            <Link
              to="/cart"
              className="block text-white hover:text-purple-300"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="text-white mx-auto" />
            </Link>
          </div>
        </div>
        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="text-white h-6 w-6 hover:scale-110 transition-transform"/>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  setActiveDropdown: PropTypes.func
};
