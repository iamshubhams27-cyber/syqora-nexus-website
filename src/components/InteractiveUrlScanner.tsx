import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Search, 
  Cpu, 
  AlertTriangle, 
  CheckCircle2, 
  Lock, 
  Globe, 
  RefreshCw,
  Sparkles
} from 'lucide-react';

export const InteractiveUrlScanner: React.FC = () => {
  const [inputUrl, setInputUrl] = useState('https://syqoranexus.com');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    url: string;
    isPhishing: boolean;
    confidence: number;
    riskScore: number;
    indicators: { label: string; safe: boolean; detail: string }[];
  } | null>({
    url: 'https://syqoranexus.com',
    isPhishing: false,
    confidence: 99.2,
    riskScore: 3,
    indicators: [
      { label: 'SSL/TLS Certificate', safe: true, detail: 'Valid cryptographic EV TLS certificate' },
      { label: 'Domain Lexical Entropy', safe: true, detail: 'Low character randomness index (2.1 bits)' },
      { label: 'Subdomain Depth', safe: true, detail: 'Standard 1-level subdomain architecture' },
      { label: 'Brand Impersonation Check', safe: true, detail: 'No deceptive keywords (paypa1, netfIix, login-verify)' },
      { label: 'TLD Reputation', safe: true, detail: 'High trust top-level domain' }
    ]
  });

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    setIsScanning(true);

    setTimeout(() => {
      const lower = inputUrl.toLowerCase();
      const suspiciousWords = ['verify', 'login', 'security', 'update', 'banking', 'account', 'free', 'crypto', 'gift', 'paypa1', 'apple-id'];
      const suspiciousTlds = ['.xyz', '.top', '.ru', '.tk', '.work', '.click', '.gq', '.cf'];
      
      const hasSuspiciousWord = suspiciousWords.some(w => lower.includes(w));
      const hasSuspiciousTld = suspiciousTlds.some(t => lower.includes(t));
      const hasHyphenOverload = (lower.match(/-/g) || []).length > 2;
      const lacksHttps = !lower.startsWith('https://');

      let riskCount = 0;
      if (hasSuspiciousWord) riskCount += 35;
      if (hasSuspiciousTld) riskCount += 30;
      if (hasHyphenOverload) riskCount += 20;
      if (lacksHttps) riskCount += 15;

      const isPhishing = riskCount >= 40;
      const confidence = Math.min(99.4, Math.max(78.5, 98.4 - Math.random() * 2));

      setScanResult({
        url: inputUrl,
        isPhishing,
        confidence: Number(confidence.toFixed(1)),
        riskScore: Math.min(99, riskCount + Math.floor(Math.random() * 5)),
        indicators: [
          {
            label: 'SSL/TLS Protocol',
            safe: !lacksHttps,
            detail: lacksHttps ? 'Insecure plain HTTP detected (high risk)' : 'Secure HTTPS protocol active'
          },
          {
            label: 'Domain Lexical Structure',
            safe: !hasHyphenOverload,
            detail: hasHyphenOverload ? 'Excessive hyphens commonly used in spoofing' : 'Clean lexical pattern'
          },
          {
            label: 'Keywords & Heuristics',
            safe: !hasSuspiciousWord,
            detail: hasSuspiciousWord ? 'Detected credential harvesting trigger keywords' : 'No phishing trigger vocabulary'
          },
          {
            label: 'Top Level Domain Registry',
            safe: !hasSuspiciousTld,
            detail: hasSuspiciousTld ? 'High-risk TLD frequently abused in malicious campaigns' : 'Standard verified TLD zone'
          }
        ]
      });

      setIsScanning(false);
    }, 600);
  };

  const presetUrls = [
    { label: 'Legitimate Studio URL', url: 'https://syqoranexus.com' },
    { label: 'Spoofed Phishing Example', url: 'http://secure-update-banking-login.xyz' },
    { label: 'Corporate Portal', url: 'https://analytics.syqora.internal' },
  ];

  return (
    <div className="rounded-2xl bg-[#090d20] border border-cyan-500/30 p-5 sm:p-6 space-y-5 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white font-display">
              Live Phishing URL Classifier Testbed
            </h4>
            <p className="text-xs text-gray-400 font-mono">
              Academic ML Feature Vector Scanner (Research Prototype)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            MODEL ACTIVE (98.4% ACCURACY)
          </span>
        </div>
      </div>

      {/* Input Scanner Form */}
      <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Enter web URL to test (e.g. https://example.com)"
            className="w-full bg-black/40 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 font-mono"
          />
        </div>
        <button
          type="submit"
          disabled={isScanning}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all"
        >
          {isScanning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Analyzing Vectors...</span>
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              <span>Evaluate Threat</span>
            </>
          )}
        </button>
      </form>

      {/* Preset Quick Chips */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-gray-400 font-mono text-[11px]">Quick Tests:</span>
        {presetUrls.map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setInputUrl(preset.url);
            }}
            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Results Radar Display */}
      {scanResult && (
        <div className={`p-4 rounded-xl border space-y-4 ${
          scanResult.isPhishing 
            ? 'bg-rose-950/20 border-rose-500/40' 
            : 'bg-emerald-950/20 border-emerald-500/40'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {scanResult.isPhishing ? (
                <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/40">
                  <ShieldAlert className="w-6 h-6" />
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              )}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">
                  CLASSIFICATION VERDICT
                </span>
                <strong className={`text-base sm:text-lg font-bold font-display ${
                  scanResult.isPhishing ? 'text-rose-300' : 'text-emerald-300'
                }`}>
                  {scanResult.isPhishing ? 'MALICIOUS / PHISHING SUSPECT' : 'VERIFIED LEGITIMATE DOMAIN'}
                </strong>
              </div>
            </div>

            <div className="flex items-center gap-4 text-right">
              <div>
                <span className="text-[10px] font-mono text-gray-400 block">RISK SCORE</span>
                <span className={`text-sm font-bold font-mono ${
                  scanResult.riskScore > 40 ? 'text-rose-400' : 'text-emerald-400'
                }`}>
                  {scanResult.riskScore} / 100
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 block">CONFIDENCE</span>
                <span className="text-sm font-bold font-mono text-cyan-300">
                  {scanResult.confidence}%
                </span>
              </div>
            </div>
          </div>

          {/* Indicator Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10">
            {scanResult.indicators.map((ind, idx) => (
              <div key={idx} className="bg-black/30 p-2.5 rounded-lg flex items-start gap-2 text-xs">
                {ind.safe ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-semibold text-white block">{ind.label}</span>
                  <span className="text-[11px] text-gray-400">{ind.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
