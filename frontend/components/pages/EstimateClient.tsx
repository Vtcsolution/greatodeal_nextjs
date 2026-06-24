'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, Globe, Smartphone, Brain, Settings, Cloud, Link2, Palette, Shield, Sparkles, Calculator } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ease = [0.25, 0.1, 0.25, 1] as const;

const services: Array<{ id: string; label: string; Icon: LucideIcon; basePrice: number }> = [
  { id: 'web', label: 'Web Application', Icon: Globe, basePrice: 5000 },
  { id: 'mobile', label: 'Mobile App', Icon: Smartphone, basePrice: 8000 },
  { id: 'ai', label: 'AI / ML Solution', Icon: Brain, basePrice: 12000 },
  { id: 'erp', label: 'ERP / Custom Software', Icon: Settings, basePrice: 15000 },
  { id: 'saas', label: 'SaaS Platform', Icon: Cloud, basePrice: 20000 },
  { id: 'api', label: 'API Development', Icon: Link2, basePrice: 3000 },
  { id: 'uiux', label: 'UI/UX Design', Icon: Palette, basePrice: 2000 },
  { id: 'infra', label: 'IT Infrastructure', Icon: Shield, basePrice: 4000 },
];

const complexities = [
  { id: 'simple', label: 'Simple', desc: 'Basic features, 1–2 user roles, no integrations', multiplier: 1 },
  { id: 'moderate', label: 'Moderate', desc: '5–10 features, 2–3 roles, 1–2 integrations', multiplier: 2 },
  { id: 'complex', label: 'Complex', desc: '10–20 features, multiple roles, several integrations', multiplier: 3.5 },
  { id: 'enterprise', label: 'Enterprise', desc: '20+ features, microservices, advanced AI, compliance', multiplier: 6 },
];

const platforms: Array<{ id: string; label: string; Icon: LucideIcon; add: number }> = [
  { id: 'web', label: 'Web Only', Icon: Globe, add: 0 },
  { id: 'ios', label: 'iOS App', Icon: Smartphone, add: 3000 },
  { id: 'android', label: 'Android App', Icon: Smartphone, add: 3000 },
  { id: 'both-mobile', label: 'iOS + Android', Icon: Smartphone, add: 5000 },
  { id: 'all', label: 'Web + Mobile', Icon: Globe, add: 7000 },
];

const timelines = [
  { id: 'asap', label: 'ASAP (Rush)', desc: 'Under 1 month', multiplier: 1.5 },
  { id: '1-3', label: '1–3 Months', desc: 'Standard pace', multiplier: 1 },
  { id: '3-6', label: '3–6 Months', desc: 'Relaxed schedule', multiplier: 0.9 },
  { id: '6+', label: '6+ Months', desc: 'Long-term project', multiplier: 0.85 },
];

const budgetRanges = [
  'Under $5,000', '$5,000–$15,000', '$15,000–$30,000', '$30,000–$60,000', '$60,000–$100,000', '$100,000+',
];

interface Answers {
  services: string[];
  complexity: string;
  platforms: string[];
  timeline: string;
  features: string[];
  budget: string;
  name: string;
  email: string;
  company: string;
}

const extraFeatures = [
  { id: 'auth', label: 'User Authentication & Roles', add: 1500 },
  { id: 'payments', label: 'Payment Gateway Integration', add: 2000 },
  { id: 'ai-chat', label: 'AI Chatbot / Assistant', add: 3000 },
  { id: 'analytics', label: 'Analytics Dashboard', add: 1500 },
  { id: 'notifications', label: 'Push / Email Notifications', add: 800 },
  { id: 'multilingual', label: 'Multi-language Support', add: 1200 },
  { id: 'offline', label: 'Offline Mode (Mobile)', add: 2000 },
  { id: 'admin', label: 'Admin Panel', add: 2500 },
];

export default function EstimateClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    services: [], complexity: '', platforms: [], timeline: '', features: [], budget: '', name: '', email: '', company: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const steps = [
    'Service Type', 'Complexity', 'Platform', 'Timeline', 'Features', 'Budget', 'Contact',
  ];

  const toggleArray = (key: 'services' | 'platforms' | 'features', val: string) => {
    setAnswers(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }));
  };

  const calcEstimate = () => {
    const serviceBase = answers.services.reduce((sum, sid) => sum + (services.find(s => s.id === sid)?.basePrice || 0), 0) || 5000;
    const complexMult = complexities.find(c => c.id === answers.complexity)?.multiplier || 1;
    const platformAdd = answers.platforms.reduce((sum, pid) => sum + (platforms.find(p => p.id === pid)?.add || 0), 0);
    const featureAdd = answers.features.reduce((sum, fid) => sum + (extraFeatures.find(f => f.id === fid)?.add || 0), 0);
    const timeMult = timelines.find(t => t.id === answers.timeline)?.multiplier || 1;
    return Math.round((serviceBase * complexMult + platformAdd + featureAdd) * timeMult);
  };

  const canNext = () => {
    if (step === 0) return answers.services.length > 0;
    if (step === 1) return answers.complexity !== '';
    if (step === 2) return answers.platforms.length > 0;
    if (step === 3) return answers.timeline !== '';
    if (step === 4) return true;
    if (step === 5) return answers.budget !== '';
    if (step === 6) return answers.name && answers.email;
    return false;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const estimate = calcEstimate();
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: answers.name,
          email: answers.email,
          company: answers.company,
          countryCode: 'US',
          services: answers.services.join(', '),
          message: `Estimate Request:\nServices: ${answers.services.join(', ')}\nComplexity: ${answers.complexity}\nPlatforms: ${answers.platforms.join(', ')}\nTimeline: ${answers.timeline}\nExtra Features: ${answers.features.join(', ')}\nBudget: ${answers.budget}\nEstimated Cost: $${estimate.toLocaleString()}`,
        }),
      });
      setSubmitted(true);
    } catch { setSubmitted(true); } finally { setSubmitting(false); }
  };

  const estimate = step >= 4 ? calcEstimate() : 0;

  if (submitted) {
    const finalEstimate = calcEstimate();
    return (
      <div className="min-h-screen bg-[#090909] flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-[#6EE7B7]/20 border-2 border-[#6EE7B7] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#6EE7B7]" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Your Estimate is Ready!</h2>
          <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/[0.04] mb-6">
            <div className="text-[#777] text-sm mb-2">Estimated Project Cost</div>
            <div className="text-5xl font-bold text-[#6EE7B7] mb-2">${finalEstimate.toLocaleString()}</div>
            <div className="text-[#777] text-xs">This is a rough estimate. Final pricing depends on detailed requirements.</div>
          </div>
          <p className="text-[#777] mb-6">Our team will contact <strong className="text-[#E5E7EB]">{answers.email}</strong> within 24 hours with a detailed proposal.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Talk to an Expert
            </Link>
            <Link href="/" className="px-6 py-3 border border-white/[0.04] rounded-lg font-semibold hover:border-[#6EE7B7] transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090909] text-[#E5E7EB]">
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-[#6EE7B7]/[0.05] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-[#3B82F6]/[0.05] rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(110,231,183,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,183,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
        <div className="container max-w-7xl relative z-10 text-center">
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full text-sm text-[#6EE7B7] mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Calculator className="w-3.5 h-3.5" /><span className="text-[13px] font-medium">Free Cost Calculator</span>
          </motion.div>
          <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }}>
            Get a Free{' '}<span className="bg-gradient-to-r from-[#6EE7B7] via-[#34D399] to-[#3B82F6] bg-clip-text text-transparent">Cost Estimate</span>
          </motion.h1>
          <motion.p className="text-[17px] text-[#888] max-w-xl mx-auto leading-[1.7]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease }}>
            Answer 7 quick questions and get an instant project cost estimate.
          </motion.p>
        </div>
      </section>

      {/* Progress */}
      <div className="sticky top-[64px] lg:top-[80px] z-20 bg-[#090909]/95 backdrop-blur-md border-y border-white/[0.04] py-4">
        <div className="container max-w-7xl">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs text-[#555] font-medium uppercase tracking-wider">Step {step + 1} of {steps.length}</span>
            <span className="text-xs text-[#6EE7B7] font-medium">{steps[step]}</span>
          </div>
          <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] rounded-full" animate={{ width: `${((step + 1) / steps.length) * 100}%` }} transition={{ duration: 0.5, ease }} />
          </div>
        </div>
      </div>

      {/* Step Content */}
      <section className="py-12">
        <div className="container max-w-7xl max-w-4xl mx-auto">
          {/* Live Estimate Badge */}
          <AnimatePresence>
            {step >= 4 && (
              <motion.div className="mb-8 p-5 bg-[#6EE7B7]/[0.04] border border-[#6EE7B7]/20 rounded-2xl flex items-center justify-between" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <span className="text-sm text-[#888] font-medium">Running Estimate</span>
                <span className="text-2xl font-bold text-[#6EE7B7] tracking-tight">${estimate.toLocaleString()}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 0: Services */}
          {step === 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-3">What do you need built?</h2>
              <p className="text-[#777] mb-8">Select all that apply</p>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map(s => {
                  const SIcon = s.Icon;
                  return (
                    <button key={s.id} onClick={() => toggleArray('services', s.id)}
                      className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all ${answers.services.includes(s.id) ? 'border-[#6EE7B7] bg-[#6EE7B7]/10' : 'border-white/[0.04] bg-white/[0.02] hover:border-[#6EE7B7]/50'}`}>
                      <div className="w-10 h-10 rounded-lg bg-[#6EE7B7]/10 border border-[#6EE7B7]/20 flex items-center justify-center flex-shrink-0">
                        <SIcon className="w-5 h-5 text-[#6EE7B7]" />
                      </div>
                      <div>
                        <div className="font-semibold">{s.label}</div>
                        <div className="text-xs text-[#777]">From ${s.basePrice.toLocaleString()}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 1: Complexity */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-3">How complex is your project?</h2>
              <p className="text-[#777] mb-8">Choose the closest match</p>
              <div className="grid md:grid-cols-2 gap-4">
                {complexities.map(c => (
                  <button key={c.id} onClick={() => setAnswers(prev => ({ ...prev, complexity: c.id }))}
                    className={`p-5 rounded-2xl border-2 text-left transition-all ${answers.complexity === c.id ? 'border-[#6EE7B7] bg-[#6EE7B7]/10' : 'border-white/[0.04] bg-white/[0.02] hover:border-[#6EE7B7]/50'}`}>
                    <div className="font-bold mb-1">{c.label}</div>
                    <div className="text-sm text-[#777]">{c.desc}</div>
                    <div className="text-xs text-[#6EE7B7] mt-2">×{c.multiplier} cost multiplier</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Platforms */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-3">Which platforms?</h2>
              <p className="text-[#777] mb-8">Select all platforms you need</p>
              <div className="grid md:grid-cols-2 gap-4">
                {platforms.map(p => {
                  const PIcon = p.Icon;
                  return (
                    <button key={p.id} onClick={() => toggleArray('platforms', p.id)}
                      className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all ${answers.platforms.includes(p.id) ? 'border-[#6EE7B7] bg-[#6EE7B7]/10' : 'border-white/[0.04] bg-white/[0.02] hover:border-[#6EE7B7]/50'}`}>
                      <div className="w-10 h-10 rounded-lg bg-[#6EE7B7]/10 border border-[#6EE7B7]/20 flex items-center justify-center flex-shrink-0">
                        <PIcon className="w-5 h-5 text-[#6EE7B7]" />
                      </div>
                      <div>
                        <div className="font-semibold">{p.label}</div>
                        {p.add > 0 && <div className="text-xs text-[#777]">+${p.add.toLocaleString()}</div>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Timeline */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-3">What's your timeline?</h2>
              <p className="text-[#777] mb-8">Rush projects may cost more</p>
              <div className="grid md:grid-cols-2 gap-4">
                {timelines.map(t => (
                  <button key={t.id} onClick={() => setAnswers(prev => ({ ...prev, timeline: t.id }))}
                    className={`p-5 rounded-2xl border-2 text-left transition-all ${answers.timeline === t.id ? 'border-[#6EE7B7] bg-[#6EE7B7]/10' : 'border-white/[0.04] bg-white/[0.02] hover:border-[#6EE7B7]/50'}`}>
                    <div className="font-bold mb-1">{t.label}</div>
                    <div className="text-sm text-[#777]">{t.desc}</div>
                    {t.multiplier !== 1 && <div className={`text-xs mt-2 ${t.multiplier > 1 ? 'text-red-400' : 'text-green-400'}`}>{t.multiplier > 1 ? `+${Math.round((t.multiplier - 1) * 100)}% rush fee` : `-${Math.round((1 - t.multiplier) * 100)}% discount`}</div>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Extra Features */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-3">Any extra features?</h2>
              <p className="text-[#777] mb-8">Select all extras you need (optional)</p>
              <div className="grid md:grid-cols-2 gap-4">
                {extraFeatures.map(f => (
                  <button key={f.id} onClick={() => toggleArray('features', f.id)}
                    className={`flex items-center justify-between p-5 rounded-2xl border-2 text-left transition-all ${answers.features.includes(f.id) ? 'border-[#6EE7B7] bg-[#6EE7B7]/10' : 'border-white/[0.04] bg-white/[0.02] hover:border-[#6EE7B7]/50'}`}>
                    <span className="font-medium text-sm">{f.label}</span>
                    <span className="text-xs text-[#6EE7B7]">+${f.add.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Budget */}
          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold mb-3">What's your budget range?</h2>
              <p className="text-[#777] mb-8">This helps us tailor our proposal</p>
              <div className="grid md:grid-cols-2 gap-4">
                {budgetRanges.map(b => (
                  <button key={b} onClick={() => setAnswers(prev => ({ ...prev, budget: b }))}
                    className={`p-5 rounded-2xl border-2 text-left font-medium transition-all ${answers.budget === b ? 'border-[#6EE7B7] bg-[#6EE7B7]/10' : 'border-white/[0.04] bg-white/[0.02] hover:border-[#6EE7B7]/50'}`}>
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Contact */}
          {step === 6 && (
            <div>
              <h2 className="text-2xl font-bold mb-3">Where do we send your estimate?</h2>
              <p className="text-[#777] mb-8">Fill in your details for a detailed proposal</p>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name *" required value={answers.name} onChange={e => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.04] rounded-lg focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7]/20 outline-none transition-all" />
                <input type="email" placeholder="Email Address *" required value={answers.email} onChange={e => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.04] rounded-lg focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7]/20 outline-none transition-all" />
                <input type="text" placeholder="Company / Startup (optional)" value={answers.company} onChange={e => setAnswers(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.04] rounded-lg focus:border-[#6EE7B7] focus:ring-2 focus:ring-[#6EE7B7]/20 outline-none transition-all" />

                {/* Summary */}
                <div className="p-5 bg-[#060606] rounded-2xl border border-white/[0.04] space-y-3 text-sm">
                  <div className="font-semibold text-[#6EE7B7] mb-3">Project Summary</div>
                  <div className="flex justify-between"><span className="text-[#777]">Services</span><span className="text-right max-w-xs">{answers.services.map(s => services.find(sv => sv.id === s)?.label).join(', ')}</span></div>
                  <div className="flex justify-between"><span className="text-[#777]">Complexity</span><span className="capitalize">{answers.complexity}</span></div>
                  <div className="flex justify-between"><span className="text-[#777]">Platforms</span><span>{answers.platforms.map(p => platforms.find(pv => pv.id === p)?.label).join(', ')}</span></div>
                  <div className="flex justify-between"><span className="text-[#777]">Timeline</span><span>{timelines.find(t => t.id === answers.timeline)?.label}</span></div>
                  <div className="flex justify-between"><span className="text-[#777]">Budget</span><span>{answers.budget}</span></div>
                  <div className="flex justify-between border-t border-white/[0.04] pt-3 mt-3">
                    <span className="font-bold">Rough Estimate</span>
                    <span className="text-xl font-bold text-[#6EE7B7]">${calcEstimate().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <button onClick={() => setStep(s => s - 1)} disabled={step === 0}
              className="flex items-center gap-2 px-6 py-3 border border-white/[0.06] rounded-xl text-[#777] hover:border-[#6EE7B7]/30 hover:text-white transition-all duration-700 disabled:opacity-20 disabled:cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            {step < steps.length - 1 ? (
              <button onClick={() => setStep(s => s + 1)} disabled={!canNext()}
                className="btn-primary group disabled:opacity-40 disabled:cursor-not-allowed">
                Next <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={!canNext() || submitting}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed">
                <CheckCircle className="w-4 h-4" />
                {submitting ? 'Sending...' : 'Get My Estimate'}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
