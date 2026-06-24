'use client';

import IndustryPageTemplate, { IndustryPageData } from '@/components/IndustryPageTemplate';
import { Landmark, Globe, Map, Shield, Users, FileText, BarChart2 } from 'lucide-react';


const pageData: IndustryPageData = {
  title: 'Public Sector & Government',
  subtitle: 'e-Government Technology',
  description: 'We help governments and public institutions digitize services, improve transparency, and deliver better citizen experiences through modern, secure technology solutions.',
  icon: Landmark,
  heroIcon: Landmark,
  heroVideo: '/images/Technology_Construction.mp4',
  stats: [
    { value: '80%', label: 'Service Efficiency Gain' },
    { value: 'ISO 27001', label: 'Security Standard' },
    { value: '24/7', label: 'Citizen Services' },
    { value: '20+', label: 'Govt Projects' },
  ],
  challenges: [
    'Digitizing paper-based government processes', 'Ensuring data security and citizen privacy',
    'Meeting accessibility and multilingual requirements', 'Legacy system integration and data migration',
    'Budget constraints and procurement compliance', 'Ensuring uptime and disaster recovery',
    'Citizen identity verification and authentication', 'Inter-departmental data sharing and coordination',
  ],
  solutions: [
    { icon: Globe, title: 'e-Government Portals', desc: 'Comprehensive citizen service portals for permits, licenses, registrations, and government services.' },
    { icon: Map, title: 'GIS & Spatial Analytics', desc: 'Geographic information systems for urban planning, land management, and public asset mapping.' },
    { icon: Shield, title: 'Case Management Systems', desc: 'Digital workflow management for social services, regulatory compliance, and public administration.' },
    { icon: Users, title: 'Open Data Platforms', desc: 'Transparency portals enabling public access to government data with visualization dashboards.' },
    { icon: FileText, title: 'Citizen Mobile Apps', desc: 'Multilingual mobile apps for service access, bill payments, and government communication.' },
    { icon: BarChart2, title: 'Smart City Solutions', desc: 'IoT-powered smart city platforms for traffic, utilities, environment, and public safety management.' },
  ],
  features: [
    'Single sign-on (SSO) for citizens', 'Digital document verification', 'Multilingual support',
    'WCAG accessibility compliance', 'Payment gateway integration', 'Audit trails & transparency logs',
    'Biometric & digital identity', 'SMS/email notifications', 'Open API integration',
    'Data encryption & security', 'Mobile-responsive design', 'Offline capability for remote areas',
  ],
  technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'ArcGIS', 'AWS GovCloud', 'Docker', 'Kubernetes', 'OAuth2', 'SAML', 'OpenID Connect', 'Redis', 'Elasticsearch', 'Stripe'],
};

export default function PublicSectorPage() {
  return <IndustryPageTemplate data={pageData} />;
}
