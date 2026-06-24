import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Investment & Finance IT Solutions | Portfolio Management, Trading Platforms | Greatodeal',
  description: 'Custom investment and financial technology: portfolio management systems, trading platforms, robo-advisors, risk analytics, and wealth management software. Greatodeal, Pakistan.',
  keywords: ['investment software', 'financial technology', 'portfolio management system', 'trading platform development', 'robo-advisor', 'risk analytics', 'wealth management software', 'fintech development', 'investment management', 'algorithmic trading', 'finance IT Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Investment & Finance IT Solutions | Portfolio Management, Trading Platforms | Greatodeal',
    description: 'Custom investment and financial technology: portfolio management systems, trading platforms, robo-advisors, risk analytics, and wealth management software.',
    url: 'https://greatodeal.com/industries/investment',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Investment & Finance IT Solutions' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/industries/investment',
  },
};

export default function Page() {
  return <Content />;
}
