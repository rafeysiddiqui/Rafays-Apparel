import React from 'react';

function CollectionCard({ collection, index }) {
  const animationDelay = (index + 1) * 100;

  return (
    <div className={`group relative bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up`} style={{ animationDelay: `${animationDelay}ms` }}>
      <div className="overflow-hidden">
        <img
          src={`https://source.unsplash.com/random/600x600?fashion,${collection}`}
          alt={collection}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{collection}</h3>
        <button className="bg-midnight-purple text-white px-6 py-2 rounded-full hover:bg-purple-700 hover:animate-pulse transition-all">
          Browse Now
        </button>
      </div>
    </div>
  );
}

export default CollectionCard;
