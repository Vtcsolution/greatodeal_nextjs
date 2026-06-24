'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Palette, Code, FlaskConical, Rocket, Shield, Users, CheckCircle, ArrowRight, FileText, ChevronRight, ChevronDown, Activity, Brain, Cloud, Sparkles, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { RevealOnScroll, AnimatedCounter } from '@/components/ui/Animations';

const ease = [0.25, 0.1, 0.25, 1] as const;

const processSteps = [
  { number: '01', icon: Search, title: 'Discovery & Vision Alignment', desc: 'We define your business goals, target audience, and competitive landscape to craft a tailored roadmap.', highlights: ['Stakeholder Interviews', 'Market Research', 'Technical Feasibility', 'Risk Assessment'] },
  { number: '02', icon: Activity, title: 'Challenge Identification & Analysis', desc: 'In-depth analysis of your current systems, pain points, and opportunities to define the optimal solution strategy.', highlights: ['Gap Analysis', 'System Audit', 'Process Mapping', 'Priority Matrix'] },
  { number: '03', icon: Palette, title: 'Strategic Blueprint Creation', desc: 'User-centric wireframes, UI/UX mockups, and interactive prototypes to validate ideas fast.', highlights: ['UX Research', 'Wireframing', 'Prototyping', 'Design System'] },
  { number: '04', icon: Code, title: 'Precision Development & Innovation', desc: 'Agile sprints with CI/CD, code reviews, and AI-first thinking for scalable, production-ready software.', highlights: ['Agile Sprints', 'Code Reviews', 'CI/CD Pipeline', 'API Development'] },
  { number: '05', icon: Cloud, title: 'Building Your Digital Future', desc: 'Architecture for cloud-native scalability, microservices, containerization, and global deployment readiness.', highlights: ['Cloud Architecture', 'Microservices', 'Containerization', 'Auto-scaling'] },
  { number: '06', icon: Rocket, title: 'Seamless Delivery & Deployment', desc: 'Zero-downtime deployment to production with full monitoring, rollback plans, and go-live support.', highlights: ['Zero Downtime', 'Monitoring Setup', 'SSL/TLS Config', 'Performance Testing'] },
  { number: '07', icon: FlaskConical, title: 'Agile Iteration & Refinement', desc: 'Continuous improvement based on real user feedback, analytics data, and performance metrics.', highlights: ['A/B Testing', 'User Feedback', 'Performance Tuning', 'Feature Iteration'] },
  { number: '08', icon: Shield, title: 'Launch, Support & Long-Term Success', desc: 'Dedicated post-launch support, proactive maintenance, and continuous feature enhancements.', highlights: ['24/7 Monitoring', 'Bug Fixes', 'Security Patches', 'Feature Roadmap'] },
];

const phases = [
  { phase: 'Phase 1', title: 'Discovery & Strategic Planning', duration: '1-2 Weeks', icon: Search, desc: 'Comprehensive discovery sessions to understand your business, challenges, and goals.', activities: ['Initial consultation and requirement gathering', 'Business process analysis and workflow mapping', 'Technology stack assessment', 'Competitive analysis and market research', 'Risk assessment and mitigation planning', 'Budget allocation and resource planning'], deliverables: ['Detailed project scope document', 'Technology architecture proposal', 'Timeline and milestone roadmap', 'Cost breakdown and ROI projections'] },
  { phase: 'Phase 2', title: 'Design & Prototyping', duration: '2-3 Weeks', icon: Palette, desc: 'Intuitive designs and interactive prototypes that bring your vision to life.', activities: ['UX research and persona development', 'Information architecture and user flow mapping', 'Wireframing and low-fidelity prototypes', 'High-fidelity UI design with brand integration', 'Interactive prototypes for review', 'Design system creation'], deliverables: ['Complete UI/UX design mockups', 'Interactive clickable prototypes', 'Design system documentation', 'Accessibility compliance report'] },
  { phase: 'Phase 3', title: 'Development & Integration', duration: '6-12 Weeks', icon: Code, desc: 'Robust, scalable solutions using cutting-edge technologies and best practices.', activities: ['Agile sprint planning and task breakdown', 'Frontend development with responsive design', 'Backend API development and database design', 'AI/ML model integration and training', 'Third-party service integration', 'Continuous integration and automated testing'], deliverables: ['Fully functional MVP or complete application', 'API documentation and technical guides', 'Test coverage reports', 'Performance benchmarks'] },
  { phase: 'Phase 4', title: 'Testing & Quality Assurance', duration: '2-3 Weeks', icon: Shield, desc: 'Rigorous testing across all devices, browsers, and scenarios.', activities: ['Unit testing and integration testing', 'User acceptance testing (UAT)', 'Cross-browser and cross-device testing', 'Performance and load testing', 'Security penetration testing', 'Accessibility testing (WCAG)'], deliverables: ['Comprehensive test reports', 'Bug fix documentation', 'Performance optimization report', 'Security audit certificate'] },
  { phase: 'Phase 5', title: 'Deployment & Launch', duration: '1 Week', icon: Rocket, desc: 'Smooth deployment with zero downtime, monitoring, and immediate support.', activities: ['Production environment setup', 'Database migration and data integrity checks', 'Deployment automation and rollback planning', 'SSL certificate installation', 'Monitoring and analytics integration', 'Go-live coordination'], deliverables: ['Live production application', 'Deployment documentation', 'Monitoring dashboard setup', 'Launch report and analytics baseline'] },
  { phase: 'Phase 6', title: 'Training & Support', duration: 'Ongoing', icon: Users, desc: 'Comprehensive training and continuous support for long-term success.', activities: ['Admin panel and system training', 'User documentation and video tutorials', 'Knowledge base creation', '24/7 technical support setup', 'Regular maintenance and updates', 'Feature enhancement planning'], deliverables: ['Training materials and documentation', 'Support ticket system access', 'Maintenance schedule', 'Enhancement roadmap'] },
];

const methodologies = [
  { title: 'Agile Development', icon: Activity, desc: 'We use agile with 2-week sprints, daily stand-ups, and continuous delivery for flexibility and rapid iteration.', benefits: ['Faster time to market', 'Continuous feedback loops', 'Adaptive to changes', 'Regular deliverables'] },
  { title: 'AI-First Approach', icon: Brain, desc: 'Every solution considers AI integration from the ground up, ensuring your product is future-ready.', benefits: ['Intelligent automation', 'Predictive analytics', 'Personalized experiences', 'Data-driven insights'] },
  { title: 'Security by Design', icon: Shield, desc: 'Security built into every layer. We follow OWASP guidelines, implement encryption, and conduct regular audits.', benefits: ['GDPR & HIPAA compliant', 'End-to-end encryption', 'Regular security audits', 'Penetration testing'] },
  { title: 'Scalable Architecture', icon: Cloud, desc: 'Solutions that grow with your business using cloud-native technologies, microservices, and containerization.', benefits: ['Auto-scaling infrastructure', 'Microservices architecture', 'Load balancing', '99.9% uptime SLA'] },
];

const metrics = [
  { value: '98%', label: 'Code Quality', desc: 'Test coverage and clean code' },
  { value: '4.9/5', label: 'Client Satisfaction', desc: 'Average from 200+ projects' },
  { value: '95%', label: 'On-Time Delivery', desc: 'Within planned timeline' },
  { value: '92%', label: 'Bug-Free Launch', desc: 'Zero critical bugs at launch' },
];

const tools = [
  { name: 'GitHub', cat: 'Version Control' }, { name: 'Jira', cat: 'Project Management' },
  { name: 'Figma', cat: 'Design' }, { name: 'Docker', cat: 'DevOps' },
  { name: 'AWS', cat: 'Cloud' }, { name: 'Slack', cat: 'Communication' },
  { name: 'Postman', cat: 'API Testing' }, { name: 'TensorFlow', cat: 'AI/ML' },
];

const faqs = [
  { q: 'What is your typical project timeline from start to finish?', a: 'Project timelines vary based on complexity, but a typical custom software project takes 3-6 months from discovery to launch. MVP projects can be completed in 6-8 weeks, while enterprise-scale solutions may take 6-12 months.' },
  { q: 'How do you ensure the quality and security of the software?', a: 'We implement comprehensive testing including unit, integration, UAT, and security penetration testing. We follow OWASP guidelines, implement encryption, and maintain 95%+ test coverage with regular security audits.' },
  { q: 'What happens after the project is launched?', a: 'Post-launch we provide bug fixes, performance monitoring, security updates, and feature enhancements. We offer flexible maintenance packages with 24/7 support options and quarterly review meetings.' },
  { q: 'Can you work with our existing systems and integrate with third-party services?', a: 'Absolutely! We specialize in seamless integration with existing systems — ERP, CRM, payment gateways, analytics platforms, and custom APIs using REST, GraphQL, and webhooks.' },
  { q: 'How do you handle changes or new requirements during development?', a: 'Our agile methodology is built for flexibility. We conduct sprint planning every two weeks where we can reprioritize features. Major scope changes are documented with impact analysis on timeline and budget.' },
  { q: 'What makes Greatodeal different from other development agencies?', a: 'Our AI-first approach, 9+ years of experience, 120+ engineers, and end-to-end delivery model set us apart. We combine technical excellence with strategic thinking and offer 60%+ cost savings vs US/UK agencies.' },
];

export default function HowWeWorkClient() {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-200 overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#0B1120]" />
        <div className="container max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease }}>
                Our Dynamic<br /><span className="text-[#6EE7B7]">Development Journey</span>
              </motion.h1>
              <motion.p className="text-gray-400 max-w-xl leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease }}>
                From initial discovery to final deployment, we follow a structured, transparent process to deliver innovative solutions that meet your business goals. Our proven methodology combines agile development, AI-first thinking, and unwavering quality standards.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7, ease }}>
                {['95% On-Time Delivery', '200+ Projects Completed', '4.9/5 Client Rating'].map(s => (
                  <div key={s} className="flex items-center gap-2 px-4 py-2 bg-[#111827] border border-gray-700/50 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-[#6EE7B7]" /><span className="text-sm">{s}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div className="flex gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9, ease }}>
                <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 border border-[#6EE7B7]/40 text-[#6EE7B7] rounded-lg font-semibold hover:bg-[#6EE7B7]/5 transition-all duration-500">
                  Get a cost estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
            <motion.div className="hidden lg:block" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5, ease }}>
              <div className="rounded-2xl overflow-hidden border-2 border-[#6EE7B7]/20 shadow-2xl"><img src="/images/howwork.png" alt="Greatodeal Development Team" className="w-full h-[500px] object-cover" /></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 8-STEP PROCESS ═══ */}
      <section className="py-24 bg-gradient-to-b from-[#0B1120] to-[#111827]">
        <div className="container max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <span className="text-[#6EE7B7] text-xs font-bold tracking-[0.2em] uppercase block mb-3">OUR METHODOLOGY</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">8-Step Development Process</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Every great product starts with a great process. Here&apos;s how we transform your vision into reality through our battle-tested methodology that has delivered 200+ successful projects.</p>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div key={i} className="group relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}>
                  <div className="relative bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 rounded-2xl h-full border border-gray-700/50 hover:border-[#6EE7B7]/40 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[#6EE7B7]/5 hover:scale-[1.02]">
                    {/* Hover bg glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Shine sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE7B7]/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    {/* Step badge */}
                    <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-[#6EE7B7]/10 border border-[#6EE7B7]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-[#6EE7B7]">{step.number}</span>
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-[#6EE7B7]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <StepIcon className="w-6 h-6 text-[#6EE7B7]" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[#6EE7B7] transition-colors duration-300">{step.title}</h3>
                      <p className="text-gray-400 mb-5 leading-relaxed text-sm">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.highlights.map(h => (
                          <span key={h} className="text-xs px-3 py-1 bg-[#6EE7B7]/10 text-[#6EE7B7] rounded-full border border-[#6EE7B7]/20">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ DEEP DIVE PHASES ═══ */}
      <section className="py-24 bg-gradient-to-b from-[#111827] to-[#0B1120]">
        <div className="container max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <span className="text-[#6EE7B7] text-xs font-bold tracking-[0.2em] uppercase block mb-3">DETAILED BREAKDOWN</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Deep Dive Into Each Phase</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Click on any phase to explore the detailed activities, deliverables, and timeline involved in bringing your project to life.</p>
          </RevealOnScroll>
          <div className="space-y-4">
            {phases.map((phase, i) => {
              const PhIcon = phase.icon;
              const isOpen = activePhase === i;
              return (
                <motion.div key={i} className="bg-gradient-to-br from-[#111827] to-[#0B1120] rounded-2xl border border-gray-700/50 overflow-hidden hover:border-[#6EE7B7]/30 transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <button onClick={() => setActivePhase(isOpen ? null : i)} className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-[#6EE7B7]/5 transition-colors duration-300">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#6EE7B7]/10 flex items-center justify-center shrink-0"><PhIcon className="w-6 h-6 text-[#6EE7B7]" /></div>
                      <div>
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <span className="text-xs font-bold text-[#6EE7B7] uppercase tracking-wider">{phase.phase}</span>
                          <span className="text-xs px-2.5 py-0.5 bg-[#6EE7B7]/10 text-[#6EE7B7] rounded-full border border-[#6EE7B7]/20">{phase.duration}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold">{phase.title}</h3>
                        <p className="text-gray-400 text-sm mt-1 hidden sm:block">{phase.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-[#6EE7B7] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-6 sm:px-8 pb-8">
                        <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-700/50">
                          <div>
                            <h4 className="font-bold mb-4 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#6EE7B7]" />Key Activities</h4>
                            <ul className="space-y-2">{phase.activities.map((a, ai) => (<li key={ai} className="flex items-start gap-2 text-sm text-gray-400"><CheckCircle className="w-4 h-4 text-[#6EE7B7] shrink-0 mt-0.5" />{a}</li>))}</ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-4 flex items-center gap-2"><FileText className="w-4 h-4 text-[#6EE7B7]" />Deliverables</h4>
                            <ul className="space-y-2">{phase.deliverables.map((d, di) => (<li key={di} className="flex items-start gap-2 text-sm text-gray-400"><Sparkles className="w-4 h-4 text-[#6EE7B7] shrink-0 mt-0.5" />{d}</li>))}</ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES US DIFFERENT ═══ */}
      <section className="py-24 bg-gradient-to-b from-[#0B1120] to-[#111827]">
        <div className="container max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <span className="text-[#6EE7B7] text-xs font-bold tracking-[0.2em] uppercase block mb-3">OUR APPROACH</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">We combine proven methodologies with innovative approaches to deliver exceptional results.</p>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            {methodologies.map((m, i) => {
              const MIcon = m.icon;
              return (
                <motion.div key={i} className="group bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 rounded-2xl border border-gray-700/50 hover:border-[#6EE7B7]/40 transition-all duration-500 overflow-hidden relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-[#6EE7B7]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"><MIcon className="w-7 h-7 text-[#6EE7B7]" /></div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#6EE7B7] transition-colors duration-300">{m.title}</h3>
                    <p className="text-gray-400 mb-5 leading-relaxed text-sm">{m.desc}</p>
                    <div className="space-y-2">{m.benefits.map((b, bi) => (<div key={bi} className="flex items-center gap-2 text-sm text-gray-400"><CheckCircle className="w-4 h-4 text-[#6EE7B7] shrink-0" />{b}</div>))}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TRACK RECORD ═══ */}
      <section className="py-24 bg-gradient-to-b from-[#111827] to-[#0B1120]">
        <div className="container max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <span className="text-[#6EE7B7] text-xs font-bold tracking-[0.2em] uppercase block mb-3">PROVEN RESULTS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Track Record Speaks</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div key={i} className="text-center group" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 rounded-2xl border border-gray-700/50 hover:border-[#6EE7B7]/40 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl font-bold text-[#6EE7B7] mb-2">{m.value}</div>
                  <div className="text-lg font-bold mb-1">{m.label}</div>
                  <div className="text-sm text-gray-400">{m.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOOLS ═══ */}
      <section className="py-24 bg-gradient-to-b from-[#0B1120] to-[#111827]">
        <div className="container max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <span className="text-[#6EE7B7] text-xs font-bold tracking-[0.2em] uppercase block mb-3">OUR TOOLKIT</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Tools We Use Daily</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Industry-leading tools and platforms that power our development process and ensure seamless collaboration.</p>
          </RevealOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map((t, i) => (
              <motion.div key={i} className="bg-gradient-to-br from-[#111827] to-[#0B1120] p-5 rounded-xl border border-gray-700/50 hover:border-[#6EE7B7]/40 transition-all duration-300 hover:scale-105 text-center group" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="text-lg font-bold group-hover:text-[#6EE7B7] transition-colors duration-300">{t.name}</div>
                <div className="text-xs text-gray-400 mt-1">{t.cat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 bg-gradient-to-b from-[#111827] to-[#0B1120]">
        <div className="container max-w-7xl">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Find what you need to know about our development process.</p>
          </RevealOnScroll>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <motion.div key={i} className="bg-gradient-to-br from-[#111827] to-[#0B1120] rounded-xl border border-gray-700/50 overflow-hidden" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <button onClick={() => setActiveFaq(isOpen ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#6EE7B7]/5 transition-colors duration-300">
                    <span className="font-medium text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#6EE7B7] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-6 pb-5">
                        <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-28">
        <div className="container max-w-7xl">
          <motion.div className="text-center max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
            <span className="text-[#6EE7B7] text-xs font-bold tracking-[0.2em] uppercase block mb-4">LET&apos;S WORK TOGETHER</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Let&apos;s Transform Your Vision Into<br /><span className="text-[#6EE7B7]">Reality</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">Join 200+ successfully delivered projects as we create scalable, innovative, and high-performance solutions for your business.</p>
            <Link href="/contact" className="btn-primary group">
              Let&apos;s Discuss Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
