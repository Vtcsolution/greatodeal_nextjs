'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

const ParticleBackground = dynamic(() => import('./ui/ParticleBackground'), { ssr: false });
const CustomCursor = dynamic(() => import('./ui/CustomCursor'), { ssr: false });

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && (
        <>
          <ParticleBackground />
          <CustomCursor />
          <Navbar />
        </>
      )}
      <main className="relative z-10">{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
