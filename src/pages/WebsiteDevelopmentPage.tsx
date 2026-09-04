import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG } from '../data/studioData';
import { Link } from '../router';
import { 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  Code2, 
  Layout, 
  Smartphone, 
  Search, 
  Layers, 
  Cpu, 
  BarChart2, 
  HelpCircle,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

interface ServicePageProps {
  onOpenAuditModal: () => void;
  onOpenPricingCalculator: () => void;
}

export const WebsiteDevelopmentPage: React.FC<ServicePageProps> = ({
  onOpenAuditModal,
  onOpenPricingCalculator,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hi SYQORA NEXUS, I am looking for a website development project in Nagpur / India. Let us discuss scope and timeline.'
  )}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://syqora-nexus.netlify.app/website-development#service',
    'name': 'Website Development Company in Nagpur',
    'serviceType': 'Custom Website Development',
    'provider': {
      '@type': 'Organization',
      'name': 'SYQORA NEXUS',
      'url': 'https://syqora-nexus.netlify.app',
      'telephone': '+91-7249891311',
      'email': 'iamshubham.s27@gmail.com'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Nagpur' },
      { '@type': 'Country', 'name': 'India' }
    ],
    'description': 'Custom website development and modern responsive web design services for businesses in Nagpur and across India by SYQORA NEXUS.',
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'price': '4999',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'priceType': 'https://schema.org/StartingPrice'
      }
    }
  };

  const faqs = [
    {
      q: 'Why should a business in Nagpur or India choose SYQORA NEXUS for website development?',
      a: 'Unlike generic agencies that outsource development to rotating juniors or rely on bloated website builders, SYQORA NEXUS is led directly by technical founders Shubham Sonkusare (Full-Stack Engineer) and Yamini Nandanwar (Data & AI Lead). Every website is custom-coded using modern React and TypeScript, engineered for rapid page load times and optimized Core Web Vitals, and seamless WhatsApp conversion triggers.'
    },
    {
      q: 'What types of websites do you develop?',
      a: 'We build custom corporate websites, local service business platforms (salons, spas, gyms, medical clinics, legal and consulting practices), boutique brand flagships, high-converting product landing pages, and interactive web portals across Nagpur and all major Indian business hubs.'
    },
    {
      q: 'How long does a website development project take from start to finish?',
      a: 'Standard business and brand websites are typically delivered within 3 to 7 business days. Complex custom portals with interactive calculators, booking workflows, or custom dashboards take between 7 to 14 business days.'
    },
    {
      q: 'Will our website be optimized for mobile phones and local search?',
      a: 'Yes, 100%. All our web platforms are built mobile-first with responsive layouts, fluid typography, Local SEO structured schema (JSON-LD), fast cloud hosting, free SSL certificates, and instant WhatsApp chat triggers so mobile visitors convert easily.'
    },
    {
      q: 'How does your package and maintenance model work?',
      a: 'Our website packages start from ₹5,999/-, ₹7,999/-, ₹9,999/-, and ₹19,999/- respectively. Every package covers cloud deployment, SSL certificates, responsive design, and direct founder tech support. Additional custom requirements and ongoing support can be quoted transparently as add-ons.'
    },
    {
      q: 'Can we integrate WhatsApp booking and customer lead routing?',
      a: 'Absolutely. We specialize in automated WhatsApp message routing, direct inquiry triggers, and one-tap calling buttons that connect prospective customers directly to your sales or reception team in real time.'
    },
    {
      q: 'Do you work with businesses outside Nagpur?',
      a: 'Yes. While our technical base is located in Nagpur, Maharashtra, we engineer digital platforms for clients across Mumbai, Pune, Bangalore, Delhi NCR, Hyderabad, and international businesses.'
    },
    {
      q: 'How do we get started on our website project?',
      a: 'You can chat directly with our founders on WhatsApp at +91 72498 91311, request a free speed and design audit of your existing site, or use our interactive cost estimator to calculate your exact project scope.'
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your business model, target audience, revenue drivers, and competitor landscape in Nagpur or your regional market.' },
    { num: '02', title: 'Strategy', desc: 'Defining page architecture, conversion pathways, content hierarchy, and technical performance requirements.' },
    { num: '03', title: 'UX/UI Design', desc: 'Designing modern, high-contrast layouts, typography scales, and accessible micro-interactions tailored to your brand.' },
    { num: '04', title: 'Development', desc: 'Writing clean, clean-coded React and TypeScript components with zero plugin bloat for lightning-fast execution.' },
    { num: '05', title: 'Testing', desc: 'Rigorous cross-browser, cross-device testing across iOS, Android, macOS, and Windows viewports.' },
    { num: '06', title: 'Performance', desc: 'Compressing assets, eliminating layout shifts, and tuning performance metrics to optimize Core Web Vitals and user experience.' },
    { num: '07', title: 'Deployment', desc: 'Configuring secure cloud hosting, SSL encryption, CDN routing, and search engine indexing submission.' },
    { num: '08', title: 'Ongoing Support', desc: 'Continuous monthly maintenance, feature sprints, uptime monitoring, and direct founder tech support.' }
  ];

  const whatWeBuild = [
    {
      title: 'Business & Brand Websites',
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      desc: 'Bespoke digital flagships tailored for salons, gyms, restaurants, and professional enterprises seeking a high-credibility web presence.',
      features: ['Sub-second load times', 'Custom UI design', 'WhatsApp ordering/booking', 'Local SEO structured data']
    },
    {
      title: 'Corporate & Enterprise Portals',
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      desc: 'Scalable web platforms with multi-location architecture, service catalogues, case study repositories, and executive team dossiers.',
      features: ['Modular architecture', 'Role-based access', 'Interactive calculators', 'CRM lead routing']
    },
    {
      title: 'Service Business Platforms',
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      desc: 'Action-oriented web platforms designed to capture phone calls, WhatsApp consultations, and direct quotation requests with zero friction.',
      features: ['One-tap call triggers', 'Automated quote forms', 'Client review showcases', 'Google Maps sync']
    },
    {
      title: 'Interactive Portfolio Platforms',
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      desc: 'Visually captivating digital portfolios for consultants, architects, creative directors, and researchers demanding modern polish.',
      features: ['GPU micro-interactions', 'Filterable case studies', 'Interactive live previews', 'Dark/light aesthetics']
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <SEOHead 
        title="Website Development Company in Nagpur | SYQORA NEXUS"
        description="Looking for a leading website development company in Nagpur? SYQORA NEXUS builds high-performance custom websites, business portals, and responsive web platforms across India."
        canonicalUrl="https://syqora-nexus.netlify.app/website-development"
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-gray-400 flex items-center gap-2 pt-2">
          <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cyan-400">Services</span>
          <span>/</span>
          <span className="text-white font-medium">Website Development</span>
        </nav>

        {/* Hero Section */}
        <section className="relative rounded-3xl bg-gradient-to-b from-[#080d24] to-[#040612] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>NAGPUR • PUNE • SERVING BUSINESSES PAN-INDIA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]">
              Website Development Company in Nagpur
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              SYQORA NEXUS engineers high-performance custom websites, modern responsive web applications, and commercial business platforms. We eliminate bloated templates to build ultra-fast, search-optimized websites that turn visitors into paying customers.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss Website Development with Founders on WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Your Project on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenPricingCalculator}
                aria-label="Calculate website development cost"
                className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Estimate Project Cost</span>
              </button>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <div className="text-white font-bold text-lg text-cyan-300">Sub-Second</div>
                <div className="text-gray-400">Architecture Target</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-indigo-300">100%</div>
                <div className="text-gray-400">Mobile Responsive</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-emerald-300">Direct</div>
                <div className="text-gray-400">Founder Support</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-purple-300">Local SEO</div>
                <div className="text-gray-400">Schema Configured</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What We Build */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              CAPABILITIES & FORMATS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Custom Website Development Built for Real Commercial Impact
            </h2>
            <p className="text-sm text-gray-300">
              Every business requires a unique digital architecture. We design and build bespoke web platforms tailored to your specific industry workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeBuild.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#080c1e] border border-white/10 p-6 space-y-4 hover:border-cyan-500/30 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{item.title}</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs text-gray-400">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Development Process */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              ENGINEERING LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Our 8-Stage Website Development Process
            </h2>
            <p className="text-sm text-gray-300">
              A structured, transparent engineering pipeline that ensures zero scope ambiguity and rapid milestone delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#070b1a] border border-white/10 p-5 space-y-2.5 relative hover:border-indigo-500/40 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-cyan-400 block">
                  {step.num} // STAGE
                </span>
                <h3 className="text-base font-bold text-white font-display">{step.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Why SYQORA NEXUS */}
        <section className="rounded-3xl bg-[#090e24] border border-cyan-500/20 p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              FOUNDER-LED ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Businesses Choose SYQORA NEXUS Over Traditional Agencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs text-gray-300">
            <div className="space-y-2.5 p-5 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-bold text-white font-display">Direct Founder Access</h3>
              <p>You work directly with lead engineer Shubham Sonkusare and data specialist Yamini Nandanwar. No junior account managers, no communication delays.</p>
            </div>
            <div className="space-y-2.5 p-5 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-bold text-white font-display">Zero Plugin & Theme Bloat</h3>
              <p>We hand-code our web platforms in React, Vite, and Tailwind CSS. No slow WordPress themes or heavy plugins slowing down your site.</p>
            </div>
            <div className="space-y-2.5 p-5 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-bold text-white font-display">Predictable Monthly Care</h3>
              <p>Transparent monthly plans covering fast cloud hosting, SSL, updates, and direct support so your website is never abandoned.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Website Development for Nagpur Businesses */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              REGIONAL EXPERTISE & LOCAL SEO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Website Development Tailored for Businesses in Nagpur
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Nagpur is experiencing rapid commercial growth across retail, hospitality, healthcare, real estate, and professional consulting. To succeed in the local market, your business needs a modern digital storefront that ranks on Google Maps and converts local smartphone users instantly.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              We integrate LocalBusiness schema, Google Maps directions, direct WhatsApp inquiry channels, and Marathi/Hindi/English friendly UX patterns to ensure your business captures high-intent regional traffic effortlessly.
            </p>
          </div>
        </section>

        {/* Section 6: Technology & Capabilities */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              MODERN TECH STACK
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Built with Modern Web Standards
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs font-mono text-center">
            {['React 19', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'Schema.org'].map((tech, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#080c1d] border border-white/10 text-cyan-300 font-semibold">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: FAQ Accordion */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Website Development FAQs
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

        {/* Section 8: Internal Cross-Linking */}
        <section className="p-6 rounded-2xl bg-[#070a18] border border-white/10 space-y-4">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
            Explore Related Studio Capabilities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <Link to="/landing-page-development" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>Landing Page Development</span>
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
            <Link to="/data-analytics" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>Data Analytics & Dashboards</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 9: Final CTA Banner */}
        <section className="rounded-3xl bg-gradient-to-r from-cyan-950/60 via-[#0b102c] to-purple-950/60 border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              Ready to Upgrade Your Web Presence in Nagpur or Across India?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Direct founder discussion, clear pricing estimates, and zero technical jargon. Let's build a website that drives genuine business growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start WhatsApp conversation for website development"
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Hotline</span>
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              aria-label="Request Free Web Performance Audit"
              className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Get Free Website Speed Audit</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
