import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Supply Chain & Logistics IT Solutions | WMS, Fleet Tracking | Greatodeal',
  description: 'Custom supply chain and logistics technology: warehouse management systems (WMS), fleet tracking, route optimization, supply chain visibility, and demand forecasting. Greatodeal, Pakistan.',
  keywords: ['supply chain software', 'logistics technology', 'warehouse management system', 'WMS development', 'fleet tracking', 'route optimization', 'supply chain visibility', 'demand forecasting', 'transportation management', 'logistics IT solutions', 'supply chain company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Supply Chain & Logistics IT Solutions | WMS, Fleet Tracking | Greatodeal',
    description: 'Custom supply chain and logistics technology: warehouse management systems, fleet tracking, route optimization, supply chain visibility, and demand forecasting.',
    url: 'https://greatodeal.com/industries/supply-chain',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Supply Chain & Logistics IT Solutions' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/industries/supply-chain',
  },
};

export default function Page() {
  return <Content />;
}
