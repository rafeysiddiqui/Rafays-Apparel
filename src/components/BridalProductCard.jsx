import React, { useState } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import { Link } from 'react-router-dom';

const BridalProductCard = ({ product }) => {
  const { name, price, media, useCarousel, id, description } = product;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { convertPrice, currencySymbols, currency } = useCurrency();

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const streamableEmbed = (
    <div style={{ position: "relative", width: "100%", height: "315px" }}>
      <iframe
        allow="fullscreen;autoplay"
        allowFullScreen
        height="315px"
        src="https://streamable.com/e/d9hr2j?autoplay=1&muted=1"
        width="100%"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0",
          top: "0",
          overflow: "hidden"
        }}
        title="Streamable Video"
      />
    </div>
  );

  const currentMedia = media && media.length > 0 ? media[currentMediaIndex] : null;

  return (
    <div className="group bg-purple-900/30 rounded-xl backdrop-blur-sm p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <div className="media-container relative cursor-pointer">
        {showVideo ? (
          streamableEmbed
        ) : (
          currentMedia && currentMedia.type === 'image' ? (
            <img className="w-full h-80 object-cover rounded-md group-hover:scale-105 transition-transform duration-500" src={currentMedia.url} alt={name} />
          ) : (
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
              No media available
            </div>
          )
        )}
        {!showVideo && (
          <button
            onClick={handleToggleVideo}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ▶ Play Video
          </button>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-purple-100 mb-2">{name}</h3>
        <p className="text-purple-300">{description}</p>
        <p className="text-purple-300">
          Price: {currencySymbols[currency]}{convertPrice(price).toFixed(2)}
        </p>
        {showVideo && (
          <button
            onClick={handleToggleVideo}
            className="mt-2 text-purple-200 hover:text-purple-300"
          >
            Back to Image
          </button>
        )}
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
