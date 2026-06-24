import React from 'react';
import { AdminProvider } from '@/context/AdminContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-[#0A0A0A] text-base" style={{ fontSize: '16px' }}>{children}</div>
    </AdminProvider>
  );
}
