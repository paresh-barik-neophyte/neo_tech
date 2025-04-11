import React from 'react';
import { Brain, Glasses, ShoppingCart, Database, Truck, LineChart } from 'lucide-react';

const technologies = [
  { icon: Brain, text: 'Artificial Intelligence' },
  { icon: Glasses, text: 'Augmented Reality' },
  { icon: ShoppingCart, text: 'Retail Analytics' },
  { icon: Database, text: 'E-commerce Solutions' },
  { icon: Truck, text: 'Supply Chain Optimization' },
  { icon: LineChart, text: 'Predictive Analytics' }
];

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2598630/pexels-photo-2598630.jpeg?auto=compress&cs=tinysrgb&w=800")'
        }}
      />
      
      <div className="absolute inset-0 bg-hero-pattern" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Optimizing your value chain
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex items-center space-x-2 bg-dark-light/50 backdrop-blur-sm px-6 py-3 rounded-full 
                        border border-primary/20 text-primary-light transition-all duration-300 hover:bg-primary/10 
                        hover:scale-105 cursor-pointer"
            >
              <tech.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{tech.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}