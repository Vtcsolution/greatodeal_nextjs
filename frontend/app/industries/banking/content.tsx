'use client';

import IndustryPageTemplate, { IndustryPageData } from '@/components/IndustryPageTemplate';
import { Banknote, CreditCard, Shield, Lock, BarChart2, Globe, RefreshCw } from 'lucide-react';


const pageData: IndustryPageData = {
  title: 'Banking & Fintech',
  subtitle: 'Financial Technology Experts',
  description: 'We deliver secure, compliant, and scalable fintech solutions for banks, credit unions, payment companies, and financial startups. From core banking to digital wallets, we power financial innovation.',
  icon: Banknote,
  heroIcon: Banknote,
  heroVideo: '/images/Globalization_Technology.mp4',
  stats: [
    { value: '99.99%', label: 'System Uptime' },
    { value: 'PCI DSS', label: 'Compliance Ready' },
    { value: '<100ms', label: 'Transaction Speed' },
    { value: '9+', label: 'Years FinTech Exp.' },
  ],
  challenges: [
    'Complex regulatory compliance (PCI DSS, GDPR, AML, KYC)',
    'Legacy system modernization without service disruption',
    'Real-time transaction processing at scale',
    'Fraud detection and prevention',
    'Multi-currency and cross-border payment complexity',
    'Security vulnerabilities and cyber threats',
    'Customer experience expectations in digital banking',
    'Integration with existing core banking systems',
  ],
  solutions: [
    { icon: CreditCard, title: 'Core Banking Systems', desc: 'Modern, API-first core banking platforms that replace legacy systems without service disruption.' },
    { icon: Shield, title: 'Payment Gateway & Wallets', desc: 'Custom payment gateways, digital wallets, and P2P transfer systems with real-time processing.' },
    { icon: Lock, title: 'Fraud Detection AI', desc: 'Machine learning-powered fraud detection with real-time alerts and automatic transaction blocking.' },
    { icon: BarChart2, title: 'KYC/AML Compliance', desc: 'Automated identity verification, AML screening, and compliance reporting tools.' },
    { icon: Globe, title: 'Open Banking APIs', desc: 'PSD2-compliant open banking APIs enabling third-party integrations and financial data sharing.' },
    { icon: RefreshCw, title: 'Financial Analytics', desc: 'Real-time dashboards, risk analytics, and reporting for data-driven financial decision making.' },
  ],
  features: [
    'Multi-currency & FX support', 'Real-time payment processing', 'SWIFT & SEPA integration',
    'Biometric authentication', 'End-to-end encryption', 'Regulatory reporting (PCI DSS, GDPR)',
    'Account aggregation', 'Loan management systems', 'Customer mobile banking apps',
    'Blockchain & smart contracts', 'API banking (Open Banking)', 'Chatbot & AI customer service',
  ],
  technologies: ['Node.js', 'Python', 'Java', '.NET', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'AWS', 'Stripe API', 'Plaid', 'OAuth2', 'JWT', 'Hyperledger', 'TensorFlow'],
};

export default function BankingPage() {
  return <IndustryPageTemplate data={pageData} />;
}
