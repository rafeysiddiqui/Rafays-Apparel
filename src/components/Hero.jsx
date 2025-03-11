import React from 'react';

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <img
        src="https://source.unsplash.com/random/1600x900?fashion"
        alt="Fashion Model"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Elevate Your Style</h1>
        <p className="text-lg mb-8 animate-fade-in-up">Premium Clothing Collections</p>
        <button className="bg-midnight-purple text-white font-bold py-2 px-8 rounded-full hover:bg-purple-700 hover:animate-bounce-slow transition-all">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
