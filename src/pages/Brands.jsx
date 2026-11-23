import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ExternalLink, ChevronRight, Check } from 'lucide-react';
import { products } from '../data/products';
import abbLogo from '../assets/brands/abb.png';
import yaskawaLogo from '../assets/brands/yaskawa.png';
import ksbLogo from '../assets/brands/ksb.png';
import useSeo from '../hooks/useSeo';

export default function Brands() {
  useSeo(
    'Official OEM Partners - ABB, Yaskawa & KSB | AGTPL',
    'Discover our authorized OEM brand partnerships. We supply and integrate ABB IE4/IE5 cast iron motors, Yaskawa low-harmonic & IoT drives, and KSB pumping systems.'
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
      id: "yaskawa",
      name: "YASKAWA",
      role: "Authorized Value Business Partner",
      logo: yaskawaLogo,
      officialUrl: "https://yaskawaindia.in/products-details.php?slug=engineered-panel-solutions",
      overview: "YASKAWA is a global pioneer in variable frequency drives, servo motion control, and factory automation. As an authorized partner, AGTPL delivers Yaskawa's flagship industrial VFDs and engineered panel solutions, optimizing energy efficiency, process precision, and IoT connectivity across commercial and industrial infrastructure.",
      tagline: "Variable Frequency Drives (VFD / VSD) & Engineered Panels",
      offerings: [
        { name: "HV600 - Dedicated HVAC&R Drive", url: "https://yaskawaindia.in/products-details.php?slug=hv600" },
        { name: "U1000 - Low Harmonics Matrix VFD", url: "https://yaskawaindia.in/products-details.php?slug=u1000" },
        { name: "GA700 - Advanced Vector Control & IoT Drive", url: "https://yaskawaindia.in/products-details.php?slug=ga700-advanced-vector-control-iot-drive" },
        { name: "GA500 - Compact Precision & P&F Drive", url: "https://yaskawaindia.in/products-details.php?slug=ga500-pf" },
        { name: "Varispeed G7 - 3-Level Control Method", url: "https://yaskawaindia.in/products-details.php?slug=varispeed-g7-3-level-control-method" },
        { name: "Engineered Control Panel Solutions", url: "https://yaskawaindia.in/products-details.php?slug=engineered-panel-solutions" }
      ]
    },
    {
      id: "abb",
      name: "ABB",
      role: "Authorized Value Business Partner",
      logo: abbLogo,
      officialUrl: "https://new.abb.com/motors-generators",
      overview: "ABB is the global benchmark for electric motors and heavy industrial electrification. AGTPL delivers ABB's complete low-voltage industrial motor portfolio with premium IE4 and ultra-premium IE5 efficiency classes, engineered to endure the harshest process environments with minimal Total Cost of Ownership (TCO).",
      tagline: "IE4 & IE5 Efficiency | Low-Voltage Industrial Motors",
      offerings: [
        { name: "Low-Voltage Process Performance Industrial Motors" },
        { name: "High Torque Output Motors (M3BP Series)" },
        { name: "Permanent Magnet Synchronous Motors" },
        { name: "Flameproof & Explosion-Proof Motors (Hazardous Areas)" },
        { name: "Smoke Extraction Motors (Life Safety High-Temp)" },
        { name: "High Dynamic Performance Motors (HDP Series)" }
      ]
    },
    {
      id: "ksb",
      name: "KSB",
      role: "Authorized Value Business Partner",
      logo: ksbLogo,
      officialUrl: "https://www.ksb.com/en-in",
      overview: "KSB is a world-renowned leader in precision pumps, valves, and fluid engineering systems. AGTPL engineers matched pump-motor-drive packages and custom control panels for municipal water networks, high-rise building plumbing, fire safety, and industrial wastewater treatment.",
      tagline: "Application-Focused Fluid Handling & Pumping Systems",
      offerings: [
        { name: "Primary & Condenser HVAC Pumping Systems" },
        { name: "Secondary Variable Pumping Systems" },
        { name: "Hydro-Pneumatic Systems (HYPN Constant Pressure)" },
        { name: "Booster Pumps & Pressure Boosting Packages" },
        { name: "Certified Fire Pumps & Jockey Pumps" },
        { name: "Commercial Plumbing, Submersible & Drainage Pumps" }
      ]
    }
  ];

  return (
    <div className="w-full font-body bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-pale border border-sky-light text-sky-deep px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Authorized OEM Partnerships
          </div>
          <h1 className="font-headings text-3xl sm:text-4xl font-bold text-text-dark leading-tight">
            World-Class Strategic Alliances: ABB, Yaskawa & KSB
          </h1>
          <p className="text-sm text-text-muted-light max-w-2xl mx-auto leading-relaxed">
            As Authorized Value Business Partners, <strong className="text-text-dark">AGTPL</strong> integrates world-class Variable Frequency Drives, IE4/IE5 premium efficiency electric motors, and precision pumping systems into complete, application-matched packages.
          </p>
        </div>

        {/* Brand Sections */}
        <div className="space-y-16">
          {brandData.map((brand) => {
            const brandCatalog = products.filter(p => p.brand.toLowerCase() === brand.id);
            return (
              <section
                key={brand.id}
                id={brand.id}
                className="bg-light-surface border border-border p-8 rounded-sm shadow-xs scroll-mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 relative overflow-hidden"
              >
                {/* Visual indicator stripe on the left */}
                <div className={`absolute left-0 top-0 w-2 h-full ${
                  brand.id === 'abb' ? 'bg-[#ff000f]' : brand.id === 'yaskawa' ? 'bg-[#003ea5]' : 'bg-[#0e6d95]'
                }`}></div>

                {/* Left col: Logo, Role, Website Link */}
                <div className="space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Actual Brand Logo Container */}
                    <div className="h-20 w-52 bg-white border border-border/80 p-3 rounded-sm flex items-center justify-center shadow-2xs">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} official logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-green font-bold uppercase tracking-wider block">{brand.role}</span>
                      <h2 className="font-headings text-2xl font-bold text-text-dark">{brand.name} Solutions</h2>
                      <p className="text-xs font-semibold text-sky-deep">{brand.tagline}</p>
                    </div>
                  </div>

                  <div>
                    <a
                      href={brand.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-deep hover:text-green transition-colors"
                    >
                      Visit Official OEM Portal
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
                    <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider">Official Equipment Portfolio</h4>
                    <ul className="space-y-2.5 text-xs text-text-muted-light">
                      {brand.offerings.map((off, oidx) => (
                        <li key={oidx} className="flex items-start gap-2">
                          <Check size={14} className="text-green flex-shrink-0 mt-0.5" />
                          {off.url ? (
                            <a
                              href={off.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-dark hover:text-sky-deep font-medium underline-offset-2 hover:underline inline-flex items-center gap-1"
                            >
                              <span>{off.name}</span>
                              <ExternalLink size={10} className="text-sky-deep" />
                            </a>
                          ) : (
                            <span className="font-medium text-text-dark">{off.name}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right col: Products from Catalog */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider">In Our Equipment Catalog:</h4>
                  {brandCatalog.length === 0 ? (
                    <p className="text-xs text-text-muted-light italic">Equipment configurations available upon technical request.</p>
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
                      View all {brand.name} systems in catalog →
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
