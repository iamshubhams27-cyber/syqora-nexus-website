import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FoundersSection } from './components/FoundersSection';
import { WorkSection } from './components/WorkSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractivePricingEstimator } from './components/InteractivePricingEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WebsiteAuditModal } from './components/WebsiteAuditModal';

// Dedicated Service Pages
import { WebsiteDevelopmentPage } from './pages/WebsiteDevelopmentPage';
import { ThreeDWebDesignPage } from './pages/ThreeDWebDesignPage';
import { AiSolutionsPage } from './pages/AiSolutionsPage';
import { DataAnalyticsPage } from './pages/DataAnalyticsPage';
import { LandingPageDevelopmentPage } from './pages/LandingPageDevelopmentPage';

function AppContent() {
  const { currentPath, navigate } = useRouter();
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenPricing = () => {
    if (currentPath === '/') {
      const pricingEl = document.getElementById('pricing');
      if (pricingEl) {
        pricingEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', 'pricing');
    }
  };

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://syqora-nexus.netlify.app/#organization',
    'name': 'SYQORA NEXUS',
    'url': 'https://syqora-nexus.netlify.app',
    'telephone': '+91-7249891311',
    'email': 'iamshubham.s27@gmail.com',
    'founder': [
      {
        '@type': 'Person',
        'name': 'Shubham Sonkusare',
        'jobTitle': 'Lead Software Engineer & Co-Founder',
        'email': 'iamshubham.s27@gmail.com'
      },
      {
        '@type': 'Person',
        'name': 'Yamini Nandanwar',
        'jobTitle': 'Lead Data Analyst & Co-Founder',
        'email': 'yamininandanwar1310@gmail.com'
      }
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Nagpur',
      'addressRegion': 'Maharashtra',
      'addressCountry': 'IN'
    },
    'priceRange': '₹₹'
  };

  const renderPageContent = () => {
    switch (currentPath) {
      case '/website-development':
        return (
          <WebsiteDevelopmentPage 
            onOpenAuditModal={handleOpenAudit}
            onOpenPricingCalculator={handleOpenPricing}
          />
        );
      case '/3d-web-design':
        return (
          <ThreeDWebDesignPage 
            onOpenAuditModal={handleOpenAudit}
            onOpenPricingCalculator={handleOpenPricing}
          />
        );
      case '/ai-solutions':
        return (
          <AiSolutionsPage 
            onOpenAuditModal={handleOpenAudit}
            onOpenPricingCalculator={handleOpenPricing}
          />
        );
      case '/data-analytics':
        return (
          <DataAnalyticsPage 
            onOpenAuditModal={handleOpenAudit}
            onOpenPricingCalculator={handleOpenPricing}
          />
        );
      case '/landing-page-development':
        return (
          <LandingPageDevelopmentPage 
            onOpenAuditModal={handleOpenAudit}
            onOpenPricingCalculator={handleOpenPricing}
          />
        );
      case '/':
      default:
        return (
          <>
            <SEOHead 
              title="SYQORA NEXUS | Next-Gen Digital Technology Studio — AI, Data & Web"
              description="SYQORA NEXUS is a digital technology studio co-founded by Shubham Sonkusare & Yamini Nandanwar. High-performance bespoke websites, modern 3D web design, AI automation, and Power BI analytics dashboards for businesses in Nagpur and across India."
              canonicalUrl="https://syqora-nexus.netlify.app"
              structuredData={homeStructuredData}
            />

            {/* Hero Section */}
            <Hero 
              onOpenPricingCalculator={handleOpenPricing}
              onOpenAuditModal={handleOpenAudit}
            />

            {/* Founders */}
            <FoundersSection />

            {/* Selected Work & Live Demos */}
            <WorkSection />

            {/* Services & Deliverables */}
            <ServicesSection />

            {/* Interactive Pricing Estimator */}
            <InteractivePricingEstimator />

            {/* Contact & Quick Brief */}
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050713] text-[#f5f7ff] relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Ambient Static Gradients */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar 
        onOpenPricingCalculator={handleOpenPricing}
        onOpenAuditModal={handleOpenAudit}
      />

      {/* Main Content */}
      <main id="main" className="space-y-4">
        {renderPageContent()}
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer 
        onOpenAuditModal={handleOpenAudit}
        onOpenPricingCalculator={handleOpenPricing}
      />

      {/* Free Website Audit Modal */}
      <WebsiteAuditModal 
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

