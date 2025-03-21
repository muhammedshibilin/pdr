'use client';

import { useEffect, useRef } from 'react';
import { handleMouseMove } from '@/utils/mouseAnimation';

const services = [
  {
    title: "Business Consulting",
    description: "Strategic solutions to elevate your business performance"
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge technology"
  },
  {
    title: "Market Analysis",
    description: "Deep insights to help you make informed decisions"
  }
];

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => handleMouseMove(e, cursor);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        
        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text tracking-tight">
              PDR
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Something big is coming
            </p>
            
            {/* Countdown - You might want to add actual countdown logic */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit) => (
                <div key={unit} className="service-card p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-1">00</div>
                  <div className="text-sm text-gray-400">{unit}</div>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="grid md:grid-cols-3 gap-6 mt-20">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="service-card p-6 rounded-xl floating"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
    </>
  );
}
