import React from 'react';
import BridalProductCard from './components/BridalProductCard';
import { useParams } from 'react-router-dom';

const CasualWearPage = () => {
  const { category } = useParams();
  const formattedCategory = category?.replace('-', ' ');
  const numberOfProducts = 1;

  const productDetails = { id: 1, name: 'Everyday Comfort Set', description: 'Comfort and style combined for your daily adventures.', price: 150 };

  const imageUrls = [
    'https://i.ibb.co/kgvRqZyt/2.png'
  ];

  const videoEmbedCodes = [
    `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/vzpmap?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`
  ];

  const products = Array(numberOfProducts).fill().map((_, i) => ({
    id: `casual-${productDetails.id}`,
    name: productDetails.name,
    description: productDetails.description,
    price: productDetails.price,
    media: [{ type: 'image', url: imageUrls[i] }],
    videoEmbedCode: videoEmbedCodes[i] || null,
    category: formattedCategory
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[20vh] mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white px-4 text-center capitalize">
              Casual Wear
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

export default CasualWearPage;
