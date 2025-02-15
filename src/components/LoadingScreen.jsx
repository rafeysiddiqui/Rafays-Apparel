import { useEffect, useState } from 'react';
import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-950 via-black to-black">
      <div className="text-center">
        {/* Spinning Circle */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          <svg className="animate-spin h-full w-full text-purple-400" viewBox="0 0 24 24">
            <circle
              className="opacity-75"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray="80"
              strokeDashoffset="60"
            />
          </svg>
        </div>
        
        {/* Loading Text */}
        <p className="text-purple-300 font-semibold animate-pulse">
          Loading Rafay's Apparel...
        </p>
      </div>
    </div>
  );
}
