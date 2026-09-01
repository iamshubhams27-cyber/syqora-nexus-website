import React from 'react';
import { SERVICES, STUDIO_CONFIG } from '../data/studioData';
import { 
  Globe, 
  Zap, 
  BarChart3, 
  Cpu, 
  CheckCircle, 
  Clock, 
  ArrowUpRight, 
  MessageCircle, 
  Layers,
  Sparkles
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Globe className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE BUILD & DELIVER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Digital solutions engineered with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-400">
              precision & commercial intent.
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Transparent scope, direct communication with the founders, and production delivery designed for immediate business return.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            return (
              <div
                key={service.id}
                className="group rounded-3xl bg-[#080c1d] border border-white/10 hover:border-cyan-500/30 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10 font-semibold">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 font-bold block mb-1">
                      {service.number} // SERVICE
                    </span>
                    <h3 className="text-xl font-bold text-white font-display mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-cyan-300 font-mono">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Pricing & Action */}
                <div className="pt-5 mt-6 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono block">STARTING FROM</span>
                      <strong className="text-lg font-bold text-white font-display">
                        {service.startingPrice}
                      </strong>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 font-mono block">TIMELINE</span>
                      <span className="text-xs text-cyan-300 font-mono flex items-center gap-1 justify-end">
                        <Clock className="w-3 h-3" />
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hi SYQORA NEXUS, I want to inquire about the "${service.title}" package starting at ${service.startingPrice}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get instant quote on WhatsApp for ${service.title}`}
                    className="w-full py-3 px-3 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 group-hover:border-cyan-500/40 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Get Instant Quote</span>
                    <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
