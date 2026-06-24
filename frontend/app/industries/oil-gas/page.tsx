import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Oil & Gas IT Solutions | SCADA, Asset Management, Field Operations | Greatodeal',
  description: 'Custom oil and gas technology solutions: SCADA integration, asset management systems, field operations software, HSE compliance, and pipeline management. Greatodeal, Pakistan.',
  keywords: ['oil and gas software', 'SCADA integration', 'asset management system', 'field operations software', 'HSE compliance', 'pipeline management', 'energy technology', 'oil gas IoT', 'upstream downstream software', 'energy sector IT', 'oil gas company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Oil & Gas IT Solutions | SCADA, Asset Management, Field Operations | Greatodeal',
    description: 'Custom oil and gas technology solutions: SCADA integration, asset management systems, field operations software, HSE compliance, and pipeline management.',
    url: 'https://greatodeal.com/industries/oil-gas',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Oil & Gas IT Solutions' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/industries/oil-gas',
  },
};

export default function Page() {
  return <Content />;
}
