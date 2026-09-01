import React, { useState, useEffect } from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles, 
  MessageCircle, 
  Code2, 
  BarChart2, 
  ShieldCheck, 
  Calculator
} from 'lucide-react';

interface NavbarProps {
  onOpenPricingCalculator?: () => void;
  onOpenAuditModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPricingCalculator, onOpenAuditModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'About Founders', href: '#about' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing Estimator', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hi SYQORA NEXUS, I would like to discuss a web & technology project.'
  )}`;

  return (
    <>
      <header 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#050713]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40 py-3' 
            : 'bg-[#050713]/40 backdrop-blur-sm border-b border-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#top" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl p-1"
            aria-label="SYQORA NEXUS Home"
          >
            {/* Official Brand Logo Icon */}
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all">
              <div className="w-full h-full bg-[#04060f] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <img 
                  src={STUDIO_CONFIG.logoUrl} 
                  alt="SYQORA NEXUS Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base md:text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  SYQORA NEXUS
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 hidden sm:inline-block">
                  AI • DATA • WEB
                </span>
              </div>
              <span className="text-[10px] text-gray-400 tracking-widest font-mono uppercase">
                Shubham × Yamini
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-300 transition-colors relative py-1 text-[13px] tracking-wide focus:outline-none focus:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenAuditModal && (
              <button
                type="button"
                onClick={onOpenAuditModal}
                aria-label="Open free website audit request modal"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] text-xs font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Free Web Audit
              </button>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Let's Talk on WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] text-xs md:text-sm font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-md pt-20 px-4 pb-6 flex flex-col justify-between"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-[#0b0e20] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">Navigation Menu</span>
              <span className="text-[10px] text-gray-400 font-mono">Nagpur, India</span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 text-base font-semibold text-gray-200 hover:text-cyan-300 hover:bg-white/5 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 72498 91311)</span>
              </a>

              <a
                href={`tel:${STUDIO_CONFIG.phoneNumber}`}
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-gray-200 font-medium text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <span>Call Studio: {STUDIO_CONFIG.phoneNumber}</span>
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 font-mono">
            © 2026 SYQORA NEXUS • Next-Gen Digital Studio
          </div>
        </div>
      )}
    </>
  );
};
