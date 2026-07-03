import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <div className="w-full bg-light-surface py-16 sm:py-24 px-6 sm:px-12 lg:px-16" >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
        <div>
          <div className="flex items-center gap-4 mb-4 sm:mb-5">
            <div className="h-px w-8 bg-sky"></div>
            <span className="font-body text-sky-muted uppercase tracking-widest font-medium text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">Case Studies</span>
          </div>
          <h2 className="font-headings text-text-dark font-normal text-2xl sm:text-3xl lg:text-[40px] leading-tight">Signature Projects</h2>
        </div>
        <Link to="/projects" className="font-body text-green border-b border-green pb-0.5 uppercase tracking-widest font-medium flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] w-fit">
          All Projects 
          <span className="inline-flex items-center justify-center flex-shrink-0 w-3 h-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 12h14m-7-7l7 7l-7 7"></path>
            </svg>
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 relative overflow-hidden border border-border h-[280px] sm:h-[340px]">
          <img style={{"aspectRatio":"16/9","objectFit":"cover"}} src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{"background":"linear-gradient(to top, rgba(8,51,72,0.88) 0%, rgba(8,51,72,0.2) 55%, rgba(8,51,72,0.0) 100%)"}}></div>
          <div className="absolute top-5 left-5 bg-sky px-3 py-1">
            <span className="font-body text-white uppercase font-medium text-[8px] sm:text-[9px] tracking-wider">Water &amp; Wastewater</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-1.5 h-1.5 bg-green-bright rounded-full"></div>
              <span className="font-body text-green-bright font-medium text-[10px] sm:text-[11px] tracking-wide">34% Energy Reduction</span>
            </div>
            <h3 className="font-headings text-text-light font-normal mb-1.5 sm:mb-2 text-lg sm:text-xl leading-snug">Municipal Water Treatment Upgrade</h3>
            <p className="font-body text-sky-light opacity-85 text-xs sm:text-[13px] leading-relaxed max-w-xl truncate sm:whitespace-normal">
              Complete pump station overhaul using KSB submersible systems and Yaskawa VFD controls for a major metropolitan water authority.
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 relative overflow-hidden border border-border h-[280px] sm:h-[340px]">
          <img style={{"aspectRatio":"16/9","objectFit":"cover"}} src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{"background":"linear-gradient(to top, rgba(8,51,72,0.88) 0%, rgba(8,51,72,0.2) 55%, rgba(8,51,72,0.0) 100%)"}}></div>
          <div className="absolute top-5 left-5 bg-sky px-3 py-1">
            <span className="font-body text-white uppercase font-medium text-[8px] sm:text-[9px] tracking-wider">Process Industry</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-1.5 h-1.5 bg-green-bright rounded-full"></div>
              <span className="font-body text-green-bright font-medium text-[10px] sm:text-[11px] tracking-wide">₹2.4 Cr Annual Savings</span>
            </div>
            <h3 className="font-headings text-text-light font-normal mb-1.5 sm:mb-2 text-lg sm:text-xl leading-snug">Cement Plant Motor Retrofit</h3>
            <p className="font-body text-sky-light opacity-85 text-xs sm:text-[13px] leading-relaxed max-w-xl truncate sm:whitespace-normal">
              ABB IE4 ultra-premium efficiency motors deployed across 80 drive points in a large-scale cement manufacturing plant.
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 relative overflow-hidden border border-border h-[280px] sm:h-[340px]">
          <img style={{"aspectRatio":"16/9","objectFit":"cover"}} src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{"background":"linear-gradient(to top, rgba(8,51,72,0.88) 0%, rgba(8,51,72,0.2) 55%, rgba(8,51,72,0.0) 100%)"}}></div>
          <div className="absolute top-5 left-5 bg-sky px-3 py-1">
            <span className="font-body text-white uppercase font-medium text-[8px] sm:text-[9px] tracking-wider">Manufacturing</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-1.5 h-1.5 bg-green-bright rounded-full"></div>
              <span className="font-body text-green-bright font-medium text-[10px] sm:text-[11px] tracking-wide">99.7% Uptime</span>
            </div>
            <h3 className="font-headings text-text-light font-normal mb-1.5 sm:mb-2 text-lg sm:text-xl leading-snug">Textile Mill Automation</h3>
            <p className="font-body text-sky-light opacity-85 text-xs sm:text-[13px] leading-relaxed max-w-xl truncate sm:whitespace-normal">
              Yaskawa A1000 drives integrated with SCADA control across 120 spindle machines for a premium textile manufacturer.
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 relative overflow-hidden border border-border h-[280px] sm:h-[340px]">
          <img style={{"aspectRatio":"16/9","objectFit":"cover"}} src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{"background":"linear-gradient(to top, rgba(8,51,72,0.88) 0%, rgba(8,51,72,0.2) 55%, rgba(8,51,72,0.0) 100%)"}}></div>
          <div className="absolute top-5 left-5 bg-sky px-3 py-1">
            <span className="font-body text-white uppercase font-medium text-[8px] sm:text-[9px] tracking-wider">Power &amp; Energy</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-1.5 h-1.5 bg-green-bright rounded-full"></div>
              <span className="font-body text-green-bright font-medium text-[10px] sm:text-[11px] tracking-wide">Zero Downtime — 18 Months</span>
            </div>
            <h3 className="font-headings text-text-light font-normal mb-1.5 sm:mb-2 text-lg sm:text-xl leading-snug">Power Station Pump Systems</h3>
            <p className="font-body text-sky-light opacity-85 text-xs sm:text-[13px] leading-relaxed max-w-xl truncate sm:whitespace-normal">
              Critical cooling water pump systems engineered and commissioned for a 600 MW thermal power station.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
