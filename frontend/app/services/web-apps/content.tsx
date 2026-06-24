'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Globe, Zap, Shield, Rocket, TrendingUp, Users, Headphones } from 'lucide-react';


const pageData: ServicePageData = {
  title: 'Professional Web Application',
  subtitle: 'Development Services',
  description: 'We build high-performance, scalable web applications using modern frameworks like React, Next.js, Vue.js, and Node.js. From corporate websites to complex enterprise platforms, we deliver solutions that drive business growth.',
  icon: Globe,
  heroKeyword: 'SERVICES',
  heroVideo: '/images/website_design.mp4',
  features: [
    'Custom React.js & Next.js web applications', 'Progressive Web Apps (PWAs)', 'E-commerce platforms (Shopify, WooCommerce, custom)',
    'Enterprise portals and dashboards', 'Real-time web applications with WebSockets', 'CMS-based websites (WordPress, Contentful, Strapi)',
    'Single Page Applications (SPAs)', 'Server-Side Rendering (SSR) for SEO', 'Micro-frontend architecture',
    'GraphQL & REST API integration', 'Authentication & authorization systems', 'Payment gateway integration',
    'Multi-language & internationalization', 'Web accessibility (WCAG compliance)', 'Performance optimization & Core Web Vitals',
    'CI/CD pipeline setup & DevOps integration',
  ],
  benefits: [
    { icon: Zap, title: 'Blazing Fast Performance', desc: 'Optimized loading speeds, Core Web Vitals compliance, and CDN delivery for exceptional user experience.' },
    { icon: Shield, title: 'Mobile-First Design', desc: 'Fully responsive designs that look and work perfectly on all devices and screen sizes.' },
    { icon: Rocket, title: 'Security-First Approach', desc: 'Built with OWASP best practices, SSL, CSRF protection, input validation, and regular security audits.' },
    { icon: TrendingUp, title: 'SEO Optimized', desc: 'Server-side rendering, semantic HTML, structured data, and technical SEO baked in from day one.' },
    { icon: Users, title: 'Scalable Architecture', desc: 'Designed to grow with your business — from startup to enterprise scale without re-architecture.' },
    { icon: Headphones, title: 'Agile Delivery', desc: 'Two-week sprints with working demos, continuous delivery, and transparent progress tracking.' },
  ],
  technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Vercel', 'GraphQL', 'Prisma', 'Stripe'],
  faqs: [
    { q: 'How long does it take to build a web application?', a: 'A basic web application typically takes 4-8 weeks, while complex enterprise applications may take 3-6 months. We provide detailed timelines during the discovery phase.' },
    { q: 'Do you provide hosting and maintenance?', a: 'Yes, we offer optional hosting on AWS/Azure/Vercel and ongoing maintenance packages to keep your application updated, secure, and performing optimally.' },
    { q: 'Can you modernize our existing web application?', a: 'Absolutely. We specialize in legacy application modernization, migrating older codebases to modern React/Next.js architectures while preserving all existing functionality.' },
    { q: 'Do you sign NDAs for web development projects?', a: 'Yes, we sign NDAs before project discussions begin to ensure complete confidentiality of your business idea and technical requirements.' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', path: '/services/mobile-apps' },
    { name: 'AI SaaS Platform', path: '/services/ai-saas-platform' },
    { name: 'API Development', path: '/services/api-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Custom Software', path: '/services/custom-software' },
  ],
};

export default function WebAppsPage() {
  return <ServicePageTemplate data={pageData} />;
}
