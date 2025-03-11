import React from 'react';
import { useParams } from 'react-router-dom';
import BridalProductCard from './components/BridalProductCard';

export default function CategoryPage() {
  const { category } = useParams();
  const formattedCategory = category?.replace('-', ' ');

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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          </div>
        </div>
      </section>
    </div>
  );
}
