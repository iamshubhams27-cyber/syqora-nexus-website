import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG } from '../data/studioData';
import { Link } from '../router';
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  ChevronDown, 
  Eye, 
  Activity, 
  Palette, 
  Smartphone,
  ArrowUpRight
} from 'lucide-react';

interface ServicePageProps {
  onOpenAuditModal: () => void;
  onOpenPricingCalculator: () => void;
}

export const ThreeDWebDesignPage: React.FC<ServicePageProps> = ({
  onOpenAuditModal,
  onOpenPricingCalculator,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hi SYQORA NEXUS, I am interested in building a 3D / interactive website. Let us discuss the concept.'
  )}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://syqora-nexus.netlify.app/3d-web-design#service',
    'name': '3D & Interactive Web Design',
    'serviceType': '3D Web Design & Interactive Web Experiences',
    'provider': {
      '@type': 'Organization',
      'name': 'SYQORA NEXUS',
      'url': 'https://syqora-nexus.netlify.app',
      'telephone': '+91-7249891311',
      'email': 'iamshubham.s27@gmail.com'
    },
    'description': 'GPU-accelerated 3D web design, interactive user interfaces, and performance-conscious modern web experiences by SYQORA NEXUS.',
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'price': '5499',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'priceType': 'https://schema.org/StartingPrice'
      }
    }
  };

  const faqs = [
    {
      q: 'Will a 3D or interactive website slow down my page speed or hurt mobile loading?',
      a: 'Not when engineered by SYQORA NEXUS. We build performance-first interactive websites using lightweight CSS 3D transforms, GPU hardware acceleration, WebGL canvas shaders, and compressed assets, benchmarked for responsive performance and fast load times across smartphones and desktops.'
    },
    {
      q: 'What technologies do you use for 3D and interactive web design?',
      a: 'We leverage modern front-end technologies including React 19, Motion, Three.js, WebGL, Canvas API, Tailwind CSS, and GPU-optimized CSS perspective transforms to achieve fluid micro-interactions without heavy overhead.'
    },
    {
      q: 'What kinds of businesses benefit most from 3D and interactive web design?',
      a: 'Interactive websites are especially impactful for luxury lifestyle brands, boutique salons & spas, fitness academies, technology startups, architecture firms, creative studios, and product companies that want to stand out from generic template-driven competitors.'
    },
    {
      q: 'How do you handle devices with low bandwidth or battery saver mode?',
      a: 'Our interactive systems feature automatic adaptive degradation. On low-power mobile devices or when users have "prefers-reduced-motion" enabled, animations smoothly fall back to lightweight static state transitions while preserving 100% of the visual elegance and functionality.'
    },
    {
      q: 'Can 3D interactive elements be integrated into an existing website?',
      a: 'Yes. We can engineer standalone interactive components — such as interactive 3D product visualizers, interactive pricing configurators, or engaging hero scenes — and integrate them cleanly into your current website.'
    },
    {
      q: 'What is the pricing and timeline for an interactive 3D website?',
      a: 'Interactive UI and 3D web projects start from ₹5,499/month under our managed development plans, with typical turnaround timelines ranging between 5 to 12 business days depending on visual complexity.'
    }
  ];

  const useCases = [
    {
      title: 'Luxury Brand & Salon Flagships',
      desc: 'Rich interactive showcases featuring subtle parallax depth, ambient light reflections, and tactile service selectors that reflect premium prestige.',
      tags: ['Luxury Aesthetics', 'Parallax Depth', 'Micro-Interactions']
    },
    {
      title: 'Modern Tech & SaaS Startups',
      desc: 'Dynamic interactive architecture diagrams, live data simulators, and tactile feature cards that clearly demonstrate complex software capabilities.',
      tags: ['Interactive Diagrams', 'Tactile UI', 'Feature Demos']
    },
    {
      title: 'Interactive Product Configurators',
      desc: 'Real-time interactive customization widgets allowing customers to tweak dimensions, colors, and options before initiating a WhatsApp inquiry.',
      tags: ['Real-Time State', 'Customizer UI', 'WhatsApp Sync']
    },
    {
      title: 'Boutique Creative Portfolios',
      desc: 'Immersive visual storytelling portals with custom cursor dynamics, smooth scroll inertia, and fluid case study reveals for visionary professionals.',
      tags: ['Scroll Inertia', 'Custom Cursors', 'Case Study Reveals']
    }
  ];

  const processStages = [
    { num: '01', title: 'Concept & Wireframing', desc: 'Planning spatial hierarchy, focal points, and user interaction mechanics.' },
    { num: '02', title: 'Asset Optimization', desc: 'Polygon reduction, texture compression, and SVG vector path optimization.' },
    { num: '03', title: 'Motion Prototyping', desc: 'Crafting mathematical spring curves, hover responsiveness, and transition timings.' },
    { num: '04', title: 'Canvas & Shader Coding', desc: 'Implementing GPU-accelerated WebGL / Motion transforms with strict memory bounds.' },
    { num: '05', title: 'Performance Profiling', desc: 'Benchmarking on mobile hardware to guarantee 60 FPS rendering with zero layout shift.' },
    { num: '06', title: 'Adaptive Fallbacks', desc: 'Adding accessible reduced-motion support and battery-conscious render limits.' }
  ];

  return (
    <div className="pt-24 pb-20">
      <SEOHead 
        title="3D & Interactive Web Design | SYQORA NEXUS"
        description="Experience next-generation 3D & interactive web design by SYQORA NEXUS. GPU-accelerated micro-animations, interactive 3D UI, and lightweight web performance."
        canonicalUrl="https://syqora-nexus.netlify.app/3d-web-design"
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-gray-400 flex items-center gap-2 pt-2">
          <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cyan-400">Services</span>
          <span>/</span>
          <span className="text-white font-medium">3D & Interactive Web Design</span>
        </nav>

        {/* Hero Section */}
        <section className="relative rounded-3xl bg-gradient-to-b from-[#0a0e27] to-[#040612] border border-cyan-500/20 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>PERFORMANCE-FIRST 3D & INTERACTIVE UI</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]">
              3D & Interactive Web Design
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We design and develop tactile, GPU-accelerated interactive websites and 3D web experiences that captivate attention without sacrificing speed. Combining modern motion design with lightweight code to make your brand unforgettable.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss 3D and Interactive Web Design with Founders on WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Your Concept on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenPricingCalculator}
                aria-label="Estimate interactive website pricing"
                className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Estimate Interactive Scope</span>
              </button>
            </div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <div className="text-white font-bold text-lg text-cyan-300">GPU-Accelerated</div>
                <div className="text-gray-400">Smooth Motion</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-purple-300">Minimal</div>
                <div className="text-gray-400">Layout Shift (Engineered for Low CLS)</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-emerald-300">Adaptive</div>
                <div className="text-gray-400">Mobile Fallbacks</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-indigo-300">React 19</div>
                <div className="text-gray-400">Motion Driven</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What 3D & Interactive Web Design Means */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              CORE PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              What True Interactive Web Engineering Means
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              True 3D and interactive web design is not about piling heavy video loops or disorienting effects onto a web page. It is about purposeful, tactile user feedback. When a visitor hovers, scrolls, or clicks, the interface responds naturally with spatial depth, subtle lighting cues, and mathematical momentum.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              At SYQORA NEXUS, every interactive animation is offloaded to the device's graphics processor (GPU) using CSS transforms and hardware-accelerated rendering contexts. This ensures silky smooth transitions that respect user attention and device battery life.
            </p>
          </div>
        </section>

        {/* Section 3: Use Cases */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              APPLICATION DOMAINS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              High-Impact Use Cases for Interactive Websites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#080c1e] border border-white/10 p-6 space-y-3 hover:border-cyan-500/30 transition-all shadow-lg"
              >
                <h3 className="text-lg font-bold text-white font-display">{uc.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{uc.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {uc.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Process */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              ENGINEERING PIPELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              How We Design & Code Interactive 3D Web Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processStages.map((st, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#070a19] border border-white/10 p-5 space-y-2 hover:border-purple-500/30 transition-colors"
              >
                <span className="text-xs font-mono text-cyan-400 font-bold block">{st.num} // STEP</span>
                <h3 className="text-sm font-bold text-white font-display">{st.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Performance Considerations */}
        <section className="rounded-3xl bg-[#080d22] border border-cyan-500/20 p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              PERFORMANCE & ACCESSIBILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Strict Performance Benchmarks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">Optimized for Fluid, Responsive Framerates</h3>
              <p>We test interactions on mid-range Android and iOS devices to prevent stutter, lag, or memory leaks.</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">WCAG AA Accessibility</h3>
              <p>All interactive elements maintain high contrast ratios, keyboard focus states, and aria-labels for screen readers.</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">Prefers-Reduced-Motion</h3>
              <p>Visitors who prefer reduced motion receive smooth, non-disorienting static transitions automatically.</p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              3D & Interactive Web Design FAQs
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

        {/* Section 7: Cross-linking */}
        <section className="p-6 rounded-2xl bg-[#070a18] border border-white/10 space-y-4">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
            Related Engineering Services
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link to="/website-development" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>Website Development</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/landing-page-development" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>Landing Page Development</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/ai-solutions" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>AI Solutions & Automation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 8: CTA Banner */}
        <section className="rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#0b102c] to-cyan-950/60 border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              Ready to Create an Unforgettable Interactive Website?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Transform your digital flagship with high-performance 3D micro-interactions engineered directly by technical founders.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start WhatsApp conversation for 3D interactive web design"
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenPricingCalculator}
              aria-label="Calculate 3D website project cost"
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
