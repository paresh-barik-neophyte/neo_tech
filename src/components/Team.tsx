import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import TeamCarousel from './TeamCarousel';

const founders = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=60',
    bio: 'Former Google AI researcher with 15+ years in machine learning and retail analytics.',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=60',
    bio: 'Ex-Amazon technical leader specializing in large-scale retail systems.',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Emily Watson',
    role: 'COO & Co-founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=60',
    bio: 'Retail operations expert with experience at Target and Walmart.',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'David Park',
    role: 'CFO & Co-founder',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=60',
    bio: 'Former Goldman Sachs executive with expertise in retail finance.',
    social: { linkedin: '#', twitter: '#', github: '#' }
  }
];

const leadership = [
  {
    name: 'David Kim',
    role: 'Head of AI Research',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Lisa Thompson',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'James Wilson',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Rachel Chen',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Alex Martinez',
    role: 'VP of Sales',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Sarah Park',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  }
];

function TeamCard({ person, isFounder = false }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-black shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div className={isFounder ? "aspect-w-3 aspect-h-4" : "aspect-w-4 aspect-h-3"}>
        <img 
          src={person.image} 
          alt={person.name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{person.name}</h3>
        <p className="text-sm text-blue-400 mb-2">{person.role}</p>
        {isFounder && <p className="text-gray-300 text-sm mb-4">{person.bio}</p>}
        <div className="flex space-x-4">
          <a href={person.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={person.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href={person.social.github} className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="py-20 bg-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-left text-white mb-16">
          Our Neophytes
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {founders.map((founder, index) => (
            <TeamCard key={index} person={founder} isFounder={true} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {leadership.map((leader, index) => (
            <TeamCard key={index} person={leader} />
          ))}
        </div>
        
        <TeamCarousel />
      </div>
    </section>
  );
}