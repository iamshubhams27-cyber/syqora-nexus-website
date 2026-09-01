import React, { useState } from 'react';
import { PRICING_PLANS, STUDIO_CONFIG } from '../data/studioData';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  MessageCircle, 
  Zap, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2,
  ShieldCheck,
  Plus
} from 'lucide-react';

interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const InteractivePricingEstimator: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('growth');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['whatsapp', 'seo']);
  const [deliverySpeed, setDeliverySpeed] = useState<'standard' | 'express'>('standard');

  const addons: Addon[] = [
    { id: 'whatsapp', name: 'Direct WhatsApp Automation & Pre-fill Booking', price: 799, description: 'One-tap dispatch for customer bookings with custom field routing' },
    { id: 'powerbi', name: 'Power BI Executive Dashboard Integration', price: 1999, description: 'Live visual sales reports & monthly KPI data synchronization' },
    { id: 'seo', name: 'Advanced Local SEO & Google Business Schema', price: 999, description: 'Structured JSON-LD schema, local ranking booster & search indexing' },
    { id: 'multibranch', name: 'Multi-Branch & Location Navigator', price: 899, description: 'Interactive location selector with geo-routing and branch mapping' },
    { id: 'security', name: 'ML Threat & Security Hardening Module', price: 1299, description: 'Anti-scraping, form sanitization & monthly security monitoring' },
  ];

  const currentPlan = PRICING_PLANS.find(p => p.id === selectedPlanId) || PRICING_PLANS[1];

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = addons.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const speedFee = deliverySpeed === 'express' ? 1499 : 0;
  const estimatedTotal = currentPlan.price + addonsTotal + speedFee;

  const generateWhatsAppMessage = () => {
    const addonNames = selectedAddons
      .map(id => addons.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Hi Shubham & Yamini (SYQORA NEXUS),\n\nI configured this monthly package using your estimator:\n• Base Plan: ${currentPlan.name} (₹${currentPlan.price.toLocaleString('en-IN')}/month)\n• Add-ons Selected: ${addonNames || 'None'}\n• Launch Speed: ${deliverySpeed === 'express' ? 'Express 48-72h (+₹1,499 setup)' : 'Standard Sprint'}\n• Estimated Monthly Total: ₹${estimatedTotal.toLocaleString('en-IN')}/month\n\nLet's get this started!`;

    return `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>AFFORDABLE MONTHLY SUBSCRIPTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            High impact. Low monthly cost.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-400">
              Zero hefty upfront bills.
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            All plans are billed affordably per month and include high-speed cloud hosting, security, and continuous founder maintenance so your site stays fast and updated.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {PRICING_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border cursor-pointer transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#0e1635] to-[#070b1c] border-cyan-500/50 shadow-2xl shadow-cyan-500/15 scale-[1.02]'
                    : isSelected
                    ? 'bg-[#090e24] border-cyan-400/40 shadow-xl'
                    : 'bg-[#080c1d] border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-mono text-[10px] font-bold tracking-widest uppercase shadow-md shadow-cyan-500/30 whitespace-nowrap">
                    MOST POPULAR MONTHLY PLAN
                  </div>
                )}

                <div className="space-y-4">
                  {/* Plan Top */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">{plan.subtitle}</p>
                    </div>

                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-cyan-400 bg-cyan-400 text-black' : 'border-white/20'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-3 pb-4 border-y border-white/10 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-white">
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-cyan-300 font-mono font-semibold">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Included Every Month
                    </span>
                    <ul className="space-y-2">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
                  <span className="text-[11px] text-gray-400 block">
                    <strong>Ideal for:</strong> {plan.idealFor}
                  </span>
                  
                  <div className={`w-full py-2.5 rounded-xl font-bold text-xs text-center transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-white/5 text-gray-300'
                  }`}>
                    {isSelected ? '✓ Selected Monthly Plan' : 'Click to Select'}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Custom Scope Builder */}
        <div className="rounded-3xl bg-[#090d22] border border-cyan-500/30 p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE MONTHLY ESTIMATOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Customize your exact monthly plan & add-ons
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-black/40 p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setDeliverySpeed('standard')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  deliverySpeed === 'standard'
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Standard Sprint (3-7 Days)
              </button>
              <button
                type="button"
                onClick={() => setDeliverySpeed('express')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  deliverySpeed === 'express'
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Express 48h (+₹1,499 setup)
              </button>
            </div>
          </div>

          {/* Add-ons Toggles */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
              Optional Monthly Add-on Modules
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {addons.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-cyan-950/30 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                        : 'bg-black/30 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                          isChecked ? 'bg-cyan-400 border-cyan-400 text-black' : 'border-white/30'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-bold text-white font-display">
                          {addon.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-cyan-300 font-bold whitespace-nowrap">
                        +₹{addon.price.toLocaleString('en-IN')}/mo
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 pl-6 leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Live Calculation Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-[#0d1633] to-purple-950/60 border border-cyan-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider block">
                YOUR AFFORDABLE MONTHLY ESTIMATE
              </span>
              <div className="flex items-baseline gap-3 justify-center md:justify-start">
                <span className="text-3xl sm:text-4xl font-bold text-white font-display">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-cyan-300 font-mono font-semibold">
                  / month
                </span>
                <span className="text-xs text-gray-400 font-mono hidden sm:inline">
                  ({currentPlan.name} + {selectedAddons.length} Add-on{selectedAddons.length !== 1 ? 's' : ''})
                </span>
              </div>
              <p className="text-xs text-gray-300">
                Direct founder partnership with Shubham & Yamini • Cloud hosting & maintenance included • Cancel anytime
              </p>
            </div>

            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/25 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Get This Plan on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
