import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Custom Software Development | ERP, CRM, HRM Solutions | Greatodeal',
  description: 'Custom enterprise software development: ERP, CRM, HRM, inventory management, and bespoke business applications. Tailored solutions for your unique workflows by Greatodeal, Lahore Pakistan.',
  keywords: ['custom software development', 'ERP development', 'CRM development', 'HRM software', 'inventory management system', 'enterprise software', 'bespoke software', 'business application development', 'custom solutions', 'software development company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Custom Software Development | ERP, CRM, HRM Solutions | Greatodeal',
    description: 'Custom enterprise software development: ERP, CRM, HRM, inventory management, and bespoke business applications. Tailored solutions by Greatodeal.',
    url: 'https://greatodeal.com/services/custom-software',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Custom Software Development' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/services/custom-software',
  },
};

export default function Page() {
  return <Content />;
}
