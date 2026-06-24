import type { Metadata } from 'next';
import ContactClient from '@/components/pages/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Greatodeal | Get a Free IT Consultation Today',
  description: 'Contact Greatodeal for web development, AI solutions, mobile apps, ERP, SaaS, and custom software. Reach us via form, WhatsApp (+92 301 1060841), or email at sales@greatodeal.com. Free consultation available.',
  keywords: ['contact Greatodeal', 'free IT consultation', 'software development inquiry', 'web development contact', 'AI solutions contact', 'WhatsApp consultation', 'Greatodeal Lahore', 'hire developers Pakistan', 'get a quote', 'project inquiry'],
  openGraph: {
    title: 'Contact Greatodeal | Get a Free IT Consultation Today',
    description: 'Contact Greatodeal for web development, AI solutions, mobile apps, ERP, SaaS, and custom software. Free consultation available.',
    url: 'https://greatodeal.com/contact',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Contact Greatodeal' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/contact',
  },
};

export default function Page() {
  return <ContactClient />;
}
