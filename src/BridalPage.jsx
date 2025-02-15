import React from 'react';
import BridalProductCard from './components/BridalProductCard';

const bridalProducts = [
  {
    id: 1,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'https://i.ibb.co/hPK3Fsk/Whats-App-Image-2023-08-16-at-21-13-19.jpg' }
    ],
    description: 'A stunning gown for your special day.'
  },
  {
    id: 2,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'https://i.ibb.co/k6JDzqnQ/Whats-App-Image-2023-07-29-at-23-11-52.jpg' }
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
        url: 'https://i.ibb.co/r2d5jn6G/Whats-App-Image-2023-07-29-at-23-12-10.jpg'
      },
      {
        type: 'image',
        url: 'https://i.ibb.co/WWp7HX4h/3.jpg'
      },
      {
        type: 'image',
        url: 'https://i.ibb.co/wFvsB1tV/Whats-App-Image-2023-07-29-at-23-11-54-2.jpg'
      }
    ],
    description: 'A special collection with a carousel.'
  },
  {
    id: 4,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'https://i.ibb.co/xKB0fPtB/Whats-App-Image-2023-07-29-at-23-11-51.jpg' }
    ],
    description: 'A stunning gown for your special day.'
  },
  {
    id: 5,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'http://i.ibb.co/N6n4r9Jp/2.jpg' }
    ],
    description: 'A classic dress with a timeless design.'
  },
  {
    id: 6,
    name: 'Modern Bridal Ensemble',
    price: 1600,
    media: [
      { type: 'image', url: 'https://i.ibb.co/TBt7157F/Whats-App-Image-2023-07-29-at-23-12-21-2.jpg' }
    ],
    description: 'A contemporary ensemble for the modern bride.'
  },
  {
    id: 7,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'http://i.ibb.co/1Ys3hyBc/7.jpg' }
    ],
    description: 'A stunning gown for your special day.'
  },
  {
    id: 8,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'https://i.ibb.co/prPPjq2q/Whats-App-Image-2023-07-31-at-14-43-06.jpg' }
    ],
    description: 'A classic dress with a timeless design.'
  },
  {
    id: 9,
    name: 'Modern Bridal Ensemble',
    price: 1600,
    media: [
      { type: 'image', url: 'https://i.ibb.co/hFbWQqzW/Whats-App-Image-2023-07-29-at-23-12-24-2.jpg' }
    ],
    description: 'A contemporary ensemble for the modern bride.'
  },
  {
    id: 10,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'https://i.ibb.co/h1dc6g2w/Whats-App-Image-2023-07-31-at-14-43-05.jpg' }
    ],
    description: 'A stunning gown for your special day.'
  },
  {
    id: 11,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'https://i.ibb.co/gZVJxNDv/Whats-App-Image-2023-08-01-at-23-50-27-1.jpg' }
    ],
    description: 'A classic dress with a timeless design.'
  },
  {
    id: 12,
    name: 'Modern Bridal Ensemble',
    price: 1600,
    media: [
      { type: 'image', url: 'https://i.ibb.co/pjbm4z7B/Whats-App-Image-2023-08-05-at-21-44-40.jpg' }
    ],
    description: 'A contemporary ensemble for the modern bride.'
  },
  {
    id: 13,
    name: 'Elegant Bridal Gown',
    price: 1500,
    media: [
      { type: 'image', url: 'https://i.ibb.co/HLgLjX4y/Whats-App-Image-2023-08-05-at-21-44-48.jpg' }
    ],
    description: 'A stunning gown for your special day.'
  },
  {
    id: 14,
    name: 'Vintage Bridal Dress',
    price: 1300,
    media: [
      { type: 'image', url: 'https://i.ibb.co/X2WjTFq/vintage1.jpg' }
    ],
    description: 'A classic dress with a timeless design.'
  },
  {
    id: 15,
    name: 'Modern Bridal Ensemble',
    price: 1600,
    media: [
      { type: 'image', url: 'https://i.ibb.co/182qjxz/special1.jpg' }
    ],
    description: 'A contemporary ensemble for the modern bride.'
  },
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
