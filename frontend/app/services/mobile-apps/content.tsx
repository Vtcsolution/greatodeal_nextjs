'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Smartphone, Zap, Shield, Globe, Users, Headphones } from 'lucide-react';


const pageData: ServicePageData = {
  title: 'Mobile App Development',
  subtitle: 'iOS & Android Solutions',
  description: 'We build beautiful, high-performance cross-platform and native mobile applications for iOS and Android. From consumer apps to enterprise mobility solutions, we deliver exceptional mobile experiences.',
  icon: Smartphone,
  heroKeyword: 'Cross-Platform Mobile Excellence',
  heroImage: '/images/mobileapp.png',
  features: [
    'Cross-platform apps with Flutter & React Native', 'Native iOS (Swift) development', 'Native Android (Kotlin) development',
    'E-commerce mobile applications', 'On-demand delivery apps', 'Social & community platforms', 'Healthcare & telemedicine apps',
    'FinTech & payment apps', 'GPS & location-based apps', 'Push notification systems', 'Offline-first architecture',
    'App Store & Play Store optimization', 'Performance optimization', 'Mobile UI/UX design', 'Analytics & crash reporting', 'CI/CD for mobile',
  ],
  benefits: [
    { icon: Smartphone, title: 'Single Codebase, Two Platforms', desc: 'Flutter allows us to build for iOS and Android simultaneously, reducing cost and time-to-market by up to 40%.' },
    { icon: Zap, title: 'Pixel-Perfect Design', desc: 'Beautiful, intuitive UIs following Apple HIG and Material Design guidelines for native-feeling experiences.' },
    { icon: Shield, title: 'Performance Optimized', desc: 'Smooth 60fps animations, optimized battery usage, and fast load times for superior user satisfaction.' },
    { icon: Globe, title: 'Secure by Default', desc: 'End-to-end encryption, biometric auth, secure storage, and OWASP Mobile Top 10 compliance.' },
    { icon: Users, title: 'Analytics Built-In', desc: 'Integrated analytics, crash reporting, and user behavior tracking to continually improve your app.' },
    { icon: Headphones, title: 'App Store Ready', desc: 'We handle App Store and Google Play submission, ASO optimization, and compliance requirements.' },
  ],
  technologies: ['Flutter', 'Dart', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite', 'Realm', 'Stripe SDK', 'Google Maps', 'AWS Amplify', 'Push Notifications', 'BLE/NFC', 'ARKit', 'ARCore'],
  faqs: [
    { q: 'Should I build a native or cross-platform app?', a: 'For most business applications, cross-platform (Flutter/React Native) offers 80-90% native performance at lower cost. We recommend native only when you need platform-specific hardware features or maximum performance.' },
    { q: 'How much does a mobile app cost?', a: 'App costs range from $15,000 for a simple MVP to $100,000+ for complex enterprise apps. We provide detailed estimates after understanding your requirements.' },
    { q: 'How long does mobile app development take?', a: 'A basic app takes 2-4 months; complex apps with custom backends typically take 4-8 months. We recommend starting with an MVP to validate your idea quickly.' },
    { q: 'Do you provide app maintenance after launch?', a: 'Yes. We offer monthly maintenance packages including OS updates, bug fixes, security patches, and feature additions.' },
  ],
  relatedServices: [
    { name: 'Web App Development', path: '/services/web-apps' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'API Development', path: '/services/api-development' },
    { name: 'Software Testing', path: '/services/software-testing' },
    { name: 'AI SaaS Platform', path: '/services/ai-saas-platform' },
  ],
};

export default function MobileAppsPage() {
  return <ServicePageTemplate data={pageData} />;
}
