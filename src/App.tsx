import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FoundersSection } from './components/FoundersSection';
import { WorkSection } from './components/WorkSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractivePricingEstimator } from './components/InteractivePricingEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WebsiteAuditModal } from './components/WebsiteAuditModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenPricing = () => {
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
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

      {/* Main Content Sections */}
      <main id="main" className="space-y-4">
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
