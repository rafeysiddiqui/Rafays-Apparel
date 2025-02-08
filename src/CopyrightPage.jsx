import React from 'react';

export default function CopyrightPage() {
  const paragraphs = [
    "At Rafay's Apparel, we take great pride in our passion for fashion and our dedication to creating bespoke apparel. We believe in the power of inspiration and its role in shaping unique and personalized clothing for our valued customers.",
    "We wish to emphasize that Rafay's Apparel does not claim ownership of any of the images, designs, or trademarks displayed on our website, social media platforms, or any other promotional materials. These images and designs serve merely as sources of inspiration for our talented team of designers and artisans.",
    "Our creative process involves using these references as a starting point, incorporating elements of iconic designs and styles to craft exclusive, custom-made garments that speak to the individuality and preferences of our customers.",
    "It is important to note that while we draw inspiration from various sources, the resulting creations are entirely distinct and tailored to each client's specific requests.",
    "We respect the intellectual property rights of designers, artists, and fashion houses, and we aim to bring homage to their creative genius through our unique interpretations. If you believe that any specific reference on our platform infringes upon your intellectual property, please contact us immediately, and we will take appropriate action to address your concerns.",
    "At Rafay's Apparel, we remain committed to providing exceptional and exclusive fashion that reflects the individuality of our clientele. We sincerely appreciate your understanding of our approach to inspiration and look forward to continuing our journey of creating distinctive, customized clothing that celebrates the essence of every wearer."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-purple-200 mb-8 text-center animate-fade-in-up">
          Copyright Disclaimer
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
          
          <div 
            className="mt-12 pt-8 border-t border-gray-200 animate-fade-in-up"
            style={{ animationDelay: `${paragraphs.length * 0.2}s` }}
          >
            <p className="text-purple-400 italic text-right">
              Sincerely,<br />
              Shazia ~ Founder and Creative Director<br />
              Rafay's Apparel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
