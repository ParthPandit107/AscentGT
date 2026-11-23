import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/site';

import useSeo from '../hooks/useSeo';

export default function Contact() {
  useSeo(
    'Contact Us | Ascent Green Technologies (AGTPL)',
    'Connect with our engineering and technical sales teams at our Corporate Office in Faridabad or Branch Office in Mumbai. Direct phone, email, and location directions.'
  );

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getWhatsAppLink = () => {
    const text = `*Inquiry from AGTPL Contact Form*
----------------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company || 'N/A'}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
----------------------------------------`;
    const formattedPhone = siteConfig.whatsappNumber.replace(/[^0-9+]/g, '');
    return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = () => {
    const subject = encodeURIComponent(formData.subject || 'AGTPL Business Inquiry');
    const body = encodeURIComponent(`Inquiry from AGTPL Contact Form
----------------------------------------
Name: ${formData.name}
Company: ${formData.company || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
----------------------------------------`);
    // Direct Gmail Web Compose link
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.inquiryEmail}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e, method = 'email') => {
    e.preventDefault();
    if (!validate()) return;

    if (method === 'whatsapp') {
      window.open(getWhatsAppLink(), '_blank');
      return;
    }

    if (method === 'email') {
      window.open(getEmailLink(), '_blank');
    }

    setIsSubmitted(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="w-full font-body bg-light-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 text-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Help Desk
          </div>
          <h1 className="font-headings text-4xl font-normal text-text-dark leading-tight">
            Connect With Our Engineering Team
          </h1>
          <p className="text-sm text-text-muted-light max-w-lg mx-auto">
            Have questions about equipment compatibility, energy saving calculations, or active service visits?
          </p>
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Info list (col-5) */}
          <div className="lg:col-span-5 space-y-8 bg-light-surface border border-border p-8 rounded-sm shadow-xs relative">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-sky"></div>
            
            <div className="space-y-2">
              <h2 className="font-headings text-2xl font-normal text-text-dark">Office Headquarters</h2>
              <div className="w-8 h-0.5 bg-green"></div>
              <p className="text-xs text-text-muted-light leading-relaxed">
                Visit our main corporate office or reach us directly via phone, email, or WhatsApp.
              </p>
            </div>

            <ul className="space-y-6 text-xs text-text-muted-light">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-sky-light/50 bg-sky-pale text-sky-deep flex items-center justify-center rounded-sm flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-headings text-text-dark font-bold uppercase tracking-wider text-[10px] mb-1">Corporate Office (Faridabad)</h4>
                  <p className="font-medium text-text-dark">{siteConfig.corporateOffice.address}</p>
                  <div className="mt-2 text-[11px] space-y-1">
                    <p><strong>Mr. Sanjay Pandit (Director):</strong> <a href="tel:+919891977727" className="text-sky-deep hover:underline">+91 9891977727</a> | <a href="mailto:sanjaypandit@ascentgtpl.com" className="text-sky-deep hover:underline">sanjaypandit@ascentgtpl.com</a></p>
                    <p><strong>Mr. Rahul Bhat (Director):</strong> <a href="tel:+919999822616" className="text-sky-deep hover:underline">+91 9999822616</a> | <a href="mailto:rahulbhat@ascentgtpl.com" className="text-sky-deep hover:underline">rahulbhat@ascentgtpl.com</a></p>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-sky-light/50 bg-sky-pale text-sky-deep flex items-center justify-center rounded-sm flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-headings text-text-dark font-bold uppercase tracking-wider text-[10px] mb-1">Branch Office (Mumbai)</h4>
                  <p className="font-medium text-text-dark">{siteConfig.branchOffice.address}</p>
                  <div className="mt-2 text-[11px]">
                    <p><strong>Mrs. Shweta Saxena (Branch Head):</strong> <a href="tel:+918928159155" className="text-sky-deep hover:underline">+91 8928159155</a> | <a href="mailto:shwetasaxena@ascentgtpl.com" className="text-sky-deep hover:underline">shwetasaxena@ascentgtpl.com</a></p>
                  </div>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-sky-light/50 bg-sky-pale text-sky-deep flex items-center justify-center rounded-sm flex-shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-headings text-text-dark font-bold uppercase tracking-wider text-[10px] mb-1">Office Hours</h4>
                  <p>{siteConfig.hours}</p>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-border/60">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green hover:bg-green-bright text-white py-3 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare size={16} />
                Chat Directly on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Contact form (col-7) */}
          <div className="lg:col-span-7 bg-light-surface border border-border p-8 rounded-sm shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-green-pale text-green rounded-full flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-headings text-2xl font-bold text-text-dark">Message Sent Successfully</h3>
                <p className="text-sm text-text-muted-light max-w-sm">
                  We have received your message. Our engineering division will follow up with you within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-sky-deep hover:bg-sky-muted text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-5 font-body">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 text-xs border ${errors.name ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark`}
                      placeholder="e.g. Rajesh Mehta"
                    />
                    {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs border border-border rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark"
                      placeholder="e.g. Gujarat textiles"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 text-xs border ${errors.email ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark`}
                      placeholder="e.g. rajesh@gspinners.com"
                    />
                    {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 text-xs border ${errors.phone ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark`}
                      placeholder="e.g. +91 98980 98980"
                    />
                    {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-xs border ${errors.subject ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark`}
                    placeholder="e.g. Inquiry regarding ABB IE4 super premium motor pricing"
                  />
                  {errors.subject && <span className="text-[10px] text-red-500 mt-1 block">{errors.subject}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-dark uppercase tracking-wider mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-xs border ${errors.message ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-sky bg-white text-text-dark resize-none`}
                    placeholder="Describe your requirements (load specs, pumps heads, motor outputs)..."
                  />
                  {errors.message && <span className="text-[10px] text-red-500 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Actions */}
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
                    <Mail size={16} />
                    Send via Email
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Google Maps Embed Frame */}
        <div className="w-full bg-light-surface border border-border p-4 rounded-sm shadow-xs overflow-hidden space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-text-dark uppercase tracking-wider">Corporate Office Location</span>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-deep hover:text-green transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>
          <div className="w-full h-96 overflow-hidden rounded-xs border border-border/60">
            <iframe
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Plaza, Sector 35, Faridabad Office Location"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
