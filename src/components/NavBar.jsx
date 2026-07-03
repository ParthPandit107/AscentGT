import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, FileText } from 'lucide-react';
import logo from '../assets/logo.png';
import { siteConfig } from '../config/site';

export default function NavBar({ onRequestQuote, basket = [], isAuthenticated = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchOpen(false);
      setIsOpen(false);
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/products', label: 'Products' },
    { path: '/brands', label: 'Partners' },
    { path: '/industries', label: 'Industries' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  if (isAuthenticated) {
    navLinks.push({ path: '/admin', label: 'Dashboard' });
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-light-surface border-b border-border shadow-xs font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 lg:h-24 flex items-center justify-between">
        
        {/* Logo and Brand Block */}
        <Link 
          to="/" 
          className="group flex items-center h-18 lg:h-24 lg:border-r lg:border-border pr-2 sm:pr-8 mr-1 sm:mr-4 gap-2.5 sm:gap-3.5" 
          onClick={() => setIsOpen(false)}
        >
          <img src={logo} alt="AGTPL Logo" className="h-10 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105" />
          <div className="flex flex-col select-none">
            <span className="font-headings text-xs xs:text-sm sm:text-base lg:text-base font-extrabold text-text-dark uppercase tracking-wide leading-none">
              Ascent Green
            </span>
            <span className="font-headings text-[9px] xs:text-[10px] sm:text-xs lg:text-xs font-semibold text-green uppercase tracking-widest leading-none mt-1">
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-xs uppercase font-semibold tracking-wider transition-colors py-2 border-b-2 ${
                  isActive 
                    ? 'text-green border-green' 
                    : 'text-text-muted-dark border-transparent hover:text-green'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions & Search */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Trigger */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center bg-sky-pale border border-sky-light rounded-sm overflow-hidden px-2 py-1 transition-all w-48">
                <input
                  type="text"
                  placeholder="Search catalog..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-text-dark focus:outline-none w-full"
                  autoFocus
                />
                <button type="submit" className="text-text-muted-dark hover:text-green">
                  <Search size={14} />
                </button>
                <button type="button" onClick={() => setSearchOpen(false)} className="text-text-muted-dark hover:text-red-500 ml-1">
                  <X size={14} />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                className="p-2 text-text-muted-dark hover:text-green transition-colors"
                title="Search catalog"
              >
                <Search size={16} />
              </button>
            )}
          </div>



          {/* Quote Basket Button */}
          {basket && basket.length > 0 && (
            <button
              onClick={() => onRequestQuote()}
              className="flex items-center gap-2 bg-sky-pale border border-sky-light hover:bg-sky/15 text-sky-deep px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-2xs"
            >
              <FileText size={14} className="text-sky" />
              <span>Quote Basket</span>
              <span className="bg-sky-deep text-white w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-bold">
                {basket.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </button>
          )}

          <button
            onClick={() => onRequestQuote('Consultation Service')}
            className="bg-green hover:bg-green-bright text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-xs"
          >
            Request Consultation
          </button>
        </div>

        {/* Mobile menu toggle & Mobile search trigger */}
        <div className="flex lg:hidden items-center gap-3">
          {basket && basket.length > 0 && (
            <button 
              onClick={() => onRequestQuote()} 
              className="relative p-2 text-sky-deep hover:text-green transition-colors"
              title="View Quote Basket"
            >
              <FileText size={20} />
              <span className="absolute -top-0.5 -right-0.5 bg-sky-deep text-white w-4.5 h-4.5 rounded-full flex items-center justify-center text-[8px] font-bold border border-white">
                {basket.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </button>
          )}

          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            className="p-2 text-text-muted-dark hover:text-green"
          >
            <Search size={18} />
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-dark hover:text-green transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Expand */}
      {searchOpen && (
        <div className="lg:hidden px-4 py-2 bg-sky-pale border-b border-border">
          <form onSubmit={handleSearchSubmit} className="flex items-center bg-white border border-border rounded-sm px-3 py-1.5">
            <input
              type="text"
              placeholder="Search products, brands, or solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-text-dark focus:outline-none w-full"
              autoFocus
            />
            <button type="submit" className="text-text-muted-dark hover:text-green">
              <Search size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer (Hamburger Menu) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-light-surface border-b border-border shadow-md animate-fade-in">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-3 py-2 text-sm font-semibold uppercase tracking-wider rounded transition-colors ${
                    isActive 
                      ? 'bg-green/10 text-green font-bold' 
                      : 'text-text-muted-dark hover:bg-sky-pale hover:text-green'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <hr className="border-border my-3" />
            
            <button
              onClick={() => {
                setIsOpen(false);
                onRequestQuote('Consultation Service');
              }}
              className="w-full bg-green hover:bg-green-bright text-white py-3 font-bold uppercase text-xs tracking-wider rounded-sm transition-colors text-center cursor-pointer"
            >
              Request Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
