import { Link } from 'react-router-dom';
import React from 'react';
import HeroPage from './HeroPage';

export default function Home({ categories }) {
  const allCategories = [
    ...categories['Make To Order'],
    ...categories['Ready To Wear']
  ];

  const generateProducts = (category) => ({
    id: category,
    name: category,
    price: 199, // price doesn't matter for the home page
    image: `https://source.unsplash.com/random/600x600?${category}`
  });

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b" 
          className="w-full h-full object-cover"
          alt="Fashion Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 to-transparent flex items-center justify-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">
            Be Yourself
          </h1>
        </div>
      </div>

      {/* Featured Collections */}
      <section className="py-20 bg-gradient-to-b from-purple-950 via-black to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-purple-200 mb-12 text-center">
            Featured Collections
          </h2>
          <HeroPage />
        </div>
      </section>
    </div>
  );
}
