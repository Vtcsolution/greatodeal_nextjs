'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Palette, Users, Zap, BarChart2, Eye, RefreshCw } from 'lucide-react';


const pageData: ServicePageData = {
  title: 'UI/UX Design',
  subtitle: 'Services & Consulting',
  description: 'We craft beautiful, intuitive digital experiences that users love and businesses profit from. Our user-centered design process combines research, creativity, and data to deliver interfaces that truly work.',
  icon: Palette,
  heroKeyword: 'User-Centered Design Experts',
  heroImage: '/images/uiux_design2.jpg',
  features: [
    'User research & persona development', 'Information architecture & user flows', 'Wireframing & low-fidelity prototypes',
    'High-fidelity UI design in Figma', 'Interactive prototypes & clickthroughs', 'Design system & component library creation',
    'Responsive web design (desktop/tablet/mobile)', 'Mobile app UI design (iOS & Android guidelines)', 'Dark mode & accessibility design',
    'Brand identity & visual design', 'Icon & illustration design', 'Motion & micro-interaction design',
    'Usability testing & A/B testing', 'Design handoff to development', 'Landing page & conversion optimization', 'UX audit of existing products',
  ],
  benefits: [
    { icon: Palette, title: 'Data-Driven Design', desc: 'We base design decisions on user research, heatmaps, and analytics — not guesswork. Every design choice has a rationale.' },
    { icon: Users, title: 'Conversion-Focused', desc: 'Beautiful designs that also convert. We apply CRO principles to ensure your product drives signups, sales, and engagement.' },
    { icon: Zap, title: 'Accessibility First', desc: 'WCAG 2.1 AA compliant designs that work for all users, including those using screen readers and assistive technologies.' },
    { icon: BarChart2, title: 'Iterative Process', desc: 'Rapid design-test-iterate cycles with real users ensure the final product truly meets user needs and business goals.' },
    { icon: Eye, title: 'Design Systems', desc: 'Scalable component libraries and design tokens that keep your product consistent as it grows across features and platforms.' },
    { icon: RefreshCw, title: 'Dev Collaboration', desc: 'We work closely with developers using annotated Figma files, component specs, and design handoff tools for zero-gap implementation.' },
  ],
  technologies: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Framer', 'Maze (usability testing)', 'Hotjar', 'Google Analytics', 'Storybook', 'TailwindCSS', 'Material UI', 'Ant Design', 'Zeplin'],
  faqs: [
    { q: 'What is your UI/UX design process?', a: 'We follow: Discovery (user research, competitor analysis) → Information Architecture → Wireframes → Visual Design → Prototype → Usability Testing → Handoff. Each phase has client review points.' },
    { q: 'Do you provide design files for development?', a: 'Yes. You receive organized Figma files with components, design tokens, spacing guides, asset exports, and developer annotations for smooth implementation.' },
    { q: 'Can you redesign our existing product?', a: 'Absolutely. We conduct UX audits of existing products, identify pain points, and redesign with minimal disruption to existing users.' },
    { q: 'Do you also do frontend development?', a: 'Yes. We offer end-to-end design + development, turning our designs into pixel-perfect React/Next.js frontends. This eliminates the design-to-dev gap entirely.' },
  ],
  relatedServices: [
    { name: 'Web App Development', path: '/services/web-apps' },
    { name: 'Mobile App Development', path: '/services/mobile-apps' },
    { name: 'AI SaaS Platform', path: '/services/ai-saas-platform' },
    { name: 'Custom Software', path: '/services/custom-software' },
    { name: 'Software Testing', path: '/services/software-testing' },
  ],
};

export default function UiUxDesignPage() {
  return <ServicePageTemplate data={pageData} />;
}
