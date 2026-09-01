import React, { useState } from 'react';
import { PROJECTS, STUDIO_CONFIG } from '../data/studioData';
import { Project } from '../types';
import { InteractiveUrlScanner } from './InteractiveUrlScanner';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  MessageCircle,
  X,
  TrendingUp,
  BarChart3,
  Calendar,
  Building2,
  Lock,
  ChevronRight
} from 'lucide-react';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'analytics' | 'security'>('all');
  const [showLiveScanner, setShowLiveScanner] = useState(false);

  // Capello interactive mini-demo state
  const [selectedBranch, setSelectedBranch] = useState<'Dharampeth' | 'Ramdaspeth' | 'Civil Lines'>('Dharampeth');
  const [selectedService, setSelectedService] = useState('Hair Styling & Balayage');

  // Nexus BI mini-demo state
  const [biPeriod, setBiPeriod] = useState<'Today' | 'Weekly' | 'Monthly'>('Monthly');

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Work that has <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-400">
                direction & measurable ROI.
              </span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10" role="tablist" aria-label="Project categories">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Web Engineering', value: 'web' },
              { label: 'Data & BI', value: 'analytics' },
              { label: 'AI & Security', value: 'security' },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={activeCategory === tab.value}
                onClick={() => setActiveCategory(tab.value as any)}
                className={`px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs font-mono transition-all ${
                  activeCategory === tab.value
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-[#080c1d] border border-white/10 hover:border-white/20 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Visual Showcase Top Box */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden p-6 flex flex-col justify-between border-b border-white/10">
                  
                  {/* Background Theme Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-95 group-hover:scale-105 transition-transform duration-700`} />

                  {/* Project specific visuals */}
                  {project.visualType === 'capello' && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(235,187,145,0.25),transparent_40%)] pointer-events-none" />
                  )}

                  {project.visualType === 'luxe' && (
                    <div className="absolute inset-0 perspective-grid opacity-30 pointer-events-none" />
                  )}

                  {project.visualType === 'security' && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,216,255,0.15),transparent_60%)] pointer-events-none" />
                  )}

                  {project.visualType === 'analytics' && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(192,132,252,0.2),transparent_50%)] pointer-events-none" />
                  )}

                  {/* Top Bar inside Visual */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-white/80 px-2.5 py-1 rounded-full bg-black/40 border border-white/15 backdrop-blur-md uppercase">
                      {project.client} • {project.year}
                    </span>

                    {project.liveBadge && (
                      <span className="text-[10px] font-mono tracking-wider text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        {project.liveBadge}
                      </span>
                    )}
                  </div>

                  {/* Center Visual Mockup Accent */}
                  <div className="relative z-10 my-auto">
                    {project.visualType === 'capello' && (
                      <div className="space-y-1.5 max-w-sm">
                        <span className="text-[11px] font-mono tracking-widest text-amber-300 uppercase">
                          CAPELLO / LUXURY SPA
                        </span>
                        <div className="text-3xl sm:text-4xl font-bold text-white font-display leading-none">
                          Beauty, <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
                            reimagined.
                          </span>
                        </div>
                      </div>
                    )}

                    {project.visualType === 'luxe' && (
                      <div className="space-y-1.5 max-w-sm">
                        <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase">
                          LIMITLESS LUXE / ATHLETICS
                        </span>
                        <div className="text-3xl sm:text-4xl font-bold text-white font-display leading-none">
                          Train <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">
                            without limits.
                          </span>
                        </div>
                        <div className="pt-2 text-xs font-mono text-cyan-300">
                          20,000 SQ FT • FLAGSHIP FACILITY
                        </div>
                      </div>
                    )}

                    {project.visualType === 'security' && (
                      <div className="space-y-1.5 max-w-sm">
                        <span className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
                          CYBER DEFENSE / MACHINE LEARNING
                        </span>
                        <div className="text-3xl sm:text-4xl font-bold text-white font-display leading-none">
                          ML Phishing <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                            Threat Radar
                          </span>
                        </div>
                        <div className="pt-2 text-xs font-mono text-emerald-300 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>98.4% Validation Accuracy</span>
                        </div>
                      </div>
                    )}

                    {project.visualType === 'analytics' && (
                      <div className="space-y-1.5 max-w-sm">
                        <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase">
                          POWER BI & SQL WAREHOUSE
                        </span>
                        <div className="text-3xl sm:text-4xl font-bold text-white font-display leading-none">
                          Nexus BI <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                            Executive Hub
                          </span>
                        </div>
                        <div className="pt-2 text-xs font-mono text-purple-300">
                          Real-time Sales & Inventory KPIs
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visual Bottom Stats Pills */}
                  {project.stats && (
                    <div className="relative z-10 flex flex-wrap gap-2">
                      {project.stats.map((s, idx) => (
                        <div key={idx} className="px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 text-xs backdrop-blur-sm">
                          <span className="text-gray-400 text-[10px] block">{s.label}</span>
                          <strong className="text-white font-mono text-xs">{s.value}</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white font-display">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Impact Statement */}
                    <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Key Result:</strong> {project.impact}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Open interactive demo and details for ${project.title}`}
                      className="px-4 py-2.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Interactive Demo & Details</span>
                      <ChevronRight className="w-4 h-4 text-cyan-400" />
                    </button>

                    <a
                      href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                        `Hi SYQORA NEXUS, I saw your work on ${project.title} and would like something similar for my business.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Get a quote for a project similar to ${project.title} on WhatsApp`}
                      className="min-h-[44px] px-2 py-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Quote Similar</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Embedded Interactive ML Security Demo Section */}
        <div className="mt-14">
          <InteractiveUrlScanner />
        </div>

      </div>

      {/* Interactive Case Study & Live Demo Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 flex items-center justify-center animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#090d22] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close case study modal"
              className="absolute top-5 right-5 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-white/10 pb-5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  CASE STUDY & ARCHITECTURE
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-xs text-gray-400">{selectedProject.client}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-gray-400">{selectedProject.subtitle}</p>
            </div>

            {/* Interactive Feature Demo Component inside modal */}
            {selectedProject.id === 'capello' && (
              <div className="bg-gradient-to-br from-[#201410] to-[#0f0907] border border-amber-500/30 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                  <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">
                    Interactive Salon Booking Simulator
                  </span>
                  <span className="text-[10px] text-amber-400 font-mono">1-TAP WHATSAPP DISPATCH</span>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300 font-medium">Select Branch Location:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Dharampeth', 'Ramdaspeth', 'Civil Lines'] as const).map((branch) => (
                        <button
                          key={branch}
                          type="button"
                          onClick={() => setSelectedBranch(branch)}
                          className={`py-2.5 px-3 min-h-[44px] rounded-xl text-xs font-medium transition-all ${
                            selectedBranch === branch
                              ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/30'
                              : 'bg-black/40 text-gray-300 hover:bg-black/60 border border-white/10'
                          }`}
                        >
                          {branch}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="capello-service-select" className="text-xs text-gray-300 font-medium">Select Package / Service:</label>
                    <select
                      id="capello-service-select"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-black/60 border border-amber-500/30 rounded-xl px-3 py-2.5 min-h-[44px] text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option>Hair Styling & Balayage Color (₹3,499)</option>
                      <option>Bridal HD Makeover & Spa Package (₹8,999)</option>
                      <option>Keratin Deep Moisture Treatment (₹2,999)</option>
                      <option>Men's Executive Grooming & Hair Spa (₹1,499)</option>
                    </select>
                  </div>

                  <a
                    href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Capello Salon (via SYQORA NEXUS Demo), I would like to book "${selectedService}" at the ${selectedBranch} branch.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 min-h-[44px] rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Dispatch WhatsApp Booking for {selectedBranch}</span>
                  </a>
                </div>
              </div>
            )}

            {selectedProject.id === 'analytics' && (
              <div className="bg-gradient-to-br from-[#1a0c26] to-[#08040d] border border-purple-500/30 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                  <span className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider">
                    Executive Power BI Metric View
                  </span>
                  <div className="flex gap-1">
                    {(['Today', 'Weekly', 'Monthly'] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setBiPeriod(p)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          biPeriod === p
                            ? 'bg-purple-500 text-white font-bold'
                            : 'bg-white/5 text-gray-400'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-black/40 rounded-xl border border-purple-500/20">
                    <span className="text-[10px] text-gray-400 font-mono block">REVENUE</span>
                    <strong className="text-base sm:text-lg font-bold text-white font-mono">
                      {biPeriod === 'Today' ? '₹48,200' : biPeriod === 'Weekly' ? '₹3.42 Lakh' : '₹14.85 Lakh'}
                    </strong>
                    <span className="text-[10px] text-emerald-400 font-mono block">+18.4% YoY</span>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-purple-500/20">
                    <span className="text-[10px] text-gray-400 font-mono block">AVG ORDER VALUE</span>
                    <strong className="text-base sm:text-lg font-bold text-white font-mono">
                      ₹1,840
                    </strong>
                    <span className="text-[10px] text-purple-300 font-mono block">Automated DAX</span>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-purple-500/20">
                    <span className="text-[10px] text-gray-400 font-mono block">RETENTION RATE</span>
                    <strong className="text-base sm:text-lg font-bold text-white font-mono">
                      78.2%
                    </strong>
                    <span className="text-[10px] text-cyan-300 font-mono block">Cohort Analyzed</span>
                  </div>
                </div>
              </div>
            )}

            {/* Architecture Details & Engineering Features */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                Technical Highlights & Architecture
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                Technology Stack Used
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Modal Action */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-gray-400">
                Want a solution like this for your brand?
              </div>

              <a
                href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Shubham & Yamini, I would like to get an estimate for a project inspired by "${selectedProject.title}".`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Project on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
