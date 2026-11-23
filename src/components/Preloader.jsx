import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out animation at 1.3s
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#02301c] to-[#011a0f] transition-opacity duration-500 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-8 text-center px-4 animate-fade-in">
        
        {/* Circular brand container with logo, pulse animation, and a glowing white ray of light spinning in the perimeter */}
        <div className="relative bg-white p-6 rounded-full shadow-2xl flex items-center justify-center" style={{ height: '136px', width: '136px' }}>
          <img src={logo} alt="AGTPL Logo" className="h-full w-full object-contain animate-pulse" />
          
          {/* Circular border track */}
          <div className="absolute -inset-1 rounded-full border-2 border-white/10"></div>
          
          {/* Shiny white ray of light moving along the circular perimeter with outer glow */}
          <div 
            className="absolute -inset-1 rounded-full border-2 border-transparent border-t-white shadow-[0_0_15px_rgba(255,255,255,1)] animate-spin"
            style={{ animationDuration: '1.2s' }}
          ></div>
        </div>

        {/* Brand Text */}
        <div className="space-y-1">
          <h2 className="font-sans font-black tracking-wide text-white text-base sm:text-lg md:text-xl leading-tight whitespace-nowrap">
            ASCENT GREEN TECHNOLOGIES PVT. LTD.
          </h2>
          <p className="font-sans font-medium tracking-wider text-green-bright text-xs">
            Formerly known as Ascent Control Systems
          </p>
        </div>

        {/* Subtle status loader */}
        <span className="text-[10px] text-sky-light/55 uppercase tracking-widest font-mono pt-4 block">
          Loading Engineering Systems...
        </span>

      </div>
    </div>
  );
}
