'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingCart, Banknote, Shield, Activity, GraduationCap, Factory,
  Package, Store, Building2, Plane, Radio, Zap, Cloud, Bot,
  Rocket, Gamepad2, Briefcase, Landmark, ArrowRight, Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/Animations';

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Industry {
  icon: LucideIcon; name: string; desc: string; path: string; tags: string[]; color: string; accent: string;
}

const industries: Industry[] = [
  { icon: ShoppingCart, name: 'E-Commerce', desc: 'Custom e-commerce platforms, marketplace development, inventory management, and omnichannel retail solutions.', path: '/industries/ecommerce', tags: ['Online Stores', 'Marketplace', 'Inventory', 'Omnichannel'], color: 'text-emerald-400', accent: '#34D399' },
  { icon: Banknote, name: 'Fintech & Banking', desc: 'Core banking systems, digital wallets, payment gateways, fraud detection, and regulatory compliance platforms.', path: '/industries/banking', tags: ['Digital Banking', 'Payments', 'KYC/AML', 'Open Banking'], color: 'text-blue-400', accent: '#60A5FA' },
  { icon: Shield, name: 'Insurance', desc: 'Policy management systems, claims automation, underwriting tools, and InsurTech platforms for modern insurers.', path: '/contact', tags: ['Policy Management', 'Claims', 'Underwriting', 'InsurTech'], color: 'text-indigo-400', accent: '#818CF8' },
  { icon: Activity, name: 'Healthcare', desc: 'Electronic health records (EHR), telemedicine platforms, hospital management systems, and HIPAA-compliant analytics.', path: '/contact', tags: ['EHR', 'Telemedicine', 'HIPAA', 'Health Analytics'], color: 'text-rose-400', accent: '#FB7185' },
  { icon: GraduationCap, name: 'Education & E-Learning', desc: 'Learning management systems (LMS), e-learning platforms, virtual classrooms, and student information portals.', path: '/industries/education', tags: ['LMS', 'e-Learning', 'EdTech', 'Virtual Classrooms'], color: 'text-violet-400', accent: '#A78BFA' },
  { icon: Factory, name: 'Manufacturing & Industry 4.0', desc: 'IoT integration, predictive maintenance, production planning, MES, and quality management for smart factories.', path: '/contact', tags: ['IoT', 'Industry 4.0', 'MES', 'Predictive Maintenance'], color: 'text-orange-400', accent: '#FB923C' },
  { icon: Package, name: 'Supply Chain & Logistics', desc: 'Warehouse management, fleet tracking, route optimization, real-time visibility, and demand forecasting platforms.', path: '/industries/supply-chain', tags: ['WMS', 'Fleet Tracking', 'Route Optimization', 'Visibility'], color: 'text-yellow-400', accent: '#FBBF24' },
  { icon: Store, name: 'Retail & Marketplaces', desc: 'POS systems, loyalty programs, multi-vendor marketplaces, and customer engagement platforms for modern retail.', path: '/contact', tags: ['POS', 'Loyalty Programs', 'Multi-vendor', 'CRM'], color: 'text-pink-400', accent: '#F472B6' },
  { icon: Building2, name: 'Real Estate & PropTech', desc: 'Property listing platforms, BIM integration, construction ERP, virtual tours, and smart building management.', path: '/industries/construction', tags: ['PropTech', 'BIM', 'Property Portals', 'Smart Buildings'], color: 'text-cyan-400', accent: '#22D3EE' },
  { icon: Plane, name: 'Travel & Hospitality', desc: 'Booking engines, hotel management systems, travel aggregators, loyalty apps, and guest experience platforms.', path: '/contact', tags: ['Booking Systems', 'HMS', 'OTA', 'Guest Experience'], color: 'text-sky-400', accent: '#38BDF8' },
  { icon: Radio, name: 'Telecommunications', desc: 'BSS/OSS systems, network monitoring, customer self-service portals, and telecom billing automation.', path: '/contact', tags: ['BSS/OSS', 'Network Monitoring', 'Billing', 'CRM'], color: 'text-teal-400', accent: '#2DD4BF' },
  { icon: Zap, name: 'Energy & Utilities', desc: 'SCADA integration, smart grid solutions, field operations software, HSE compliance, and energy analytics dashboards.', path: '/industries/oil-gas', tags: ['SCADA', 'Smart Grid', 'Field Ops', 'HSE Compliance'], color: 'text-amber-400', accent: '#FBBF24' },
  { icon: Cloud, name: 'SaaS Platforms', desc: 'Multi-tenant SaaS architecture, subscription billing, developer APIs, white-label solutions, and cloud-native apps.', path: '/services/ai-saas-platform', tags: ['Multi-tenant', 'Subscription Billing', 'API-first', 'White-label'], color: 'text-blue-300', accent: '#93C5FD' },
  { icon: Bot, name: 'AI & Automation', desc: 'Intelligent process automation, AI agents, NLP solutions, computer vision, and ML model deployment pipelines.', path: '/services/machine-learning-ai', tags: ['RPA', 'AI Agents', 'NLP', 'Computer Vision'], color: 'text-green-400', accent: '#4ADE80' },
  { icon: Rocket, name: 'Startups & MVPs', desc: 'Rapid MVP development, lean startup methodology, product-market fit validation, and scalable launch architecture.', path: '/contact', tags: ['MVP', 'Lean Startup', 'Rapid Prototyping', 'Scale-up'], color: 'text-rose-300', accent: '#FDA4AF' },
  { icon: Gamepad2, name: 'Gaming & AR/VR', desc: 'Game development, augmented reality apps, virtual reality experiences, metaverse integrations, and game backend services.', path: '/contact', tags: ['Game Dev', 'AR/VR', 'Metaverse', 'Game Backend'], color: 'text-purple-400', accent: '#C084FC' },
  { icon: Briefcase, name: 'Professional Services', desc: 'Practice management software, client portals, document automation, billing systems, and knowledge management tools.', path: '/contact', tags: ['Practice Mgmt', 'Client Portals', 'Document Automation', 'Billing'], color: 'text-slate-400', accent: '#94A3B8' },
  { icon: Landmark, name: 'Public Sector & Government', desc: 'E-governance portals, citizen services platforms, compliance systems, and digital government transformation solutions.', path: '/industries/public-sector', tags: ['e-Governance', 'Citizen Services', 'Compliance', 'Digital Gov'], color: 'text-emerald-300', accent: '#6EE7B7' },
];

export default function IndustriesClient() {
  return (
    <div className="min-h-screen bg-[#090909] text-white overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-[#6EE7B7]/[0.05] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-[#3B82F6]/[0.05] rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(110,231,183,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,183,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
        <div className="container max-w-7xl relative z-10 text-center px-4 sm:px-6">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-base text-[#6EE7B7] mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Sparkles className="w-4 h-4" /><span className="font-medium">18+ Industries Served Globally</span>
          </motion.div>
          <motion.h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.1] tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }}>
            Industries We{' '}<span className="bg-gradient-to-r from-[#6EE7B7] via-[#34D399] to-[#3B82F6] bg-clip-text text-transparent">Serve</span>
          </motion.h1>
          <motion.p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-[1.8] mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease }}>
            Industry-specific IT solutions tailored to your sector&apos;s unique challenges, regulatory requirements, and competitive landscape.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8, ease }}>
            <Link href="/contact" className="btn-primary group">
              Discuss Your Industry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
            <Link href="/case-studies" className="px-8 py-4 border border-white/[0.1] text-white rounded-xl font-bold text-base hover:border-[#6EE7B7]/30 hover:bg-[#6EE7B7]/[0.03] transition-all duration-700">
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-12 border-y border-white/[0.04] bg-[#060606]">
        <div className="container max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: 18, suffix: '+', label: 'Industries Served' },
            { target: 200, suffix: '+', label: 'Projects Delivered' },
            { target: 15, suffix: '+', label: 'Countries' },
            { target: 98, suffix: '%', label: 'Client Satisfaction' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1"><AnimatedCounter target={s.target} suffix={s.suffix} /></div>
              <div className="text-white/60 text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INDUSTRIES GRID ═══ */}
      <section className="py-20 sm:py-28 bg-[#090909]">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.6, ease }}
                >
                  <Link href={ind.path} className="group bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/[0.06] hover:border-white/[0.1] transition-all duration-700 flex flex-col h-full block">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-700 group-hover:scale-110" style={{ backgroundColor: ind.accent + '12' }}>
                      <Icon className={`w-7 h-7 ${ind.color}`} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-[#6EE7B7] transition-colors duration-500 tracking-tight leading-snug">{ind.name}</h2>
                    <p className="text-base text-white/70 leading-relaxed mb-6 flex-grow">{ind.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {ind.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg text-sm text-white/60 font-medium">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-base font-semibold group-hover:gap-3 transition-all duration-500" style={{ color: ind.accent }}>
                      Explore Solutions <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#6EE7B7]/[0.04] rounded-full blur-[180px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(110,231,183,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,183,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="container max-w-7xl px-4 sm:px-6 relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] tracking-tight">
              Don&apos;t See Your{' '}
              <span className="bg-gradient-to-r from-[#6EE7B7] via-[#34D399] to-[#3B82F6] bg-clip-text text-transparent">Industry?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-xl mx-auto leading-[1.8]">We adapt to any sector. Tell us about your industry and we&apos;ll build the perfect solution.</p>
            <Link href="/contact" className="btn-primary group text-lg">
              Tell Us About Your Needs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
