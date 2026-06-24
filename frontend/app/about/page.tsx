import type { Metadata } from 'next';
import AboutClient from '@/components/pages/AboutClient';

export const metadata: Metadata = {
  title: 'About Greatodeal | Leading AI & Software Development Company Pakistan',
  description: 'Learn about Greatodeal — a premier AI and software development company founded in 2016 in Lahore, Pakistan. 120+ engineers, 9+ years of expertise, serving global clients across 20+ industries.',
  keywords: ['about Greatodeal', 'software company Pakistan', 'AI development company', 'IT company Lahore', 'software development team', 'technology company Pakistan', 'Dedicated Developers', 'Remote Development Team', 'Offshore Development Services', 'CTO as a Service', 'Technology Partner', 'Innovation Consulting'],
  openGraph: {
    title: 'About Greatodeal | Leading AI & Software Development Company',
    description: '9+ years of excellence in AI, web, mobile, and enterprise software development. 120+ engineers serving global clients.',
    url: 'https://greatodeal.com/about',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'About Greatodeal' }],
  },
  twitter: { card: 'summary', images: ['https://greatodeal.com/images/logo.png'] },
  alternates: { canonical: 'https://greatodeal.com/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
