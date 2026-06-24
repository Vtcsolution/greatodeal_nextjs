import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Banking & Fintech IT Solutions | Digital Banking, Payments | Greatodeal',
  description: 'Expert banking and fintech software development: core banking systems, digital wallets, payment gateways, fraud detection, KYC/AML compliance, and open banking APIs. Greatodeal, Pakistan.',
  keywords: ['banking software development', 'fintech solutions', 'digital banking', 'payment gateway', 'digital wallet', 'fraud detection', 'KYC AML compliance', 'open banking API', 'core banking system', 'mobile banking app', 'fintech company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Banking & Fintech IT Solutions | Digital Banking, Payments | Greatodeal',
    description: 'Expert banking and fintech software development: core banking systems, digital wallets, payment gateways, fraud detection, and KYC/AML compliance.',
    url: 'https://greatodeal.com/industries/banking',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Banking & Fintech Solutions' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/industries/banking',
  },
};

export default function Page() {
  return <Content />;
}
