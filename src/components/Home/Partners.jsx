import React from 'react';
import { Link } from 'react-router-dom';
import abbLogo from '../../assets/brands/abb.png';
import yaskawaLogo from '../../assets/brands/yaskawa.png';
import ksbLogo from '../../assets/brands/ksb.png';

export default function Partners() {
  return (
    <div className="w-full bg-accent-section py-16 sm:py-24 px-6 sm:px-12 lg:px-16">
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="flex items-center gap-4 mb-4 sm:mb-6">
          <div className="h-px w-8 sm:w-12 bg-sky"></div>
          <span className="font-body text-sky-muted uppercase tracking-widest font-medium text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">Authorized OEM Partnerships</span>
          <div className="h-px w-8 sm:w-12 bg-sky"></div>
        </div>
        <h2 className="font-headings text-text-dark font-normal mb-4 text-2xl sm:text-4xl lg:text-[42px] leading-tight">Strategic OEM Alliances</h2>
        <p className="font-body text-text-muted-light text-xs sm:text-base leading-relaxed max-w-[560px]">
          As authorized value partners for YASKAWA, ABB, and KSB, we unite world-class drives, IE4/IE5 motors, and pumping systems into integrated, application-matched packages.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {/* ABB */}
        <div className="w-full lg:flex-1 bg-light-surface border border-sky-light/80 flex flex-col overflow-hidden shadow-2xs hover:shadow-md transition-shadow">
          <div className="relative bg-white h-[140px] flex items-center justify-center p-6 border-b border-border/60">
            <img src={abbLogo} alt="ABB Logo" className="max-h-16 w-auto object-contain" />
            <div className="absolute top-3 right-3 bg-red-600 text-white px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-xs">
              Partner
            </div>
          </div>
          <div className="flex flex-col flex-1 p-6 sm:p-7">
            <span className="font-body text-red-600 uppercase tracking-widest mb-2 font-bold text-[10px]">
              IE4 &amp; IE5 Electric Motors
            </span>
            <p className="font-body text-text-muted-light mb-5 text-xs sm:text-[13px] leading-relaxed">
              Global powerhouse in electrification. Low-voltage industrial motors, M3BP High-Torque series, Permanent Magnet, Flameproof, and HDP motors.
            </p>
            <div className="border-t border-sky-light/50 pt-4 mt-auto">
              <p className="font-body text-text-muted-dark text-[11px] leading-normal font-medium">
                Cast Iron Motors · IE4 / IE5 Efficiency · Hazardous Area ATEX
              </p>
            </div>
            <Link to="/brands#abb" className="flex items-center gap-2 mt-5 text-sky-deep font-body uppercase font-bold text-[10px] tracking-wider hover:text-green">
              Explore ABB Systems 
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Yaskawa */}
        <div className="w-full lg:flex-1 bg-light-surface border border-sky-light/80 flex flex-col overflow-hidden shadow-2xs hover:shadow-md transition-shadow">
          <div className="relative bg-white h-[140px] flex items-center justify-center p-6 border-b border-border/60">
            <img src={yaskawaLogo} alt="Yaskawa Logo" className="max-h-14 w-auto object-contain" />
            <div className="absolute top-3 right-3 bg-[#003ea5] text-white px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-xs">
              Partner
            </div>
          </div>
          <div className="flex flex-col flex-1 p-6 sm:p-7">
            <span className="font-body text-[#003ea5] uppercase tracking-widest mb-2 font-bold text-[10px]">
              Variable Frequency Drives (VFD)
            </span>
            <p className="font-body text-text-muted-light mb-5 text-xs sm:text-[13px] leading-relaxed">
              World leader in motion control. Flagship HV600 HVAC&amp;R drives, U1000 Low Harmonics, GA700 IoT drives, and custom engineered panel solutions.
            </p>
            <div className="border-t border-sky-light/50 pt-4 mt-auto">
              <p className="font-body text-text-muted-dark text-[11px] leading-normal font-medium">
                HV600 · U1000 Matrix · GA700 Vector · Engineered Panels
              </p>
            </div>
            <Link to="/brands#yaskawa" className="flex items-center gap-2 mt-5 text-sky-deep font-body uppercase font-bold text-[10px] tracking-wider hover:text-green">
              Explore Yaskawa Systems 
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* KSB */}
        <div className="w-full lg:flex-1 bg-light-surface border border-sky-light/80 flex flex-col overflow-hidden shadow-2xs hover:shadow-md transition-shadow">
          <div className="relative bg-white h-[140px] flex items-center justify-center p-6 border-b border-border/60">
            <img src={ksbLogo} alt="KSB Logo" className="max-h-14 w-auto object-contain" />
            <div className="absolute top-3 right-3 bg-[#0e6d95] text-white px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-xs">
              Partner
            </div>
          </div>
          <div className="flex flex-col flex-1 p-6 sm:p-7">
            <span className="font-body text-[#0e6d95] uppercase tracking-widest mb-2 font-bold text-[10px]">
              Application-Focused Pumping Systems
            </span>
            <p className="font-body text-text-muted-light mb-5 text-xs sm:text-[13px] leading-relaxed">
              Precision fluid-handling engineering. Hydro-pneumatic pressure boosting (HYPN), HVAC primary/condenser loops, certified fire pumps, and drainage.
            </p>
            <div className="border-t border-sky-light/50 pt-4 mt-auto">
              <p className="font-body text-text-muted-dark text-[11px] leading-normal font-medium">
                HVAC Pumps · Hydro Pneumatic Systems · Submersible &amp; Fire
              </p>
            </div>
            <Link to="/brands#ksb" className="flex items-center gap-2 mt-5 text-sky-deep font-body uppercase font-bold text-[10px] tracking-wider hover:text-green">
              Explore KSB Systems 
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
