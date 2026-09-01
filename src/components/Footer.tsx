import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { 
  MessageCircle, 
  ArrowUp, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  X, 
  Send 
} from 'lucide-react';

interface FooterProps {
  onOpenAuditModal: () => void;
  onOpenPricingCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal, onOpenPricingCalculator }) => {
  const [showFloatingBubble, setShowFloatingBubble] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappDirect = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hi SYQORA NEXUS (Shubham & Yamini), I am interested in building a high-performance web project.'
  )}`;

  return (
    <>
      <footer className="border-t border-white/10 bg-[#03050c] pt-14 pb-12 relative text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Studio Brand Info */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20 flex-shrink-0">
                  <div className="w-full h-full bg-[#070a18] rounded-[10px] overflow-hidden flex items-center justify-center">
                    <img 
                      src={STUDIO_CONFIG.logoUrl} 
                      alt="SYQORA NEXUS Brand Logo" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-base text-white tracking-wider">
                    SYQORA NEXUS
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">
                    AI • TECHNOLOGY • DIGITAL INNOVATION
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                Next-generation digital technology studio co-founded by Shubham Sonkusare & Yamini Nandanwar. Engineering ultra-fast websites, data analytics dashboards, and commercial digital systems.
              </p>

              <div className="text-[11px] font-mono text-cyan-300">
                Nagpur, Maharashtra, India • Available Worldwide
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-white uppercase font-bold tracking-wider block">
                  Studio Pillars
                </span>
                <ul className="space-y-1.5 text-xs">
                  <li><a href="#about" className="hover:text-cyan-300 transition-colors">About Founders</a></li>
                  <li><a href="#work" className="hover:text-cyan-300 transition-colors">Selected Work</a></li>
                  <li><a href="#services" className="hover:text-cyan-300 transition-colors">Services</a></li>
                  <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">Pricing Plans</a></li>
                </ul>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-white uppercase font-bold tracking-wider block">
                  Direct Tools
                </span>
                <ul className="space-y-1.5 text-xs">
                  <li>
                    <button type="button" onClick={onOpenPricingCalculator} className="hover:text-cyan-300 transition-colors text-left">
                      Scope Estimator
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={onOpenAuditModal} className="hover:text-cyan-300 transition-colors text-left">
                      Free Speed Audit
                    </button>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-cyan-300 transition-colors">
                      Contact Studio
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-[11px] font-mono text-white uppercase font-bold tracking-wider block">
                Founder WhatsApp
              </span>
              <p className="text-xs text-gray-400">
                Direct WhatsApp engineering hotline for quick questions and quote estimates.
              </p>
              <a
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 text-xs font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+91 72498 91311</span>
              </a>
            </div>

          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
            <div className="flex items-center gap-2">
              <span>© 2026 SYQORA NEXUS</span>
              <span>•</span>
              <span>Shubham Sonkusare × Yamini Nandanwar</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-300 transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Action Button with Expandable Greeting */}
      <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col items-end gap-2">
        {showFloatingBubble && (
          <div className="bg-[#0b0e22] border border-emerald-500/40 rounded-2xl p-4 shadow-2xl max-w-xs w-72 space-y-2.5 animate-fadeIn backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-white font-bold">SYQORA NEXUS</span>
              </div>
              <button
                type="button"
                onClick={() => setShowFloatingBubble(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              👋 Hi! Shubham & Yamini are online. Have a question about building a website or data dashboard?
            </p>

            <a
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        )}

        <div className="flex items-center gap-2">
          {!showFloatingBubble && (
            <button
              type="button"
              onClick={() => setShowFloatingBubble(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono backdrop-blur-md hover:bg-black/80 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Founders Online</span>
            </button>
          )}

          <a
            href={whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat directly with SYQORA NEXUS on WhatsApp"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-transform duration-200 border border-emerald-300/30"
          >
            <MessageCircle className="w-7 h-7 fill-white/20" />
          </a>
        </div>
      </div>
    </>
  );
};
