import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Anderson',
    role: 'Senior AI Engineer',
    specialty: 'Deep Learning & Neural Networks',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Maria Garcia',
    role: 'UX Researcher',
    specialty: 'User Behavior Analysis',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Robert Chen',
    role: 'Data Scientist',
    specialty: 'Predictive Modeling',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Sophia Lee',
    role: 'Frontend Developer',
    specialty: 'React & WebGL',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Marcus Johnson',
    role: 'DevOps Engineer',
    specialty: 'Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Emma Wilson',
    role: 'Product Manager',
    specialty: 'Retail Solutions',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Daniel Kim',
    role: 'ML Engineer',
    specialty: 'Computer Vision',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Laura Martinez',
    role: 'Backend Developer',
    specialty: 'Distributed Systems',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Thomas Wright',
    role: 'QA Engineer',
    specialty: 'Automated Testing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Nina Patel',
    role: 'UI Designer',
    specialty: 'Design Systems',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=60',
    social: { linkedin: '#', twitter: '#', github: '#' }
  }
];

export default function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      let newIndex;
      if (window.innerWidth >= 768) {
        // For larger screens, scroll one card at a time
        newIndex = direction === 'left'
          ? Math.max(0, currentIndex - 1)
          : (currentIndex + 1) % (teamMembers.length - 2); // Loop back to start
      } else {
        // For mobile, wrap around
        newIndex = direction === 'left'
          ? (currentIndex - 1 + teamMembers.length) % teamMembers.length
          : (currentIndex + 1) % teamMembers.length;
      }
      
      setCurrentIndex(newIndex);
      
      if (window.innerWidth >= 768) {
        const cardWidth = (scrollRef.current.clientWidth - 64) / 3; // Subtract padding and divide by 3
        scrollRef.current.scrollTo({
          left: newIndex * (cardWidth + 32), // Add gap
          behavior: 'smooth'
        });
      } else {
        const cardWidth = scrollRef.current.clientWidth;
        scrollRef.current.scrollTo({
          left: newIndex * cardWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const autoScroll = () => {
      if (!isPaused) {
        scroll('right');
      }
    };

    intervalId = setInterval(autoScroll, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused, currentIndex]);

  return (
    <div className="relative px-4 md:px-8 pt-4 overflow-hidden">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1c1c1c]/80 p-2 rounded-full 
                 text-white hover:bg-[#2c2c2c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
      >
        <div className="flex w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-[calc((100%-64px)/3)] md:mx-4 first:ml-0 last:mr-0 
                       snap-start bg-black rounded-xl overflow-hidden shadow-lg 
                       transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-1">{member.role}</p>
                <p className="text-gray-400 text-sm mb-3">{member.specialty}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1c1c1c]/80 p-2 rounded-full 
                 text-white hover:bg-[#2c2c2c] transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination dots (mobile only) */}
      <div className="flex justify-center space-x-2 mt-4 md:hidden">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-600'
            }`}
            onClick={() => {
              setCurrentIndex(index);
              scrollRef.current?.scrollTo({
                left: index * scrollRef.current.clientWidth,
                behavior: 'smooth'
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}