import React from 'react';
import BridalProductCard from './components/BridalProductCard';

const bridalProducts = [
  {
    id: 1,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'https://i.ibb.co/pBzx1qSB/Whats-App-Image-2025-02-15-at-23-06-31-1.jpg' }
    ],
   	description: 'A stunning gown for your special day.'
  },
  {
    id: 2,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'https://i.ibb.co/H6xQX8D/Whats-App-Image-2025-02-15-at-23-06-30-1.jpg' }
    ],
    description: 'A classic dress with a timeless design.'
  },
  {
    id: 3,
    name: 'Special Bridal Collection',
    price: 2000,
    useCarousel: true,
    media: [
      {
        type: 'image',
        url: 'https://i.ibb.co/Y7WdPQc0/Whats-App-Image-2025-02-15-at-23-06-29-2.jpg'
      }
    ],
    description: 'A special collection with a carousel.'
  },
  {
    id: 4,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'https://i.ibb.co/Pz3PzdkY/Whats-App-Image-2025-02-15-at-23-06-28.jpg' }
    ],
    description: 'A stunning gown for your special day.'
  },
  {
    id: 5,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'https://i.ibb.co/6JypHWCb/Whats-App-Image-2025-02-15-at-23-06-27.jpg' }
    ],
    description: 'A classic dress with a timeless design.'
  },
  {
    id: 6,
    name: 'Modern Bridal Ensemble',
    price: 1600,
    media: [
      { type: 'image', url: 'https://i.ibb.co/mrgNRZz1/Whats-App-Image-2025-02-15-at-23-06-26.jpg' }
    ],
    description: 'A contemporary ensemble for the modern bride.'
  },
  {
    id: 7,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'https://i.ibb.co/nsSTK2f7/Whats-App-Image-2025-02-15-at-23-06-23.jpg' }
    ],
    description: 'A stunning gown for your special day.'
  },
  {
    id: 8,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'https://i.ibb.co/PZTNKgJC/Whats-App-Image-2025-02-15-at-23-06-21.jpg' }
    ],
    description: 'A classic dress with a timeless design.'
  },
  {
    id: 9,
    name: 'Modern Bridal Ensemble',
    price: 1600,
    media: [
      { type: 'image', url: 'https://i.ibb.co/20GTPp5J/Whats-App-Image-2025-02-15-at-23-06-15.jpg' }
    ],
    description: 'A contemporary ensemble for the modern bride.'
  },
  {
    id: 10,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'https://i.ibb.co/v65jjNLW/Whats-App-Image-2025-02-15-at-23-01-48.jpg' }
    ],
    description: 'A stunning gown for your special day.'
  },
  {
    id: 11,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'https://i.ibb.co/7dgwD7Sc/Whats-App-Image-2025-02-15-at-23-01-47.jpg' }
    ],
    description: 'A classic dress with a timeless design.'
  },
  {
    id: 12,
    name: 'Modern Bridal Ensemble',
    price: 1600,
    media: [
      { type: 'image', url: 'https://i.ibb.co/Tqn2VchT/Whats-App-Image-2025-02-15-at-23-01-47-1.jpg' }
    ],
    description: 'A contemporary ensemble for the modern bride.'
  },
  {
    id: 13,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'https://i.ibb.co/TxNtS5GH/Whats-App-Image-2025-02-15-at-23-01-45.jpg' }
    ],
    description: 'A stunning gown for your special day.'
  },
  {
    id: 14,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'https://i.ibb.co/ycZ8Cypz/Whats-App-Image-2025-02-15-at-23-01-46.jpg' }
    ],
    description: 'A classic dress with a timeless design.'
  },
  {
    id: 15,
    name: 'Modern Bridal Ensemble',
    price: 1600,
    media: [
      { type: 'image', url: 'https://i.ibb.co/rRQZt3Tj/Capture.png' }
    ],
    videoEmbedCode: '<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/d9hr2j?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
    description: 'A contemporary ensemble for the modern bride.'
  },
  {
    id: 16,
    name: 'Sapphire Dreams',
    price: 1700,
    media: [
      { type: 'image', url: 'https://i.ibb.co/KQB3rhb/2.png' }
    ],
    videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/e73ifr?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>`,
    description: 'A sapphire dream come true, perfect for a modern bride.'
  },
  {
    id: 17,
    name: 'Amethyst Allure',
    price: 1700,
    media: [
      { type: 'image', url: 'https://i.ibb.co/B5KMFhxF/4.png' }
    ],
		videoEmbedCode: '<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/1twttc?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
    description: 'A gown that allures with its amethyst-toned beauty.'
  },
  {
    id: 18,
    name: 'Golden Serenity',
    price: 1700,
    media: [
      { type: 'image', url: 'https://i.ibb.co/S748FCsD/3.png' }
    ],
		videoEmbedCode: '<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/s6uf4a?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>',
    description: 'A gown that exudes serenity with its golden accents.'
  }
];

const BridalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[20vh] mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white px-4 text-center capitalize">
              Bridal
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {bridalProducts.map((product) => (
            <BridalProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BridalPage;
