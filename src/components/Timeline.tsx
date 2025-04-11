import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const milestones = [
  {
    year: '2014',
    title: 'Company Founded',
    description: 'Started with a vision to transform retail automation',
  },
  {
    year: '2015',
    title: 'First Major Client',
    description: 'Partnered with a Fortune 500 retailer',
  },
  {
    year: '2016',
    title: 'AI Platform Launch',
    description: 'Released our core AI-powered retail platform',
  },
  {
    year: '2018',
    title: 'Expansion',
    description: 'Opened offices in Europe and Asia',
  },
  {
    year: '2020',
    title: 'Series B Funding',
    description: '$50M investment to accelerate growth',
  },
  {
    year: '2022',
    title: 'Global Recognition',
    description: 'Named Top 10 Retail Tech Innovation',
  },
  {
    year: '2023',
    title: 'AI Breakthrough',
    description: 'Launched next-gen predictive analytics',
  },
];

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setIsPaused(true); // Pause auto-scroll when manually scrolling
      
      // Resume auto-scroll after a delay
      setTimeout(() => {
        setIsPaused(false);
      }, 1000);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const autoScroll = () => {
      if (scrollRef.current && !isPaused && !isResetting) {
        const isAtEnd = 
          Math.ceil(scrollRef.current.scrollLeft + scrollRef.current.clientWidth) >= 
          scrollRef.current.scrollWidth - 5;

        if (isAtEnd) {
          setIsResetting(true);
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
              setIsResetting(false);
            }
          }, 1000);
        } else {
          scrollRef.current.scrollBy({ left: 1, behavior: 'auto' });
        }
      }
    };

    intervalId = setInterval(autoScroll, 30);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused, isResetting]);

  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-left text-white mb-16">
          Our Journey
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1c1c1c]/80 p-2 rounded-full 
                     text-white hover:bg-[#2c2c2c] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="overflow-x-auto hide-scrollbar scroll-smooth"
            style={{ height: '500px' }}
          >
            <div
              className="relative"
              style={{
                width: '2000px',
                height: '100%',
                paddingTop: '60px',
                paddingBottom: '60px',
              }}
            >
              {/* Timeline Path */}
              <div className="absolute left-0 right-0" style={{ top: '50%' }}>
                <svg
                  className="w-full"
                  height="80"
                  preserveAspectRatio="none"
                  viewBox="0 0 2000 80"
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    left: 0,
                  }}
                >
                  <path
                    d="M0,40 C285,10 285,70 570,40 C855,10 855,70 1140,40 C1425,10 1425,70 1710,40 C1995,10 1995,70 2000,40"
                    stroke="currentColor"
                    className="text-primary"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Timeline Items */}
              <div className="absolute inset-0 flex justify-between px-20">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0;
                  const position = (index / (milestones.length - 1)) * 100;

                  return (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center`}
                      style={{ width: '240px' }}
                    >
                      {isEven ? (
                        <>
                          <div className="w-full mt-2.5 bg-[#1c1c1c] p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-[#2c2c2c]">
                            <span className="text-primary text-2xl font-bold block mb-3">
                              {milestone.year}
                            </span>
                            <h3 className="text-white text-lg font-semibold mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {milestone.description}
                            </p>
                          </div>
                          <div className="w-0.5 h-16 bg-primary relative">
                            <div
                              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full"
                              style={{ transform: 'translate(-50%, 50%)' }}
                            >
                              <div className="absolute w-8 h-8 bg-primary/20 rounded-full -inset-2 animate-pulse" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="h-[calc(50%-32px)] mt-10" />
                          <div className="w-0.5 h-16 bg-primary relative">
                            <div
                              className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full"
                              style={{ transform: 'translate(-50%, -50%)' }}
                            >
                              <div className="absolute w-8 h-8 bg-primary/20 rounded-full -inset-2 animate-pulse" />
                            </div>
                          </div>
                          <div className="w-full bg-[#1c1c1c] p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-[#2c2c2c]">
                            <span className="text-primary text-2xl font-bold block mb-3">
                              {milestone.year}
                            </span>
                            <h3 className="text-white text-lg font-semibold mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {milestone.description}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1c1c1c]/80 p-2 rounded-full 
                     text-white hover:bg-[#2c2c2c] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}