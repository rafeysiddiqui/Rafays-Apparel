import React from 'react';
import ProductCard from './components/ProductCard';
import { useParams } from 'react-router-dom';

export default function CategoryPage() {
  const { category } = useParams();
  const formattedCategory = category?.replace('-', ' ');

  const coverImageMapping = {
    Bridal: 'https://www.nameerabyfarooq.com/cdn/shop/collections/Pakistani-Bridal-Dresses-2018_1200x630.jpg?v=1662560423',
    Sarees: 'https://www.fabricoz.com/cdn/shop/articles/saree-in-pakistan_800x.jpg?v=1637898080',
    Formal: 'https://askanigroup.com/wp-content/uploads/2023/06/Pakistani-Casual-And-Simple-Dress-Designs-2023-For-Eid.jpeg',
    'Semi-Formal': 'https://i.ytimg.com/vi/TOOdxTXJ3Tg/maxresdefault.jpg',
    Trendy: 'https://www.dressyzone.com/cdn/shop/articles/banner_07cb9f7f-d804-4049-a950-fa70d77e5f89_1200x1200.jpg?v=1647599718',
    'Casual Wear': 'https://askanigroup.com/wp-content/uploads/2023/06/Meri-Chaand-Baaliyan-Collection-by-Asim-Jofa-AJKM-12.jpg',
    Gota: 'https://live.staticflickr.com/1934/30921873687_0537fa0c8e_b.jpg'
  };

  const coverImage = coverImageMapping[formattedCategory];

  const products = Array(4).fill().map((_, i) => ({
    id: `${category}-${i}`,
    name: `${category} Design ${i + 1}`,
    price: 199 + (i * 50),
    image: `https://source.unsplash.com/random/600x600?${category},${i}`
  }));

  return (
    <div className="pt-20">
      {/* Cover Section */}
      <div className="relative min-h-[70vh] mb-12">
        {coverImage ? (
          // If a cover image is found, display it.
          <img
            src={coverImage}
            alt={`${formattedCategory} Cover`}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          // Fallback: Display a plain background if no image is found.
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          </div>
        )}
        {/* Overlay the category title on top of the cover image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white px-4 text-center capitalize">
            {formattedCategory}
          </h1>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-purple-950 via-black to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
