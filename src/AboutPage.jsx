import React from 'react';

export default function AboutPage() {
  const paragraphs = [
    "Welcome to Rafay's Apparel, where fashion meets individuality – our motto is simple yet powerful: Be Yourself. We take pride in curating stylish and trendy clothing pieces that celebrate the uniqueness of each individual.",
    "At Rafay's Apparel, we believe that fashion should be a canvas for self-expression. Our passion lies in empowering you to embrace your true self, because we know that the most beautiful fashion statement comes from being authentically you.",
    "Explore our diverse range of high-quality outfits, meticulously chosen to cater to every style and personality. Whether you're in search of casual essentials or head-turning statement pieces, our collections offer something extraordinary for every occasion.",
    "We place utmost importance on comfort, quality, and craftsmanship, so you can feel confident and comfortable in our garments while making a statement that is uniquely yours.",
    "Join our fashion-forward community and embark on a sartorial journey that celebrates your individuality. Stay on top of the latest trends, timeless classics, and exclusive designs – all crafted to inspire you to Be Yourself unapologetically.",
    "Step into the world of Rafay's Apparel, where style knows no boundaries, and confidence is the ultimate accessory. Discover your perfect look and let your fashion story unfold authentically with us."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-purple-200 mb-8 text-center animate-fade-in-up">
          About Rafay's Apparel
        </h2>

        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-purple-300 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
