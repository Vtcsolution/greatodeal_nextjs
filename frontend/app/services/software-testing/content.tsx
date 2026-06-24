'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Bug, Shield, Zap, BarChart2, CheckCircle, RefreshCw } from 'lucide-react';


const pageData: ServicePageData = {
  title: 'Software Testing &',
  subtitle: 'QA Assurance Services',
  description: 'We ensure your software works flawlessly before it reaches your users. Our comprehensive QA services cover manual testing, test automation, performance, security, and everything in between.',
  icon: Bug,
  heroKeyword: 'Quality Assurance Experts',
  heroVideo: '/images/software_design.mp4',
  features: [
    'Manual functional testing', 'Automated test suite development', 'Unit & integration testing',
    'End-to-end (E2E) testing with Cypress/Playwright', 'API testing with Postman/Newman', 'Performance & load testing (JMeter, k6)',
    'Security & penetration testing', 'Cross-browser testing', 'Mobile device testing (iOS & Android)',
    'Regression testing & CI integration', 'Accessibility testing (WCAG)', 'Database testing & data integrity',
    'User Acceptance Testing (UAT) support', 'Test strategy & planning', 'Bug tracking & reporting', 'QA process consulting',
  ],
  benefits: [
    { icon: Bug, title: 'Ship with Confidence', desc: 'Comprehensive test coverage ensures bugs are caught before production, reducing costly hotfixes and maintaining your reputation.' },
    { icon: Shield, title: 'Faster Releases', desc: 'Automated testing enables daily deployments with confidence — CI/CD pipelines with automated quality gates accelerate delivery.' },
    { icon: Zap, title: 'Reduce Costs', desc: 'Fixing bugs in testing costs 10-100x less than fixing them in production. Our QA pays for itself many times over.' },
    { icon: BarChart2, title: 'Security Coverage', desc: 'Penetration testing, OWASP Top 10 checks, and security scanning protect your users and your business from breaches.' },
    { icon: CheckCircle, title: 'All Devices & Browsers', desc: 'Real device testing across 50+ device/browser combinations ensures a consistent experience for every user.' },
    { icon: RefreshCw, title: 'Detailed Reporting', desc: 'Clear bug reports with reproduction steps, screenshots, severity ratings, and actionable recommendations.' },
  ],
  technologies: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'pytest', 'JMeter', 'k6', 'Postman', 'Newman', 'OWASP ZAP', 'Appium', 'BrowserStack', 'TestRail', 'Jira', 'GitHub Actions', 'Docker'],
  faqs: [
    { q: 'Should I do manual or automated testing?', a: 'Both have their place. Exploratory and UX testing benefit from manual testers; regression, load, and API testing benefit from automation. We recommend a hybrid approach tailored to your project.' },
    { q: 'How long does it take to set up automated testing?', a: 'A basic automated test suite for a web app takes 2-4 weeks. Comprehensive E2E coverage for a complex application may take 6-8 weeks but provides ROI for years.' },
    { q: 'Can you test our existing application?', a: 'Yes. We perform audits of existing apps, create test documentation where none exists, and build test automation from scratch for legacy systems.' },
    { q: 'Do you integrate QA into CI/CD pipelines?', a: 'Absolutely. We integrate automated tests into your GitHub Actions, Jenkins, or GitLab CI pipelines so every commit is automatically validated.' },
  ],
  relatedServices: [
    { name: 'Web App Development', path: '/services/web-apps' },
    { name: 'Mobile App Development', path: '/services/mobile-apps' },
    { name: 'Custom Software', path: '/services/custom-software' },
    { name: 'API Development', path: '/services/api-development' },
    { name: 'Cloud & Infrastructure', path: '/services/it-infrastructure' },
  ],
};

export default function SoftwareTestingPage() {
  return <ServicePageTemplate data={pageData} />;
}
