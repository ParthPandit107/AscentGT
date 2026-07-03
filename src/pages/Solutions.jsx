import React, { useState } from 'react';
import { solutions } from '../data/solutions';
import { Zap, Sliders, Droplets, Settings, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';

const iconMap = {
  Zap: Zap,
  Sliders: Sliders,
  Droplets: Droplets,
  Settings: Settings
};

import useSeo from '../hooks/useSeo';

export default function Solutions({ onRequestQuote }) {
  useSeo(
    'Industrial Automation & Systems Solutions | AGTPL',
    'Explore our end-to-end industrial engineering services. We design, configure, and commission custom motor assemblies, pump arrays, energy audits, and VFD setups.'
  );

  const [selectedSolution, setSelectedSolution] = useState(null);

  return (
    <div className="w-full font-body bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-pale border border-sky-light text-sky-deep px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Our Expertise
          </div>
          <h1 className="font-headings text-4xl font-normal text-text-dark leading-tight">
            Integrated Industrial Engineering & Automation Solutions
          </h1>
          <p className="text-sm text-text-muted-light max-w-xl mx-auto leading-relaxed">
            Delivering authorized equipment supply and systems engineering for manufacturing, municipal water, and process automation plants.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((sol) => {
            const IconComponent = iconMap[sol.iconName] || HelpCircle;
            return (
              <div key={sol.id} className="bg-light-surface border border-border rounded-sm p-8 flex flex-col hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-sky group-hover:bg-green transition-colors"></div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-sky-light bg-sky-pale text-sky-deep flex items-center justify-center rounded-sm">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <span className="text-[10px] font-bold text-sky uppercase tracking-wider">{sol.category}</span>
                    <h2 className="font-headings text-2xl font-normal text-text-dark">{sol.title}</h2>
                    <p className="text-xs text-text-muted-light leading-relaxed">{sol.shortDescription}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/60">
                  <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider mb-2">Technical Scope:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-muted-light mb-6">
                    {sol.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green rounded-full flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                  <button
                    onClick={() => setSelectedSolution(selectedSolution === sol.id ? null : sol.id)}
                    className="text-xs font-bold uppercase tracking-wider text-sky-deep hover:text-green flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {selectedSolution === sol.id ? 'Close Details' : 'Learn More'}
                    <ArrowRight size={14} className={`transform transition-transform ${selectedSolution === sol.id ? 'rotate-90' : ''}`} />
                  </button>
                  
                  <button
                    onClick={() => onRequestQuote(sol.title)}
                    className="bg-green hover:bg-green-bright text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <MessageCircle size={14} />
                    Inquiry
                  </button>
                </div>

                {/* Expanded Details Panel */}
                {selectedSolution === sol.id && (
                  <div className="mt-6 pt-6 border-t border-border bg-sky-pale/50 -mx-8 -mb-8 p-8 animate-fade-in space-y-3">
                    <h4 className="font-headings text-sm font-bold text-text-dark uppercase tracking-wider">Solution Overview</h4>
                    <p className="text-xs text-text-muted-light leading-relaxed">{sol.overview}</p>
                    <div className="pt-2">
                      <button
                        onClick={() => onRequestQuote(sol.title)}
                        className="text-xs font-bold uppercase tracking-wider text-green hover:text-green-bright transition-colors cursor-pointer"
                      >
                        Request engineering consultation for this solution →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-dark-surface border border-sky-light/10 text-white rounded-sm p-8 text-center max-w-4xl mx-auto space-y-4 shadow-md">
          <h3 className="font-headings text-xl font-normal">Need a Custom Engineered Solution?</h3>
          <p className="text-xs text-sky-light/80 max-w-xl mx-auto">
            Our systems engineers can design custom switchgear panels, configure multi-pump PLC controller drives, or execute site audits. Contact us to schedule a site visit.
          </p>
          <div>
            <button
              onClick={() => onRequestQuote('Custom Engineered System')}
              className="bg-green hover:bg-green-bright text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Consult an Engineer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
