import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Sliders, Droplets, Settings, ArrowRight } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="w-full bg-light-bg py-16 sm:py-24 px-6 sm:px-12 lg:px-16" >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-4 mb-4 sm:mb-5">
            <div className="h-px w-8 bg-sky"></div>
            <span className="font-body text-sky-muted uppercase tracking-widest font-medium text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">Core Competencies</span>
          </div>
          <h2 className="font-headings text-text-dark font-normal text-2xl sm:text-3xl lg:text-[40px] leading-tight">What We Deliver</h2>
        </div>
        <Link to="/solutions" className="font-body text-green border-b border-green pb-0.5 uppercase tracking-widest font-medium flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] w-fit">
          All Solutions 
          <span className="inline-flex items-center justify-center flex-shrink-0 w-3 h-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 12h14m-7-7l7 7l-7 7"></path>
            </svg>
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-sky-pale border border-sky-light p-6 sm:p-8 flex flex-col">
          <div className="w-12 h-12 border border-sky-light bg-light-surface flex items-center justify-center mb-6 sm:mb-7 text-sky">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </span>
          </div>
          <span className="font-body text-sky uppercase tracking-widest font-medium mb-2 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em]">Low Voltage &amp; HV</span>
          <h3 className="font-headings text-text-dark font-normal mb-3 sm:mb-4 text-xl sm:text-2xl leading-tight">Motors</h3>
          <p className="font-body text-text-muted-light flex-1 text-xs sm:text-[14px] leading-relaxed">ABB-authorized supply of IEC and NEMA frame motors — IE2, IE3, and IE4 efficiency classes for every industrial load.</p>
          <Link to="/solutions" className="flex items-center gap-2 mt-5 sm:mt-6 text-sky font-body uppercase font-medium text-[9px] sm:text-[10px] tracking-[0.2em]">
            Learn More 
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[11px] h-[11px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="11px" height="11px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.363636363636363" d="M5 12h14m-7-7l7 7l-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>

        <div className="bg-green-pale border border-green-light p-6 sm:p-8 flex flex-col">
          <div className="w-12 h-12 border border-green-light bg-light-surface flex items-center justify-center mb-6 sm:mb-7 text-green">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M10 8h4m-2 13v-9m0-4V3m5 13h4m-2-4V3m0 18v-5M3 14h4m-2-4V3m0 18v-7"></path>
              </svg>
            </span>
          </div>
          <span className="font-body text-green uppercase tracking-widest font-medium mb-2 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em]">Yaskawa VFD Solutions</span>
          <h3 className="font-headings text-text-dark font-normal mb-3 sm:mb-4 text-xl sm:text-2xl leading-tight">Drives &amp; Automation</h3>
          <p className="font-body text-text-muted-light flex-1 text-xs sm:text-[14px] leading-relaxed">Precision variable frequency drives and servo systems for energy savings, process control, and peak operational performance.</p>
          <Link to="/solutions" className="flex items-center gap-2 mt-5 sm:mt-6 text-green font-body uppercase font-medium text-[9px] sm:text-[10px] tracking-[0.2em]">
            Learn More 
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[11px] h-[11px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="11px" height="11px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.363636363636363" d="M5 12h14m-7-7l7 7l-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>

        <div className="bg-sky-pale border border-sky-light p-6 sm:p-8 flex flex-col">
          <div className="w-12 h-12 border border-sky-light bg-light-surface flex items-center justify-center mb-6 sm:mb-7 text-sky-deep">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4">
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path>
                  <path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                </g>
              </svg>
            </span>
          </div>
          <span className="font-body text-sky-deep uppercase tracking-widest font-medium mb-2 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em]">KSB Fluid Systems</span>
          <h3 className="font-headings text-text-dark font-normal mb-3 sm:mb-4 text-xl sm:text-2xl leading-tight">Pumping Solutions</h3>
          <p className="font-body text-text-muted-light flex-1 text-xs sm:text-[14px] leading-relaxed">Engineered centrifugal and submersible pumping systems for water treatment, process industries, and infrastructure.</p>
          <Link to="/solutions" className="flex items-center gap-2 mt-5 sm:mt-6 text-sky-deep font-body uppercase font-medium text-[9px] sm:text-[10px] tracking-[0.2em]">
            Learn More 
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[11px] h-[11px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="11px" height="11px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.363636363636363" d="M5 12h14m-7-7l7 7l-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>

        <div className="bg-green-pale border border-green-light p-6 sm:p-8 flex flex-col">
          <div className="w-12 h-12 border border-green-light bg-light-surface flex items-center justify-center mb-6 sm:mb-7 text-green">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4">
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </g>
              </svg>
            </span>
          </div>
          <span className="font-body text-green uppercase tracking-widest font-medium mb-2 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em]">Consulting &amp; Commissioning</span>
          <h3 className="font-headings text-text-dark font-normal mb-3 sm:mb-4 text-xl sm:text-2xl leading-tight">Engineering Services</h3>
          <p className="font-body text-text-muted-light flex-1 text-xs sm:text-[14px] leading-relaxed">End-to-end industrial engineering — from energy audits and system design to installation, commissioning, and lifecycle support.</p>
          <Link to="/solutions" className="flex items-center gap-2 mt-5 sm:mt-6 text-green font-body uppercase font-medium text-[9px] sm:text-[10px] tracking-[0.2em]">
            Learn More 
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[11px] h-[11px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="11px" height="11px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.363636363636363" d="M5 12h14m-7-7l7 7l-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
