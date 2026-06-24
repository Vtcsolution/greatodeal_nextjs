import type { Metadata } from 'next';
import EstimateClient from '@/components/pages/EstimateClient';

export const metadata: Metadata = {
  title: 'Free Project Cost Estimator | Software Development Budget Calculator | Greatodeal',
  description: 'Calculate the estimated cost of your software project instantly. Answer 7 questions about your web app, mobile app, AI solution, or ERP and get a free, accurate cost estimate from Greatodeal.',
  keywords: ['project cost estimator', 'software development cost', 'budget calculator', 'free estimate', 'web app cost', 'mobile app cost', 'AI project cost', 'ERP cost estimate', 'software pricing', 'development quote', 'Greatodeal estimate'],
  openGraph: {
    title: 'Free Project Cost Estimator | Software Development Budget Calculator | Greatodeal',
    description: 'Calculate the estimated cost of your software project instantly. Answer 7 questions and get a free, accurate cost estimate from Greatodeal.',
    url: 'https://greatodeal.com/estimate',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Project Cost Estimator' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/estimate',
  },
};

export default function Page() {
  return <EstimateClient />;
}
