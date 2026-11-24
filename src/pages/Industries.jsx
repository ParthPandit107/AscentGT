import React from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../data/industries';
import { ShieldAlert, CheckCircle, PackageOpen } from 'lucide-react';

import useSeo from '../hooks/useSeo';

export default function Industries() {
  useSeo(
    'Sector Engineering Solutions - Cement, Water, Chemical | AGTPL',
    'Industrial engineering solutions tailored for cement plants, municipal wastewater, chemical refineries, textiles, and power cooling towers.'
  );

  return (
    <div className="w-full font-body bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-wide uppercase leading-tight">
            Tailored Engineering for Demanding Industries
          </h1>
          <div className="w-16 h-1 bg-green mx-auto"></div>
          <p className="text-sm text-text-muted-light max-w-lg mx-auto pt-2">
            From municipal water pump arrays to cement plant retrofits, we design systems specifically for your sector's requirements.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((ind) => (
            <div key={ind.id} className="bg-light-surface border border-border p-8 rounded-sm shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col group">
              <div className="absolute top-0 left-0 w-full h-1 bg-sky group-hover:bg-green transition-colors"></div>
              
              <div className="space-y-4 flex-1">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-sky uppercase tracking-wider">Sector Specifics</span>
                  <h2 className="font-headings text-2xl font-normal text-text-dark">{ind.name}</h2>
                  <p className="text-xs text-text-muted-light italic leading-relaxed">{ind.shortDescription}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border/60">
                  
                  {/* Challenges Column */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold text-text-dark uppercase tracking-wider flex items-center gap-1">
                      <ShieldAlert size={14} className="text-red-500" />
                      Industry Challenges
                    </h4>
                    <p className="text-xs text-text-muted-light leading-relaxed">{ind.challenges}</p>
                  </div>

                  {/* Solutions Column */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold text-text-dark uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle size={14} className="text-green" />
                      Our Solutions
                    </h4>
                    <p className="text-xs text-text-muted-light leading-relaxed">{ind.solutions}</p>
                  </div>

                </div>
              </div>

              {/* Products Used and Explore Catalog Link */}
              <div className="pt-6 mt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold text-text-dark uppercase tracking-wider flex items-center gap-1">
                    <PackageOpen size={14} className="text-sky-deep" />
                    Recommended Machinery
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.productsUsed.map((p, pidx) => (
                      <span key={pidx} className="bg-sky-pale border border-sky-light/40 text-text-muted-dark text-[9px] font-bold px-2 py-0.5 rounded-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 sm:pt-0">
                  <Link
                    to={`/products?search=${encodeURIComponent(ind.name)}`}
                    className="text-xs font-bold uppercase tracking-wider text-sky-deep hover:text-green flex items-center gap-1"
                  >
                    View Catalog →
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
