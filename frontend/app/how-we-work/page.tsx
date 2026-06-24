import type { Metadata } from 'next';
import HowWeWorkClient from '@/components/pages/HowWeWorkClient';

export const metadata: Metadata = {
  title: 'How We Work | Agile Software Development Process | Greatodeal',
  description: 'Discover Greatodeal\'s proven 6-step software development process: Discovery, Design, Development, Testing, Deployment, and Support. Agile methodology delivering on time and budget.',
  keywords: ['how we work', 'agile development process', 'software development methodology', 'development process', 'project management', 'agile methodology', 'scrum', 'software delivery', 'development workflow', 'Greatodeal process'],
  openGraph: {
    title: 'How We Work | Agile Software Development Process | Greatodeal',
    description: 'Discover Greatodeal\'s proven 6-step software development process: Discovery, Design, Development, Testing, Deployment, and Support.',
    url: 'https://greatodeal.com/how-we-work',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Development Process' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/how-we-work',
  },
};

export default function Page() {
  return <HowWeWorkClient />;
}
