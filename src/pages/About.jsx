import React from 'react';
import { Shield, Cpu, RefreshCw, Users, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import useSeo from '../hooks/useSeo';

export default function About() {
  useSeo(
    'About Us | Ascent Green Technologies (AGTPL)',
    'Learn about Ascent Green Technologies Pvt. Ltd. (formerly Ascent Control Systems). Authorized engineering partners for Yaskawa, ABB, and KSB delivering integrated drive-motor-pump packages.'
  );

  const missionPillars = [
    {
      title: "Integrated System Engineering",
      description: "Delivering complete packages combining Yaskawa Drives, ABB High-Efficiency Motors, and KSB Pumping Solutions with PLC and remote monitoring architectures.",
      icon: Cpu
    },
    {
      title: "Application-Driven Packages",
      description: "Transitioning customers from piecemeal component purchases to fully matched electro-mechanical packages engineered for specific load profiles.",
      icon: Shield
    },
    {
      title: "Quality & Rapid Commissioning",
      description: "Supplying genuine, globally benchmarked OEM equipment backed by agile logistics, precise on-site testing, and responsive field technical support.",
      icon: CheckCircle
    },
    {
      title: "Continuous Energy Innovation",
      description: "Deploying Low Harmonics mitigation, intelligent pumping controls, and IE4/IE5 induction motors to systematically reduce facility lifecycle costs.",
      icon: RefreshCw
    },
    {
      title: "Collaborative Engineering Culture",
      description: "Fostering a transparent, collaborative team environment dedicated to delivering measurable operational value and energy savings.",
      icon: Users
    }
  ];

  const leadership = [
    {
      name: "Mr. Sanjay Pandit",
      role: "Director",
      phone: "+91 9891977727",
      email: "sanjaypandit@ascentgtpl.com",
      location: "Corporate Office, Faridabad"
    },
    {
      name: "Mr. Rahul Bhat",
      role: "Director",
      phone: "+91 9999822616",
      email: "rahulbhat@ascentgtpl.com",
      location: "Corporate Office, Faridabad"
    },
    {
      name: "Mrs. Shweta Saxena",
      role: "Branch Head",
      phone: "+91 8928159155",
      email: "shwetasaxena@ascentgtpl.com",
      location: "Branch Office, Mumbai"
    }
  ];

  return (
    <div className="w-full font-body bg-light-bg">
      {/* Intro Banner */}
      <section className="bg-dark-bg text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-dark-bg via-dark-surface to-dark-bg opacity-90"></div>
        <div className="relative max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-green/20 border border-green/30 text-green-bright px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Company Profile
          </div>
          <h1 className="font-headings text-3xl sm:text-5xl font-bold leading-tight">
            Ascent Green Technologies Pvt. Ltd.
          </h1>
          <p className="text-xs sm:text-sm text-green-bright font-semibold tracking-wider uppercase">
            Formerly known as Ascent Control Systems
          </p>
          <p className="text-sm sm:text-base text-sky-light/85 max-w-2xl mx-auto leading-relaxed pt-2">
            Integrated engineering for drives, premium efficiency motors, and pumping systems.
          </p>
        </div>
      </section>

      {/* Who We Are - Corporate Overview from Slide 2 */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white border border-border p-8 sm:p-12 rounded-sm shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-deep">About Our Organization</span>
            <h2 className="font-headings text-2xl sm:text-3xl font-bold text-text-dark">Who We Are</h2>
            <div className="w-12 h-1 bg-green"></div>
          </div>
          
          <div className="space-y-4 text-xs sm:text-sm text-text-muted-light leading-relaxed">
            <p>
              <strong className="text-text-dark">ASCENT GREEN TECHNOLOGIES PVT. LTD. (formerly known as ASCENT CONTROL SYSTEMS)</strong> is an integrated industrial automation, fluid-handling, and energy-efficiency engineering company committed to delivering complete, application-based electro-mechanical and control solutions.
            </p>
            <p>
              As Authorized Value Business Partners for <strong className="text-text-dark">YASKAWA</strong>, <strong className="text-text-dark">ABB</strong>, and <strong className="text-text-dark">KSB</strong>, we bring together world-class Variable Frequency Drive technology, premium efficiency Low Voltage (LV) motors (IE4 / IE5), and precision pumping systems (HVAC / FIRE / PHE) under one roof—enabling commercial facilities and industrial plants to maximize energy savings, enhance system reliability, and minimize Total Cost of Ownership (TCO).
            </p>
            <p>
              Backed by an experienced team of automation, electrical, and mechanical engineers, we execute end-to-end solutions—spanning system design, engineering, control panel integration, testing, erection, and commissioning. Rather than operating as a standalone component supplier, we collaborate closely with facility owners and engineering consultants to provide fully matched drive-motor-pump packages and smart automation architectures.
            </p>
          </div>

          <div className="pt-6 border-t border-border/60">
            <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider mb-3">Key Sectors Served:</h4>
            <div className="flex flex-wrap gap-2 text-xs text-text-dark font-medium">
              {['HVACR & Building Services', 'Power & Energy', 'Pharmaceuticals', 'Food & Beverage (F&B)', 'Dairy', 'Water & Wastewater', 'Cement', 'Steel', 'Pulp & Paper'].map((s, idx) => (
                <span key={idx} className="bg-sky-pale border border-sky-light/80 px-3 py-1 rounded-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Principles - From Slide 3 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-pale/40 border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-deep">Operating Principles</span>
            <h2 className="font-headings text-2xl sm:text-3xl font-bold text-text-dark">Our Mission &amp; Purpose</h2>
            <div className="w-12 h-1 bg-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="bg-white border border-border p-6 rounded-sm shadow-2xs space-y-3">
                  <div className="w-10 h-10 bg-sky-pale text-sky-deep rounded-sm flex items-center justify-center">
                    <IconComp size={20} />
                  </div>
                  <h3 className="font-headings text-base font-bold text-text-dark">{pillar.title}</h3>
                  <p className="text-xs text-text-muted-light leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team - From Slide 8 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-deep">Corporate Leadership</span>
          <h2 className="font-headings text-2xl sm:text-3xl font-bold text-text-dark">Key Contacts &amp; Direction</h2>
          <div className="w-12 h-1 bg-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {leadership.map((person, idx) => (
            <div key={idx} className="bg-white border border-border p-6 rounded-sm shadow-2xs space-y-4 text-center">
              <div className="w-16 h-16 bg-sky-pale text-sky-deep rounded-full flex items-center justify-center font-bold text-xl mx-auto">
                {person.name.split(' ').map(n => n[0]).join('').replace('M.', '')}
              </div>
              <div className="space-y-1">
                <h3 className="font-headings text-base font-bold text-text-dark">{person.name}</h3>
                <p className="text-xs text-green font-semibold">{person.role}</p>
                <p className="text-[11px] text-text-muted-dark">{person.location}</p>
              </div>
              <div className="pt-3 border-t border-border/50 text-xs space-y-1.5 text-text-muted-light">
                <a href={`tel:${person.phone.replace(/[^0-9+]/g, '')}`} className="block hover:text-sky-deep font-medium">
                  {person.phone}
                </a>
                <a href={`mailto:${person.email}`} className="block hover:text-sky-deep text-[11px] truncate">
                  {person.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
