import { Link } from 'react-router-dom';
import React from 'react';

export default function Home({ categories }) {
  const allCategories = [
    ...categories['Make To Order'],
    ...categories['Ready To Wear']
  ];

  const categoryImages = {
    Bridal: 'https://www.shadidress.com/wp-content/uploads/2024/02/Red-Bridal-Pakistani-Dress-5.webp',
    Sarees: 'https://goldenzari.com.pk/cdn/shop/files/9BDBED51-ABAE-4643-A8E7-AC35C7FC0EB9.jpg?v=1707830109',
    Formal: 'https://jazmin.pk/cdn/shop/files/43_65b31801-22cc-4c81-ac4c-a58bbf7a5695.jpg?v=1714648301&width=1200',
    'Semi-Formal': 'https://www.faridahasan.com/images/thumbs/0006141_ombre-pearls-with-pants_1000.jpeg',
    Trendy: 'https://declarepakistan.com/cdn/shop/files/V1008_1.jpg?v=1734084439&width=533',
    'Casual Wear': 'https://www.fabricoz.com/cdn/shop/files/Pakistani-Dress-C1212E_4_600x600.jpg?v=1726716071',
    Gota: 'https://www.nameerabyfarooq.com/cdn/shop/products/PakistaniGotaEmbroideredSuitinRedColor_1_620x.jpg?v=1606458117'
  };

  const generateProducts = (category) => ({
    id: category,
    name: category,
    price: 199, // price doesn't matter for the home page
    image: categoryImages[category] || "https://source.unsplash.com/random/600x600?" + category,
    description: `Explore our ${category} collection`
  });

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2F1aGlzazAwMHI1N21kcjI2OWZtOGViZXRwamJ5bDdvenZpcWV2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xehit5PFpdm0OEPd35/giphy.gif" 
          className="w-full h-full object-cover"
          alt="Fashion Background"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="https://i.ibb.co/b59PBrWJ/New.png" alt="Rafay's Apparel" className="h-[400px]" />
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
