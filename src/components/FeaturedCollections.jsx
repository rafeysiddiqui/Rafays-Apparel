import React from 'react';
import CollectionCard from './CollectionCard';

const collections = [
  { name: 'Bridal' },
  { name: 'Sarees' },
  { name: 'Formal' },
  { name: 'Semi-Formal' },
  { name: 'Trendy' },
  { name: 'Casual Wear' },
  { name: 'Gota' }
];

function FeaturedCollections() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.slice(0, 6).map((collection, index) => (
            <CollectionCard key={index} collection={collection.name} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;
