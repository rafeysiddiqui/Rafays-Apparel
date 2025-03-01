import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-black to-black text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h4 className="font-bold text-xl">Rafay's Apparel</h4>
          <p>Premium Fashion Destination</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://api.whatsapp.com/send?phone=%2B923040226982&data=ARC55gbEN-iRUlEWuJlwJeG_jVKQ6gWYpmkTkV5Z1J0FFNDnNk1NUsj2m687K3wk_3zTWgawGrY0FfOtgi05qo6VjAnEcO_qu70biyBESalNVZwOoHgbbYH0pImeVeJkOWkH7BxkFkEGTmZvLveJ2WVXSQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1FqJa5md6xrl-1OktT9b-fEpY61VHvoag6mc3OHNw3rUSH6OTMmf83hlM" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="w-6 h-6 hover:-rotate-12 hover:text-purple-400 transition-all" />
          </a>
          <a href="https://www.instagram.com/rafaysapparel_by_shazia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-6 h-6 hover:-rotate-12 hover:text-purple-400 transition-all" />
          </a>
          <a href="https://www.facebook.com/rafaysapparelonline" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="w-6 h-6 hover:-rotate-12 hover:text-purple-400 transition-all" />
          </a>
        </div>
      </div>
    </footer>
  );
}
