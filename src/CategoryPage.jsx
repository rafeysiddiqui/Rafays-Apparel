import React from 'react';
import { useParams } from 'react-router-dom';
import BridalProductCard from './components/BridalProductCard';

export default function CategoryPage() {
  const { category } = useParams();
  const formattedCategory = category?.replace('-', ' ');

  let numberOfProducts = 4;
  if (formattedCategory === 'Bridal') {
    numberOfProducts = 15;
  }

  const products = Array(numberOfProducts).fill().map((_, i) => {
    return {
      id: `${category}-${i}`,
      name: `${formattedCategory} Design ${i + 1}`,
      description: `Description for ${formattedCategory} Design ${i + 1}`,
      price: 199 + i * 50,
      media: [{ type: 'image', url: `https://source.unsplash.com/random/600x600?${formattedCategory},${i}` }],
      category: formattedCategory
    };
  });

  return (
    <div className="pt-20">
      <div className="relative min-h-[20vh] mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white px-4 text-center capitalize">
            {formattedCategory}
          </h1>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-purple-950 via-black to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map(product => (
              <BridalProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
