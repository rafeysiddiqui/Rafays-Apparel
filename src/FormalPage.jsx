import React from 'react';
import BridalProductCard from './components/BridalProductCard';
import { useParams } from 'react-router-dom';

const FormalPage = () => {
  const { category } = useParams();
  const formattedCategory = category?.replace('-', ' ');
  const numberOfProducts = 9;

  const productDetails = [
    { id: 1, name: 'City Lights Ensemble', description: 'Perfect for making a statement at any formal event.', price: 0 },
    { id: 2, name: 'Midnight Hour Gown', description: 'Designed for evenings filled with sophistication.', price: 0 },
    { id: 3, name: 'Starlight Sonata', description: 'A piece that captures the magic of a starlit night.', price: 190 },
    { id: 4, name: 'Crimson Tide Dress', description: 'Command attention with this bold and elegant design.', price: 0 },
    { id: 5, name: 'Golden Whisper Gown', description: 'A subtle yet striking choice for a memorable evening.', price: 0 },
    { id: 6, name: 'Twilight Hour Ensemble', description: 'Capture the essence of twilight in this stunning piece.', price: 261 },
    { id: 7, name: 'Diamond Dust Dress', description: 'Sprinkled with elegance, perfect for a dazzling entrance.', price: 0 },
    { id: 8, name: 'Ebony Essence Gown', description: 'A timeless choice that exudes sophistication.', price: 394 },
    { name: 'Pearl Cascade Ensemble', description: 'A cascading design that adds a touch of grace to any occasion.', price: 733 }
  ];

  const imageUrls = [
    'https://i.ibb.co/FkKNvpNs/1.png',
    'https://i.ibb.co/YB9MKD6f/3.png',
    'https://i.ibb.co/Csn5BrZD/4.png',
    'https://i.ibb.co/1tsJdygh/12.png',
    'https://i.ibb.co/GS4qQLR/14.png',
    'https://i.ibb.co/pjrH4fLC/17.png',
    'https://i.ibb.co/wFX0W3Ff/Whats-App-Image-2025-02-28-at-10-52-05.jpg',
    'https://i.ibb.co/fzSpBM0w/Whats-App-Image-2025-02-27-at-20-50-09.jpg',
    'https://i.ibb.co/nNf4ZttG/Whats-App-Image-2025-02-27-at-21-59-40-1.jpg'
  ];

  const videoEmbedCodes = [
    `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/u4x121?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`,
    `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/pu8upo?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`,
    `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/p9p30k?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`,
    `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/3dblld?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`,
    `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/s47xug?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`,
    `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/0kgp8h?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`,
    null,
    null,
    null
  ];

  const products = productDetails.map((product, i) => ({
    id: `formal-${product.id}`,
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
              Formal
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

export default FormalPage;
