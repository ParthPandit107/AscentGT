import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, MessageSquare, FileText, LayoutGrid, Zap, Sliders, Droplets, Settings, Check, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { products as staticProducts, pumpReferenceProjects, pumpSubCategories } from '../data/products';
import { solutions } from '../data/solutions';
import { siteConfig } from '../config/site';
import useSeo from '../hooks/useSeo';

const solutionIcons = {
  Zap: Zap,
  Sliders: Sliders,
  Droplets: Droplets,
  Settings: Settings
};

export default function Products({ onRequestQuote, products = staticProducts }) {
  useSeo(
    'Products & Engineered Solutions | AGTPL (Ascent Green Technologies)',
    'Explore our integrated product catalog: KSB precision pumping systems, Yaskawa low-harmonic drives, ABB IE4/IE5 motors, and custom automation panels.'
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') === 'solutions' ? 'solutions' : 'products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPumpSubCategory, setSelectedPumpSubCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');
  const [editablePrices, setEditablePrices] = useState(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.price }), {})
  );

  // Sync editable prices when products updates dynamically from database
  useEffect(() => {
    if (products) {
      setEditablePrices(
        products.reduce((acc, p) => ({ ...acc, [p.id]: p.price }), {})
      );
    }
  }, [products]);

  // Sync search query, category, brand, subcategory and tab from URL query parameters
  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchQuery(query);
      setActiveTab('products');
    }
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
      setActiveTab('products');
    } else {
      setSelectedCategory('All');
    }
    const sub = searchParams.get('sub');
    if (sub) {
      if (sub === 'building-services' || sub === 'Building Services') {
        setSelectedPumpSubCategory('Building Services');
      } else if (sub === 'firefighting' || sub === 'Firefighting' || sub === 'firefighting-pumps') {
        setSelectedPumpSubCategory('Firefighting');
      } else if (sub === 'hvac' || sub === 'HVAC') {
        setSelectedPumpSubCategory('HVAC');
      } else {
        setSelectedPumpSubCategory(sub);
      }
      setSelectedCategory('Pumps');
      setActiveTab('products');
    } else {
      setSelectedPumpSubCategory('All');
    }
    const brand = searchParams.get('brand');
    if (brand) {
      setSelectedBrand(brand);
      setActiveTab('products');
    }
    const tab = searchParams.get('tab');
    if (tab === 'solutions') {
      setActiveTab('solutions');
    }
  }, [searchParams]);

  const handlePriceChange = (productId, newPrice) => {
    setEditablePrices(prev => ({
      ...prev,
      [productId]: newPrice
    }));
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSelectedPumpSubCategory('All');
    setSelectedTag('All');
    if (cat === 'All') {
      searchParams.delete('category');
      searchParams.delete('sub');
    } else {
      searchParams.set('category', cat);
      searchParams.delete('sub');
    }
    setSearchParams(searchParams);
  };

  const handlePumpSubCategorySelect = (subCat) => {
    setSelectedPumpSubCategory(subCat);
    setSelectedTag('All');
    if (subCat === 'All') {
      searchParams.delete('sub');
    } else {
      const slug = subCat.toLowerCase().replace(/\s+/g, '-');
      searchParams.set('sub', slug);
    }
    setSearchParams(searchParams);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(prev => prev === tag ? 'All' : tag);
  };

  // Extract all distinct application tags across pumps
  const pumpTags = [
    "Water Supply", "Pressure Boosting", "HVAC", "Firefighting", "Irrigation", 
    "Drainage", "Sewage", "Industry", "Boiler Feed", "High-Rise", 
    "Hospitals", "Hotels", "Airports", "Metro Stations", "Data Centres"
  ];

  // Filtering Logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    
    // Category match
    let matchesCategory = true;
    if (selectedCategory !== 'All') {
      matchesCategory = product.category === selectedCategory;
    }

    // Pump subcategory match (handles pumps in multiple categories without duplication)
    let matchesPumpSub = true;
    if (selectedCategory === 'Pumps' && selectedPumpSubCategory !== 'All') {
      matchesPumpSub = 
        product.subCategory === selectedPumpSubCategory ||
        (Array.isArray(product.categories) && product.categories.includes(selectedPumpSubCategory));
    }

    // Application tag match
    let matchesTag = true;
    if (selectedTag !== 'All') {
      matchesTag = Array.isArray(product.applicationTags) && product.applicationTags.includes(selectedTag);
    }
    
    return matchesSearch && matchesBrand && matchesCategory && matchesPumpSub && matchesTag;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    } else if (sortBy === 'brand') {
      return a.brand.localeCompare(b.brand);
    }
    return 0;
  });

  const getWhatsAppLink = (product) => {
    const priceVal = editablePrices[product.id] || product.price;
    const text = `Hello AGTPL, I am interested in inquiring about:
*Product Name:* ${product.name}
*Model Number:* ${product.modelNumber}
*Brand:* ${product.brand}
*Price (Estimated):* ${priceVal}
Please send me technical specifications and quote details.`;
    return `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  const vfdCount = products.filter(p => p.category === 'VFD / VSD').length;
  const pumpsCount = products.filter(p => p.category === 'Pumps').length;
  const motorsCount = products.filter(p => p.category === 'Motors').length;

  return (
    <div className="w-full font-body bg-light-bg py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark tracking-wide uppercase">
            Products &amp; Solutions
          </h1>
          <div className="w-16 h-1 bg-green mx-auto mt-4"></div>
          <p className="text-sm text-text-muted-light max-w-xl mx-auto leading-relaxed pt-2">
            Authorized supply of low-voltage motors, variable frequency drives, precision pumps, and turnkey engineered panel packages.
          </p>
        </div>

        {/* Tab Switcher: Products vs Solutions */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white p-1 rounded-sm border border-border shadow-2xs">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                activeTab === 'products'
                  ? 'bg-[#003ea5] text-white shadow-xs'
                  : 'text-text-muted-dark hover:text-text-dark hover:bg-sky-pale/50'
              }`}
            >
              Equipment Catalog ({products.length})
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                activeTab === 'solutions'
                  ? 'bg-green text-white shadow-xs'
                  : 'text-text-muted-dark hover:text-text-dark hover:bg-sky-pale/50'
              }`}
            >
              Engineered Solutions &amp; Panels ({solutions.length})
            </button>
          </div>
        </div>

        {/* ================= SECTION 1: PRODUCTS CATALOG ================= */}
        {activeTab === 'products' && (
          <div className="space-y-8">
            
            {/* Top Category Filter Tabs */}
            <div className="flex flex-wrap justify-center items-center gap-2">
              <button
                onClick={() => handleCategorySelect('All')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border transition-colors cursor-pointer ${
                  selectedCategory === 'All'
                    ? 'bg-green border-green text-white shadow-xs'
                    : 'bg-white border-border text-text-muted-dark hover:border-black/30 hover:text-black'
                }`}
              >
                All Equipment ({products.length})
              </button>

              <button
                onClick={() => handleCategorySelect('VFD / VSD')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border transition-colors cursor-pointer ${
                  selectedCategory === 'VFD / VSD'
                    ? 'bg-green border-green text-white shadow-xs'
                    : 'bg-white border-border text-text-muted-dark hover:border-black/30 hover:text-black'
                }`}
              >
                Drives &amp; VFD ({vfdCount})
              </button>

              <button
                onClick={() => handleCategorySelect('Pumps')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border transition-colors cursor-pointer ${
                  selectedCategory === 'Pumps'
                    ? 'bg-green border-green text-white shadow-xs'
                    : 'bg-white border-border text-text-muted-dark hover:border-black/30 hover:text-black'
                }`}
              >
                Pumps ({pumpsCount})
              </button>

              <button
                onClick={() => handleCategorySelect('Motors')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border transition-colors cursor-pointer ${
                  selectedCategory === 'Motors'
                    ? 'bg-green border-green text-white shadow-xs'
                    : 'bg-white border-border text-text-muted-dark hover:border-black/30 hover:text-black'
                }`}
              >
                Motors ({motorsCount})
              </button>
            </div>

            {/* PUMPS DEDICATED HEADER & FILTERS */}
            {selectedCategory === 'Pumps' && (
              <div className="bg-light-surface border border-border p-6 rounded-sm shadow-xs space-y-6">
                
                {/* Brand Tagline & German Tech Banner */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-border/70 pb-5 gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-sky-deep tracking-wider uppercase block">
                      KSB Authorized Fluid Handling
                    </span>
                    <h2 className="font-headings text-2xl font-bold text-text-dark">
                      KSB Pumping Systems
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <span className="text-[#003ea5] bg-blue-50 border border-blue-200 px-3 py-1 rounded-sm">
                      Solutions. For Life.
                    </span>
                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-sm">
                      Trust of German Technology
                    </span>
                  </div>
                </div>

                {/* Subcategory Filter Tabs */}
                <div>
                  <h4 className="text-[11px] font-bold text-text-dark uppercase tracking-wider mb-2.5">
                    Filter by Pump Category:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handlePumpSubCategorySelect('All')}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm border transition-colors cursor-pointer ${
                        selectedPumpSubCategory === 'All'
                          ? 'bg-[#003ea5] border-[#003ea5] text-white'
                          : 'bg-white border-border text-text-muted-dark hover:border-[#003ea5]/50 hover:text-[#003ea5]'
                      }`}
                    >
                      All Pumps ({pumpsCount})
                    </button>

                    {pumpSubCategories.map(subCat => {
                      const count = products.filter(p => 
                        p.category === 'Pumps' && 
                        (p.subCategory === subCat || (Array.isArray(p.categories) && p.categories.includes(subCat)))
                      ).length;
                      return (
                        <button
                          key={subCat}
                          onClick={() => handlePumpSubCategorySelect(subCat)}
                          className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm border transition-colors cursor-pointer ${
                            selectedPumpSubCategory === subCat
                              ? 'bg-[#003ea5] border-[#003ea5] text-white'
                              : 'bg-white border-border text-text-muted-dark hover:border-[#003ea5]/50 hover:text-[#003ea5]'
                          }`}
                        >
                          {subCat} ({count})
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Application Filter Tags */}
                <div>
                  <h4 className="text-[11px] font-bold text-text-dark uppercase tracking-wider mb-2">
                    Application Tags:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {pumpTags.map(tag => {
                      const isSelected = selectedTag === tag;
                      return (
                        <button
                          key={tag}
                          onClick={() => handleTagSelect(tag)}
                          className={`px-2.5 py-1 text-[11px] font-medium rounded-xs border transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-green border-green text-white font-bold'
                              : 'bg-white border-border/80 text-text-muted-light hover:border-green hover:text-text-dark'
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                    {selectedTag !== 'All' && (
                      <button
                        onClick={() => setSelectedTag('All')}
                        className="px-2.5 py-1 text-[11px] font-bold text-red-600 hover:underline cursor-pointer"
                      >
                        Reset Tag
                      </button>
                    )}
                  </div>
                </div>

                {/* Reference Projects Block */}
                <div className="bg-white border border-border/70 p-4 rounded-sm">
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-text-dark uppercase tracking-wider">
                    <Building2 size={15} className="text-[#003ea5]" />
                    <span>Signature Reference Projects (HVAC &amp; Infrastructure):</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-[11px]">
                    {pumpReferenceProjects.map((ref, idx) => (
                      <div key={idx} className="bg-sky-pale/40 border border-sky-light/40 p-2 rounded-xs">
                        <span className="font-bold text-text-dark block truncate" title={ref.name}>{ref.name}</span>
                        <span className="text-[10px] text-text-muted-dark block truncate">{ref.location}</span>
                        <span className="text-[9px] text-[#003ea5] font-semibold block truncate" title={ref.highlight}>{ref.highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Results count & Active Filter Reset */}
            <div className="flex items-center justify-between text-xs text-text-muted-dark font-medium px-1">
              <span>Showing {sortedProducts.length} certified items</span>
              {(searchQuery || selectedCategory !== 'All' || selectedPumpSubCategory !== 'All' || selectedTag !== 'All') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedBrand('All');
                    handleCategorySelect('All');
                  }}
                  className="text-green hover:underline cursor-pointer font-bold uppercase tracking-wider text-[11px]"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Grid List */}
            {sortedProducts.length === 0 ? (
              <div className="bg-light-surface border border-border p-12 text-center rounded-sm">
                <p className="text-text-muted-light text-sm mb-4">No equipment matches your search or filter criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedBrand('All');
                    handleCategorySelect('All');
                  }}
                  className="bg-green text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-green-bright transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-light-surface border border-border rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow relative group"
                  >
                    {/* Top OEM Tag & Category */}
                    <div className="bg-white border-b border-border/60 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                          product.brand.includes('ABB') 
                            ? 'bg-red-50 text-red-600 border border-red-200' 
                            : product.brand.includes('KSB')
                            ? 'bg-blue-50 text-blue-600 border border-blue-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          {product.brand}
                        </span>
                        {product.badge && (
                          <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-1.5 py-0.5 uppercase tracking-wider rounded-xs">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-medium text-text-muted-dark truncate max-w-[140px]" title={product.subCategory || product.category}>
                        {product.subCategory || product.category}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="h-48 bg-white flex items-center justify-center p-4 border-b border-border/40 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1 space-y-4">
                      <div>
                        <h3 className="font-headings text-lg font-bold text-text-dark group-hover:text-green transition-colors">
                          <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </h3>
                        <p className="text-[10px] font-mono text-text-muted-dark mt-1">
                          Model: {product.modelNumber}
                        </p>
                        {product.rating && (
                          <p className="text-[10px] font-mono text-text-muted-dark">
                            Rating: {product.rating}
                          </p>
                        )}
                      </div>

                      <p className="text-xs text-text-muted-light leading-relaxed flex-1 line-clamp-3">
                        {product.shortDescription}
                      </p>

                      {/* Application Tags Chips */}
                      {Array.isArray(product.applicationTags) && product.applicationTags.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {product.applicationTags.slice(0, 3).map((tag, tidx) => (
                            <span key={tidx} className="text-[9px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded-xs font-medium">
                              {tag}
                            </span>
                          ))}
                          {product.applicationTags.length > 3 && (
                            <span className="text-[9px] text-slate-500 font-medium">
                              +{product.applicationTags.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Price Block */}
                      <div className="border-t border-b border-border/50 py-3 flex items-center justify-between text-xs">
                        <span className="text-text-muted-light font-medium">Estimated Price:</span>
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            value={editablePrices[product.id] || product.price}
                            onChange={(e) => handlePriceChange(product.id, e.target.value)}
                            className="w-24 text-right font-bold text-text-dark bg-sky-pale border border-transparent hover:border-sky-light focus:border-sky rounded-sm px-1.5 py-0.5 focus:outline-none focus:bg-white"
                            title="Click to edit price value"
                          />
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <button
                          onClick={() => onRequestQuote(product)}
                          className="bg-dark-surface hover:bg-dark-bg text-white py-2.5 text-[9px] font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center"
                        >
                          Request Quote
                        </button>
                        <a
                          href={getWhatsAppLink(product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green hover:bg-green-bright text-white py-2.5 text-[9px] font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1 cursor-pointer text-center"
                        >
                          <MessageSquare size={12} />
                          WhatsApp
                        </a>
                      </div>

                      {/* Learn More Link */}
                      <div className="text-center pt-2">
                        <Link
                          to={`/products/${product.id}`}
                          className="text-[10px] font-bold uppercase tracking-wider text-sky-deep hover:text-green transition-colors"
                        >
                          View Full Specifications →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= SECTION 2: ENGINEERED SOLUTIONS ================= */}
        {activeTab === 'solutions' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((sol) => {
                const IconComponent = solutionIcons[sol.iconName] || Settings;
                return (
                  <div key={sol.id} className="bg-light-surface border border-border rounded-sm p-8 flex flex-col hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#003ea5] group-hover:bg-green transition-colors"></div>
                    
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 border border-sky-light bg-sky-pale text-sky-deep flex items-center justify-center rounded-sm shrink-0">
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <span className="text-[10px] font-bold text-sky uppercase tracking-wider">{sol.category}</span>
                        <h2 className="font-headings text-2xl font-bold text-text-dark">{sol.title}</h2>
                        <p className="text-xs text-text-muted-light leading-relaxed">{sol.shortDescription}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/60">
                      <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider mb-2">Technical Scope:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-muted-light mb-6">
                        {sol.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-center gap-2">
                            <Check size={14} className="text-green shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <button
                          onClick={() => onRequestQuote(sol.title)}
                          className="w-full bg-green hover:bg-green-bright text-white py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center"
                        >
                          Request Technical Consultation for {sol.title}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
