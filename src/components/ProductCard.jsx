import React from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { convertPrice, currency, currencySymbols } = useCurrency();
  const { addToCart } = useCart();
  const convertedPrice = convertPrice(product.price).toFixed(2);
  const symbol = currencySymbols[currency] || '';

  return (
    <div className="group bg-purple-900/30 rounded-xl backdrop-blur-sm p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-500"
      />
      <h3 className="text-xl font-semibold text-purple-100 mb-2">{product.name}</h3>
      <p className="text-purple-300">{symbol}{convertedPrice}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-purple-200 text-purple-900 px-6 py-2 rounded-full hover:bg-purple-300 w-full transition-colors"
      >
        Add to Cart
      </button>
      <Link
        to="/cart"
        className="mt-2 inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-500 w-full transition-colors"
      >
        Buy Now
      </Link>
    </div>
  );
}
