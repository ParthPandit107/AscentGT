import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send, Trash2, FileText } from 'lucide-react';
import { siteConfig } from '../config/site';

/**
 * QuoteModal handles single and multi-item quotation requests.
 * Renders a list of items inside the quote basket, allowing quantity controls and item removal,
 * before submitting contact info via WhatsApp or Gmail compose.
 */
export default function QuoteModal({ 
  isOpen, 
  onClose, 
  basket = [], 
  onRemoveItem, 
  onUpdateQuantity, 
  onClearBasket 
}) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirements: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    // Ensure there is at least one item in the basket to request a quote
    if (basket.length === 0) {
      newErrors.basket = 'Your Quote Basket is empty';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getWhatsAppLink = () => {
    const itemsListText = basket.map((item, idx) => 
      `${idx + 1}. ${item.product.name} (Model: ${item.product.modelNumber || 'N/A'}) [${item.product.brand}] - Qty: ${item.quantity}`
    ).join('\n');

    const text = `*Quotation Request from AGTPL Website*
----------------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company || 'N/A'}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Requested Items:*
${itemsListText}

*Additional Requirements:*
${formData.requirements || 'None'}
----------------------------------------
_Please send this message to request a quote._`;

    const formattedPhone = siteConfig.whatsappNumber.replace(/[^0-9+]/g, '');
    return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = () => {
    const itemsListText = basket.map((item, idx) => 
      `${idx + 1}. ${item.product.name} (Model: ${item.product.modelNumber || 'N/A'}) [${item.product.brand}] - Qty: ${item.quantity}`
    ).join('\n');

    const subject = encodeURIComponent(`Quotation Request - Multi-Item Inquiry [AGTPL]`);
    const body = encodeURIComponent(`Quotation Request from AGTPL Website
----------------------------------------
Name: ${formData.name}
Company: ${formData.company || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}

Requested Items:
${itemsListText}

Additional Requirements:
${formData.requirements || 'None'}
----------------------------------------`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.inquiryEmail}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e, method = 'email') => {
    e.preventDefault();
    if (!validate()) return;

    if (method === 'whatsapp') {
      window.open(getWhatsAppLink(), '_blank');
    } else if (method === 'email') {
      window.open(getEmailLink(), '_blank');
    }

    // Direct submit visual feedback
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClearBasket();
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-light-surface rounded-lg shadow-xl overflow-hidden border border-border flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-dark-bg px-6 py-4 flex items-center justify-between text-white border-b border-sky-light/20 flex-shrink-0">
          <div>
            <h3 className="font-headings text-lg font-bold tracking-wide">Request a Quotation</h3>
            <p className="text-xs text-sky-light/80 font-body">Get a detailed engineering & pricing proposal</p>
          </div>
          <button onClick={onClose} className="p-1 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 flex-1">
          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-green/10 text-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 className="font-headings text-xl font-bold text-text-dark mb-2">Quote Request Redirected</h4>
              <p className="text-sm text-text-muted-light font-body max-w-sm">
                Thank you! Your quotation request has been compiled. We are opening your client portal to dispatch the details to our help desk.
              </p>
            </div>
          ) : basket.length === 0 ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 bg-sky-pale text-sky-deep rounded-full flex items-center justify-center">
                <FileText size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-headings text-lg font-bold text-text-dark">Your Quote Basket is Empty</h4>
                <p className="text-xs text-text-muted-light max-w-xs mx-auto">
                  Browse our certified catalog of motors, drives, and fluid systems and add products to request pricing.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="bg-sky-deep hover:bg-sky-muted text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Browse Machinery
              </button>
            </div>
          ) : (
            <form className="space-y-5 font-body">
              
              {/* Basket Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="text-[10px] font-bold text-text-dark uppercase tracking-wider">Inquiry Items ({basket.length})</span>
                  <button 
                    type="button" 
                    onClick={onClearBasket}
                    className="text-[10px] font-bold text-red-500 hover:text-red-700 uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>
                
                <div className="max-h-40 overflow-y-auto space-y-2 pr-1 border-b border-border/40 pb-4">
                  {basket.map((item) => (
                    <div 
                      key={item.product.id} 
                      className="flex items-center justify-between bg-sky-pale/30 border border-border/50 p-3 rounded-sm gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-text-dark truncate">{item.product.name}</h5>
                        <p className="text-[10px] font-mono text-text-muted-light truncate">
                          Model: {item.product.modelNumber || 'Custom'} [{item.product.brand}]
                        </p>
                      </div>
                      
                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="flex items-center border border-border rounded bg-white">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs font-bold text-text-muted-dark hover:bg-sky-pale border-r border-border transition-colors cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-bold text-text-dark min-w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs font-bold text-text-muted-dark hover:bg-sky-pale border-l border-border transition-colors cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1 text-text-muted-dark hover:text-red-500 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add More Items Link */}
                <div className="pt-2 pb-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-2.5 px-4 bg-sky-pale border border-sky-light/80 hover:bg-sky/20 hover:border-sky text-sky-deep rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>+ Add More Products / Continue Browsing</span>
                  </button>
                </div>
              </div>

              {/* Contact Info Fields */}
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-text-dark uppercase tracking-wider block border-b border-border/60 pb-2">
                  Contact Information
                </span>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-text-dark uppercase tracking-wider mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 text-xs border ${errors.name ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-sky text-text-dark bg-white`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.name}</span>}
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-semibold text-text-dark uppercase tracking-wider mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs border border-border rounded-sm focus:outline-none focus:border-sky text-text-dark bg-white"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-text-dark uppercase tracking-wider mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 text-xs border ${errors.email ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-sky text-text-dark bg-white`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.email}</span>}
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-semibold text-text-dark uppercase tracking-wider mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 text-xs border ${errors.phone ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-sky text-text-dark bg-white`}
                      placeholder="+91 99999 99999"
                    />
                    {errors.phone && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.phone}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-text-dark uppercase tracking-wider mb-1">Additional Requirements (Optional)</label>
                  <textarea
                    name="requirements"
                    rows="3"
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-border rounded-sm focus:outline-none focus:border-sky text-text-dark bg-white resize-none"
                    placeholder="Details about standard/flange mount, terminal box position, application specs, etc."
                  />
                </div>
              </div>

              {/* Action Submit Buttons */}
              {errors.basket && <p className="text-xs text-red-500 text-center font-bold">{errors.basket}</p>}
              
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, 'whatsapp')}
                  className="w-full sm:flex-1 py-3 px-4 bg-green hover:bg-green-bright text-white font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare size={16} />
                  Send via WhatsApp
                </button>
                
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e, 'email')}
                  className="w-full sm:flex-1 py-3 px-4 bg-dark-bg hover:bg-dark-surface text-white font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send size={16} />
                  Submit Quote Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
