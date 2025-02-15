import React from 'react';
import { MessageCircle, Instagram, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-black to-black text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h4 className="font-bold text-xl">Rafay's Apparel</h4>
          <p>Premium Fashion Destination</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:-rotate-12 hover:text-purple-400 transition-all"><MessageCircle className="h-6 w-6" /></a>
          <a href="#" className="hover:-rotate-12 hover:text-purple-400 transition-all"><Instagram className="h-6 w-6" /></a>
          <a href="#" className="hover:-rotate-12 hover:text-purple-400 transition-all"><Facebook className="h-6 w-6" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
