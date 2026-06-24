import type { Metadata } from 'next';
import ServicesClient from '@/components/pages/ServicesClient';

export const metadata: Metadata = {
  title: 'IT Services | Web, Mobile, AI, SaaS & Enterprise Software Development',
  description: 'Explore Greatodeal\'s comprehensive IT services: web development, mobile apps, AI automation, SaaS platforms, custom software, API development, UI/UX design, cloud & DevOps.',
  keywords: ['IT services Pakistan', 'web development services', 'mobile app development', 'AI automation services', 'SaaS development', 'custom software development', 'enterprise software services'],
  openGraph: {
    title: 'IT Services | Greatodeal — AI, Web, Mobile & Enterprise Solutions',
    description: 'Complete IT services from web development to AI automation. Serving global clients with 9+ years expertise.',
    url: 'https://greatodeal.com/services',
  },
  twitter: { card: 'summary', title: 'IT Services | Greatodeal', images: ['https://greatodeal.com/images/logo.png'] },
  alternates: { canonical: 'https://greatodeal.com/services' },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
