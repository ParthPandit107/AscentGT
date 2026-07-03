import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, isSupabaseConfigured } from '../config/supabase';
import { LogOut, Save, CheckCircle, AlertTriangle, Search, Info } from 'lucide-react';
import useSeo from '../hooks/useSeo';

export default function Admin({ isAuthenticated, onLogout, products, onRefreshProducts }) {
  useSeo(
    'Admin Dashboard | AGTPL',
    'Configure industrial products estimated pricing and availability.'
  );

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [saveStatus, setSaveStatus] = useState({}); // { productId: 'idle' | 'saving' | 'saved' | 'error' }
  const [editedPrices, setEditedPrices] = useState({});
  const [editedAvailability, setEditedAvailability] = useState({});

  // Protect route
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Synchronize internal state when products prop updates
  useEffect(() => {
    if (products && products.length > 0) {
      const prices = {};
      const availabilities = {};
      products.forEach(p => {
        prices[p.id] = p.price;
        availabilities[p.id] = p.availability;
      });
      setEditedPrices(prices);
      setEditedAvailability(availabilities);
    }
  }, [products]);

  const handlePriceChange = (productId, val) => {
    setEditedPrices(prev => ({ ...prev, [productId]: val }));
    // Reset status back to idle if they type again
    if (saveStatus[productId] === 'saved') {
      setSaveStatus(prev => ({ ...prev, [productId]: 'idle' }));
    }
  };

  const handleAvailabilityChange = (productId, val) => {
    setEditedAvailability(prev => ({ ...prev, [productId]: val }));
    // Automatically trigger save for dropdown change
    saveRow(productId, editedPrices[productId], val);
  };

  const saveRow = async (productId, priceVal, availVal) => {
    setSaveStatus(prev => ({ ...prev, [productId]: 'saving' }));

    const res = await db.updateProduct(productId, {
      price: priceVal || editedPrices[productId],
      availability: availVal || editedAvailability[productId]
    });

    if (res.success) {
      setSaveStatus(prev => ({ ...prev, [productId]: 'saved' }));
      // Notify parent app state to pull updated data
      onRefreshProducts();
      // Reset indicator after 3 seconds
      setTimeout(() => {
        setSaveStatus(prev => ({ ...prev, [productId]: 'idle' }));
      }, 3000);
    } else {
      setSaveStatus(prev => ({ ...prev, [productId]: 'error' }));
    }
  };

  // Filter products locally by search
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full font-body bg-light-bg py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-light-surface border border-border p-6 rounded-sm shadow-xs">
          <div>
            <h1 className="font-headings text-2xl font-bold text-text-dark">AGTPL Product Dashboard</h1>
            <p className="text-xs text-text-muted-light">Manage pricing, availability, and stock status across your catalog.</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
          >
            <LogOut size={14} /> Log Out
          </button>
        </div>

        {/* Supabase Status Alert Banner */}
        {isSupabaseConfigured ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-sm flex items-start gap-3 text-xs">
            <CheckCircle size={18} className="text-green flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Database Mode: Live Supabase Connected</p>
              <p className="text-green-700/90 mt-0.5">Your updates will be saved globally and are reflected instantly for all customers visiting the website.</p>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-sm flex items-start gap-3 text-xs">
            <AlertTriangle size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Database Mode: Local Mock Fallback</p>
              <p className="text-yellow-700/95 mt-1 leading-relaxed">
                Supabase keys are not configured. Price and availability changes will be saved to your **browser's local storage only**. 
                To make changes persistent globally across all devices, configure <code className="bg-yellow-100 px-1 py-0.5 rounded-sm font-bold text-yellow-900">VITE_SUPABASE_URL</code> and <code className="bg-yellow-100 px-1 py-0.5 rounded-sm font-bold text-yellow-900">VITE_SUPABASE_ANON_KEY</code> in your environment variables on Vercel.
              </p>
            </div>
          </div>
        )}

        {/* Product Editor Table Section */}
        <div className="bg-light-surface border border-border rounded-sm shadow-xs overflow-hidden">
          
          {/* Table Header Filter Search */}
          <div className="p-5 border-b border-border/80 flex flex-col sm:flex-row justify-between items-center gap-4 bg-sky-pale/20">
            <h3 className="font-headings text-lg font-bold text-text-dark self-start sm:self-center">Equipment Catalog ({filteredProducts.length})</h3>
            <div className="relative w-full sm:w-72">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light">
                <Search size={14} />
              </span>
              <input
                type="text"
                placeholder="Search catalog by name, model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark"
              />
            </div>
          </div>

          {/* Catalog Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-sky-pale/40 text-[10px] font-bold text-text-muted-dark uppercase tracking-wider border-b border-border">
                  <th className="py-3 px-5">Product Details</th>
                  <th className="py-3 px-5 w-48">Estimated Price</th>
                  <th className="py-3 px-5 w-48">Availability Status</th>
                  <th className="py-3 px-5 text-right w-36">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-xs">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-12 px-5 text-center text-text-muted-light">
                      No products found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((p) => {
                    const rowStatus = saveStatus[p.id] || 'idle';
                    return (
                      <tr key={p.id} className="hover:bg-sky-pale/10 transition-colors">
                        {/* Title, Model, Brand */}
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <img src={p.image} alt={p.name} className="w-10 h-10 object-cover border border-border rounded-xs" />
                            <div className="min-w-0">
                              <h4 className="font-headings font-bold text-text-dark truncate max-w-md">{p.name}</h4>
                              <p className="text-[10px] text-text-muted-light font-mono mt-0.5">
                                <span className="font-bold text-sky">{p.brand}</span> | Model: {p.modelNumber}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Price Input */}
                        <td className="py-4 px-5">
                          <input
                            type="text"
                            value={editedPrices[p.id] || ''}
                            onChange={(e) => handlePriceChange(p.id, e.target.value)}
                            className="w-full px-3 py-1.5 border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark font-bold"
                          />
                        </td>

                        {/* Availability Select */}
                        <td className="py-4 px-5">
                          <select
                            value={editedAvailability[p.id] || ''}
                            onChange={(e) => handleAvailabilityChange(p.id, e.target.value)}
                            className={`w-full px-2 py-1.5 border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-xs font-bold ${
                              (editedAvailability[p.id] || '').includes('In Stock') ? 'text-green' : 'text-yellow-600'
                            }`}
                          >
                            <option value="In Stock">In Stock</option>
                            <option value="In Stock (Custom Order)">In Stock (Custom Order)</option>
                            <option value="Contact for Lead Time">Contact for Lead Time</option>
                          </select>
                        </td>

                        {/* Actions & Status */}
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            {rowStatus === 'saving' && (
                              <span className="text-[10px] text-text-muted-light font-semibold animate-pulse">Saving...</span>
                            )}
                            {rowStatus === 'saved' && (
                              <span className="text-[10px] text-green font-bold flex items-center gap-1">
                                <CheckCircle size={12} /> Saved
                              </span>
                            )}
                            {rowStatus === 'error' && (
                              <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                                Error
                              </span>
                            )}

                            <button
                              onClick={() => saveRow(p.id)}
                              disabled={rowStatus === 'saving'}
                              className="p-2 bg-dark-bg hover:bg-dark-surface text-white rounded-sm transition-colors cursor-pointer flex items-center justify-center flex-shrink-0"
                              title="Save product updates"
                            >
                              <Save size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
