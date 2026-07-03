import React from 'react';

export default function Stats() {
  return (
    <div className="w-full bg-sky-pale py-16 sm:py-20 px-6 sm:px-12 lg:px-16" >
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="flex items-center gap-4 mb-4 sm:mb-5">
          <div className="h-px w-8 sm:w-10 bg-sky"></div>
          <span className="font-body text-sky-muted uppercase tracking-widest font-medium text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">By the Numbers</span>
          <div className="h-px w-8 sm:w-10 bg-sky"></div>
        </div>
        <h2 className="font-headings text-text-dark font-normal text-2xl sm:text-3xl lg:text-[40px] leading-tight">Trusted by Industry Leaders</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-sky-light/60 border border-sky-light/60 mb-14 rounded-xs overflow-hidden">
        <div className="flex flex-col items-center justify-center py-8 sm:py-10 bg-light-surface">
          <span className="font-headings text-sky font-normal mb-2 text-2xl sm:text-3xl lg:text-[36px]">500+</span>
          <span className="font-body text-text-muted-dark uppercase text-center text-[9px] sm:text-[10px] tracking-[0.2em] max-w-[120px] px-2">Projects Completed</span>
        </div>
        
        <div className="flex flex-col items-center justify-center py-8 sm:py-10 bg-light-surface">
          <span className="font-headings text-sky font-normal mb-2 text-2xl sm:text-3xl lg:text-[36px]">20+</span>
          <span className="font-body text-text-muted-dark uppercase text-center text-[9px] sm:text-[10px] tracking-[0.2em] max-w-[120px] px-2">Years of Expertise</span>
        </div>
        
        <div className="flex flex-col items-center justify-center py-8 sm:py-10 bg-light-surface">
          <span className="font-headings text-sky font-normal mb-2 text-2xl sm:text-3xl lg:text-[36px]">₹150Cr+</span>
          <span className="font-body text-text-muted-dark uppercase text-center text-[9px] sm:text-[10px] tracking-[0.2em] max-w-[120px] px-2">Project Value Delivered</span>
        </div>
        
        <div className="flex flex-col items-center justify-center py-8 sm:py-10 bg-light-surface">
          <span className="font-headings text-sky font-normal mb-2 text-2xl sm:text-3xl lg:text-[36px]">98%</span>
          <span className="font-body text-text-muted-dark uppercase text-center text-[9px] sm:text-[10px] tracking-[0.2em] max-w-[120px] px-2">Client Retention Rate</span>
        </div>
        
        <div className="flex flex-col items-center justify-center py-8 sm:py-10 bg-light-surface">
          <span className="font-headings text-sky font-normal mb-2 text-2xl sm:text-3xl lg:text-[36px]">3</span>
          <span className="font-body text-text-muted-dark uppercase text-center text-[9px] sm:text-[10px] tracking-[0.2em] max-w-[120px] px-2">Global OEM Authorizations</span>
        </div>
        
        <div className="flex flex-col items-center justify-center py-8 sm:py-10 bg-light-surface">
          <span className="font-headings text-sky font-normal mb-2 text-2xl sm:text-3xl lg:text-[36px]">12+</span>
          <span className="font-body text-text-muted-dark uppercase text-center text-[9px] sm:text-[10px] tracking-[0.2em] max-w-[120px] px-2">Industries Served</span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <p className="font-body text-text-muted-dark uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-7 text-center text-[9px] sm:text-[10px]">
          Trusted by organizations including
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-sky-light/60 border border-sky-light/60 w-full rounded-xs overflow-hidden">
          <div className="flex items-center justify-center py-4 sm:py-5 bg-light-surface">
            <span className="font-body text-text-muted-light font-medium text-center text-[10px] sm:text-[12px] tracking-wide px-2">Birla Corporation</span>
          </div>
          <div className="flex items-center justify-center py-4 sm:py-5 bg-light-surface">
            <span className="font-body text-text-muted-light font-medium text-center text-[10px] sm:text-[12px] tracking-wide px-2">Adani Power</span>
          </div>
          <div className="flex items-center justify-center py-4 sm:py-5 bg-light-surface">
            <span className="font-body text-text-muted-light font-medium text-center text-[10px] sm:text-[12px] tracking-wide px-2">Tata Steel</span>
          </div>
          <div className="flex items-center justify-center py-4 sm:py-5 bg-light-surface">
            <span className="font-body text-text-muted-light font-medium text-center text-[10px] sm:text-[12px] tracking-wide px-2">ONGC</span>
          </div>
          <div className="flex items-center justify-center py-4 sm:py-5 bg-light-surface">
            <span className="font-body text-text-muted-light font-medium text-center text-[10px] sm:text-[12px] tracking-wide px-2">NTPC</span>
          </div>
          <div className="flex items-center justify-center py-4 sm:py-5 bg-light-surface">
            <span className="font-body text-text-muted-light font-medium text-center text-[10px] sm:text-[12px] tracking-wide px-2">Hindalco</span>
          </div>
          <div className="flex items-center justify-center py-4 sm:py-5 bg-light-surface">
            <span className="font-body text-text-muted-light font-medium text-center text-[10px] sm:text-[12px] tracking-wide px-2">Indian Railways</span>
          </div>
          <div className="flex items-center justify-center py-4 sm:py-5 bg-light-surface">
            <span className="font-body text-text-muted-light font-medium text-center text-[10px] sm:text-[12px] tracking-wide px-2">BPCL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
