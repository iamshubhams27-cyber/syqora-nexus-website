import React, { useState, useRef, useEffect } from 'react';
import { STUDIO_CONFIG, FOUNDERS } from '../data/studioData';
import { 
  ArrowUpRight, 
  MessageCircle, 
  Sparkles, 
  Activity, 
  Cpu, 
  Database, 
  Layers, 
  ShieldCheck, 
  Zap,
  CheckCircle2,
  TrendingUp,
  Terminal,
  Clock
} from 'lucide-react';

interface HeroProps {
  onOpenPricingCalculator: () => void;
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPricingCalculator, onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'data' | 'ai'>('web');
  const [dashboardRotation, setDashboardRotation] = useState({ rx: 3, ry: -6 });
  const dashboardRef = useRef<HTMLDivElement>(null);

  // Performance-optimized 3D tilt
  useEffect(() => {
    const card = dashboardRef.current;
    if (!card) return;

    // Check reduced motion or touch device
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isTouch) return;

    let targetX = -6;
    let targetY = 3;
    let currentX = -6;
    let currentY = 3;
    let rafId: number;
    let isHovering = false;

    const updateTilt = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setDashboardRotation({ rx: currentY, ry: currentX });

      if (isHovering || Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = requestAnimationFrame(updateTilt);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = nx * 14 - 3;
      targetY = ny * -10 + 2;
    };

    const handlePointerEnter = () => {
      isHovering = true;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateTilt);
    };

    const handlePointerLeave = () => {
      isHovering = false;
      targetX = -6;
      targetY = 3;
    };

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerenter', handlePointerEnter);
    card.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerenter', handlePointerEnter);
      card.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const whatsappDirect = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hi Shubham & Yamini (SYQORA NEXUS), I would like to get a quote for a new web & digital project.'
  )}`;

  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Live Studio Status Pill & Founders Quick Chip */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span>AI • WEB • DATA STUDIO</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-300">NAGPUR, IN</span>
              </div>

              {/* Co-Founders Mini Profile Pill */}
              <a 
                href="#about" 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 transition-colors group"
              >
                <div className="flex -space-x-1.5">
                  {FOUNDERS.map((founder) => (
                    <div 
                      key={founder.id} 
                      className="w-5 h-5 rounded-full overflow-hidden border border-black bg-gradient-to-br from-slate-800 to-[#0c1026] flex items-center justify-center shadow-xs"
                    >
                      <span className="text-[8px] font-mono font-bold text-cyan-300">
                        {founder.avatarPlaceholder}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-xs font-mono group-hover:text-cyan-300 transition-colors">
                  Shubham & Yamini
                </span>
              </a>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                SYQORA NEXUS / DIGITAL TECHNOLOGY STUDIO
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04]">
                Technology that looks{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-400">
                  next-generation.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-normal">
              We combine high-speed responsive web development, intelligent digital experiences, and data analytics to help ambitious businesses look sharper, work smarter, and dominate online.
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Start WhatsApp Brief</span>
              </a>

              <button
                type="button"
                onClick={onOpenPricingCalculator}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-cyan-950/30 hover:bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-medium text-xs tracking-wide transition-all"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Cost Calculator</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STUDIO_CONFIG.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold font-display text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{stat.label}</span>
                  <span className="text-[10px] text-cyan-400/80 font-mono mt-0.5">{stat.sub}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-Tech Interactive 3D Command Dashboard */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Perspective Wrapper */}
            <div 
              ref={dashboardRef}
              className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-white/10 to-purple-500/20 shadow-2xl shadow-black/80 transition-transform duration-100 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${dashboardRotation.rx}deg) rotateY(${dashboardRotation.ry}deg) translateZ(0)`
              }}
            >
              
              {/* Main Dashboard Card */}
              <div className="w-full bg-[#090d1f] rounded-[22px] p-5 sm:p-6 border border-white/10 space-y-5 relative overflow-hidden backdrop-blur-xl">
                
                {/* Subtle Grid Ambient */}
                <div className="absolute inset-0 bg-[radial-gradient(#19d8ff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                    <span className="text-xs font-mono font-bold tracking-widest text-gray-200">
                      NX // COMMAND CORE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                      LIVE SYSTEM
                    </span>
                  </div>
                </div>

                {/* Interactive System Mode Selector */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-black/40 rounded-xl border border-white/10 relative z-10">
                  <button
                    type="button"
                    onClick={() => setActiveTab('web')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'web'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>01/WEB</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('data')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'data'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>02/DATA</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('ai')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'ai'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>03/AI</span>
                  </button>
                </div>

                {/* Holographic Orb Visual Display */}
                <div className="relative h-44 rounded-xl bg-gradient-to-b from-[#0e142e] to-[#060814] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
                  
                  {/* Central Glow Orb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/30 to-purple-500/30 blur-xl pointer-events-none animate-pulse" />
                  
                  {/* Inner Rotating Gyro Rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-500/25 rounded-full pointer-events-none animate-[spin_20s_linear_infinite]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-purple-500/30 rounded-full pointer-events-none border-dashed animate-[spin_12s_linear_infinite_reverse]" />

                  {/* Top Status */}
                  <div className="flex items-center justify-between relative z-10 text-[11px] font-mono">
                    <span className="text-gray-400">STATUS:</span>
                    <span className="text-emerald-300 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      ACTIVE ENGINE
                    </span>
                  </div>

                  {/* Middle Content based on active tab */}
                  <div className="relative z-10 text-center py-2">
                    {activeTab === 'web' && (
                      <div className="space-y-1 animate-fadeIn">
                        <span className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                          Sub-0.4s FCP Engine
                        </span>
                        <p className="text-xs text-cyan-200/80 font-mono">
                          React 19 • Tailwind CSS • TypeScript Architecture
                        </p>
                      </div>
                    )}
                    {activeTab === 'data' && (
                      <div className="space-y-1 animate-fadeIn">
                        <span className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
                          Power BI & SQL Pipeline
                        </span>
                        <p className="text-xs text-purple-200/80 font-mono">
                          Automated KPI Warehousing & Real-time Reports
                        </p>
                      </div>
                    )}
                    {activeTab === 'ai' && (
                      <div className="space-y-1 animate-fadeIn">
                        <span className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-white">
                          ML Threat & Bot Radar
                        </span>
                        <p className="text-xs text-emerald-200/80 font-mono">
                          98.4% Classification Accuracy • 18ms Latency
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom Stats */}
                  <div className="flex items-center justify-between relative z-10 text-[10px] font-mono text-gray-400 border-t border-white/10 pt-2">
                    <span>NEXUS PROTOCOL</span>
                    <span className="text-cyan-400">OPTIMIZED 100%</span>
                  </div>
                </div>

                {/* 3 Metric Cards with Progress Bars */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="bg-black/30 border border-white/10 rounded-xl p-2.5 space-y-1">
                    <span className="text-[9px] font-mono text-gray-400 block">WEB SPEED</span>
                    <strong className="text-xs sm:text-sm font-bold font-display text-cyan-300 block">
                      99 / 100
                    </strong>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[99%]" />
                    </div>
                  </div>

                  <div className="bg-black/30 border border-white/10 rounded-xl p-2.5 space-y-1">
                    <span className="text-[9px] font-mono text-gray-400 block">BI INSIGHTS</span>
                    <strong className="text-xs sm:text-sm font-bold font-display text-purple-300 block">
                      24 KPIs
                    </strong>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-purple-400 h-full w-[92%]" />
                    </div>
                  </div>

                  <div className="bg-black/30 border border-white/10 rounded-xl p-2.5 space-y-1">
                    <span className="text-[9px] font-mono text-gray-400 block">CONVERSION</span>
                    <strong className="text-xs sm:text-sm font-bold font-display text-emerald-300 block">
                      +42%
                    </strong>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[88%]" />
                    </div>
                  </div>
                </div>

                {/* Founder Direct Badge */}
                <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-[10px] text-white">
                      SY
                    </div>
                    <div>
                      <span className="font-semibold text-white block text-xs">
                        Direct Founder Engineering
                      </span>
                      <span className="text-[10px] text-gray-400">
                        Shubham (Web) × Yamini (Data)
                      </span>
                    </div>
                  </div>
                  <a
                    href="#about"
                    className="text-[11px] font-mono text-cyan-300 hover:underline flex items-center gap-1"
                  >
                    <span>View Bios</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

            {/* Depth Card Accents */}
            <div className="hidden sm:block absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl -z-10 blur-xl opacity-60 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
