import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Partners() {
  return (
    <div className="w-full bg-accent-section py-16 sm:py-24 px-6 sm:px-12 lg:px-16" >
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="flex items-center gap-4 mb-4 sm:mb-6">
          <div className="h-px w-8 sm:w-12 bg-sky"></div>
          <span className="font-body text-sky-muted uppercase tracking-widest font-medium text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">Authorized Partnerships</span>
          <div className="h-px w-8 sm:w-12 bg-sky"></div>
        </div>
        <h2 className="font-headings text-text-dark font-normal mb-4 text-2xl sm:text-4xl lg:text-[42px] leading-tight">Strategic OEM Alliances</h2>
        <p className="font-body text-text-muted-light text-xs sm:text-base leading-relaxed max-w-[520px]">
          Our exclusive partnerships with three of the world's most respected engineering manufacturers define the quality we deliver to every client.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:flex-1 bg-sky-pale border border-sky-light flex flex-col overflow-hidden">
          <div className="relative bg-light-surface h-[180px] sm:h-[220px]">
            <img style={{"aspectRatio":"4/3","objectFit":"cover"}} src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{"background":"linear-gradient(to top, rgba(240,249,255,0.7) 0%, rgba(240,249,255,0) 50%)"}}></div>
            <div className="absolute bottom-4 left-6">
              <span className="font-headings text-text-dark font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide">ABB</span>
            </div>
            <div className="absolute top-4 right-4 bg-sky px-3 py-1">
              <span className="font-body text-white uppercase font-medium text-[8px] sm:text-[9px] tracking-wider">Authorized Partner</span>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-6 sm:p-7">
            <span className="font-body text-sky uppercase tracking-widest mb-3 font-medium text-[9px] sm:text-[10px] tracking-wider">Low Voltage Motors</span>
            <p className="font-body text-text-muted-light mb-5 text-xs sm:text-[14px] leading-relaxed">
              A global powerhouse in electrification and automation, ABB's LV motor portfolio sets the benchmark for energy efficiency and industrial reliability across every application.
            </p>
            <div className="border-t border-sky-light pt-4 mt-auto">
              <p className="font-body text-text-muted-dark text-[11px] sm:text-[12px] leading-normal">
                IEC &amp; NEMA Motors · IE2 / IE3 / IE4 Efficiency · ATEX Solutions
              </p>
            </div>
            <Link to="/brands" className="flex items-center gap-2 mt-5 text-sky font-body uppercase font-medium text-[9px] sm:text-[10px] tracking-wider">
              View Solutions 
              <span className="inline-flex items-center justify-center flex-shrink-0 w-3 h-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full lg:flex-1 bg-green-pale border border-green-light flex flex-col overflow-hidden">
          <div className="relative bg-light-surface h-[180px] sm:h-[220px]">
            <img style={{"aspectRatio":"4/3","objectFit":"cover"}} src="https://images.unsplash.com/photo-1597491829127-ec457b91d6b2?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{"background":"linear-gradient(to top, rgba(240,249,255,0.7) 0%, rgba(240,249,255,0) 50%)"}}></div>
            <div className="absolute bottom-4 left-6">
              <span className="font-headings text-text-dark font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide">Yaskawa</span>
            </div>
            <div className="absolute top-4 right-4 bg-green px-3 py-1">
              <span className="font-body text-white uppercase font-medium text-[8px] sm:text-[9px] tracking-wider">Authorized Distributor</span>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-6 sm:p-7">
            <span className="font-body text-green uppercase tracking-widest mb-3 font-medium text-[9px] sm:text-[10px] tracking-wider">Variable Frequency Drives</span>
            <p className="font-body text-text-muted-light mb-5 text-xs sm:text-[14px] leading-relaxed">
              World leader in motion control and drive technology, Yaskawa's VFD solutions optimize energy consumption and deliver precision control in the most demanding environments.
            </p>
            <div className="border-t border-green-light pt-4 mt-auto">
              <p className="font-body text-text-muted-dark text-[11px] sm:text-[12px] leading-normal">
                V1000 · A1000 · GA700 Drives · Servo Systems
              </p>
            </div>
            <Link to="/brands" className="flex items-center gap-2 mt-5 text-green font-body uppercase font-medium text-[9px] sm:text-[10px] tracking-wider">
              View Solutions 
              <span className="inline-flex items-center justify-center flex-shrink-0 w-3 h-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full lg:flex-1 bg-sky-pale border border-sky-light flex flex-col overflow-hidden">
          <div className="relative bg-light-surface h-[180px] sm:h-[220px]">
            <img style={{"aspectRatio":"4/3","objectFit":"cover"}} src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{"background":"linear-gradient(to top, rgba(240,249,255,0.7) 0%, rgba(240,249,255,0) 50%)"}}></div>
            <div className="absolute bottom-4 left-6">
              <span className="font-headings text-text-dark font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide">KSB</span>
            </div>
            <div className="absolute top-4 right-4 bg-sky-deep px-3 py-1">
              <span className="font-body text-white uppercase font-medium text-[8px] sm:text-[9px] tracking-wider">Authorized Distributor</span>
            </div>
          </div>
          <div className="flex flex-col flex-1 p-6 sm:p-7">
            <span className="font-body text-sky-deep uppercase tracking-widest mb-3 font-medium text-[9px] sm:text-[10px] tracking-wider">Pumping Solutions</span>
            <p className="font-body text-text-muted-light mb-5 text-xs sm:text-[14px] leading-relaxed">
              Founded in 1871, KSB brings over 150 years of pumping expertise, delivering engineered fluid-handling solutions trusted in water, energy, and process industries worldwide.
            </p>
            <div className="border-t border-sky-light pt-4 mt-auto">
              <p className="font-body text-text-muted-dark text-[11px] sm:text-[12px] leading-normal">
                Centrifugal Pumps · Submersible · Process Pumps
              </p>
            </div>
            <Link to="/brands" className="flex items-center gap-2 mt-5 text-sky-deep font-body uppercase font-medium text-[9px] sm:text-[10px] tracking-wider">
              View Solutions 
              <span className="inline-flex items-center justify-center flex-shrink-0 w-3 h-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
