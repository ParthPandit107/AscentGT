import React, { useState } from 'react';
import { projects } from '../data/projects';
import { MapPin, CheckCircle2, SlidersHorizontal, Layers } from 'lucide-react';

import useSeo from '../hooks/useSeo';

export default function Projects() {
  useSeo(
    'Engineering Case Studies & Success Projects | AGTPL',
    'Review our signature project outcomes. Read how AGTPL delivered energy savings and reduced operational downtimes with ABB, Yaskawa, and KSB equipment.'
  );

  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const industries = ['All', ...new Set(projects.map(p => p.industry))];

  // Filtering
  const filteredProjects = projects.filter(proj => 
    selectedIndustry === 'All' || proj.industry === selectedIndustry
  );

  return (
    <div className="w-full font-body bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-pale border border-sky-light text-sky-deep px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Case Studies
          </div>
          <h1 className="font-headings text-4xl font-normal text-text-dark leading-tight">
            Our Signature Projects & Success Stories
          </h1>
          <p className="text-sm text-text-muted-light max-w-lg mx-auto">
            Explore how we deployed premium ABB, Yaskawa, and KSB machinery to solve client problems and save energy.
          </p>
        </div>

        {/* Industry Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <span className="text-xs text-text-muted-light font-bold uppercase tracking-wider flex items-center gap-1.5 mr-2">
            <SlidersHorizontal size={14} /> Filter by Industry:
          </span>
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border transition-colors cursor-pointer ${
                selectedIndustry === ind
                  ? 'bg-green border-green text-white shadow-xs'
                  : 'bg-light-surface border-border text-text-muted-dark hover:border-sky-light hover:text-sky-deep'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Projects List */}
        {filteredProjects.length === 0 ? (
          <div className="bg-light-surface border border-border p-12 text-center rounded-sm max-w-md mx-auto">
            <div className="w-12 h-12 bg-sky-pale text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers size={24} />
            </div>
            <h3 className="font-headings text-lg font-bold text-text-dark mb-1">No Projects Found</h3>
            <p className="text-xs text-text-muted-light max-w-sm mx-auto">
              We don't have any published signature case studies for this industry category yet. Select another option.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="bg-light-surface border border-border rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:shadow-md transition-shadow relative">
                
                {/* Image / Stats Banner col-5 */}
                <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-72 overflow-hidden bg-sky-pale/30">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/25 to-transparent"></div>
                  
                  {/* Industry tag */}
                  <span className="absolute top-4 left-4 bg-sky-deep text-white text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm shadow-xs">
                    {proj.industry}
                  </span>

                  {/* Results banner */}
                  <div className="absolute bottom-6 left-6 right-6 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-bright rounded-full animate-pulse"></div>
                      <span className="text-green-bright font-bold uppercase tracking-wider text-[10px]">Verified Result:</span>
                    </div>
                    <h4 className="font-headings text-white text-lg font-bold leading-tight">{proj.stats}</h4>
                  </div>
                </div>

                {/* Info details col-7 */}
                <div className="lg:col-span-7 p-8 flex flex-col justify-between space-y-6">
                  
                  {/* Top section */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted-light font-bold">
                      <span>Client: <strong>{proj.client}</strong></span>
                      <span className="w-1.5 h-1.5 bg-border rounded-full hidden sm:block"></span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-sky flex-shrink-0" />
                        {proj.location}
                      </span>
                    </div>
                    <h2 className="font-headings text-2xl font-normal text-text-dark">{proj.title}</h2>
                    <div className="w-12 h-0.5 bg-green"></div>
                  </div>

                  {/* Body Problem / Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-text-muted-light leading-relaxed">
                    <div className="space-y-1.5">
                      <h4 className="font-headings text-text-dark font-bold uppercase tracking-wider text-[10px]">The Challenge:</h4>
                      <p>{proj.problem}</p>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-headings text-text-dark font-bold uppercase tracking-wider text-[10px]">Our Solution:</h4>
                      <p>{proj.solution}</p>
                    </div>
                  </div>

                  {/* Footer results and products used */}
                  <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="font-headings text-text-dark font-bold uppercase tracking-wider text-[10px] flex items-center gap-1">
                        <CheckCircle2 size={14} className="text-green" />
                        Equipment Integrated:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.productsUsed.map((p, pidx) => (
                          <span key={pidx} className="bg-sky-pale border border-sky-light/40 text-text-muted-dark text-[9px] font-bold px-2 py-0.5 rounded-sm">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 text-left sm:text-right">
                      <h4 className="font-headings text-text-dark font-bold uppercase tracking-wider text-[10px]">Overall Result:</h4>
                      <p className="text-xs text-text-dark font-bold">{proj.results}</p>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
