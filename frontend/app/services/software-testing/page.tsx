import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Software Testing & QA Services | Selenium, Jest, Cypress | Greatodeal',
  description: 'Comprehensive software testing and QA services: manual testing, automated testing, performance testing, security testing, and API testing. Ensuring software quality for global clients from Lahore, Pakistan.',
  keywords: ['software testing', 'QA services', 'automated testing', 'Selenium testing', 'Jest testing', 'Cypress testing', 'manual testing', 'performance testing', 'security testing', 'API testing', 'quality assurance', 'test automation', 'QA company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Software Testing & QA Services | Selenium, Jest, Cypress | Greatodeal',
    description: 'Comprehensive software testing and QA services: manual testing, automated testing, performance testing, security testing, and API testing.',
    url: 'https://greatodeal.com/services/software-testing',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Software Testing & QA Services' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/services/software-testing',
  },
};

export default function Page() {
  return <Content />;
}
