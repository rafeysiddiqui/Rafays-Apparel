import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [closeTimeoutId, setCloseTimeoutId] = useState(null);

  const menuItems = {
    'Make To Order': ['Bridal', 'Sarees'],
    'Ready To Wear': ['Formal', 'Semi-Formal', 'Trendy', 'Casual Wear', 'Gota']
  };

  const handleMouseEnter = (title) => {
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
      setCloseTimeoutId(null);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
    setCloseTimeoutId(id);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-black to-black p-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Rafay's Apparel</h1>

        <div className="flex space-x-8 text-gray-300">
          {Object.entries(menuItems).map(([title, items]) => (
            <div
              key={title}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center hover:text-white transition-all duration-300"
                onClick={() => setActiveDropdown(activeDropdown === title ? null : title)}
              >
                {title}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                  activeDropdown === title ? 'rotate-180' : ''
                }`}/>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl
                  transition-all duration-300 origin-top
                  ${activeDropdown === title ? 
                    'opacity-100 scale-100 visible' : 
                    'opacity-0 scale-95 invisible'}
                  `}
                onMouseEnter={() => handleMouseEnter(title)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-2">
                  {items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-50 
                      hover:text-purple-900 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <a href="#" className="hover:text-white transition-colors duration-300">
            Copyright Disclaimer
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            About Us
          </a>
        </div>

        <div className="flex items-center">
          <ShoppingCart className="text-white h-6 w-6 hover:scale-110 transition-transform"/>
        </div>
      </div>
    </nav>
  );
}
