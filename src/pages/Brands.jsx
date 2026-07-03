import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ExternalLink, ChevronRight, Check } from 'lucide-react';
import { products } from '../data/products';

import useSeo from '../hooks/useSeo';

export default function Brands() {
  useSeo(
    'Official OEM Partners - ABB, Yaskawa & KSB | AGTPL',
    'Discover our authorized OEM brand partnerships. We supply and integrate ABB cast iron motors, Yaskawa motion systems, and KSB water pumps.'
  );

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const brandData = [
    {
      id: "abb",
      name: "ABB",
      role: "Authorized Systems Integrator",
      logoText: "ABB",
      logoColor: "bg-red-600 text-white",
      officialUrl: "https://global.abb/group/en",
      overview: "ABB is a pioneering technology leader in electrification, robotics, and industrial automation. With a history of excellence spanning over 130 years, ABB manufactures low-voltage cast iron motors that deliver exceptional reliability, high thermal performance, and premium IE3/IE4 efficiency classes for the heavy manufacturing, paper, chemical, and marine industries.",
      offerings: [
        "Low Voltage Process Performance Motors (IE3 / IE4)",
        "Severe Duty General Performance Motors",
        "Flameproof / Explosion-Proof Motors (ATEX Certified)",
        "Variable Speed Drive (VFD) Duty Motors"
      ]
    },
    {
      id: "yaskawa",
      name: "Yaskawa",
      role: "Authorized Distributor",
      logoText: "YASKAWA",
      logoColor: "bg-blue-600 text-white",
      officialUrl: "https://www.yaskawa.com",
      overview: "Yaskawa is a world leader in motion control, variable frequency drives, and robotics. Established in 1915, Yaskawa drives (including the GA700 and V1000 series) provide advanced vector control algorithms, high starting torque, smart parameter auto-tuning, and robust component life cycles to automate packaging systems, sorting lines, ventilation fans, and industrial cranes.",
      offerings: [
        "GA700 High-Performance AC Vector Drives",
        "V1000 General-Purpose Compact Drives",
        "Sigma-7 Servo Drives and Servo Motors",
        "Industrial Network Communication PG Cards"
      ]
    },
    {
      id: "ksb",
      name: "KSB",
      role: "Authorized Distributor",
      logoText: "KSB",
      logoColor: "bg-sky-deep text-white",
      officialUrl: "https://www.ksb.com",
      overview: "KSB is a world-class pump and valve manufacturer with over 150 years of experience in fluid handling. KSB pumps are designed for absolute containment, low lifecycle costs, and hydraulic efficiency. We configure and supply KSB standard chemical pumps (MegaChem) and submersible sewage/sludge pumps (Amarex KRT) for municipal supply grids and water treatment plants.",
      offerings: [
        "MegaChem ISO Standard Volute Casing Chemical Pumps",
        "Amarex KRT Submersible Waste Water Pumps",
        "Movitec Vertical Multistage High-Pressure Pumps",
        "Complete Wet-Well Duckfoot Guide Rail Fittings"
      ]
    }
  ];

  return (
    <div className="w-full font-body bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-pale border border-sky-light text-sky-deep px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Our Partners
          </div>
          <h1 className="font-headings text-4xl font-normal text-text-dark leading-tight">
            Strategic OEM Brand Partnerships
          </h1>
          <p className="text-sm text-text-muted-light max-w-lg mx-auto">
            We work exclusively with the world's most trusted manufacturers to deliver premium systems engineering and equipment supply.
          </p>
        </div>

        {/* Brand Sections */}
        <div className="space-y-24">
          {brandData.map((brand, idx) => {
            const brandCatalog = products.filter(p => p.brand.toLowerCase() === brand.id);
            return (
              <section
                key={brand.id}
                id={brand.id}
                className={`bg-light-surface border border-border p-8 rounded-sm shadow-xs scroll-mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 relative overflow-hidden`}
              >
                {/* Visual indicator stripe on the left */}
                <div className={`absolute left-0 top-0 w-1.5 h-full ${
                  brand.id === 'abb' ? 'bg-red-600' : brand.id === 'yaskawa' ? 'bg-blue-600' : 'bg-sky-deep'
                }`}></div>

                {/* Left col: Logo, Role, Website Link */}
                <div className="space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className={`w-fit px-6 h-12 flex items-center justify-center font-headings text-2xl font-bold tracking-widest rounded-sm ${brand.logoColor}`}>
                      {brand.logoText}
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-green font-bold uppercase tracking-wider">{brand.role}</span>
                      <h2 className="font-headings text-3xl font-normal text-text-dark">{brand.name} Systems</h2>
                    </div>
                  </div>

                  <div>
                    <a
                      href={brand.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-deep hover:text-green transition-colors"
                    >
                      Visit Official Website
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Center col: Overview and Offerings */}
                <div className="space-y-6 lg:border-l lg:border-r lg:border-border/60 lg:px-8">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider">Manufacturer Overview</h4>
                    <p className="text-xs text-text-muted-light leading-relaxed">{brand.overview}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider">Official Offerings</h4>
                    <ul className="space-y-2 text-xs text-text-muted-light">
                      {brand.offerings.map((off, oidx) => (
                        <li key={oidx} className="flex items-start gap-2">
                          <Check size={14} className="text-green flex-shrink-0 mt-0.5" />
                          <span>{off}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right col: Products from Catalog */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider">In Our Catalog:</h4>
                  {brandCatalog.length === 0 ? (
                    <p className="text-xs text-text-muted-light italic">Catalog products coming soon.</p>
                  ) : (
                    <div className="space-y-3">
                      {brandCatalog.map(p => (
                        <div key={p.id} className="bg-sky-pale/50 border border-sky-light/20 p-4 rounded-sm flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <h5 className="font-headings text-sm font-bold text-text-dark truncate">
                              <Link to={`/products/${p.id}`} className="hover:text-sky-deep">{p.name}</Link>
                            </h5>
                            <span className="text-[10px] text-text-muted-light font-mono">Model: {p.modelNumber}</span>
                          </div>
                          <Link
                            to={`/products/${p.id}`}
                            className="p-1.5 bg-light-surface border border-border rounded-sm hover:bg-sky-pale transition-colors flex-shrink-0 text-text-muted-dark hover:text-sky-deep"
                          >
                            <ChevronRight size={14} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="pt-2">
                    <Link
                      to={`/products?search=${encodeURIComponent(brand.name)}`}
                      className="text-xs font-bold uppercase tracking-wider text-sky-deep hover:text-green flex items-center"
                    >
                      View all {brand.name} equipment →
                    </Link>
                  </div>
                </div>

              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
