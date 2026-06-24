import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Public Sector & Government IT Solutions | e-Government, GIS | Greatodeal',
  description: 'Custom public sector technology: e-Government portals, citizen services platforms, GIS solutions, public administration software, and smart city applications. Greatodeal, Pakistan.',
  keywords: ['public sector software', 'government IT solutions', 'e-Government portal', 'citizen services platform', 'GIS solutions', 'smart city applications', 'public administration software', 'government digital transformation', 'civic technology', 'gov-tech', 'public sector IT Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Public Sector & Government IT Solutions | e-Government, GIS | Greatodeal',
    description: 'Custom public sector technology: e-Government portals, citizen services platforms, GIS solutions, public administration software, and smart city applications.',
    url: 'https://greatodeal.com/industries/public-sector',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Public Sector & Government IT Solutions' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/industries/public-sector',
  },
};

export default function Page() {
  return <Content />;
}
