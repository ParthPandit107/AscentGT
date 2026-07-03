import React from 'react';
import { Link } from 'react-router-dom';

export default function Industries() {
  return (
    <div className="w-full bg-light-bg py-16 sm:py-20 px-6 sm:px-12 lg:px-16" >
      <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
        <div className="flex items-center gap-4 mb-4 sm:mb-5">
          <div className="h-px w-8 sm:w-10 bg-sky"></div>
          <span className="font-body text-sky-muted uppercase tracking-widest font-medium text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">Industry Expertise</span>
          <div className="h-px w-8 sm:w-10 bg-sky"></div>
        </div>
        <h2 className="font-headings text-text-dark font-normal text-2xl sm:text-3xl lg:text-[40px] leading-tight">Sectors We Serve</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="bg-sky-pale border border-sky-light p-6 sm:p-7 flex flex-col items-start w-full">
          <div className="w-10 h-10 flex items-center justify-center text-sky mb-4 sm:mb-5">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[22px] h-[22px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1818181818181817" d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01"></path>
              </svg>
            </span>
          </div>
          <h4 className="font-headings text-text-dark font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Manufacturing</h4>
          <p className="font-body text-text-muted-light text-xs leading-relaxed">Motors, drives &amp; automation for OEM and process manufacturers</p>
        </div>

        <div className="bg-green-pale border border-green-light p-6 sm:p-7 flex flex-col items-start w-full">
          <div className="w-10 h-10 flex items-center justify-center text-green mb-4 sm:mb-5">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[22px] h-[22px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1818181818181817">
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path>
                  <path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                </g>
              </svg>
            </span>
          </div>
          <h4 className="font-headings text-text-dark font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Water &amp; Wastewater</h4>
          <p className="font-body text-text-muted-light text-xs leading-relaxed">Pumping and treatment solutions for municipal and industrial water</p>
        </div>

        <div className="bg-sky-pale border border-sky-light p-6 sm:p-7 flex flex-col items-start w-full">
          <div className="w-10 h-10 flex items-center justify-center text-sky-deep mb-4 sm:mb-5">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[22px] h-[22px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1818181818181817">
                  <path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path>
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                </g>
              </svg>
            </span>
          </div>
          <h4 className="font-headings text-text-dark font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Infrastructure</h4>
          <p className="font-body text-text-muted-light text-xs leading-relaxed">HVAC, fire pumps, and building automation systems</p>
        </div>

        <div className="bg-sky-pale border border-sky-light p-6 sm:p-7 flex flex-col items-start w-full">
          <div className="w-10 h-10 flex items-center justify-center text-sky mb-4 sm:mb-5">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[22px] h-[22px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1818181818181817" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </span>
          </div>
          <h4 className="font-headings text-text-dark font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Power &amp; Energy</h4>
          <p className="font-body text-text-muted-light text-xs leading-relaxed">Cooling water systems, boiler feed pumps, and auxiliary drives</p>
        </div>

        <div className="bg-green-pale border border-green-light p-6 sm:p-7 flex flex-col items-start w-full">
          <div className="w-10 h-10 flex items-center justify-center text-green mb-4 sm:mb-5">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[22px] h-[22px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1818181818181817" d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"></path>
              </svg>
            </span>
          </div>
          <h4 className="font-headings text-text-dark font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Process Industries</h4>
          <p className="font-body text-text-muted-light text-xs leading-relaxed">Chemical, pharmaceutical, and food-grade fluid handling</p>
        </div>

        <div className="bg-sky-pale border border-sky-light p-6 sm:p-7 flex flex-col items-start w-full">
          <div className="w-10 h-10 flex items-center justify-center text-sky-muted mb-4 sm:mb-5">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-[22px] h-[22px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1818181818181817" d="M10 18v-7m1.119-8.795a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7"></path>
              </svg>
            </span>
          </div>
          <h4 className="font-headings text-text-dark font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Commercial Facilities</h4>
          <p className="font-body text-text-muted-light text-xs leading-relaxed">Premium drive and motor packages for commercial complexes</p>
        </div>
      </div>
    </div>
  );
}
