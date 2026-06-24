import type { Metadata } from 'next';
import IndustriesClient from '@/components/pages/IndustriesClient';

export const metadata: Metadata = {
  title: 'Industries We Serve | IT Solutions for 18+ Sectors | Greatodeal',
  description: 'Greatodeal delivers industry-specific IT solutions for banking & fintech, healthcare, education, e-commerce, manufacturing, SaaS, AI, logistics, real estate, and 10+ more sectors globally.',
  keywords: ['IT solutions by industry', 'banking IT solutions', 'education technology company', 'ecommerce IT services', 'healthcare software Pakistan', 'fintech development company'],
  openGraph: {
    title: 'Industries We Serve | Greatodeal',
    description: 'Industry-specific IT solutions for 18+ sectors globally.',
    url: 'https://greatodeal.com/industries',
  },
  twitter: { card: 'summary', title: 'Industries We Serve | Greatodeal', images: ['https://greatodeal.com/images/logo.png'] },
  alternates: { canonical: 'https://greatodeal.com/industries' },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
