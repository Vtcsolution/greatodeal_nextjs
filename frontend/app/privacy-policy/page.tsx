import type { Metadata } from 'next';
import PrivacyClient from '@/components/pages/PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy | Greatodeal',
  description: 'Greatodeal\'s Privacy Policy explains how we collect, use, and protect your personal information when you use our software development services and website.',
  keywords: ['Greatodeal privacy policy', 'data privacy', 'personal data protection'],
  openGraph: {
    title: 'Privacy Policy | Greatodeal',
    description: 'How Greatodeal collects, uses, and protects your personal data.',
    url: 'https://greatodeal.com/privacy-policy',
  },
  twitter: { card: 'summary', title: 'Privacy Policy | Greatodeal', images: ['https://greatodeal.com/images/logo.png'] },
  alternates: { canonical: 'https://greatodeal.com/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
