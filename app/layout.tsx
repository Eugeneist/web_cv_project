import type { Metadata } from 'next';
import { Chivo_Mono } from '@next/font/google';
import './globals.css';

export const chivo_mono = Chivo_Mono({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Yevhen Rudofylov | CV website',
  description: 'Yevhen is a Frontend developer and this website is about him',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chivo_mono.className}>{children}</body>
    </html>
  );
}
