import React from 'react';
import BridalProductCard from './components/BridalProductCard';
import { useParams } from 'react-router-dom';

const TrendyPage = () => {
  const { category } = useParams();
  const formattedCategory = category?.replace('-', ' ');
  const numberOfProducts = 3;

  const productDetails = [
    { id: 1, name: 'Urban Edge Ensemble', description: 'Edgy and chic, perfect for city nights.', price: 215 },
    { id: 2, name: 'Runway Ready Dress', description: 'Straight from the runway to your wardrobe.', price: 101 },
    { id: 3, name: 'Street Style Set', description: 'Capture the essence of street style with this trendy set.', price: 0 }
  ];

  const imageUrls = [
    'https://i.ibb.co/5Xb2WsPJ/9.png',
    'https://i.ibb.co/DPMdK3cK/11.png',
    'https://i.ibb.co/KSnFV1p/21.png'
  ];

  const videoEmbedCodes = [
    `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/q9fp05?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`,
    `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/yvesfn?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`,
    `<div style="position:relative; width:100%; height:0px; padding-bottom:178.273%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/43t1b5?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`
  ];

  const products = productDetails.map((product, i) => ({
    id: `trendy-${product.id}`,
    name: product.name,
    description: product.description,
    price: product.price,
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
