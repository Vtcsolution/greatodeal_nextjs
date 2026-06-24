import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Web App Development Services | React, Next.js, Node.js | Greatodeal',
  description: 'Expert web application development using React, Next.js, Vue.js, Angular, and Node.js. Custom web apps, e-commerce, SaaS platforms, and enterprise portals built by Greatodeal — Pakistan\'s top web development company.',
  keywords: ['web app development', 'React development', 'Next.js development', 'Node.js development', 'Vue.js', 'Angular', 'custom web application', 'SaaS development', 'enterprise web portal', 'e-commerce development', 'full stack development', 'web development company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Web App Development Services | React, Next.js, Node.js | Greatodeal',
    description: 'Expert web application development using React, Next.js, Vue.js, Angular, and Node.js. Custom web apps, e-commerce, SaaS platforms, and enterprise portals built by Greatodeal.',
    url: 'https://greatodeal.com/services/web-apps',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Web App Development Services' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/services/web-apps',
  },
};

export default function Page() {
  return <Content />;
}
