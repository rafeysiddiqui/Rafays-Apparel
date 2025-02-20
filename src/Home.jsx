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
    image: `https://source.unsplash.com/random/600x600?${category}`,
    description: `Explore our ${category} collection`
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
        <div className="absolute inset-0 flex items-center justify-center">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {allCategories.map(category => {
              const product = generateProducts(category);
              return (
                <Link to={`/${category.toLowerCase().replace(' ', '-')}`} key={category} className="block">
                  <div className="group bg-purple-900/30 rounded-xl backdrop-blur-sm p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <img
                      src={product.image}
                      alt={category}
                      className="w-full h-80 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <h3 className="text-xl font-semibold text-purple-100 mb-2">{category}</h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-purple-200 text-purple-900 px-6 py-2 rounded-full hover:bg-purple-300 transition-colors">
                        Browse
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
