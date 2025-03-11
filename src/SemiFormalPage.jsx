import React from 'react';
import BridalProductCard from './components/BridalProductCard';
import { useParams } from 'react-router-dom';

const SemiFormalPage = () => {
  const { category } = useParams();
  const formattedCategory = category?.replace('-', ' ');
  const numberOfProducts = 15;

  const productDetails = [
    { id: 1, name: 'Twilight Waltz Dress', description: 'Dance the night away in this enchanting semi-formal dress.', price: 172, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/kidqe3?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 2, name: 'Midnight Sonata Gown', description: 'A serenade of style under the moonlit sky.', price: 154, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/edhezt?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 3, name: 'Crimson Cascade Ensemble', description: 'A cascading design that adds a touch of grace.', price: 190, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/p9p30k?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 4, name: 'Golden Hour Glimmer', description: 'Glimmer with warmth and charm in this golden dress.', price: 0, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/wwzs4g?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 5, name: 'Sapphire Serenity Set', description: 'Find serenity in this sapphire-toned ensemble.', price: 0, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:178.273%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/8z7y5l?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 6, name: 'Emerald Enchantment Gown', description: 'Enchant with the allure of this emerald green gown.', price: 0, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/0kgp8h?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 7, name: 'Rose Quartz Radiance Dress', description: 'Radiate beauty in this rose quartz-toned dress.', price: 226, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/5vu3zk?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 8, name: 'Silver Lining Ensemble', description: 'A touch of silver to brighten your evening.', price: 0, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/lw83a7?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 9, name: 'Ocean Breeze Gown', description: 'Feel the ocean breeze in this light and airy design.', price: 154, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/zzazsp?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 10, name: 'Velvet Touch Dress', description: 'Indulge in the luxurious velvet touch of this dress.', price: 0, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/pfof70?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 11, name: 'Silk Symphony Ensemble', description: 'A symphony of silk and style for your special occasion.', price: 0, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/s9cda1?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 12, name: 'Diamond Dust Dress', description: 'Sprinkled with elegance, perfect for a dazzling entrance.', price: 101, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/u16ai5?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 13, name: 'Ebony Essence Gown', description: 'A timeless choice that exudes sophistication.', price: 215, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/yj4urf?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 14, name: 'Pearl Cascade Ensemble', description: 'A cascading design that adds a touch of grace.', price: 0, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.824%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/uymbzd?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
    { id: 15, name: 'Azure Allure Ensemble', description: 'Alluring with its azure tones.', price: 0, videoEmbedCode: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/mdtyr5?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` }
  ];

  const imageUrls = [
    'https://i.ibb.co/cX6NH14S/5.png',
    'https://i.ibb.co/fYCKPtgb/6.png',
    'https://i.ibb.co/TMvG4C0T/7.png',
    'https://i.ibb.co/tPQM6qFy/8.png',
    'https://i.ibb.co/Q7Dpj9X9/10.png',
    'https://i.ibb.co/zW89fRjr/13.png',
    'https://i.ibb.co/Xf2WMX3C/15.png',
    'https://i.ibb.co/0pBM3JLB/16.png',
    'https://i.ibb.co/6fnMFbF/18.png',
    'https://i.ibb.co/5XWRLcTf/19.png',
    'https://i.ibb.co/57kzQxk/23.png',
    'https://i.ibb.co/5hCjWGQf/24.png',
    'https://i.ibb.co/7dy84TZw/25.png',
    'https://i.ibb.co/fd39LryB/27.png',
    'https://i.ibb.co/cSCVS7gD/28.png'
  ];

  const products = productDetails.map((product, i) => ({
    id: `semi-formal-${product.id}`,
    name: product.name,
    description: product.description,
    price: product.price,
    media: [{ type: 'image', url: imageUrls[i] }],
    videoEmbedCode: productDetails[i].videoEmbedCode || null,
    category: formattedCategory
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[20vh] mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white px-4 text-center capitalize">
              {formattedCategory}
							Semi-Formal
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

export default SemiFormalPage;
