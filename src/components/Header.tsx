import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import neophyteLogo from '../assets/logos/neophyte_logo.png';

interface Product {
  name: string;
  description: string;
  url: string;
  color: string;
}

const products: Product[] = [
  {
    name: 'Disha',
    description: 'AI-Powered Retail Intelligence',
    url: 'https://disha.neophyte.live/',
    color: 'bg-blue-500'
  },
  {
    name: 'Sentinel',
    description: 'Advanced Security Solutions',
    url: 'https://sentinel.neophyte.live/',
    color: 'bg-red-500'
  },
  {
    name: 'Neohrms',
    description: 'HR Management System',
    url: 'https://neo-hrms-test.neophyte.live/',
    color: 'bg-green-500'
  },
  {
    name: 'Neophyte',
    description: 'Innovation Through Technology',
    url: 'https://neophyte.ai/',
    color: 'bg-purple-500'
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-primary/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src={neophyteLogo}
              alt="Neophyte Logo" 
              className="w-44 h-6"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
          <NavLink
              to="/technologies"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-300'
                }`
              }
            >
              Technologies
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-300'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-300'
                }`
              }
            >
              Blog
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <NavLink
              to="/technologies"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-300'
                }`
              }
            >
              Technologies
            </NavLink>
            <button
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark border-t border-primary/10">
            <div className="grid grid-cols-2 gap-2 p-2">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-lg ${product.color} flex items-center justify-center text-white font-bold shadow-sm`}>
                    {product.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-white group-hover:text-primary transition-colors truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 truncate">
                      {product.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}