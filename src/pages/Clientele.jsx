import React from 'react';
import { clients } from '../data/clients';
import useSeo from '../hooks/useSeo';

export default function Clientele() {
  useSeo(
    'Our Esteemed Clients | AGTPL',
    'Our Esteemed Clients - trusted by leading industrial and commercial organizations across India.'
  );

  return (
    <div className="w-full font-body bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title matching Slide 7 */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-wide uppercase">
            Our Esteemed Clients
          </h1>
          <div className="w-16 h-1 bg-green mx-auto mt-4"></div>
        </div>

        {/* Clean Logo Grid - Just the Logos, matching Slide 7 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-full h-28 sm:h-32 bg-white border border-border/70 rounded-xs p-4 flex items-center justify-center shadow-2xs hover:border-sky-deep/40 hover:shadow-xs transition-all"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
