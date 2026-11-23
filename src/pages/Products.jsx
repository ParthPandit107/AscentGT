import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowUpDown, MessageSquare, FileText, LayoutGrid, Zap, Sliders, Droplets, Settings, Check, ArrowRight } from 'lucide-react';
import { products as staticProducts } from '../data/products';
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
    'Explore our integrated product catalog and engineered solutions: ABB IE4/IE5 motors, Yaskawa low-harmonic drives, KSB pumping systems, and custom automation panels.'
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') === 'solutions' ? 'solutions' : 'products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  // Sync search query, category, brand, and tab from URL query parameters
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

  // Get distinct brands and categories for filter options
  const brands = ['All', ...new Set(products.map(p => p.brand))];
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filtering Logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    return matchesSearch && matchesBrand && matchesCategory;
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

  return (
    <div className="w-full font-body bg-light-bg py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 text-green px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Industrial Equipment &amp; Engineered Systems
          </div>
          <h1 className="font-headings text-3xl sm:text-4xl font-bold text-text-dark leading-tight">
            Products &amp; Solutions
          </h1>
          <p className="text-sm text-text-muted-light max-w-xl mx-auto leading-relaxed">
            Authorized supply of low-voltage motors, variable frequency drives, precision pumps, and turnkey engineered panel packages.
          </p>
        </div>

        {/* Tab Switcher: Products vs Solutions */}
        <div className="flex justify-center mb-10">
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
          <div>
            {/* Filters and Search Bar Container */}
            <div className="bg-light-surface border border-border p-6 rounded-sm mb-8 shadow-xs grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
              {/* Search Input */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light">
                  <Search size={16} />
                </span>
                <input
                  type="text"
                  placeholder="Search name, model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-xs border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark"
                />
              </div>

              {/* Brand Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted-light font-bold uppercase tracking-wider flex-shrink-0">Brand:</span>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark"
                >
                  {brands.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted-light font-bold uppercase tracking-wider flex-shrink-0">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark"
                >
                  {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Sorting Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted-light font-bold uppercase tracking-wider flex-shrink-0">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark"
                >
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="brand">Brand</option>
                </select>
              </div>
            </div>

            {/* Results count & Clear filters indicator */}
            <div className="flex items-center justify-between mb-6 text-xs text-text-muted-dark font-medium">
              <span>Showing {sortedProducts.length} certified items</span>
              {(searchQuery || selectedBrand !== 'All' || selectedCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedBrand('All');
                    setSelectedCategory('All');
                  }}
                  className="text-green hover:underline cursor-pointer"
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
                    setSelectedCategory('All');
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
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                        product.brand.includes('ABB') 
                          ? 'bg-red-50 text-red-600 border border-red-200' 
                          : product.brand.includes('KSB')
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {product.brand}
                      </span>
                      <span className="text-[10px] font-medium text-text-muted-dark">
                        {product.category}
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
                      </div>

                      <p className="text-xs text-text-muted-light leading-relaxed flex-1">
                        {product.shortDescription}
                      </p>

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
