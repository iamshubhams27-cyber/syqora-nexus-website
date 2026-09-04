import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG } from '../data/studioData';
import { Link } from '../router';
import { 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  ChevronDown, 
  MousePointerClick, 
  Smartphone, 
  Timer, 
  Layers, 
  Flame,
  ArrowUpRight
} from 'lucide-react';

interface ServicePageProps {
  onOpenAuditModal: () => void;
  onOpenPricingCalculator: () => void;
}

export const LandingPageDevelopmentPage: React.FC<ServicePageProps> = ({
  onOpenAuditModal,
  onOpenPricingCalculator,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hi SYQORA NEXUS, I need a high-converting landing page for an upcoming campaign or product launch.'
  )}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://syqora-nexus.netlify.app/landing-page-development#service',
    'name': 'High-Converting Landing Page Development',
    'serviceType': 'Campaign Landing Pages & Lead Generation Web Development',
    'provider': {
      '@type': 'Organization',
      'name': 'SYQORA NEXUS',
      'url': 'https://syqora-nexus.netlify.app',
      'telephone': '+91-7249891311',
      'email': 'iamshubham.s27@gmail.com'
    },
    'description': 'Conversion-focused landing page development, paid ad funnels, and mobile-first lead capture platforms engineered with sub-second speed by SYQORA NEXUS.',
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'price': '3999',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'priceType': 'https://schema.org/StartingPrice'
      }
    }
  };

  const faqs = [
    {
      q: 'How is a dedicated landing page different from a standard multi-page website?',
      a: 'A dedicated landing page is laser-focused on a single conversion action (such as booking a consultation, ordering a package, or initiating a WhatsApp chat). By removing competing navigation menus and external distractions, landing pages maximize the return on paid ad spend (Meta, Google Ads) and direct marketing campaigns.'
    },
    {
      q: 'How fast can you build and launch a campaign landing page?',
      a: 'Our high-converting landing pages are engineered within 2 to 4 business days. This includes custom responsive layout design, persuasive UX copywriting structure, conversion forms, WhatsApp triggers, and event tracking integration.'
    },
    {
      q: 'Do your landing pages support Meta Pixel, Google Analytics, and conversion tracking?',
      a: 'Yes. We configure complete analytics tracking, including Meta Pixel pageview and lead events, Google Analytics 4 (GA4) custom triggers, and WhatsApp click events so you have full attribution on your advertising spend.'
    },
    {
      q: 'Will the landing page load fast on mobile 4G/5G connections in India?',
      a: 'Every landing page is hand-coded in lightweight React and Tailwind CSS featuring lightweight, high-speed mobile optimization. High speed prevents mobile bounce rates when visitors click on your ads.'
    },
    {
      q: 'What is the pricing for landing page development?',
      a: 'Landing page development packages start from ₹5,999/-, including fast cloud deployment, free SSL certificates, conversion form routing, and direct founder engineering support.'
    }
  ];

  const landingPageTypes = [
    {
      title: 'Paid Ads Campaign Pages (Meta & Google)',
      desc: 'Engineered specifically to maximize Return on Ad Spend (ROAS) by matching visitor intent with a compelling value hook and instant contact action.',
      icon: <MousePointerClick className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Local Service & Booking Funnels',
      desc: 'Streamlined booking pages for salons, clinics, fitness centers, and contractors with 1-tap WhatsApp consultation scheduling.',
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Product Drop & Early-Access Waitlists',
      desc: 'High-anticipation launch pages featuring countdown timers, product spec showcases, and automated email/spreadsheet waitlist collection.',
      icon: <Flame className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Event & Webinar Registration Portals',
      desc: 'High-converting sign-up pages with agenda timelines, speaker profiles, interactive ticket pricing, and automated confirmation routing.',
      icon: <Layers className="w-5 h-5 text-indigo-400" />
    }
  ];

  const anatomyPoints = [
    { title: 'Above-the-Fold Value Hook', desc: 'Clear headline, problem statement, and primary CTA visible immediately without scrolling.' },
    { title: 'Zero Exit Distractions', desc: 'No complex header menus or external links leading visitors away from the conversion goal.' },
    { title: 'Persuasive Social Proof', desc: 'Real customer results, client badges, and structured credibility indicators.' },
    { title: 'Transparent Offer Breakdown', desc: 'Crystal-clear deliverables, pricing tables, and timeline expectations.' },
    { title: 'Interactive Trust Elements', desc: 'Embedded FAQ accordions and instant WhatsApp chat access for hesitant prospects.' }
  ];

  const processStages = [
    { num: '01', title: 'Campaign Alignment', desc: 'Analyzing ad copy, target audience demographics, and desired conversion action.' },
    { num: '02', title: 'Wireframing & Copy', desc: 'Structuring visual hierarchy, objection-handling copy, and CTA positioning.' },
    { num: '03', title: 'Fast Tailwind Coding', desc: 'Writing clean, zero-bloat markup with sub-second mobile rendering performance.' },
    { num: '04', title: 'Tracking Integration', desc: 'Setting up Meta Pixel, GA4 events, and form-to-WhatsApp automated triggers.' },
    { num: '05', title: 'Live Deployment', desc: 'Fast cloud deployment with SSL, domain configuration, and mobile smoke testing.' }
  ];

  return (
    <div className="pt-24 pb-20">
      <SEOHead 
        title="High-Converting Landing Page Development | SYQORA NEXUS"
        description="Single-page sales funnels, ad campaign landing pages, and lead generation pages engineered with sub-second speed, persuasive UX, and instant WhatsApp triggers."
        canonicalUrl="https://syqora-nexus.netlify.app/landing-page-development"
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-gray-400 flex items-center gap-2 pt-2">
          <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cyan-400">Services</span>
          <span>/</span>
          <span className="text-white font-medium">Landing Page Development</span>
        </nav>

        {/* Hero Section */}
        <section className="relative rounded-3xl bg-gradient-to-b from-[#100d28] to-[#040612] border border-amber-500/20 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 font-mono text-xs tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>CONVERSION-FOCUSED WEB ARCHITECTURE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]">
              High-Converting Landing Page Development
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We engineer laser-focused landing pages and single-page sales funnels designed to turn paid advertising clicks and organic traffic into verified customer inquiries. Built with sub-second speed, persuasive visual UX, and frictionless WhatsApp triggers.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss Landing Page Development with Founders on WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Your Campaign on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenPricingCalculator}
                aria-label="Calculate Landing Page project cost"
                className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Estimate Landing Page Scope</span>
              </button>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <div className="text-white font-bold text-lg text-amber-300">2 - 4 Days</div>
                <div className="text-gray-400">Fast Turnaround</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-cyan-300">Lightweight</div>
                <div className="text-gray-400">High-Speed Optimization</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-emerald-300">WhatsApp</div>
                <div className="text-gray-400">1-Tap Inquiries</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-indigo-300">Meta/GA4</div>
                <div className="text-gray-400">Pixel Configured</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What We Build */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              CAMPAIGN FORMATS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Landing Page Formats Engineered for Specific Conversion Goals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landingPageTypes.map((type, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#080c1e] border border-white/10 p-6 space-y-3 hover:border-amber-500/30 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {type.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-display">{type.title}</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Anatomy */}
        <section className="rounded-3xl bg-[#080d22] border border-cyan-500/20 p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              CONVERSION BLUEPRINT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              The Architecture of a High-Converting Landing Page
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-gray-300">
            {anatomyPoints.map((pt, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white font-display">{pt.title}</h3>
                <p>{pt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Process */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              RAPID LAUNCH PIPELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Our 5-Stage Rapid Landing Page Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processStages.map((st, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#070a19] border border-white/10 p-5 space-y-2 hover:border-amber-500/30 transition-colors"
              >
                <span className="text-xs font-mono text-amber-400 font-bold block">{st.num} // STAGE</span>
                <h3 className="text-sm font-bold text-white font-display">{st.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              ANSWERS & CLARITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Landing Page Development FAQs
            </h2>
          </div>

          <div className="space-y-3 max-w-4xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl bg-[#080c1f] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none min-h-[44px]"
                  >
                    <span className="font-semibold text-sm sm:text-base text-white">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: Cross-linking */}
        <section className="p-6 rounded-2xl bg-[#070a18] border border-white/10 space-y-4">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
            Explore Related Web Services
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link to="/website-development" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>Website Development</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/3d-web-design" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>3D & Interactive Web Design</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/ai-solutions" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>AI Solutions & Automation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 7: CTA Banner */}
        <section className="rounded-3xl bg-gradient-to-r from-amber-950/60 via-[#0b102c] to-cyan-950/60 border border-amber-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              Ready to Launch Your High-Converting Campaign Page?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Get your landing page engineered and deployed in 2 to 4 business days with full analytics tracking and WhatsApp routing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start WhatsApp conversation for landing page development"
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Campaign on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenPricingCalculator}
              aria-label="Estimate Landing Page Project Cost"
              className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Use Project Scope Calculator</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
