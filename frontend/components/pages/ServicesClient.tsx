'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Globe, Smartphone, Brain, Cloud, Settings, Palette, Code2, Rocket,
  Zap, BarChart3, Database, Bot, Users, Clock, Award, Layers, Shield, Search,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/Animations';

const ease = [0.25, 0.1, 0.25, 1] as const;

const processSteps = [
  { num: '01', icon: Search, title: 'Discovery & Strategy', desc: 'We dive deep into your business goals, challenges, and vision to craft a tailored roadmap.', color: '#6EE7B7' },
  { num: '02', icon: Palette, title: 'Design & Prototyping', desc: 'User-centric wireframes, UI/UX mockups, and interactive prototypes to validate ideas fast.', color: '#60A5FA' },
  { num: '03', icon: Code2, title: 'Development & Testing', desc: 'Agile sprints with CI/CD, code reviews, and comprehensive QA at every stage.', color: '#A78BFA' },
  { num: '04', icon: Rocket, title: 'Launch & Support', desc: 'Zero-downtime deployment, 24/7 monitoring, and ongoing maintenance for your success.', color: '#F472B6' },
];

const techStack = [
  'React / Next.js', 'Node.js / NestJS', 'Python / FastAPI', 'Flutter / React Native',
  'AWS / GCP / Azure', 'Docker / Kubernetes', 'PostgreSQL / MongoDB', 'TensorFlow / PyTorch',
  'GraphQL / REST', 'Redis / Supabase',
];

const solutions: Array<{ icon: LucideIcon; title: string; color: string; path: string }> = [
  { icon: Globe, title: 'Website Development', color: '#6EE7B7', path: '/services/web-apps' },
  { icon: Smartphone, title: 'Mobile Applications (Android/iOS)', color: '#60A5FA', path: '/services/mobile-apps' },
  { icon: Settings, title: 'Custom Software Development', color: '#22D3EE', path: '/services/custom-software' },
  { icon: Cloud, title: 'AI SaaS Platforms', color: '#6EE7B7', path: '/services/ai-saas-platform' },
  { icon: Brain, title: 'AI & Machine Learning Solutions', color: '#F472B6', path: '/services/machine-learning-ai' },
  { icon: Palette, title: 'UI/UX Design', color: '#A78BFA', path: '/services/ui-ux-design' },
  { icon: Database, title: 'API Development & Integration', color: '#34D399', path: '/services/api-development' },
  { icon: Bot, title: 'Software Testing & QA', color: '#FB923C', path: '/services/software-testing' },
  { icon: Zap, title: 'IT Infrastructure & DevOps', color: '#FBBF24', path: '/services/it-infrastructure' },
  { icon: BarChart3, title: 'Business Intelligence & Analytics', color: '#818CF8', path: '/contact' },
];

const whyUs: Array<{ icon: LucideIcon; title: string }> = [
  { icon: Layers, title: 'End-to-End Solutions' },
  { icon: Users, title: 'Expert Team' },
  { icon: Zap, title: 'Agile Process' },
  { icon: Shield, title: 'Scalable Architecture' },
  { icon: Clock, title: '24/7 Support' },
  { icon: Award, title: 'Proven Results' },
];

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-[#090909] text-white overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-[#6EE7B7]/[0.05] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 -left-40 w-[400px] h-[400px] bg-[#3B82F6]/[0.05] rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(110,231,183,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,183,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
        <div className="container max-w-7xl relative z-10 text-center px-4 sm:px-6">
          <motion.div className="text-[#6EE7B7] text-base font-bold tracking-[0.2em] uppercase mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            OUR SERVICES
          </motion.div>
          <motion.h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }}>
            Build the Future<br /><span className="bg-gradient-to-r from-[#6EE7B7] via-[#34D399] to-[#3B82F6] bg-clip-text text-transparent">With Greatodeal</span>
          </motion.h1>
          <motion.p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-[1.8] mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease }}>
            From cutting-edge web apps to AI-driven SaaS platforms — we deliver scalable, secure, and innovative solutions tailored to your vision.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8, ease }}>
            <Link href="/contact" className="btn-primary group text-lg">
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-20 sm:py-28 bg-[#060606] border-y border-white/[0.04]">
        <div className="container max-w-7xl px-4 sm:px-6">
          <RevealOnScroll className="text-center mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight">How We Deliver Excellence</h2>
            <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">A proven, transparent process from idea to launch and beyond.</p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={i}
                  className="group relative bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/[0.06] hover:border-[#6EE7B7]/30 transition-all duration-700 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease }}
                  whileHover={{ y: -6, transition: { duration: 0.4 } }}
                >
                  <div className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight" style={{ color: step.color }}>{step.num}</div>
                  <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center" style={{ backgroundColor: step.color + '12' }}>
                    <StepIcon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-base text-white/60 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="py-20 sm:py-28 bg-[#090909]">
        <div className="container max-w-7xl px-4 sm:px-6">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight">Built With Cutting-Edge Tech</h2>
            <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">We use the best tools to deliver fast, secure, and scalable solutions.</p>
          </RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-5 sm:px-6 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-base text-white/70 font-medium hover:border-[#6EE7B7]/30 hover:text-[#6EE7B7] transition-all duration-500 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS GRID ═══ */}
      <section className="py-20 sm:py-28 bg-[#060606] border-y border-white/[0.04]">
        <div className="container max-w-7xl px-4 sm:px-6">
          <RevealOnScroll className="text-center mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight">Solutions Tailored for Your Digital Transformation</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">At Greatodeal, we don&apos;t just build software — we create digital experiences that empower businesses to scale, adapt, and thrive in a competitive world.</p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {solutions.map((sol, i) => {
              const SolIcon = sol.icon;
              return (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease }}
                >
                  <Link href={sol.path} className="group flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#6EE7B7]/30 transition-all duration-700 hover:translate-x-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: sol.color + '12' }}>
                      <SolIcon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: sol.color }} />
                    </div>
                    <span className="font-semibold text-base sm:text-lg text-white/80 group-hover:text-white transition-colors duration-500">{sol.title}</span>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#6EE7B7] ml-auto shrink-0 transition-all duration-500 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY PARTNER WITH US ═══ */}
      <section className="py-20 sm:py-28 bg-[#090909]">
        <div className="container max-w-7xl px-4 sm:px-6">
          <RevealOnScroll className="text-center mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Why Partner With Us</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {whyUs.map((item, i) => {
              const WIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#6EE7B7]/20 transition-all duration-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#6EE7B7]/[0.06] border border-[#6EE7B7]/[0.08] flex items-center justify-center shrink-0">
                    <WIcon className="w-6 h-6 text-[#6EE7B7]" />
                  </div>
                  <span className="font-semibold text-base sm:text-lg text-white">{item.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#6EE7B7]/[0.04] rounded-full blur-[180px]" />
        </div>
        <div className="container max-w-7xl px-4 sm:px-6 relative z-10">
          <motion.div className="text-center max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to Build Something Great?</h2>
            <p className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed">Let&apos;s discuss how our services can accelerate your growth.</p>
            <Link href="/contact" className="btn-primary group text-lg">
              Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
