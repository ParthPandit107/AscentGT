import React from 'react';

export default function MissionVision() {
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-[480px]" >
      {/* Left Block - Mission */}
      <div className="w-full lg:w-1/2 bg-dark-bg flex flex-col justify-center px-6 sm:px-16 py-12 sm:py-16 relative">
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-0.5 bg-sky opacity-20"></div>
        <div className="block lg:hidden absolute bottom-0 left-0 right-0 h-0.5 bg-sky opacity-20"></div>
        
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px w-8 bg-sky"></div>
          <span className="font-body text-sky uppercase tracking-widest font-medium text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">Mission</span>
        </div>
        
        <blockquote className="font-headings text-text-light font-normal mb-6 text-lg sm:text-2xl lg:text-[26px] leading-relaxed max-w-[440px]">
          "To engineer industrial progress through world-class technology partnerships, delivering reliable, energy-efficient solutions that power India's growth."
        </blockquote>
        
        <p className="font-body text-stone text-xs sm:text-[14px] leading-relaxed max-w-[420px]">
          We exist to make premium industrial engineering accessible — combining global OEM quality with local expertise and uncompromising technical service.
        </p>
      </div>

      {/* Right Block - Vision */}
      <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[320px] lg:min-h-0">
        <img style={{"aspectRatio":"4/3","objectFit":"cover"}} src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{"background":"linear-gradient(to right, rgba(8,51,72,0.80) 0%, rgba(8,51,72,0.15) 65%)"}}></div>
        
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-14 py-12 sm:py-16">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <div className="h-px w-8 bg-green-bright"></div>
            <span className="font-body text-green-bright uppercase tracking-widest font-medium text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">Vision</span>
          </div>
          
          <h3 className="font-headings text-text-light font-normal mb-4 sm:mb-5 text-lg sm:text-2xl lg:text-[26px] leading-snug max-w-[370px]">
            India's most trusted authorized industrial solutions partner by 2030
          </h3>
          
          <p className="font-body text-xs sm:text-[14px] leading-relaxed max-w-[360px]" style={{"color":"#c4e8f5"}}>
            Recognized for engineering integrity, technical depth, and an unwavering commitment to client success across every industry we serve.
          </p>
        </div>
      </div>
    </div>
  );
}
