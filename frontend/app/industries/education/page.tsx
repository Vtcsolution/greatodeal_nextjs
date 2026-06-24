import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Education IT Solutions | LMS, E-Learning Platform Development | Greatodeal',
  description: 'Custom education technology solutions: LMS development, e-learning platforms, student management systems, virtual classrooms, and AI tutoring. Expert EdTech developers in Lahore, Pakistan.',
  keywords: ['education technology', 'LMS development', 'e-learning platform', 'EdTech solutions', 'student management system', 'virtual classroom', 'AI tutoring', 'online learning', 'school management software', 'educational app development', 'EdTech company Pakistan', 'Greatodeal'],
  openGraph: {
    title: 'Education IT Solutions | LMS, E-Learning Platform Development | Greatodeal',
    description: 'Custom education technology solutions: LMS development, e-learning platforms, student management systems, virtual classrooms, and AI tutoring.',
    url: 'https://greatodeal.com/industries/education',
    images: [{ url: 'https://greatodeal.com/images/logo.png', width: 512, height: 512, alt: 'Greatodeal Education IT Solutions' }],
  },
  twitter: {
    card: 'summary',
    images: ['https://greatodeal.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://greatodeal.com/industries/education',
  },
};

export default function Page() {
  return <Content />;
}
