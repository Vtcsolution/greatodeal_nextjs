import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'IT Infrastructure & Cloud DevOps Services | AWS, Azure, Docker | Greatodeal',
  description: 'Expert IT infrastructure and DevOps services: cloud migration (AWS/Azure/GCP), Kubernetes, Docker, CI/CD pipelines, Infrastructure as Code, and 24/7 monitoring. Greatodeal, Pakistan.',
  keywords: ['IT infrastructure', 'DevOps services', 'cloud migration', 'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD pipelines', 'Infrastructure as Code', 'Terraform', 'cloud monitoring', 'DevOps company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'IT Infrastructure & Cloud DevOps Services | AWS, Azure, Docker | Greatodeal',
    description: 'Expert IT infrastructure and DevOps services: cloud migration, Kubernetes, Docker, CI/CD pipelines, Infrastructure as Code, and 24/7 monitoring.',
    url: 'https://greatodeal.com/services/it-infrastructure',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal IT Infrastructure & DevOps Services' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/services/it-infrastructure',
  },
};

export default function Page() {
  return <Content />;
}
