'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Cloud, Zap, Shield, DollarSign, Users, RefreshCw } from 'lucide-react';


const pageData: ServicePageData = {
  title: 'AI-Powered SaaS Platform',
  subtitle: 'Development Services',
  description: 'We help entrepreneurs and enterprises build, launch, and scale AI-powered SaaS products. From MVP to enterprise scale — we handle architecture, AI integration, billing, analytics, and everything in between.',
  icon: Cloud,
  heroKeyword: 'SaaS + AI Platform Experts',
  heroImage: '/images/saas.png',
  features: [
    'Multi-tenant SaaS architecture', 'AI/ML feature integration', 'Subscription management (Stripe)', 'User authentication & SSO (OAuth, SAML)',
    'Role-based access control (RBAC)', 'API-first architecture', 'Real-time features (WebSockets)', 'Advanced analytics dashboards',
    'White-label & reseller functionality', 'Usage metering & billing', 'Email & notification systems', 'Audit logging & compliance',
    'Data export & import tools', 'Webhooks & third-party integrations', 'Admin panel & customer portals', 'Automated onboarding flows',
  ],
  benefits: [
    { icon: Cloud, title: 'Fast Time-to-Market', desc: 'Our SaaS boilerplate and established patterns let us launch your MVP 2-3x faster than building from scratch.' },
    { icon: Zap, title: 'AI-First Architecture', desc: 'AI features are architected into the platform from day one — not bolted on later. We integrate GPT, Claude, and custom ML models seamlessly.' },
    { icon: Shield, title: 'Built-in Analytics', desc: 'Product analytics, customer usage tracking, revenue dashboards, and churn prediction built into every platform we build.' },
    { icon: DollarSign, title: 'Enterprise Security', desc: 'SOC 2 ready architecture, data isolation, encryption at rest and in transit, audit logs, and compliance tooling.' },
    { icon: Users, title: 'Scales Automatically', desc: 'Auto-scaling infrastructure on AWS or Azure ensures your platform handles 100 or 100,000 users with equal reliability.' },
    { icon: RefreshCw, title: 'Revenue Optimization', desc: 'Sophisticated billing with trials, freemium, tiered pricing, add-ons, and automated dunning to maximize MRR.' },
  ],
  technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS', 'Clerk/Auth0', 'OpenAI', 'LangChain', 'Vercel', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'SendGrid', 'Twilio'],
  faqs: [
    { q: 'How much does it cost to build a SaaS platform?', a: 'A basic SaaS MVP costs $25,000-$50,000. A full-featured platform with AI capabilities ranges from $50,000-$150,000+. We offer fixed-price and milestone-based pricing.' },
    { q: 'How long does SaaS development take?', a: 'An MVP can be ready in 8-16 weeks. A full-featured SaaS with AI integration typically takes 4-8 months depending on complexity.' },
    { q: 'Do you help with SaaS product strategy?', a: 'Yes. We offer product strategy consulting, market research, pricing model advice, and technical roadmap planning alongside development.' },
    { q: 'Can you help us add AI to our existing SaaS?', a: 'Absolutely. We specialize in retrofitting AI features — chatbots, recommendations, analytics, automation — into existing SaaS platforms.' },
  ],
  relatedServices: [
    { name: 'AI & Machine Learning', path: '/services/machine-learning-ai' },
    { name: 'Web App Development', path: '/services/web-apps' },
    { name: 'API Development', path: '/services/api-development' },
    { name: 'Cloud & Infrastructure', path: '/services/it-infrastructure' },
    { name: 'Custom Software', path: '/services/custom-software' },
  ],
};

export default function AISaaSPlatformPage() {
  return <ServicePageTemplate data={pageData} />;
}
