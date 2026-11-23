import React, { useState, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { siteConfig } from '../config/site';

export default function NavBar({ onRequestQuote, basket = [], isAuthenticated = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [vfdFlyout, setVfdFlyout] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileVfdOpen, setMobileVfdOpen] = useState(false);

  const dropdownTimerRef = useRef(null);
  const vfdTimerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchOpen(false);
      setIsOpen(false);
    }
  };

  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setProductsDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setProductsDropdown(false);
      setVfdFlyout(false);
    }, 180);
  };

  const handleVfdEnter = () => {
    if (vfdTimerRef.current) clearTimeout(vfdTimerRef.current);
    setVfdFlyout(true);
  };

  const handleVfdLeave = () => {
    vfdTimerRef.current = setTimeout(() => {
      setVfdFlyout(false);
    }, 180);
  };

  // VFD / VSD items - just the names as requested
  const vfdProducts = [
    { name: "HV600 - HVAC&R Drive", slug: "hv600" },
    { name: "U1000 - Low Harmonics VFD", slug: "u1000" },
    { name: "GA700 - Advanced Vector control & IoT Drive", slug: "ga700" },
    { name: "GA500-P&F", slug: "ga500-pf" },
    { name: "Varispeed G7 - 3 Level control method", slug: "varispeed-g7" },
    { name: "Engineered Panel Solutions", slug: "engineered-panel-solutions" },
  ];

  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <header className="sticky top-0 z-40 w-full bg-light-surface border-b border-border shadow-xs font-body">
      {/* Full width container to take logo to the far left corner */}
      <div className="w-full px-3 sm:px-4 lg:px-5 xl:px-6 2xl:px-8 min-h-[80px] lg:min-h-[88px] xl:min-h-[96px] py-2 flex items-center justify-between">
        
        {/* Far-Left Corner: AGT Logo & 2x Bigger Brand Block */}
        <Link 
          to="/" 
          className="flex items-center gap-2 sm:gap-3 lg:gap-3.5 shrink-0 select-none mr-2 lg:mr-3 xl:mr-4" 
          onClick={() => setIsOpen(false)}
        >
          <img 
            src={logo} 
            alt="AGTPL Logo" 
            className="h-10 sm:h-11 md:h-12 lg:h-13 xl:h-15 2xl:h-17 w-auto object-contain shrink-0" 
          />
          <div className="flex flex-col select-none justify-center">
            {/* Company name 2x bigger than original baseline with responsive fit */}
            <span className="font-sans font-black tracking-tight text-sm sm:text-base md:text-lg lg:text-[18px] xl:text-[20px] 2xl:text-[26px] whitespace-nowrap leading-tight">
              <span className="text-[#65a30d]">ASCENT </span>
              <span className="text-black">GREEN TECHNOLOGIES PVT. LTD.</span>
            </span>
            {/* Proportionally scaled subtitle */}
            <span className="text-[8.5px] sm:text-[9.5px] md:text-[10px] lg:text-[11px] xl:text-xs text-[#002060] font-bold tracking-wider whitespace-nowrap leading-none mt-0.5">
              Formerly known as Ascent Control Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links & Search - Vertically Centered & Aligned */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 2xl:gap-5 shrink-0">
          <nav className="flex items-center gap-1.5 xl:gap-2.5 2xl:gap-4 whitespace-nowrap shrink-0">
            
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) => 
                `whitespace-nowrap text-[10.5px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-wider transition-colors py-1.5 border-b-2 ${
                  isActive 
                    ? 'text-green border-green' 
                    : 'text-text-muted-dark border-transparent hover:text-green'
                }`
              }
            >
              Home
            </NavLink>

            {/* About Us */}
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `whitespace-nowrap text-[10.5px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-wider transition-colors py-1.5 border-b-2 ${
                  isActive 
                    ? 'text-green border-green' 
                    : 'text-text-muted-dark border-transparent hover:text-green'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Products & Solutions with Clean Hover Dropdown */}
            <div 
              className="relative py-1.5"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <NavLink
                to="/products"
                className={`whitespace-nowrap text-[10.5px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-wider transition-colors py-1.5 border-b-2 inline-flex items-center gap-1 ${
                  isProductsActive 
                    ? 'text-green border-green' 
                    : 'text-text-muted-dark border-transparent hover:text-green'
                }`}
              >
                <span>Products & Solutions</span>
                <ChevronDown size={13} className={`transition-transform duration-200 ${productsDropdown ? 'rotate-180 text-green' : ''}`} />
              </NavLink>

              {/* Top-level Dropdown Menu - Just clean names */}
              {productsDropdown && (
                <div 
                  className="absolute left-0 top-full pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="w-52 bg-white border border-border rounded-sm shadow-xl py-1.5 font-sans">
                    
                    {/* 1. VFD / VSD */}
                    <div 
                      className="relative"
                      onMouseEnter={handleVfdEnter}
                      onMouseLeave={handleVfdLeave}
                    >
                      <div 
                        className={`px-4 py-2.5 text-xs font-bold tracking-wide flex items-center justify-between cursor-pointer transition-colors ${
                          vfdFlyout ? 'bg-[#65a30d]/10 text-[#65a30d]' : 'text-text-dark hover:bg-slate-50 hover:text-[#65a30d]'
                        }`}
                        onClick={() => navigate('/products?category=VFD / VSD')}
                      >
                        <span className="uppercase">VFD / VSD</span>
                        <ChevronRight size={14} className="text-text-muted-light group-hover:text-[#65a30d]" />
                      </div>

                      {/* Nested Submenu: 6 VFD / VSD Options - Just clean names */}
                      {vfdFlyout && (
                        <div 
                          className="absolute left-full top-0 pl-1 z-50 animate-in fade-in duration-150"
                          onMouseEnter={handleVfdEnter}
                          onMouseLeave={handleVfdLeave}
                        >
                          <div className="w-76 bg-white border border-border rounded-sm shadow-2xl py-1.5">
                            {vfdProducts.map((p) => (
                              <Link
                                key={p.slug}
                                to={`/products/${p.slug}`}
                                onClick={() => {
                                  setProductsDropdown(false);
                                  setVfdFlyout(false);
                                }}
                                className="block px-4 py-2.5 text-xs font-semibold text-text-dark hover:bg-[#65a30d]/10 hover:text-[#65a30d] transition-colors whitespace-nowrap"
                              >
                                {p.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 2. Pumps */}
                    <Link
                      to="/products?category=Pumps"
                      onClick={() => setProductsDropdown(false)}
                      className="block px-4 py-2.5 text-xs font-bold tracking-wide text-text-dark hover:bg-slate-50 hover:text-[#65a30d] transition-colors uppercase"
                    >
                      Pumps
                    </Link>

                    {/* 3. Motors */}
                    <Link
                      to="/products?category=Motors"
                      onClick={() => setProductsDropdown(false)}
                      className="block px-4 py-2.5 text-xs font-bold tracking-wide text-text-dark hover:bg-slate-50 hover:text-[#65a30d] transition-colors uppercase"
                    >
                      Motors
                    </Link>

                    {/* 4. Services */}
                    <Link
                      to="/products?tab=solutions"
                      onClick={() => setProductsDropdown(false)}
                      className="block px-4 py-2.5 text-xs font-bold tracking-wide text-text-dark hover:bg-slate-50 hover:text-[#65a30d] transition-colors uppercase border-t border-border/40 mt-1"
                    >
                      Services
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* Partners */}
            <NavLink
              to="/brands"
              className={({ isActive }) => 
                `whitespace-nowrap text-[10.5px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-wider transition-colors py-1.5 border-b-2 ${
                  isActive 
                    ? 'text-green border-green' 
                    : 'text-text-muted-dark border-transparent hover:text-green'
                }`
              }
            >
              Partners
            </NavLink>

            {/* Clientele */}
            <NavLink
              to="/clientele"
              className={({ isActive }) => 
                `whitespace-nowrap text-[10.5px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-wider transition-colors py-1.5 border-b-2 ${
                  isActive 
                    ? 'text-green border-green' 
                    : 'text-text-muted-dark border-transparent hover:text-green'
                }`
              }
            >
              Clientele
            </NavLink>

            {/* Industries */}
            <NavLink
              to="/industries"
              className={({ isActive }) => 
                `whitespace-nowrap text-[10.5px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-wider transition-colors py-1.5 border-b-2 ${
                  isActive 
                    ? 'text-green border-green' 
                    : 'text-text-muted-dark border-transparent hover:text-green'
                }`
              }
            >
              Industries
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `whitespace-nowrap text-[10.5px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-wider transition-colors py-1.5 border-b-2 ${
                  isActive 
                    ? 'text-green border-green' 
                    : 'text-text-muted-dark border-transparent hover:text-green'
                }`
              }
            >
              Contact
            </NavLink>

            {/* Admin (if authenticated) */}
            {isAuthenticated && (
              <NavLink
                to="/admin"
                className={({ isActive }) => 
                  `whitespace-nowrap text-[10.5px] xl:text-[11.5px] 2xl:text-xs uppercase font-bold tracking-wider transition-colors py-1.5 border-b-2 ${
                    isActive 
                      ? 'text-green border-green' 
                      : 'text-text-muted-dark border-transparent hover:text-green'
                  }`
                }
              >
                Dashboard
              </NavLink>
            )}

          </nav>

          {/* Actions & Search */}
          <div className="flex items-center gap-2 border-l border-border/60 pl-3 shrink-0">
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
                  <Search size={18} />
                </button>
              )}
            </div>

            {/* Quote Basket Button */}
            {basket && basket.length > 0 && (
              <button
                onClick={() => onRequestQuote()}
                className="flex items-center gap-2 bg-sky-pale border border-sky-light hover:bg-sky/15 text-sky-deep px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-2xs"
              >
                <FileText size={14} className="text-sky" />
                <span>Quote Basket</span>
                <span className="bg-sky-deep text-white w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-bold">
                  {basket.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </button>
            )}
          </div>
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-light-surface border-b border-border shadow-md animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-1">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'bg-green/10 text-green font-bold' 
                    : 'text-text-muted-dark hover:bg-sky-pale hover:text-green'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'bg-green/10 text-green font-bold' 
                    : 'text-text-muted-dark hover:bg-sky-pale hover:text-green'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Mobile Accordion for Products & Solutions - Just clean names */}
            <div className="border border-border/40 rounded-sm overflow-hidden my-1">
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold uppercase tracking-wider text-text-muted-dark hover:bg-sky-pale hover:text-green"
              >
                <span>Products & Solutions</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-green' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="bg-slate-50 px-3 py-2 space-y-1 border-t border-border/30 text-xs">
                  {/* VFD Sub-accordion */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileVfdOpen(!mobileVfdOpen)}
                      className="w-full flex items-center justify-between py-1.5 font-bold uppercase text-text-dark hover:text-[#65a30d]"
                    >
                      <span>VFD / VSD</span>
                      <ChevronDown size={14} className={`transition-transform duration-200 ${mobileVfdOpen ? 'rotate-180 text-[#65a30d]' : ''}`} />
                    </button>
                    {mobileVfdOpen && (
                      <div className="pl-3 py-1 space-y-1 border-l-2 border-[#65a30d]/40 my-1">
                        {vfdProducts.map(p => (
                          <Link
                            key={p.slug}
                            to={`/products/${p.slug}`}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileProductsOpen(false);
                            }}
                            className="block py-1 text-xs text-text-muted-dark hover:text-[#65a30d]"
                          >
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    to="/products?category=Pumps"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileProductsOpen(false);
                    }}
                    className="block py-1.5 font-bold uppercase text-text-dark hover:text-[#65a30d]"
                  >
                    Pumps
                  </Link>

                  <Link
                    to="/products?category=Motors"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileProductsOpen(false);
                    }}
                    className="block py-1.5 font-bold uppercase text-text-dark hover:text-[#65a30d]"
                  >
                    Motors
                  </Link>

                  <Link
                    to="/products?tab=solutions"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileProductsOpen(false);
                    }}
                    className="block py-1.5 font-bold uppercase text-text-dark hover:text-[#65a30d]"
                  >
                    Services
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/brands"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'bg-green/10 text-green font-bold' 
                    : 'text-text-muted-dark hover:bg-sky-pale hover:text-green'
                }`
              }
            >
              Partners
            </NavLink>

            <NavLink
              to="/clientele"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'bg-green/10 text-green font-bold' 
                    : 'text-text-muted-dark hover:bg-sky-pale hover:text-green'
                }`
              }
            >
              Clientele
            </NavLink>

            <NavLink
              to="/industries"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'bg-green/10 text-green font-bold' 
                    : 'text-text-muted-dark hover:bg-sky-pale hover:text-green'
                }`
              }
            >
              Industries
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'bg-green/10 text-green font-bold' 
                    : 'text-text-muted-dark hover:bg-sky-pale hover:text-green'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
