import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Mobile App Development | Flutter, React Native, iOS & Android | Greatodeal',
  description: 'Professional mobile app development services for iOS and Android using Flutter and React Native. Cross-platform and native apps built by Greatodeal — delivered on time, on budget.',
  keywords: ['mobile app development', 'Flutter development', 'React Native development', 'iOS app development', 'Android app development', 'cross-platform mobile apps', 'native mobile apps', 'mobile UI/UX', 'app development company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Mobile App Development | Flutter, React Native, iOS & Android | Greatodeal',
    description: 'Professional mobile app development services for iOS and Android using Flutter and React Native. Cross-platform and native apps built by Greatodeal.',
    url: 'https://greatodeal.com/services/mobile-apps',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Mobile App Development Services' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/services/mobile-apps',
  },
};

export default function Page() {
  return <Content />;
}
