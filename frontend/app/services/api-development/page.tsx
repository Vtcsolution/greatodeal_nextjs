import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'API Development & Integration Services | REST, GraphQL | Greatodeal',
  description: 'Professional API development and integration: REST APIs, GraphQL, third-party integrations (Stripe, HubSpot, Salesforce), microservices, and middleware. Expert API developers in Lahore, Pakistan.',
  keywords: ['API development', 'REST API', 'GraphQL development', 'API integration', 'third-party integration', 'Stripe integration', 'microservices', 'middleware development', 'API design', 'backend development', 'API developers Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'API Development & Integration Services | REST, GraphQL | Greatodeal',
    description: 'Professional API development and integration: REST APIs, GraphQL, third-party integrations, microservices, and middleware. Expert API developers at Greatodeal.',
    url: 'https://greatodeal.com/services/api-development',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal API Development Services' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/services/api-development',
  },
};

export default function Page() {
  return <Content />;
}
