import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { useCurrency } from './contexts/CurrencyContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { convertPrice, currencySymbols, currency } = useCurrency();

  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sizeDetails, setSizeDetails] = useState('');

  useEffect(() => {
    let dummyProduct;
    if (id === "special") {
      dummyProduct = {
        id,
        name: "Special Bridal Product",
        description: "This is a special bridal product with multiple images from Google Drive.",
        images: [
          "https://drive.google.com/uc?export=view&id=1_UFTCytWu9d1GEQNvLc-Y7n0FX91cVAI",
          "https://drive.google.com/uc?export=view&id=1mqwM2B7DAMzJy1Nc9JGXi2vAdcuUeJGV",
          "https://drive.google.com/uc?export=view&id=1nczbV6__c_eiy__dbIYtJ86QuaX-tx6Z"
        ],
        price: 199,
        category: "Bridal"
      };
    } else {
      dummyProduct = {
        id,
        name: "Sample Product",
        description: "This is a sample product description.",
        images: [
          "https://via.placeholder.com/800x600.png?text=Image+1",
          "https://via.placeholder.com/800x600.png?text=Image+2",
          "https://via.placeholder.com/800x600.png?text=Image+3"
        ],
        price: 100,
        category: "Ready To Wear"
      };
    }
    setProduct(dummyProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, sizeDetails, quantity: 1 };
    addToCart(productToAdd);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-300 mb-4">{product.name}</h1>
        <p className="text-xl font-bold text-purple-300 mb-4">
          Price: {currencySymbols[currency]}{convertPrice(product.price).toFixed(2)}
        </p>

        <div className="relative">
          <img 
            src={product.images[currentImageIndex]} 
            alt={`Product Image ${currentImageIndex + 1}`} 
            className="w-full h-96 object-cover rounded"
          />
          {product.images.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded"
              >
                Prev
              </button>
              <button 
                onClick={nextImage} 
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded"
              >
                Next
              </button>
            </>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="sizeDetails" className="block text-lg font-medium text-purple-100">
            Enter your size details:
          </label>
          <textarea 
            id="sizeDetails" 
            value={sizeDetails} 
            onChange={(e) => setSizeDetails(e.target.value)} 
            className="w-full p-2 border rounded mt-2 bg-purple-800 text-purple-100"
            placeholder="Enter size details here..."
            rows="4"
          />
        </div>

        <button 
          onClick={handleAddToCart}
          className="mt-4 bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
