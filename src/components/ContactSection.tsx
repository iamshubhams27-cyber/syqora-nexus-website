import React, { useState } from 'react';
import { STUDIO_CONFIG, FOUNDERS } from '../data/studioData';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form State
  const [senderName, setSenderName] = useState('');
  const [projectType, setProjectType] = useState('New Website / Digital Platform');
  const [budgetRange, setBudgetRange] = useState('₹4,999/mo (Starter)');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hi Shubham & Yamini (SYQORA NEXUS),\n\nI would like to discuss a new project:\n• Name: ${senderName || 'Not provided'}\n• Project Type: ${projectType}\n• Budget Range: ${budgetRange}\n• Brief / Requirements: ${message || 'Standard consultation'}\n\nLooking forward to hearing from you!`;

    window.open(`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(formatted)}`, '_blank');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`SYQORA NEXUS Project Inquiry: ${projectType} - ${senderName}`);
    const body = encodeURIComponent(
      `Hi Shubham & Yamini,\n\nName: ${senderName}\nProject Type: ${projectType}\nBudget Range: ${budgetRange}\n\nProject Details:\n${message}\n\nThanks!`
    );
    window.location.href = `mailto:${STUDIO_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container Box */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0b0f24] via-[#070b1a] to-[#04060e] border border-cyan-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Glow in corner */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>START A CONVERSATION</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display leading-tight">
                  Your next digital move starts{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-400">
                    here.
                  </span>
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tell us what you're building. We'll turn the idea into an ultra-fast, modern, and commercially effective digital presence.
                </p>

                {/* Direct Founders Consultation Banner with Initials Badges */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex -space-x-2 items-center">
                    {FOUNDERS.map((founder) => (
                      <div key={founder.id} className="w-9 h-9 rounded-xl p-[1.5px] bg-gradient-to-br from-cyan-400 to-purple-500 shadow-md">
                        <div className="w-full h-full rounded-[9px] bg-[#0a0d1e] flex items-center justify-center">
                          <span className="text-[11px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-200">
                            {founder.avatarPlaceholder}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Direct Founder Consultation</span>
                    <span className="text-[11px] text-cyan-300 font-mono">Shubham Sonkusare & Yamini Nandanwar</span>
                  </div>
                </div>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-3 pt-2">
                
                {/* Yamini Direct Channel */}
                <div className="p-3.5 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-center justify-between gap-3 group hover:border-purple-400 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs font-mono flex-shrink-0">
                      YN
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-purple-300 uppercase font-bold tracking-wider">
                          YAMINI NANDANWAR
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-900/60 text-purple-200">Data Lead</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-white font-mono mt-0.5">
                        <a href="tel:8208779355" className="hover:text-purple-300 font-semibold">+91 82087 79355</a>
                        <span className="text-gray-500">•</span>
                        <a href="mailto:yamininandanwar1310@gmail.com" className="hover:text-purple-300 truncate max-w-[150px] sm:max-w-[180px]">yamininandanwar1310@gmail.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <a
                      href="https://wa.me/918208779355?text=Hi%20Yamini%2C%20I%20would%20like%20to%20discuss%20a%20project%20at%20SYQORA%20NEXUS."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-colors"
                      title="WhatsApp Yamini"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a
                      href="tel:8208779355"
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Call Yamini"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Shubham Direct Channel */}
                <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between gap-3 group hover:border-cyan-400 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs font-mono flex-shrink-0">
                      SS
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-cyan-300 uppercase font-bold tracking-wider">
                          SHUBHAM SONKUSARE
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-900/60 text-cyan-200">Tech Lead</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-white font-mono mt-0.5">
                        <a href="tel:7249891311" className="hover:text-cyan-300 font-semibold">+91 72498 91311</a>
                        <span className="text-gray-500">•</span>
                        <a href="mailto:iamshubham.s27@gmail.com" className="hover:text-cyan-300 truncate max-w-[150px] sm:max-w-[180px]">iamshubham.s27@gmail.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <a
                      href="https://wa.me/917249891311?text=Hi%20Shubham%2C%20I%20would%20like%20to%20discuss%20a%20project%20at%20SYQORA%20NEXUS."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-colors"
                      title="WhatsApp Shubham"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a
                      href="tel:7249891311"
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Call Shubham"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Studio Email Dispatch */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 group hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-white/10 text-cyan-400 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-gray-400 uppercase font-bold tracking-wider block">
                        STUDIO DISPATCH
                      </span>
                      <strong className="text-xs font-bold text-white font-mono truncate block">
                        {STUDIO_CONFIG.email}
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(STUDIO_CONFIG.email, 'email')}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                      title="Copy Email"
                    >
                      {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href={`mailto:${STUDIO_CONFIG.email}?subject=Project Consultation`}
                      className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                      title="Send email"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 text-gray-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase font-bold tracking-wider block">
                      STUDIO BASE
                    </span>
                    <span className="text-xs text-gray-200 font-medium">
                      {STUDIO_CONFIG.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Interactive Quick Brief Form */}
            <div className="lg:col-span-7 bg-[#070a1a] rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
              <div className="border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold text-white font-display">
                  Quick Project Brief Dispatcher
                </h3>
                <p className="text-xs text-gray-400">
                  Fill in your brief to automatically generate and dispatch your project inquiry via WhatsApp or Email.
                </p>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Your Name / Business</label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Rahul Sharma / Salon Owner"
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Project Type</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option>Business / Salon / Gym Website</option>
                      <option>High-Converting Landing Page</option>
                      <option>Power BI Data Analytics Dashboard</option>
                      <option>AI Automation / Custom Web App</option>
                      <option>Full Digital Overhaul & Redesign</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300">Target Monthly Plan Tier</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['₹4,999/mo (Starter)', '₹6,999/mo (Growth)', '₹9,999/mo (Enterprise)'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudgetRange(b)}
                        className={`py-2 px-2 rounded-xl text-xs font-medium transition-all ${
                          budgetRange === b
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold'
                            : 'bg-black/30 text-gray-400 border border-white/10 hover:border-white/20'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300">Project Details or Requirements</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you'd like to build, any reference sites you like, and your target launch date..."
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {/* Dispatch Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Send on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>Open Email Draft</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 pt-1 justify-center">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>Typical founder response time: Under 2 hours</span>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
