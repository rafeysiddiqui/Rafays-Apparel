import React from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { Link } from 'react-router-dom';

export default function ShoppingCartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { convertPrice, currencySymbols, currency } = useCurrency();

  const getShippingFee = (item) => {
    if (item.category === 'Bridal' || item.category === 'Sarees') {
      return 500;
    } else if (item.category === 'Ready To Wear') {
      return 250;
    } else {
      return 250;
    }
  };

  const productTotal = cartItems.reduce(
    (sum, item) => sum + convertPrice(item.price) * item.quantity,
    0
  );

  const shippingFeeTotal = cartItems.reduce(
    (sum, item) =>
      sum + convertPrice(getShippingFee(item)) * item.quantity,
    0
  );

  const finalTotal = productTotal + shippingFeeTotal;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-300 mb-12 text-center">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-purple-200">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-purple-100 text-xl font-semibold">{item.name}</h3>
                    <p className="text-purple-300">Quantity: {item.quantity}</p>
                    {item.sizeDetails && (
                      <p className="text-purple-300">Size Details: {item.sizeDetails}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-colors"
                    >
                      -
                    </button>
                    <span className="text-purple-100 w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-purple-300 hover:text-purple-100 px-3 py-1 rounded-full border border-purple-400 transition-colors"
                  >
                    Remove
                  </button>
                </div>

                <div className="text-purple-100 text-xl font-bold">
                  {currencySymbols[currency]}{(convertPrice(item.price) * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl text-purple-100 font-bold">Total:</h2>
                <p className="text-2xl text-purple-100 font-bold">
                  {currencySymbols[currency]}{finalTotal.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Link to="/checkout" className="w-full max-w-xs bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-lg transition-colors text-center">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
