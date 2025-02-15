import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../contexts/CurrencyContext';

const ProductCard = ({ product }) => {
  const { convertPrice, currencySymbols, currency, name, price, id, description, image, media } = product;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handleMediaClick = () => {
    if (media && media.length > 1) {
      setCurrentMediaIndex((currentMediaIndex + 1) % media.length);
    }
  };

  const currentMedia = media && media.length > 0 ? media[currentMediaIndex] : null;

  return (
    <div className="group bg-purple-900/30 rounded-xl backdrop-blur-sm p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <div className="media-container cursor-pointer" onClick={handleMediaClick}>
        {currentMedia ? (
          currentMedia.type === 'video' ? (
            <video className="w-full h-72 object-cover rounded-md group-hover:scale-105 transition-transform duration-500" src={currentMedia.url} controls />
          ) : (
            <img
              className="w-full h-72 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
              src={currentMedia.url}
              alt={name}
            />
          )
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-72 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-purple-100 mb-2">{name}</h3>
        <p className="text-purple-300">{description}</p>
        <p className="text-purple-300">
          Price: {currencySymbols[currency]}{convertPrice(price).toFixed(2)}
        </p>
        <Link
          to={`/product/${id}`}
          className="mt-4 inline-block bg-purple-200 text-purple-900 px-6 py-2 rounded-full hover:bg-purple-300 transition-colors"
        >
          Browse
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
