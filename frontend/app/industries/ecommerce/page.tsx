import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'E-Commerce IT Solutions | Online Store & Marketplace Development | Greatodeal',
  description: 'Custom e-commerce development: online stores, B2B/B2C marketplaces, inventory management, mobile commerce, and omnichannel retail solutions. Greatodeal, Lahore Pakistan — global e-commerce experts.',
  keywords: ['e-commerce development', 'online store development', 'marketplace development', 'B2B ecommerce', 'B2C ecommerce', 'inventory management', 'mobile commerce', 'omnichannel retail', 'Shopify alternative', 'custom ecommerce platform', 'ecommerce company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'E-Commerce IT Solutions | Online Store & Marketplace Development | Greatodeal',
    description: 'Custom e-commerce development: online stores, B2B/B2C marketplaces, inventory management, mobile commerce, and omnichannel retail solutions.',
    url: 'https://greatodeal.com/industries/ecommerce',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal E-Commerce Solutions' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/industries/ecommerce',
  },
};

export default function Page() {
  return <Content />;
}
