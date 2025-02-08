import React, { useState } from 'react';
import { useCart } from './context/CartContext';

export default function CheckoutPage() {
  const { cartItems } = useCart() || { cartItems: [] };
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      cartItems,
      phone,
      email,
      address,
      postalCode,
    };

    try {
      const response = await fetch('https://rafaysapparel.netlify.app/.netlify/functions/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      
      const data = await response.json();
      if (response.ok) {
        setStatus('Order submitted successfully!');
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setStatus('Error submitting order. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32 px-4">
      <div className="max-w-xl mx-auto bg-purple-900/30 backdrop-blur-sm rounded-xl p-8">
        <h1 className="text-3xl font-bold text-purple-300 mb-6 text-center">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-purple-100 mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded bg-purple-800 text-purple-100"
              required
            />
          </div>
          <div>
            <label className="block text-purple-100 mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-purple-800 text-purple-100"
              required
            />
          </div>
          <div>
            <label className="block text-purple-100 mb-1">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 rounded bg-purple-800 text-purple-100"
              required
            />
          </div>
          <div>
            <label className="block text-purple-100 mb-1">Postal Code</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full p-2 rounded bg-purple-800 text-purple-100"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition-colors"
          >
            Submit Order
          </button>
          {status && <p className="text-center text-purple-200 mt-4">{status}</p>}
        </form>
      </div>
    </div>
  );
}
