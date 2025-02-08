import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Bridal', image: 'https://www.shadidress.com/wp-content/uploads/2024/02/Red-Bridal-Pakistani-Dress-5.webp' },
  { name: 'Sarees', image: 'https://goldenzari.com.pk/cdn/shop/files/9BDBED51-ABAE-4643-A8E7-AC35C7FC0EB9.jpg?v=1707830109' },
  { name: 'Formal', image: 'https://jazmin.pk/cdn/shop/files/43_65b31801-22cc-4c81-ac4c-a58bbf7a5695.jpg?v=1714648301&width=1200' },
  { name: 'Semi-Formal', image: 'https://www.faridahasan.com/images/thumbs/0006141_ombre-pearls-with-pants_1000.jpeg' },
  { name: 'Trendy', image: 'https://declarepakistan.com/cdn/shop/files/V1008_1.jpg?v=1734084439&width=533' },
  { name: 'Casual Wear', image: 'https://www.fabricoz.com/cdn/shop/files/Pakistani-Dress-C1212E_4_600x600.jpg?v=1726716071' },
  { name: 'Gota', image: 'https://www.nameerabyfarooq.com/cdn/shop/products/PakistaniGotaEmbroideredSuitinRedColor_1_620x.jpg?v=1606458117' },
];

export default function HeroPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img 
              src={cat.image} 
              alt={`${cat.name} Collection`} 
              className="w-full h-64 md:h-auto object-cover md:object-contain transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">{cat.name}</span>
            </div>
            <Link
              to={`/${cat.name.toLowerCase().replace(' ', '-')}`}
              className="absolute bottom-4 right-4 bg-purple-200 text-purple-900 px-6 py-2 rounded-full hover:bg-purple-300 transition-colors opacity-0 group-hover:opacity-100"
            >
              Browse Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
