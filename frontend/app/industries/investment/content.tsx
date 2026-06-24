'use client';

import IndustryPageTemplate, { IndustryPageData } from '@/components/IndustryPageTemplate';
import { TrendingUp, BarChart2, Shield, Globe, Cpu, FileText, Users } from 'lucide-react';


const pageData: IndustryPageData = {
  title: 'Investment & Finance',
  subtitle: 'WealthTech & Investment Solutions',
  description: 'We build sophisticated financial technology for investment firms, wealth managers, and trading companies. From portfolio management to algorithmic trading, we power financial innovation.',
  icon: TrendingUp,
  heroIcon: TrendingUp,
  heroVideo: '/images/investments.mp4',
  stats: [
    { value: 'Real-time', label: 'Data Processing' },
    { value: '99.999%', label: 'Uptime SLA' },
    { value: 'SEC/FCA', label: 'Compliance Ready' },
    { value: '<10ms', label: 'Trading Latency' },
  ],
  challenges: [
    'Real-time market data processing and latency', 'Complex regulatory compliance (SEC, FCA, MiFID II)',
    'Risk management and portfolio exposure limits', 'Manual reporting and reconciliation processes',
    'Client onboarding and KYC requirements', 'Multi-asset class portfolio tracking', 'Legacy system integration challenges', 'Cybersecurity and data protection',
  ],
  solutions: [
    { icon: BarChart2, title: 'Portfolio Management Systems', desc: 'Comprehensive PMS with real-time valuation, performance attribution, and client reporting.' },
    { icon: TrendingUp, title: 'Trading Platforms', desc: 'High-performance trading systems with order management, market data feeds, and execution algorithms.' },
    { icon: Shield, title: 'Robo-Advisors', desc: 'AI-driven automated investment advisory with risk profiling, portfolio rebalancing, and client communication.' },
    { icon: Globe, title: 'Risk Analytics', desc: 'VaR calculation, stress testing, scenario analysis, and real-time risk monitoring dashboards.' },
    { icon: Cpu, title: 'Compliance Automation', desc: 'Automated regulatory reporting, trade surveillance, and compliance workflow management.' },
    { icon: FileText, title: 'Client Portals', desc: 'Secure investor portals with portfolio visibility, statements, performance reports, and document sharing.' },
  ],
  features: [
    'Real-time portfolio valuation', 'Multi-currency support', 'Order management system (OMS)',
    'Market data integration (Bloomberg, Reuters)', 'Performance attribution analysis', 'Tax lot accounting',
    'Automated rebalancing', 'ESG scoring & reporting', 'Client communication tools',
    'Document management', 'API connectivity for custodians', 'Audit trail & compliance logging',
  ],
  technologies: ['Python', 'Java', 'Node.js', 'PostgreSQL', 'TimescaleDB', 'Redis', 'Kafka', 'AWS', 'Bloomberg API', 'Reuters API', 'FIX Protocol', 'Docker', 'Kubernetes', 'TensorFlow', 'Pandas'],
};

export default function InvestmentPage() {
  return <IndustryPageTemplate data={pageData} />;
}
