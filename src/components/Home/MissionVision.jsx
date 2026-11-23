import React from 'react';

export default function MissionVision() {
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-[440px]">
      {/* Left Block - Mission */}
      <div className="w-full lg:w-1/2 bg-dark-bg flex flex-col justify-center px-6 sm:px-14 py-12 sm:py-16 relative">
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-0.5 bg-sky opacity-20"></div>
        <div className="block lg:hidden absolute bottom-0 left-0 right-0 h-0.5 bg-sky opacity-20"></div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-sky"></div>
          <span className="font-body text-sky uppercase tracking-widest font-bold text-[10px]">Our Mission</span>
        </div>
        
        <h3 className="font-headings text-white font-normal mb-5 text-xl sm:text-2xl lg:text-[26px] leading-snug max-w-[480px]">
          Integrated Electro-Mechanical Engineering for Peak Performance
        </h3>
        
        <p className="font-body text-stone text-xs sm:text-[13px] leading-relaxed max-w-[460px]">
          Delivering integrated Yaskawa Drives + ABB High-Efficiency Motors + KSB Pumping Solutions + PLC and remote monitoring architectures tailored for HVACR, F&amp;B, water networks, and process plants across India.
        </p>
      </div>

      {/* Right Block - Purpose */}
      <div className="w-full lg:w-1/2 bg-dark-surface flex flex-col justify-center px-6 sm:px-14 py-12 sm:py-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-green-bright"></div>
          <span className="font-body text-green-bright uppercase tracking-widest font-bold text-[10px]">Purpose &amp; Principles</span>
        </div>
        
        <h3 className="font-headings text-white font-normal mb-5 text-xl sm:text-2xl lg:text-[26px] leading-snug max-w-[460px]">
          From Piecemeal Hardware to Matched Systems
        </h3>
        
        <p className="font-body text-sky-light/80 text-xs sm:text-[13px] leading-relaxed max-w-[460px]">
          Transitioning facilities from isolated hardware purchases to complete, matched drive-motor-pump packages and smart automation architectures that minimize Total Cost of Ownership (TCO).
        </p>
      </div>
    </div>
  );
}
