import React from 'react';
import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div className="w-full bg-light-surface flex flex-col lg:flex-row min-h-[520px]">
      {/* Left Column (Image) */}
      <div className="w-full lg:w-5/12 relative overflow-hidden h-72 lg:h-auto min-h-[320px]">
        <img
          style={{ aspectRatio: '4/5', objectFit: 'cover' }}
          src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800"
          alt="Engineering Assembly"
          className="w-full h-full object-cover"
        />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-0.5 bg-sky-light"></div>
        <div className="block lg:hidden absolute bottom-0 left-0 right-0 h-0.5 bg-sky-light"></div>
      </div>
      
      {/* Right Column (Text) */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center px-6 sm:px-16 lg:px-20 py-12 sm:py-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-sky"></div>
          <span className="font-body text-sky-muted uppercase tracking-widest font-bold text-[10px]">
            Who We Are
          </span>
        </div>
        
        <h2 className="font-headings text-text-dark font-normal mb-5 text-2xl sm:text-3xl lg:text-[38px] leading-tight max-w-[540px]">
          Integrated Electro-Mechanical &amp; Control Solutions
        </h2>
        
        <p className="font-body text-text-muted-light mb-4 text-xs sm:text-sm leading-relaxed max-w-[540px]">
          <strong>ASCENT GREEN TECHNOLOGIES PVT. LTD. (formerly known as ASCENT CONTROL SYSTEMS)</strong> is an integrated industrial automation, fluid-handling, and energy-efficiency engineering company. As Authorized Value Business Partners for <strong>YASAKAWA</strong>, <strong>ABB</strong>, and <strong>KSB</strong>, we deliver complete, application-matched drive, motor, and pumping systems under one roof.
        </p>
        
        <p className="font-body text-text-muted-light mb-6 text-xs sm:text-sm leading-relaxed max-w-[540px]">
          Rather than operating as a standalone component supplier, our engineering team collaborates closely with commercial facilities and industrial plants to execute end-to-end solutions—from system design and control panel integration to testing, erection, and commissioning.
        </p>
        
        <div className="flex items-center gap-4">
          <Link
            to="/about"
            className="font-body text-green hover:text-green-bright font-bold uppercase tracking-wider text-xs flex items-center gap-1.5"
          >
            <span>Read Full Company Profile</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
