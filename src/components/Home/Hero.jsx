import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-72px)] lg:h-[calc(100vh-96px)] min-h-[620px]" >
      <div className="absolute inset-0">
        <img style={{"aspectRatio":"16/9","objectFit":"cover"}} src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
      </div>
      {/* Responsive dark overlay for readability */}
      <div className="absolute inset-0 bg-dark-bg/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-dark-bg/90 lg:via-dark-bg/60 lg:to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky"></div>
      
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-16 lg:px-24">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="h-px w-8 sm:w-12 bg-sky-light"></div>
          <span className="font-body text-sky-light tracking-widest uppercase font-medium text-[9px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em]">Engineering Excellence Since Inception</span>
        </div>
        
        <h1 className="font-headings text-light-surface font-normal leading-tight mb-6 text-3xl sm:text-5xl lg:text-[68px] max-w-[620px] tracking-[-0.01em]">
          Precision.<br />Power.<br /><span className="text-green-bright">Performance.</span>
        </h1>
        
        <p className="font-body font-normal mb-8 sm:mb-10 text-xs sm:text-[15px] lg:text-[17px] max-w-[480px] leading-relaxed text-sky-light/90">
          World-class industrial solutions through authorized partnerships with ABB, Yaskawa, and KSB — delivering motors, drives, automation, and pumping excellence across every industry.
        </p>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <Link to="/solutions" className="font-body bg-green hover:bg-green-bright text-primary-foreground px-6 sm:px-9 py-3 sm:py-4 tracking-wider sm:tracking-widest uppercase font-medium rounded-sm text-center text-[10px] sm:text-[11px] transition-colors">
            Explore Solutions
          </Link>
          <Link to="/brands" className="font-body border border-sky-light hover:bg-white/10 px-6 sm:px-9 py-3 sm:py-4 tracking-wider sm:tracking-widest uppercase font-medium bg-transparent rounded-sm text-center text-[10px] sm:text-[11px] text-sky-light transition-colors">
            Our Partnerships
          </Link>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 sm:gap-12 mt-12 sm:mt-16 pt-6 sm:pt-8 max-w-[500px]" style={{"borderTop":"1px solid rgba(56,178,216,0.3)"}}>
          <div className="flex flex-col">
            <span className="font-headings text-sky font-normal text-xl sm:text-2xl lg:text-3xl">500+</span>
            <span className="font-body uppercase text-[8px] sm:text-[10px] tracking-[0.2em] text-[#88b8cc]">Projects Delivered</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headings text-sky font-normal text-xl sm:text-2xl lg:text-3xl">20+</span>
            <span className="font-body uppercase text-[8px] sm:text-[10px] tracking-[0.2em] text-[#88b8cc]">Years of Expertise</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headings text-sky font-normal text-xl sm:text-2xl lg:text-3xl">3</span>
            <span className="font-body uppercase text-[8px] sm:text-[10px] tracking-[0.2em] text-[#88b8cc]">OEM Partnerships</span>
          </div>
        </div>
      </div>
    </div>
  );
}
