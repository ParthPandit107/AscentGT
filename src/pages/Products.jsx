import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowUpDown, MessageSquare, FileText, LayoutGrid } from 'lucide-react';
import { products as staticProducts } from '../data/products';
import { siteConfig } from '../config/site';

import useSeo from '../hooks/useSeo';

export default function Products({ onRequestQuote, products = staticProducts }) {
  useSeo(
    'Authorized Industrial Equipment Catalog | AGTPL',
    'Browse and search our catalog of premium certified electric motors, AC vector drives, and chemical fluid pumps from authorized partners ABB, Yaskawa, and KSB.'
  );

  const [searchParams, setSearchParams] = useSearchParams();
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

  // Sync search query from URL query parameter
  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchQuery(query);
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
Please send me details and catalog information.`;
    return `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full font-body bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 text-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Industrial Equipment Catalog
          </div>
          <h1 className="font-headings text-4xl font-normal text-text-dark leading-tight">
            Search Our Certified Product Catalog
          </h1>
          <p className="text-sm text-text-muted-light max-w-lg mx-auto">
            Authorized supply of low voltage motors, drives, and centrifugal water pumps from ABB, Yaskawa, and KSB.
          </p>
        </div>

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

          {/* Sorting */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted-light font-bold uppercase tracking-wider flex-shrink-0">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark"
            >
              <option value="name-asc">Name (A - Z)</option>
              <option value="name-desc">Name (Z - A)</option>
              <option value="brand">Brand</option>
            </select>
          </div>

        </div>

        {/* Product Count Display */}
        <div className="flex items-center justify-between mb-6 text-xs text-text-muted-light">
          <p>Showing <strong>{sortedProducts.length}</strong> of <strong>{products.length}</strong> products</p>
          {(searchQuery || selectedBrand !== 'All' || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBrand('All');
                setSelectedCategory('All');
                setSearchParams({});
              }}
              className="text-sky-deep font-bold hover:text-green underline cursor-pointer"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {sortedProducts.length === 0 ? (
          <div className="bg-light-surface border border-border p-12 text-center rounded-sm">
            <div className="w-12 h-12 bg-sky-pale text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4">
              <LayoutGrid size={24} />
            </div>
            <h3 className="font-headings text-lg font-bold text-text-dark mb-1">No Products Found</h3>
            <p className="text-xs text-text-muted-light max-w-sm mx-auto">
              We couldn't find any products matching your current search terms or filters. Try adjusting your selections.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-light-surface border border-border rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
                
                {/* Image Section with hover animation */}
                <div className="relative h-48 overflow-hidden bg-sky-pale/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Brand Tag */}
                  <span className={`absolute top-3 left-3 text-[9px] font-bold text-white px-2.5 py-1 uppercase tracking-wider rounded-sm ${
                    product.brand === 'ABB' ? 'bg-sky-deep' : product.brand === 'Yaskawa' ? 'bg-green' : 'bg-dark-bg'
                  }`}>
                    {product.brand}
                  </span>
                  {/* Availability Badge */}
                  <span className={`absolute top-3 right-3 text-[9px] font-bold px-2 py-1 rounded-sm ${
                    product.availability.includes('In Stock') ? 'bg-green-pale text-green' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.availability}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-text-muted-dark uppercase tracking-wider">{product.category}</span>
                    <h3 className="font-headings text-xl font-bold text-text-dark group-hover:text-sky-deep transition-colors">
                      <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="text-xs font-mono text-text-muted-light font-bold">Model: {product.modelNumber}</p>
                  </div>

                  <p className="text-xs text-text-muted-light leading-relaxed flex-1">
                    {product.shortDescription}
                  </p>

                  {/* Price Block (Editable as per reqs) */}
                  <div className="border-t border-b border-border/50 py-3 flex items-center justify-between text-xs">
                    <span className="text-text-muted-light font-medium">Estimated Price:</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        value={editablePrices[product.id]}
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
    </div>
  );
}
