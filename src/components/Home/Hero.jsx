import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-72px)] lg:h-[calc(100vh-88px)] min-h-[580px]">
      <div className="absolute inset-0">
        <img
          style={{ aspectRatio: '16/9', objectFit: 'cover' }}
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
          alt="Industrial Automation Facility"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Responsive dark overlay for readability */}
      <div className="absolute inset-0 bg-dark-bg/85 lg:bg-gradient-to-r lg:from-dark-bg/95 lg:via-dark-bg/75 lg:to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky"></div>
      
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-16 lg:px-24">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="h-px w-8 sm:w-12 bg-green-bright"></div>
          <span className="font-body tracking-widest uppercase font-semibold text-[10px] sm:text-xs tracking-[0.2em]">
            <span className="text-[#84cc16]">ASCENT </span>
            <span className="text-white">GREEN TECHNOLOGIES PVT. LTD.</span>
          </span>
        </div>
        
        <h1 className="font-sans font-black text-white leading-tight mb-4 text-2xl sm:text-4xl lg:text-[52px] max-w-[700px] tracking-tight uppercase">
          Energy <span className="text-sky-light">•</span> Automation <span className="text-green-bright">•</span> Sustainability
        </h1>
        
        <p className="font-sans font-semibold text-xs sm:text-sm lg:text-base text-green-bright uppercase tracking-wider mb-4">
          Integrated Drives • Premium Efficiency Motors • Pumping Systems
        </p>
        
        <p className="font-body font-normal mb-8 sm:mb-10 text-xs sm:text-sm lg:text-[15px] max-w-[520px] leading-relaxed text-sky-light/85">
          Authorized Value Business Partner for <strong>YASKAWA</strong>, <strong>ABB</strong>, and <strong>KSB</strong>. Delivering fully matched electro-mechanical packages, control panel integration, and commissioning across India.
        </p>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            to="/products"
            className="font-body bg-green hover:bg-green-bright text-white px-6 sm:px-8 py-3 tracking-wider uppercase font-bold rounded-sm text-center text-xs transition-colors"
          >
            Products &amp; Solutions
          </Link>
          <Link
            to="/clientele"
            className="font-body border border-sky-light/60 hover:bg-white/10 px-6 sm:px-8 py-3 tracking-wider uppercase font-bold bg-transparent rounded-sm text-center text-xs text-sky-light transition-colors"
          >
            Our Clients
          </Link>
          <Link
            to="/brands"
            className="font-body border border-sky-light/60 hover:bg-white/10 px-6 sm:px-8 py-3 tracking-wider uppercase font-bold bg-transparent rounded-sm text-center text-xs text-sky-light transition-colors"
          >
            OEM Partners
          </Link>
        </div>
      </div>
    </div>
  );
}
