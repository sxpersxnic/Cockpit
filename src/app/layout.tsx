import type { Metadata } from 'next';
import './globals.css';
import { geistSans, geistMono } from '@/ui/fonts';

export const metadata: Metadata = {
  title: "melvinkampus.ch",
  description: "Melvin Kampus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
