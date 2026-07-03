import React from 'react';
import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div className="w-full bg-light-surface flex flex-col lg:flex-row min-h-[560px]" >
      {/* Left Column (Image) - Stacks on mobile, splits on desktop */}
      <div className="w-full lg:w-5/12 relative overflow-hidden h-72 lg:h-auto min-h-[320px]">
        <img style={{"aspectRatio":"4/5","objectFit":"cover"}} src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-0.5 bg-sky-light"></div>
        <div className="block lg:hidden absolute bottom-0 left-0 right-0 h-0.5 bg-sky-light"></div>
      </div>
      
      {/* Right Column (Text) - Stacked padding */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center px-6 sm:px-16 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <div className="h-px w-8 bg-sky"></div>
          <span className="font-body text-sky-muted uppercase tracking-widest font-medium text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">Our Legacy</span>
        </div>
        
        <h2 className="font-headings text-text-dark font-normal mb-6 text-2xl sm:text-3xl lg:text-[40px] leading-tight max-w-[520px] tracking-[-0.01em]">
          Engineering Solutions Forged in Industrial Precision
        </h2>
        
        <p className="font-body text-text-muted-light mb-4 text-xs sm:text-[15px] leading-relaxed max-w-[520px]">
          Ascent Green Technologies is an authorized systems integrator specializing in low-voltage motors, variable frequency drives, and industrial pumping — built on partnerships with the world's most trusted engineering brands.
        </p>
        
        <p className="font-body text-text-muted-light mb-8 text-xs sm:text-[15px] leading-relaxed max-w-[520px]">
          We deliver end-to-end engineering excellence — from design consultation and equipment supply to commissioning and after-sales support — for industries that demand nothing less than world-class reliability.
        </p>
        
        <div className="flex items-center gap-4">
          <Link to="/about" className="font-body text-green border-b border-green pb-0.5 uppercase tracking-wider sm:tracking-widest font-medium text-[10px] sm:text-[11px] tracking-[0.2em]">
            Discover Our Story
          </Link>
          <div className="w-8 h-px bg-green"></div>
        </div>
      </div>
    </div>
  );
}
