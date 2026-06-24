import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Construction & Real Estate IT Solutions | BIM, PropTech | Greatodeal',
  description: 'Custom construction and real estate technology: project management software, BIM integration, property portals, construction ERP, and field management apps. Greatodeal, Lahore Pakistan.',
  keywords: ['construction software', 'real estate technology', 'PropTech', 'BIM integration', 'construction project management', 'property portal development', 'construction ERP', 'field management app', 'real estate CRM', 'building management system', 'construction IT Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Construction & Real Estate IT Solutions | BIM, PropTech | Greatodeal',
    description: 'Custom construction and real estate technology: project management software, BIM integration, property portals, construction ERP, and field management apps.',
    url: 'https://greatodeal.com/industries/construction',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Construction & Real Estate IT Solutions' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/industries/construction',
  },
};

export default function Page() {
  return <Content />;
}
