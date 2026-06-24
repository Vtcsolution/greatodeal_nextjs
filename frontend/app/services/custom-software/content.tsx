'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Settings, Puzzle, Shield, TrendingUp, Users, Headphones } from 'lucide-react';


const pageData: ServicePageData = {
  title: 'Custom Enterprise',
  subtitle: 'Software Development',
  description: 'We build tailored enterprise software that fits your exact business processes — from ERP and CRM systems to workflow automation and industry-specific applications. No off-the-shelf compromises.',
  icon: Settings,
  heroKeyword: 'Bespoke Enterprise Solutions',
  heroVideo: '/images/software_design.mp4',
  features: [
    'Enterprise Resource Planning (ERP) systems', 'Customer Relationship Management (CRM)', 'Human Resource Management (HRM & HRMS)',
    'Inventory & warehouse management', 'Project management software', 'Document management systems (DMS)',
    'Business Intelligence & reporting dashboards', 'Workflow automation platforms', 'Supply chain management software',
    'Asset & fleet management systems', 'Financial management & accounting software', 'Multi-tenant SaaS applications',
    'Legacy system modernization', 'System integration & data migration', 'Custom reporting & analytics', 'Role-based access control',
  ],
  benefits: [
    { icon: Settings, title: 'Built for Your Business', desc: 'Unlike generic off-the-shelf software, our custom solutions are designed around your exact processes, eliminating unnecessary complexity.' },
    { icon: Puzzle, title: 'Scalable Growth', desc: 'Your software grows with you — from 10 to 10,000 users without performance degradation or costly re-platforming.' },
    { icon: Shield, title: 'Integration Ready', desc: 'Seamlessly integrates with your existing systems — accounting software, CRMs, ERPs, third-party APIs, and data sources.' },
    { icon: TrendingUp, title: 'Enterprise Security', desc: 'Role-based access, audit logs, data encryption, and compliance features built for enterprise security requirements.' },
    { icon: Users, title: 'Intuitive UX', desc: 'Complex business logic presented through intuitive interfaces that reduce training time and increase adoption.' },
    { icon: Headphones, title: 'Long-term Partnership', desc: 'We become your technology partner, offering ongoing enhancements and support as your business evolves.' },
  ],
  technologies: ['Node.js', 'Python', 'Java', '.NET', 'React', 'Vue.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Azure', 'Microservices', 'RabbitMQ', 'Elasticsearch'],
  faqs: [
    { q: 'Why build custom software instead of buying off-the-shelf?', a: 'Custom software fits your exact needs, eliminates unnecessary features you pay for, integrates seamlessly with your systems, and gives you a competitive edge. Long-term, it\'s often more cost-effective.' },
    { q: 'How long does custom enterprise software take to build?', a: 'A basic custom application takes 2-4 months; complex enterprise systems typically take 6-12 months. We recommend starting with core modules and expanding iteratively.' },
    { q: 'Can you upgrade or extend our existing custom software?', a: 'Absolutely. We regularly take over existing codebases, add new features, improve performance, and modernize legacy systems with minimal disruption.' },
    { q: 'Do you provide training for the software?', a: 'Yes. We provide comprehensive user manuals, video tutorials, and live training sessions for your team as part of project delivery.' },
  ],
  relatedServices: [
    { name: 'Web App Development', path: '/services/web-apps' },
    { name: 'AI & Machine Learning', path: '/services/machine-learning-ai' },
    { name: 'API Development', path: '/services/api-development' },
    { name: 'Cloud & Infrastructure', path: '/services/it-infrastructure' },
    { name: 'Software Testing', path: '/services/software-testing' },
  ],
};

export default function CustomSoftwarePage() {
  return <ServicePageTemplate data={pageData} />;
}
