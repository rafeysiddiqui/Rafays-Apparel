import React, { useState } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const BridalProductCard = ({ product }) => {
  const { name, price, media, useCarousel, id, description, videoEmbedCode } = product;
  const [isVideoEmbedded, setIsVideoEmbedded] = useState(false);
  const { convertPrice, currencySymbols, currency } = useCurrency();

  const handleMediaClick = (e) => {
    e.stopPropagation();
    setIsVideoEmbedded(!isVideoEmbedded);
  };

  const imageMedia = product.media.find((m) => m.type === 'image');

  return (
    <div className="group bg-purple-900/30 rounded-xl backdrop-blur-sm p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative">
      {/* Media Container */}
      <div className="media-container cursor-pointer" onClick={handleMediaClick}>
        {isVideoEmbedded && videoEmbedCode ? (
          <div 
            style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%', overflow: 'hidden' }}
            className="group-hover:scale-105 transition-transform duration-500"
          >
            <iframe
              src={videoEmbedCode.match(/src="([^"]+)"/)?.[1]}
              title={name}
              frameBorder="0"
              allow="fullscreen"
              allowFullScreen
              className="w-full h-full absolute inset-0"
              style={{ border: 'none' }}
            />
          </div>
        ) : imageMedia ? (
          <img
            src={imageMedia.url}
            alt={name}
            className="w-full h-80 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
            No media available
          </div>
        )}
        {/* Show an overlay play button if video exists and embed is not active */}
        {videoEmbedCode && !isVideoEmbedded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-12 h-12 text-white" />
          </div>
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

export default BridalProductCard;

// Utility function to extract the Streamable video ID from its URL
function extractStreamableId(url) {
  const parts = url.split('/');
  return parts[parts.length - 1];
}
