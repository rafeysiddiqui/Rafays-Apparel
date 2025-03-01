import React from 'react';
import BridalProductCard from './components/BridalProductCard';
import { useParams } from 'react-router-dom';

const TrendyPage = () => {
  const { category } = useParams();
  const numberOfProducts = 3;

  const products = Array(numberOfProducts).fill().map((_, i) => ({
    id: `trendy-${i + 1}`,
    name: `Trendy Design ${i + 1}`,
    price: 225 + (i * 30),
    media: [{ type: 'image', url: 'https://via.placeholder.com/400x600/555555/ffffff?text=Trendy+' + (i + 1) }],
    description: 'Stay ahead of the curve with our trendy designs.'
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[20vh] mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white px-4 text-center capitalize">
              Trendy
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <BridalProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendyPage;
