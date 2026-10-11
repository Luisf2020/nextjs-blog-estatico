import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blog estatico (Next.js)',
  description: 'Blog generado estaticamente con el App Router de Next.js.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '3rem auto' }}>
        {children}
      </body>
    </html>
  );
}
