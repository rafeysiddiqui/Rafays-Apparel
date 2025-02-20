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

const categories = {
  'Make To Order': ['Bridal', 'Sarees'],
  'Ready To Wear': ['Formal', 'Semi-Formal', 'Trendy', 'Casual Wear', 'Gota']
};

const products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'Description for product 1',
    image: 'https://via.placeholder.com/400x300.png?text=Product+1',
    price: 100,
    category: 'Ready To Wear'
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description for product 2',
    image: 'https://via.placeholder.com/400x300.png?text=Product+2',
    price: 200,
    category: 'Bridal'
  }
];

function HomePage() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
