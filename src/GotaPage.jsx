import React from 'react';

const GotaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-black pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[20vh] mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white px-4 text-center capitalize">
              Gota
            </h1>
          </div>
        </div>
        <div className="text-center">
          <p className="text-purple-200 text-6xl font-extrabold animate-pulse">
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default GotaPage;
