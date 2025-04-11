import React from 'react';
import { Send } from 'lucide-react';

export default function BlogHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl font-bold text-white mb-8">Latest Insights</h1>
        <div className="max-w-md">
          <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-black border border-gray-800 rounded-l-lg focus:outline-none focus:border-primary text-white"
            />
            <button className="px-6 py-2 bg-primary text-black font-semibold rounded-r-lg hover:bg-primary-light transition-colors flex items-center">
              <Send className="w-4 h-4 mr-2" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 md:text-right">
        <p className="text-xl text-gray-400 max-w-xl md:ml-auto">
          Explore our latest thoughts on AI, retail technology, and industry trends
        </p>
      </div>
    </div>
  );
}