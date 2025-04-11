import React from 'react';

export default function BlogHero() {
  return (
    <div className="bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Insights & Innovation in Retail Technology
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Discover cutting-edge perspectives on AI, retail automation, and the future of commerce. 
          Stay ahead with our expert analysis and industry insights.
        </p>
        <div className="relative max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-3 bg-white rounded-full text-gray-900 placeholder-gray-500 pr-32 focus:outline-none shadow-sm"
          />
          <button 
            className="absolute right-1 top-1 px-6 py-2 bg-primary text-black font-medium rounded-full hover:bg-primary-light transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}