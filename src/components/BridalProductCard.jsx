import React, { useState } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import { Link } from 'react-router-dom';
import { Play, X } from 'lucide-react';

const BridalProductCard = ({ product }) => {
  const { name, price, media, useCarousel, id, description } = product;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  // State to control inline video embed
  const [isVideoEmbedded, setIsVideoEmbedded] = useState(false);
  const { convertPrice, currencySymbols, currency } = useCurrency();

  // When the media container is clicked, if there is video media, toggle the embed
  const handleMediaClick = () => {
    if (media && media.some(m => m.type === 'video')) {
      setIsVideoEmbedded(!isVideoEmbedded);
      return;
    }
    if (useCarousel && media && media.length > 1) {
      setCurrentMediaIndex((currentMediaIndex + 1) % media.length);
    }
  };

  const imageMedia = product.media.find((m) => m.type === 'image');
  const videoMedia = product.media.find((m) => m.type === 'video');

  // Construct the embed URL using the video media URL.
  // Assuming Streamable embed follows the pattern "https://streamable.com/e/{videoId}?"
  const embedUrl = videoMedia ? `https://streamable.com/e/${extractStreamableId(videoMedia.url)}?` : '';

  return (
    <div className="group bg-purple-900/30 rounded-xl backdrop-blur-sm p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative">
      {/* Media Container */}
      <div className="media-container cursor-pointer" onClick={handleMediaClick}>
        {isVideoEmbedded && videoMedia ? (
          // Embedded video using the provided embed code structure
          <div className="relative w-full aspect-[9/16]">
            <iframe
              src={embedUrl}
              title={name}
              frameBorder="0"
              allow="fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
            {/* Toggle button to go back to image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoEmbedded(false);
              }}
              className="absolute top-2 right-2 bg-purple-800 text-white px-3 py-1 rounded hover:bg-purple-900 transition-colors z-10"
            >
              Back to Image
            </button>
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
        {videoMedia && !isVideoEmbedded && (
          <button
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            onClick={handleMediaClick}
          >
            <Play className="w-12 h-12 text-white" />
          </button>
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

// Utility function to extract the Streamable video ID from its URL
function extractStreamableId(url) {
  const parts = url.split('/');
  return parts[parts.length - 1];
}

export default BridalProductCard;
