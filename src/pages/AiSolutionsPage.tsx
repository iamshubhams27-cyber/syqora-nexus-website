import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG } from '../data/studioData';
import { Link } from '../router';
import { 
  Cpu, 
  Sparkles, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  ChevronDown, 
  Workflow, 
  Layers, 
  Database,
  ArrowUpRight
} from 'lucide-react';

interface ServicePageProps {
  onOpenAuditModal: () => void;
  onOpenPricingCalculator: () => void;
}

export const AiSolutionsPage: React.FC<ServicePageProps> = ({
  onOpenAuditModal,
  onOpenPricingCalculator,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hi SYQORA NEXUS, I want to discuss AI solutions and business automation for my company.'
  )}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://syqora-nexus.netlify.app/ai-solutions#service',
    'name': 'AI Solutions & Business Automation',
    'serviceType': 'AI Workflow Automation & Intelligent Business Systems',
    'provider': {
      '@type': 'Organization',
      'name': 'SYQORA NEXUS',
      'url': 'https://syqora-nexus.netlify.app',
      'telephone': '+91-7249891311',
      'email': 'iamshubham.s27@gmail.com'
    },
    'description': 'Practical AI solutions, workflow automation, and intelligent WhatsApp routing for businesses by SYQORA NEXUS.',
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
      q: 'What kind of AI solutions does SYQORA NEXUS build for real businesses?',
      a: 'We build practical, high-utility AI automations rather than speculative gimmicks. This includes WhatsApp customer routing and lead qualification bots, web-to-database automated lead pipelines, heuristic document and text classification, automated quote calculators, and AI-assisted data formatting pipelines.'
    },
    {
      q: 'Can AI automation be integrated with our existing WhatsApp Business account?',
      a: 'Yes. We configure intelligent WhatsApp message triage, auto-replies, dynamic intent categorization, and automated lead capture into Google Sheets or your CRM so your team never misses high-intent inquiries.'
    },
    {
      q: 'Do we need a massive dataset or expensive servers to use your AI solutions?',
      a: 'No. Most business automations utilize pre-trained state-of-the-art models (such as Gemini API, OpenAI, or local heuristic classifiers) connected to lightweight serverless cloud functions. This keeps operating costs predictable and setup timelines fast.'
    },
    {
      q: 'How do you ensure AI accuracy and data privacy?',
      a: 'We implement strict deterministic validation guardrails and fallback rules. Sensitive customer data is never exposed or used for public training, and edge cases are immediately routed to human team members.'
    },
    {
      q: 'What is the pricing and timeline for an AI automation system?',
      a: 'Custom AI solutions and workflow automations start from ₹7,999/-, with implementation cycles typically taking 5 to 12 business days depending on integrations and workflow complexity.'
    }
  ];

  const solutionsList = [
    {
      title: 'WhatsApp Business Routing & Lead Triage',
      desc: 'Intelligent routing that parses customer intent from incoming messages, qualifies service inquiries, and routes hot leads directly to the right department.',
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Automated Web-to-CRM Lead Ingestion',
      desc: 'Seamless pipelines that extract web form inputs, format metadata, log details into Google Sheets / SQL databases, and trigger instant team SMS/WhatsApp alerts.',
      icon: <Workflow className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Heuristic Classification & Threat Radars',
      desc: 'Custom security and content validation models, such as our live URL phishing heuristic classifier capable of analyzing threat indicators in real time.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Smart Interactive Pricing Calculators',
      desc: 'Dynamic front-end configurators that compute multi-variable quotes, apply custom discount logic, and package specifications into ready-to-send briefs.',
      icon: <Zap className="w-5 h-5 text-amber-400" />
    }
  ];

  const processSteps = [
    { num: '01', title: 'Workflow Audit', desc: 'Identifying repetitive clerical bottlenecks, manual data entry points, and delayed lead response times.' },
    { num: '02', title: 'Pipeline Architecture', desc: 'Designing the data flow between web triggers, AI model endpoints, and destination databases.' },
    { num: '03', title: 'Integration & Logic', desc: 'Connecting APIs, formatting input schemas, and writing deterministic fallback rules.' },
    { num: '04', title: 'Quality & Safety Checks', desc: 'Testing edge cases, input anomalies, and latency under high volume with strict validation guardrails.' },
    { num: '05', title: 'Deployment & Training', desc: 'Live deployment with staff handover documentation and ongoing monthly performance monitoring.' }
  ];

  return (
    <div className="pt-24 pb-20">
      <SEOHead 
        title="AI Solutions & Business Automation | SYQORA NEXUS"
        description="Custom AI solutions and workflow automation for modern businesses. Structured WhatsApp inquiry routing, automated web form logging, and rule-based validation workflows."
        canonicalUrl="https://syqora-nexus.netlify.app/ai-solutions"
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-gray-400 flex items-center gap-2 pt-2">
          <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cyan-400">Services</span>
          <span>/</span>
          <span className="text-white font-medium">AI Solutions</span>
        </nav>

        {/* Hero Section */}
        <section className="relative rounded-3xl bg-gradient-to-b from-[#080e29] to-[#040612] border border-cyan-500/20 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>PRACTICAL AI & COMMERCIAL AUTOMATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]">
              AI Solutions & Business Automation
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We design and deploy practical AI-driven automations, structured WhatsApp inquiry routing, automated web form logging, and rule-based validation workflows. Turn manual clerical tasks into automated, 24/7 operational engines.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss AI Solutions with Founders on WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Your Workflow on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenPricingCalculator}
                aria-label="Calculate AI automation scope"
                className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Estimate Automation Scope</span>
              </button>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <div className="text-white font-bold text-lg text-emerald-300">24/7</div>
                <div className="text-gray-400">Automated Triage</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-cyan-300">Rapid</div>
                <div className="text-gray-400">API Responses</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-indigo-300">Deterministic</div>
                <div className="text-gray-400">Guardrails & Fallbacks</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-purple-300">Direct</div>
                <div className="text-gray-400">CRM & Sheet Sync</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: AI Solutions List */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              AUTOMATION SUITE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Commercial AI Solutions We Implement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionsList.map((sol, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#080c1e] border border-white/10 p-6 space-y-3 hover:border-cyan-500/30 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {sol.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-display">{sol.title}</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Process */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              DEPLOYMENT ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              How We Build & Integrate AI Workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((st, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#070a19] border border-white/10 p-5 space-y-2 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-xs font-mono text-cyan-400 font-bold block">{st.num} // STAGE</span>
                <h3 className="text-sm font-bold text-white font-display">{st.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Business Benefits */}
        <section className="rounded-3xl bg-[#080d22] border border-cyan-500/20 p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              RETURN ON INVESTMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Measurable Benefits of Business Automation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">Zero Missed Inquiries</h3>
              <p>Customers get instantaneous responses on WhatsApp even outside normal business hours, capturing leads when buying intent is highest.</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">Eliminate Manual Data Entry</h3>
              <p>Form submissions and customer details are automatically parsed and structured directly into your operations spreadsheet or CRM.</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">Scalable Operations</h3>
              <p>Handle 10x inquiry volume during peak campaign periods without needing to hire additional administrative support staff.</p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              FREQUENT QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              AI Solutions & Automation FAQs
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
            Related Studio Services
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link to="/website-development" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>Website Development</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/data-analytics" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>Data Analytics & Dashboards</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/3d-web-design" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>3D & Interactive Web Design</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 7: CTA Banner */}
        <section className="rounded-3xl bg-gradient-to-r from-emerald-950/60 via-[#0b102c] to-cyan-950/60 border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              Ready to Automate Your Business Operations?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Speak directly with our technical leads to identify high-ROI automation opportunities for your company.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start WhatsApp conversation for AI solutions"
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Automation on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenPricingCalculator}
              aria-label="Estimate AI project cost"
              className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Calculate Scope & Pricing</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
