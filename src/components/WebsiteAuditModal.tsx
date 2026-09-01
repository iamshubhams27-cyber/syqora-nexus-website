import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { 
  Sparkles, 
  X, 
  Send, 
  Globe, 
  CheckCircle2, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Gauge,
  ArrowRight
} from 'lucide-react';

interface WebsiteAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WebsiteAuditModal: React.FC<WebsiteAuditModalProps> = ({ isOpen, onClose }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('Improve Mobile Speed & Conversion');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Shubham & Yamini (SYQORA NEXUS),\n\nI would like a Free 100-Point Website & Speed Audit for my business:\n• Business/Brand: ${businessName || 'Not specified'}\n• Website/URL: ${websiteUrl || 'New website needed from scratch'}\n• Primary Focus: ${primaryGoal}\n• Contact Info: ${phoneOrEmail || 'Via this WhatsApp chat'}\n\nPlease audit and share your recommendations!`;

    window.open(`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#090d22] border border-cyan-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close audit request modal"
          className="absolute top-5 right-5 p-2.5 min-w-[44px] min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>COMPLIMENTARY AUDIT REPORT</span>
          </div>
          <h2 className="text-2xl font-bold text-white font-display">
            Free 100-Point Website & Speed Audit
          </h2>
          <p className="text-xs text-gray-300">
            Shubham & Yamini will personally inspect your site’s Core Web Vitals, mobile responsiveness, UI friction points, and SEO schema.
          </p>
        </div>

        {/* Audit Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="audit-business-name" className="text-xs font-mono text-gray-300">
              Business or Brand Name
            </label>
            <input
              id="audit-business-name"
              type="text"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. Capello Luxury Salon / Luxe Fitness"
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="audit-website-url" className="text-xs font-mono text-gray-300">
              Existing Website URL (or leave blank if new project)
            </label>
            <input
              id="audit-website-url"
              type="text"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="e.g. https://mybusiness.com or Instagram handle"
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="audit-primary-goal" className="text-xs font-mono text-gray-300">
              What is your primary focus area?
            </label>
            <select
              id="audit-primary-goal"
              value={primaryGoal}
              onChange={(e) => setPrimaryGoal(e.target.value)}
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 min-h-[44px]"
            >
              <option>Improve Mobile Speed & Conversion</option>
              <option>Modernize UI/UX to High-End Luxury Aesthetic</option>
              <option>Add Direct WhatsApp Booking & Lead Engine</option>
              <option>Set up Power BI Data Dashboard for Analytics</option>
              <option>Build Complete New Flagship Website from Scratch</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="audit-contact-info" className="text-xs font-mono text-gray-300">
              Your WhatsApp / Phone or Email
            </label>
            <input
              id="audit-contact-info"
              type="text"
              value={phoneOrEmail}
              onChange={(e) => setPhoneOrEmail(e.target.value)}
              placeholder="e.g. +91 98765 43210 or name@business.com"
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Send Free Audit Request on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-gray-400 pt-2 border-t border-white/10">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            100% Free & No Obligation
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-cyan-400" />
            Turnaround within 24 Hours
          </span>
        </div>

      </div>
    </div>
  );
};
