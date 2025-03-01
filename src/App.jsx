import { useState, useEffect, useRef } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronDown, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Home from './Home';
import CategoryPage from './CategoryPage';
import CopyrightPage from './CopyrightPage';
import AboutPage from './AboutPage';
import LoadingScreen from './components/LoadingScreen';
import ShoppingCartPage from './components/ShoppingCartPage';
import { CartProvider, useCart } from './context/CartContext';
import Navigation from './components/Navigation';
import CheckoutPage from './CheckoutPage';
import { CurrencyProvider } from './contexts/CurrencyContext';
import Footer from './Footer';
import ProductDetailPage from './ProductDetailPage';
import ProductCard from './components/ProductCard';
import BridalPage from './BridalPage';
import React from 'react';
import FormalPage from './FormalPage';
import SemiFormalPage from './SemiFormalPage';
import TrendyPage from './TrendyPage';
import CasualWearPage from './CasualWearPage';
import GotaPage from './GotaPage';

const categories = {
  'Make To Order': ['Bridal'],
  'Ready To Wear': ['Formal', 'Semi-Formal', 'Trendy', 'Casual Wear', 'Gota']
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CurrencyProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black relative">
            {/* Loading Screen */}
            {isLoading && <LoadingScreen />}

            {/* Navigation Bar */}
            {!isLoading && (
              <Navigation 
                categories={categories}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                menuRef={menuRef}
              />
            )}

            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home categories={categories}/>} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/copyright" element={<CopyrightPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<ShoppingCartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/bridal" element={<BridalPage />} />
              <Route path="/formal" element={<FormalPage />} />
              <Route path="/semi-formal" element={<SemiFormalPage />} />
              <Route path="/trendy" element={<TrendyPage />} />
              <Route path="/casual-wear" element={<CasualWearPage />} />
              <Route path="/gota" element={<GotaPage />} />
              <Route path="/:category" element={<CategoryPage />} />
            </Routes>

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;
