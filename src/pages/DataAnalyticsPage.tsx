import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { STUDIO_CONFIG } from '../data/studioData';
import { Link } from '../router';
import { 
  BarChart3, 
  Sparkles, 
  Database, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  ChevronDown, 
  LineChart, 
  PieChart, 
  Layers, 
  Table,
  ArrowUpRight
} from 'lucide-react';

interface ServicePageProps {
  onOpenAuditModal: () => void;
  onOpenPricingCalculator: () => void;
}

export const DataAnalyticsPage: React.FC<ServicePageProps> = ({
  onOpenAuditModal,
  onOpenPricingCalculator,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hi SYQORA NEXUS (Yamini & Shubham), I want to discuss a custom Power BI and data analytics dashboard project.'
  )}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://syqora-nexus.netlify.app/data-analytics#service',
    'name': 'Data Analytics & Power BI Dashboards',
    'serviceType': 'Business Intelligence & Executive Analytics Dashboards',
    'provider': {
      '@type': 'Organization',
      'name': 'SYQORA NEXUS',
      'url': 'https://syqora-nexus.netlify.app',
      'telephone': '+91-7249891311',
      'email': 'yamininandanwar1310@gmail.com'
    },
    'description': 'Custom Power BI dashboards, SQL database analytics, and executive business intelligence reports by data lead Yamini Nandanwar at SYQORA NEXUS.',
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'price': '6999',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'priceType': 'https://schema.org/StartingPrice'
      }
    }
  };

  const faqs = [
    {
      q: 'Who leads the Data Analytics & Power BI division at SYQORA NEXUS?',
      a: 'Our analytics practice is led directly by Co-Founder Yamini Nandanwar, an expert in Data Analytics, SQL Database Modeling, Advanced DAX, and Power BI visualization. Every dashboard is engineered with mathematical precision, strict data integrity checks, and clear executive readability.'
    },
    {
      q: 'Can you connect data from multiple messy spreadsheets and accounting software?',
      a: 'Yes. We specialize in aggregating disconnected data sources — including Excel workbooks, Google Sheets, CSV exports, Tally/accounting software data, and relational SQL databases — into a single unified star-schema data model.'
    },
    {
      q: 'Will my team know how to use and update the dashboard after delivery?',
      a: 'Absolutely. Every dashboard deployment includes complete handover documentation, a recorded video walkthrough demonstrating filters and drill-downs, and a 1-click refresh pipeline so your team can update metrics effortlessly.'
    },
    {
      q: 'What kind of metrics and KPIs can we track in Power BI?',
      a: 'We build custom scorecards for net profit margins, daily/monthly revenue trends, branch-by-branch sales comparisons, inventory stockouts & turnover rates, customer lifetime value (LTV), staff productivity, and marketing return on ad spend (ROAS).'
    },
    {
      q: 'How do you handle data security and business confidentiality?',
      a: 'We maintain strict non-disclosure standards. Data is processed locally or within your private corporate Power BI / cloud environment without third-party exposure.'
    },
    {
      q: 'What are the pricing plans and delivery timelines for dashboards?',
      a: 'Complete custom dashboard development starts from ₹9,999/- under our Enterprise Tech & BI package, with typical project delivery between 4 to 10 business days.'
    }
  ];

  const analyticsServices = [
    {
      title: 'Executive KPI & Profit Dashboards',
      desc: 'High-level executive scorecards that consolidate gross sales, operational margins, operating expenses, and cash-flow health in a single glance.',
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />
    },
    {
      title: 'Multi-Branch & Retail Analytics',
      desc: 'Comparative store performance analytics tracking product velocity, peak sales hours, average ticket size, and inventory turnover across outlets.',
      icon: <BarChart3 className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Structured Data Transformation & Scheduled Refresh Models',
      desc: 'Transforming raw, unstructured spreadsheets into normalized relational tables, star schemas, and structured data pipelines.',
      icon: <Database className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Customer Retention & Service Productivity',
      desc: 'Custom retention cohort models, appointment completion rates, and staff commission calculations tailored for salons, clinics, and service firms.',
      icon: <PieChart className="w-5 h-5 text-emerald-400" />
    }
  ];

  const processStages = [
    { num: '01', title: 'Data Source Audit', desc: 'Cataloging your current spreadsheets, databases, point-of-sale exports, and metric requirements.' },
    { num: '02', title: 'ETL & Data Cleaning', desc: 'Standardizing date formats, resolving null values, and building relational joins with zero double-counting.' },
    { num: '03', title: 'Data Modeling & DAX', desc: 'Writing custom calculated measures, time-intelligence formulas (YoY, MoM), and margin metrics.' },
    { num: '04', title: 'Visual UI/UX Design', desc: 'Crafting intuitive color-coded charts, interactive cross-filters, and clean executive summary layouts.' },
    { num: '05', title: 'Validation & Handover', desc: 'Reconciling figures with accounting ledgers, followed by staff training and 1-click refresh setup.' }
  ];

  return (
    <div className="pt-24 pb-20">
      <SEOHead 
        title="Data Analytics & Power BI Dashboards | SYQORA NEXUS"
        description="Transform scattered business data into executive Power BI dashboards, SQL analytics, and real-time KPI scorecards by data lead Yamini Nandanwar at SYQORA NEXUS."
        canonicalUrl="https://syqora-nexus.netlify.app/data-analytics"
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-gray-400 flex items-center gap-2 pt-2">
          <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cyan-400">Services</span>
          <span>/</span>
          <span className="text-white font-medium">Data Analytics</span>
        </nav>

        {/* Hero Section */}
        <section className="relative rounded-3xl bg-gradient-to-b from-[#0e0926] to-[#040612] border border-purple-500/20 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 font-mono text-xs tracking-wider uppercase">
              <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
              <span>DATA ANALYTICS & EXECUTIVE BUSINESS INTELLIGENCE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]">
              Data Analytics & Power BI Dashboards
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Transform disconnected spreadsheets and messy sales data into interactive Power BI dashboards, automated SQL data pipelines, and clear executive KPI scorecards. Make fast, confident business decisions backed by clean data.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss Data Analytics with Founders on WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Analytics on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenPricingCalculator}
                aria-label="Calculate analytics dashboard pricing"
                className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Estimate Dashboard Scope</span>
              </button>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <div className="text-white font-bold text-lg text-purple-300">Strict</div>
                <div className="text-gray-400">Data Validation & Audit Checks</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-cyan-300">Power BI</div>
                <div className="text-gray-400">& SQL Architecture</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-emerald-300">1-Click</div>
                <div className="text-gray-400">Data Refresh</div>
              </div>
              <div>
                <div className="text-white font-bold text-lg text-indigo-300">Lead by</div>
                <div className="text-gray-400">Yamini Nandanwar</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Analytics Services */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              DATA DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Commercial Analytics Solutions We Engineer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analyticsServices.map((srv, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#080c1e] border border-white/10 p-6 space-y-3 hover:border-purple-500/30 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {srv.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-display">{srv.title}</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Process */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              ANALYTICS METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Our 5-Stage Dashboard Engineering Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processStages.map((st, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#070a19] border border-white/10 p-5 space-y-2 hover:border-purple-500/30 transition-colors"
              >
                <span className="text-xs font-mono text-purple-400 font-bold block">{st.num} // STAGE</span>
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
              OPERATIONAL VALUE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Business Leaders Invest in Power BI Dashboards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">Instant Executive Visibility</h3>
              <p>No waiting days for staff to compile end-of-month reports. Review revenue, expenses, and margins in real time from any browser or tablet.</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">Spot Profit Leaks Early</h3>
              <p>Identify underperforming stock keeping units (SKUs), delayed invoice collections, and seasonal margin dips before they harm cash flow.</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h3 className="text-sm font-bold text-white font-display">Structured Relational Models</h3>
              <p>Eliminate accidental cell overrides and broken Excel equations with robust, auditable relational database models.</p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">
              COMMON INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Data Analytics & Power BI FAQs
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
            Complementary Studio Services
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link to="/ai-solutions" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>AI Solutions & Automation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/website-development" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>Website Development</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/landing-page-development" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 flex items-center justify-between transition-colors">
              <span>Landing Page Development</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 7: CTA Banner */}
        <section className="rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#0b102c] to-indigo-950/60 border border-purple-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
              Ready to Turn Messy Data into Executive Clarity?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Schedule a data consultation with Co-Founder Yamini Nandanwar on WhatsApp to explore custom dashboard architectures.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start WhatsApp conversation for Data Analytics and Power BI"
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenPricingCalculator}
              aria-label="Estimate Data Analytics Project Cost"
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
