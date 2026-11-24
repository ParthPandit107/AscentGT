import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FileText, MessageSquare, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { products as staticProducts } from '../data/products';
import { siteConfig } from '../config/site';

import useSeo from '../hooks/useSeo';

export default function ProductDetail({ onRequestQuote, products = staticProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useSeo(
    product ? `${product.name} Specs & Datasheet | AGTPL` : 'Product Details | AGTPL',
    product ? `Technical specifications, features, applications, and downloadable PDF brochure for ${product.name} (Model: ${product.modelNumber}).` : 'Authorized industrial catalog details.'
  );

  useEffect(() => {
    const list = products && products.length > 0 ? products : staticProducts;
    const cleanId = id.toLowerCase().replace(/^yaskawa-|-vfd$/g, '');
    const found = 
      list.find(p => p.id === id) ||
      list.find(p => p.id.toLowerCase() === id.toLowerCase()) ||
      list.find(p => p.id.toLowerCase().replace(/^yaskawa-|-vfd$/g, '') === cleanId) ||
      staticProducts.find(p => p.id === id) ||
      staticProducts.find(p => p.id.toLowerCase() === id.toLowerCase());

    if (found) {
      setProduct(found);
    } else {
      setProduct(null);
    }
    window.scrollTo(0, 0);
  }, [id, products]);

  if (!product) {
    return (
      <div className="w-full font-body bg-light-bg py-24 text-center px-4">
        <h2 className="font-headings text-2xl font-bold text-text-dark mb-2">Product Not Found</h2>
        <p className="text-sm text-text-muted-light max-w-sm mx-auto mb-6">
          The product you are looking for does not exist in our authorized machinery catalog.
        </p>
        <Link to="/products" className="bg-green text-white px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-green-bright transition-colors inline-flex items-center gap-1.5">
          <ArrowLeft size={14} /> Back to Catalog
        </Link>
      </div>
    );
  }

  // Find related products (same category or brand, excluding current)
  const related = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 3);

  const getWhatsAppLink = () => {
    const text = `Hello AGTPL, I would like to inquire about:
*Product Name:* ${product.name}
*Model Number:* ${product.modelNumber}
*Brand:* ${product.brand}
I need technical details, quotation proposal, and delivery timeline.`;
    return `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full font-body bg-light-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <Link to="/products" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-muted-dark hover:text-green mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to Catalog
        </Link>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-light-surface border border-border p-6 sm:p-8 rounded-sm shadow-xs mb-12">
          
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full h-96 sm:h-[420px] rounded-sm overflow-hidden bg-white border border-border flex items-center justify-center p-6 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="space-y-6 flex flex-col">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[10px] font-bold text-white px-2.5 py-0.5 uppercase tracking-wider rounded-sm ${
                  product.brand === 'ABB' ? 'bg-red-600' : product.brand === 'KSB' ? 'bg-[#003ea5]' : product.brand === 'Yaskawa' ? 'bg-green' : 'bg-dark-bg'
                }`}>
                  {product.brand}
                </span>
                <span className="text-[10px] font-bold text-text-muted-dark uppercase tracking-wider">{product.subCategory || product.category}</span>
                {product.badge && (
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 uppercase tracking-wider rounded-sm">
                    {product.badge}
                  </span>
                )}
              </div>
              <h1 className="font-headings text-3xl sm:text-4xl font-normal text-text-dark leading-tight">{product.name}</h1>
              <div className="space-y-1 pt-1 font-mono text-xs sm:text-sm">
                <p className="text-text-muted-light font-bold">
                  Model Number: <span className="text-text-dark">{product.modelNumber}</span>
                </p>
                {product.rating && (
                  <p className="text-text-muted-light font-bold">
                    Rating: <span className="text-text-dark">{product.rating}</span>
                  </p>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-muted-light leading-relaxed">
              {product.fullDescription}
            </p>

            <div className="border-t border-b border-border/60 py-4 text-xs">
              <span className="text-text-muted-light block font-semibold uppercase tracking-wider text-[9px] mb-1">Estimated Pricing</span>
              <span className="font-bold text-text-dark text-base">{product.price}</span>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => onRequestQuote(product)}
                className="bg-dark-bg hover:bg-dark-surface text-white py-3.5 px-6 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center"
              >
                Request Quotation
              </button>
              
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green hover:bg-green-bright text-white py-3.5 px-6 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <MessageSquare size={16} />
                WhatsApp Inquiry
              </a>
            </div>

            {/* Downloads */}
            <div className="pt-4 border-t border-border/40 mt-auto">
              <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider mb-3">Downloads:</h4>
              <div className="flex flex-wrap gap-4 text-xs font-bold">
                <a
                  href={product.brochureUrl}
                  download
                  className="flex items-center gap-1.5 text-sky-deep hover:text-green transition-colors"
                >
                  <FileText size={16} />
                  Download Brochure (PDF)
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Specs Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Specifications */}
          <div className="lg:col-span-2 bg-light-surface border border-border p-6 rounded-sm shadow-xs space-y-4">
            <h3 className="font-headings text-xl font-bold text-text-dark border-b border-border pb-3">Technical Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 border-b border-border/40 text-xs gap-1 sm:gap-4">
                  <span className="text-text-muted-light font-medium flex-shrink-0">{key}</span>
                  <span className="text-text-dark font-bold text-left sm:text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features and Applications */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-light-surface border border-border p-6 rounded-sm shadow-xs space-y-3">
              <h3 className="font-headings text-lg font-bold text-text-dark border-b border-border pb-2">Key Features</h3>
              <ul className="space-y-2.5 text-xs text-text-muted-light">
                {product.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-green flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-light-surface border border-border p-6 rounded-sm shadow-xs space-y-3">
              <h3 className="font-headings text-lg font-bold text-text-dark border-b border-border pb-2">Applications</h3>
              <ul className="space-y-2 text-xs text-text-muted-light">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-sky rounded-full flex-shrink-0"></span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Compatible Accessories */}
        {product.accessories && product.accessories.length > 0 && (
          <div className="bg-light-surface border border-border p-6 rounded-sm shadow-xs mb-12 space-y-4">
            <h3 className="font-headings text-xl font-bold text-text-dark border-b border-border pb-3">Compatible Accessories & Spares</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.accessories.map((acc, idx) => (
                <div key={idx} className="bg-sky-pale/50 border border-sky-light/30 p-4 rounded-sm flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-deep rounded-full flex-shrink-0"></div>
                  <span className="text-xs text-text-dark font-medium">{acc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {related.length > 0 && (
          <div className="space-y-6">
            <h3 className="font-headings text-2xl font-normal text-text-dark">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map(p => (
                <div key={p.id} className="bg-light-surface border border-border rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
                  <div className="h-32 overflow-hidden bg-sky-pale/30">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-sky uppercase tracking-wider">{p.brand}</span>
                      <h4 className="font-headings text-sm font-bold text-text-dark group-hover:text-sky-deep transition-colors line-clamp-1">
                        <Link to={`/products/${p.id}`}>{p.name}</Link>
                      </h4>
                    </div>
                    <div className="pt-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-text-dark">{p.price}</span>
                      <Link to={`/products/${p.id}`} className="text-[9px] font-bold uppercase tracking-wider text-sky-deep hover:text-green flex items-center">
                        Details <ChevronRight size={10} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
