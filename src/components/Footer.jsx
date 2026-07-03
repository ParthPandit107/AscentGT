import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Download } from 'lucide-react';
import logo from '../assets/logo.png';
import { siteConfig } from '../config/site';

export default function Footer({ onRequestQuote, isAuthenticated = false }) {
  const footerLinks = [
    { path: '/solutions', label: 'Solutions' },
    { path: '/products', label: 'Products' },
    { path: '/brands', label: 'Partners' },
    { path: '/industries', label: 'Industries' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="w-full bg-dark-bg text-text-light font-body pt-16 border-t-2 border-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="bg-dark-surface border border-sky-light/10 p-8 rounded-sm mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-headings text-2xl font-normal text-white mb-2">Ready to Elevate Your Industrial Operations?</h3>
            <p className="text-sm text-sky-light/80">Speak with our engineering team to design, configure, or audit the motor and pump systems for your facility.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
            <button
              onClick={() => onRequestQuote('Consultation Service')}
              className="bg-green hover:bg-green-bright text-white px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Request Consultation
            </button>
            <a
              href="/downloads/agtpl_catalog_2026.pdf"
              download
              className="border border-sky-light/40 hover:bg-white/5 text-sky-light px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center gap-2 transition-colors"
            >
              <Download size={14} />
              Download Brochure
            </a>
          </div>
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-sky-light/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xs flex items-center justify-center" style={{ height: '56px', width: '42px' }}>
                <img src={logo} alt="AGTPL Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-headings text-white font-bold tracking-widest text-sm leading-tight">ASCENT GREEN</span>
                <span className="font-body font-normal tracking-[0.25em] text-green-bright text-[8px] leading-none">TECHNOLOGIES PVT LTD</span>
              </div>
            </div>
            <p className="text-xs text-sky-light/70 leading-relaxed">
              Authorized partner for ABB, Yaskawa & KSB. Delivering advanced low-voltage electric motors, frequency drives, industrial automation systems, and high-performance pumps across India.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green/10 hover:bg-green/20 border border-green/30 text-green-bright px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageSquare size={14} />
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headings text-white text-base font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-sky">
              Sitemap
            </h4>
            <ul className="space-y-3 text-xs">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sky-light/80 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-sky rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Brands */}
          <div>
            <h4 className="font-headings text-white text-base font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-sky">
              Our Brands
            </h4>
            <ul className="space-y-3 text-xs text-sky-light/80">
              <li>
                <Link to="/brands#abb" className="hover:text-white transition-colors">
                  <strong>ABB</strong> - Low Voltage Electric Motors (IE2 / IE3 / IE4)
                </Link>
              </li>
              <li>
                <Link to="/brands#yaskawa" className="hover:text-white transition-colors">
                  <strong>Yaskawa</strong> - Compact & High-Performance AC Drives
                </Link>
              </li>
              <li>
                <Link to="/brands#ksb" className="hover:text-white transition-colors">
                  <strong>KSB</strong> - Submersible Sewage & Chemical Fluid Pumps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-headings text-white text-base font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-sky">
              Contact Info
            </h4>
            <ul className="space-y-4 text-xs text-sky-light/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sky flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-sky flex-shrink-0 mt-0.5" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sky-light/60 gap-4">
          <p>© {new Date().getFullYear()} Ascent Green Technologies Pvt Ltd (AGTPL). All rights reserved.</p>
          <div className="flex items-center gap-6">
            {isAuthenticated ? (
              <Link to="/admin" className="hover:text-white font-bold text-green-bright">Admin Dashboard</Link>
            ) : (
              <Link to="/login" className="hover:text-white">Admin Login</Link>
            )}
            <span className="w-1 h-1 bg-sky-light/30 rounded-full"></span>
            <Link to="/contact" className="hover:text-white">Help Desk</Link>
            <span className="w-1 h-1 bg-sky-light/30 rounded-full"></span>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <span className="w-1 h-1 bg-sky-light/30 rounded-full"></span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
