import React, { useState } from 'react';
import { FOUNDERS } from '../data/studioData';
import { Founder } from '../types';
import { 
  FileText, 
  Mail, 
  Phone,
  CheckCircle2, 
  Code2, 
  BarChart, 
  Award, 
  GraduationCap,
  MessageCircle,
  X,
  PhoneCall
} from 'lucide-react';

export const FoundersSection: React.FC = () => {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  const getFounderWhatsAppUrl = (founder: Founder) => {
    const rawNumber = founder.phone ? founder.phone.replace(/[^0-9]/g, '') : '917249891311';
    const number = rawNumber.startsWith('91') ? rawNumber : `91${rawNumber}`;
    return `https://wa.me/${number}?text=${encodeURIComponent(
      `Hi ${founder.name}, I would like to consult with you on a project at SYQORA NEXUS.`
    )}`;
  };

  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 md:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>THE LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Two specialized skill sets.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-400">
              Direct founder execution.
            </span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Work directly with the core engineers and data strategists behind every deliverable. No middlemen, no bloated agency hierarchy.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {FOUNDERS.map((founder) => {
            const isWeb = founder.id === 'shubham';
            const cleanPhone = founder.phone ? founder.phone.replace(/[^0-9+]/g, '') : '';
            return (
              <div
                key={founder.id}
                className="group relative rounded-3xl bg-[#090d1e] border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Card Top Code Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isWeb ? 'bg-cyan-400' : 'bg-purple-400'} animate-pulse`} />
                    <span className="font-mono text-xs tracking-wider text-gray-400 font-semibold">
                      {founder.code}
                    </span>
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                    isWeb 
                      ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30' 
                      : 'bg-purple-950/60 text-purple-300 border-purple-500/30'
                  }`}>
                    {founder.role.split('&')[0]}
                  </span>
                </div>

                {/* Founder Visual & Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                  {/* Stylized Initials Monogram Frame */}
                  <div className={`relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl p-[2px] shadow-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.03] ${
                    isWeb 
                      ? 'bg-gradient-to-br from-cyan-400 via-indigo-500 to-blue-600 shadow-cyan-500/25' 
                      : 'bg-gradient-to-br from-purple-400 via-fuchsia-500 to-indigo-600 shadow-purple-500/25'
                  }`}>
                    <div className="w-full h-full bg-[#080b1e] rounded-[14px] flex flex-col items-center justify-center relative overflow-hidden">
                      <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${
                        isWeb ? 'from-cyan-400 to-blue-600' : 'from-purple-400 to-fuchsia-600'
                      }`} />

                      {isWeb ? (
                        <Code2 className="w-4 h-4 text-cyan-400 mb-0.5 opacity-70" />
                      ) : (
                        <BarChart className="w-4 h-4 text-purple-400 mb-0.5 opacity-70" />
                      )}

                      <span className={`font-display font-black text-2xl tracking-wider ${
                        isWeb 
                          ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-400' 
                          : 'text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-purple-400'
                      }`}>
                        {founder.avatarPlaceholder}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono tracking-widest uppercase font-semibold ${
                        isWeb ? 'text-cyan-400' : 'text-purple-400'
                      }`}>
                        {isWeb ? 'Lead Web Engineer' : 'Lead Data Analyst'}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-mono text-emerald-400">Available</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">
                      {founder.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      <span>{founder.education}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Pills Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5 p-2.5 rounded-2xl bg-white/[0.03] border border-white/10">
                  {founder.phone && (
                    <a
                      href={`tel:${cleanPhone}`}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-200 hover:text-cyan-300 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className="font-mono text-[11px] truncate">{founder.phone}</span>
                    </a>
                  )}

                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-200 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                    <span className="font-mono text-[11px] truncate">{founder.email}</span>
                  </a>
                </div>

                {/* Bio */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {founder.bio}
                </p>

                {/* Skills Chips */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                    Core Specializations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {founder.skills.slice(0, 5).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 p-2.5 bg-black/40 border border-white/10 rounded-2xl mb-5">
                  {founder.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <span className="text-sm font-bold font-display text-white block">
                        {m.value}
                      </span>
                      <span className="text-[9px] text-gray-400 font-mono block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedFounder(founder)}
                    className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Dossier</span>
                  </button>

                  <a
                    href={getFounderWhatsAppUrl(founder)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    title={`Connect with ${founder.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  {founder.phone && (
                    <a
                      href={`tel:${cleanPhone}`}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
                      title={`Call ${founder.name}`}
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Founder Dossier Modal */}
      {selectedFounder && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 flex items-center justify-center animate-fadeIn"
          onClick={() => setSelectedFounder(null)}
        >
          <div 
            className="bg-[#0b0f24] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedFounder(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 p-[1.5px] shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-[#080b1a] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <span className="font-display font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-200">
                    {selectedFounder.avatarPlaceholder}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400">{selectedFounder.code} • DOSSIER</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                    Verified Founder
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">{selectedFounder.name}</h3>
                <p className="text-xs text-gray-300">{selectedFounder.specialization}</p>
              </div>
            </div>

            {/* Direct Contact Details in Modal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
              {selectedFounder.phone && (
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Direct Phone</span>
                    <a 
                      href={`tel:${selectedFounder.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs font-mono text-white hover:text-cyan-300 font-semibold"
                    >
                      {selectedFounder.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Direct Email</span>
                  <a 
                    href={`mailto:${selectedFounder.email}`}
                    className="text-xs font-mono text-white hover:text-purple-300 font-semibold truncate block max-w-[200px]"
                  >
                    {selectedFounder.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Education & Academic Credentials */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <GraduationCap className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">Education & Credentials</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 font-medium">{selectedFounder.education}</p>
            </div>

            {/* Engineering Highlights */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                Technical Highlights & Focus
              </span>
              <ul className="space-y-2">
                {selectedFounder.resumeHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack & Tooling */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                Primary Tooling & Frameworks
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedFounder.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Action Inside Modal */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href={getFounderWhatsAppUrl(selectedFounder)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={`mailto:${selectedFounder.email}?subject=Project Consultation`}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Send Email</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
