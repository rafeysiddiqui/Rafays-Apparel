import { useState, useEffect, useRef } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronDown, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Home from './Home';
import CategoryPage from './CategoryPage';
import React from 'react';
import CopyrightPage from './CopyrightPage';
import AboutPage from './AboutPage';
import LoadingScreen from './components/LoadingScreen';
import ShoppingCartPage from './components/ShoppingCartPage';
import { CartProvider, useCart } from './context/CartContext';
import Navigation from './components/Navigation';
import CheckoutPage from './CheckoutPage';
import { CurrencyProvider } from './contexts/CurrencyContext';
import Footer from './Footer';

const categories = {
  'Make To Order': ['Bridal', 'Sarees'],
  'Ready To Wear': ['Formal', 'Semi-Formal', 'Trendy', 'Casual Wear', 'Gota']
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <CurrencyProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black relative">
          {/* Loading Screen */}
          {isLoading && <LoadingScreen />}

          {/* Navigation Bar */}
          {!isLoading && (
            <Navigation 
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              menuRef={menuRef}
              categories={categories}
            />
          )}

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home categories={categories} />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/copyright" element={<CopyrightPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CurrencyProvider>
  );
}
