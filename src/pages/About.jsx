import React from 'react';
import MissionVision from '../components/Home/MissionVision';
import Stats from '../components/Home/Stats';
import useSeo from '../hooks/useSeo';

export default function About() {
  useSeo(
    'About Us | AGTPL | Ascent Green Technologies',
    'Learn about Ascent Green Technologies (AGTPL). Discover our 20+ years of industrial automation engineering expertise, mission, values, and leadership team.'
  );

  const values = [
    {
      title: "Technical Integrity",
      description: "We don't cut corners. Every motor winding, pump alignment, or VFD programming loop is engineered to international standards for safety and reliability."
    },
    {
      title: "Energy Stewardship",
      description: "Our solutions are explicitly designed to lower carbon footprints and minimize utility billing, advocating IE3/IE4 standard adoptions across all projects."
    },
    {
      title: "OEM Excellence",
      description: "We represent the world's most trusted manufacturers (ABB, Yaskawa, KSB) with uncompromising brand fidelity, technical expertise, and authentic spare parts."
    },
    {
      title: "Service Reliability",
      description: "Industrial processes run 24/7, and so does our support. We provide end-to-end commissioning supervision and rapid downtime recovery services."
    }
  ];

  const milestones = [
    { year: "2006", title: "Company Foundation", desc: "Established AGTPL as a small-scale electrical switchgear and motor distributor in Gujarat." },
    { year: "2010", title: "ABB Authorization", desc: "Awarded official systems partnership for ABB low-voltage electric motors division." },
    { year: "2014", title: "Automation Expansion", desc: "Partnered with Yaskawa to integrate variable frequency drives (VFD) and motion controls." },
    { year: "2018", title: "KSB Pump Distribution", desc: "Expanded into fluid systems by securing KSB authorized dealership for industrial chemical and waste pumps." },
    { year: "2022", title: "500+ Projects Completed", desc: "Successfully delivered major automated motor retrofits across multiple textile, cement, and municipal water plants." },
    { year: "2026", title: "Modern Solutions Era", desc: "Adapting digital diagnostics, IoT motor sensors, and advanced energy audits to drive net-zero initiatives." }
  ];

  const team = [
    { name: "Rajesh Mehta", role: "Managing Director & Founder", experience: "25+ Years in Industrial Systems" },
    { name: "Dr. Amit Patel", role: "Chief Engineering Officer", experience: "Ph.D. in Power Electronics & Drives" },
    { name: "Sanjay Shah", role: "Head of Fluid Systems Division", experience: "15+ Years specializing in KSB Pumps" },
    { name: "Nisha Desai", role: "Lead Automation Engineer", experience: "Certified PLC/SCADA Integrator" }
  ];

  return (
    <div className="w-full font-body bg-light-bg">
      {/* Intro Banner */}
      <section className="bg-dark-bg text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-dark-bg via-dark-surface to-dark-bg opacity-90"></div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-green/20 border border-green/30 text-green-bright px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            About Ascent Green Technologies
          </div>
          <h1 className="font-headings text-4xl sm:text-5xl font-normal leading-tight">
            Engineering Industrial Progress with Absolute Precision
          </h1>
          <p className="text-sm sm:text-base text-sky-light/80 max-w-2xl mx-auto leading-relaxed">
            Founded on engineering excellence, AGTPL delivers end-to-end motor, drive, and pumping integration solutions, empowering manufacturing plants, power grids, and municipal infrastructures to achieve higher performance.
          </p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <Stats />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="font-headings text-3xl font-normal text-text-dark">Our Governing Principles</h2>
          <div className="w-12 h-1 bg-green mx-auto"></div>
          <p className="text-sm text-text-muted-light">The values that steer every audit, installation, and client partnership we form.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="bg-light-surface border border-border p-6 rounded-sm shadow-xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-pale text-sky-deep rounded-full flex items-center justify-center font-headings text-lg font-bold mb-4">
                {idx + 1}
              </div>
              <h3 className="font-headings text-lg font-bold text-text-dark mb-2">{v.title}</h3>
              <p className="text-xs text-text-muted-light leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-pale border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="font-headings text-3xl font-normal text-text-dark">Our Journey of Excellence</h2>
            <div className="w-12 h-1 bg-green mx-auto"></div>
            <p className="text-sm text-text-muted-light font-body">Key milestones that shaped our engineering competence over the years.</p>
          </div>

          <div className="relative border-l-2 border-sky/30 ml-4 md:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Year tag left-aligned on desktop */}
                <div className="hidden md:block absolute right-full mr-8 top-0 font-headings text-xl font-bold text-sky-deep">
                  {m.year}
                </div>
                
                {/* Timeline node */}
                <div className="absolute -left-2 top-1.5 w-4 h-4 bg-green border-2 border-white rounded-full"></div>
                
                <div className="bg-light-surface border border-border p-6 rounded-sm shadow-xs max-w-3xl">
                  {/* Mobile Year tag */}
                  <span className="inline-block md:hidden font-headings text-sm font-bold text-sky-deep mb-1">{m.year}</span>
                  <h3 className="font-headings text-lg font-bold text-text-dark mb-2">{m.title}</h3>
                  <p className="text-xs text-text-muted-light leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="font-headings text-3xl font-normal text-text-dark">Leadership & Engineering Team</h2>
          <div className="w-12 h-1 bg-green mx-auto"></div>
          <p className="text-sm text-text-muted-light">Backed by factory-trained specialists with decades of industrial experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, idx) => (
            <div key={idx} className="bg-light-surface border border-border text-center overflow-hidden rounded-sm shadow-xs hover:shadow-md transition-shadow">
              {/* Placeholder Avatar */}
              <div className="w-full h-48 bg-linear-to-b from-sky-light/30 to-sky-pale flex items-center justify-center text-sky-muted">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-headings text-lg font-bold text-text-dark mb-1">{t.name}</h3>
                <p className="text-xs text-green font-semibold mb-2">{t.role}</p>
                <div className="w-8 h-0.5 bg-border mx-auto mb-3"></div>
                <p className="text-[11px] text-text-muted-light">{t.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
