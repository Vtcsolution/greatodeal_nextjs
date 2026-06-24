import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'AI SaaS Platform Development | Build & Launch Your SaaS | Greatodeal',
  description: 'Expert AI-powered SaaS platform development. We build scalable, multi-tenant SaaS applications with AI features, subscription billing, analytics, and enterprise-grade architecture. Greatodeal, Lahore Pakistan.',
  keywords: ['AI SaaS development', 'SaaS platform development', 'multi-tenant SaaS', 'AI-powered SaaS', 'subscription billing', 'SaaS architecture', 'cloud SaaS', 'SaaS MVP development', 'scalable SaaS applications', 'SaaS company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'AI SaaS Platform Development | Build & Launch Your SaaS | Greatodeal',
    description: 'Expert AI-powered SaaS platform development. We build scalable, multi-tenant SaaS applications with AI features, subscription billing, and enterprise-grade architecture.',
    url: 'https://greatodeal.com/services/ai-saas-platform',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal AI SaaS Platform Development' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/services/ai-saas-platform',
  },
};

export default function Page() {
  return <Content />;
}
