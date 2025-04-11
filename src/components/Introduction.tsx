import React from 'react';
import { Zap, Users, Target, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Zap, value: '500+', label: 'Retail Partners' },
  { icon: Users, value: '1M+', label: 'Daily Users' },
  { icon: Target, value: '99.9%', label: 'Accuracy Rate' },
  { icon: TrendingUp, value: '40%', label: 'Revenue Growth' }
];

export default function Introduction() {
  return (
    <section className="py-20" style={{ backgroundColor: '#0e1219' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-left text-white mb-16">
          Transforming Retail Operations
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              We're on a mission to revolutionize retail operations through intelligent automation. 
              Our cutting-edge AI solutions seamlessly integrate with existing infrastructure to 
              create smarter, more efficient retail environments.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By leveraging advanced machine learning and predictive analytics, we enable businesses 
              to make data-driven decisions that optimize inventory, enhance customer experience, 
              and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 bg-black rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}