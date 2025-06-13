import type { Metadata } from 'next';
import './globals.css';

import { ChatIcon } from '@/components/icons/icons';

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <body
        className={`font-poppins vsc-initialized overflow-x-hidden antialiased`}
        cz-shortcut-listen="true"
      >
        <div className="bg-socie-peach fixed right-0 bottom-40 z-50 mr-6 mb-8 rounded-full p-5 shadow-sm">
          <ChatIcon />
        </div>
        {children}
      </body>
    </html>
  );
}
