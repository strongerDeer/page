import AuthSession from '@components/AuthSession';
import Navbar from '@components/shared/Navbar';
import '@styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'page0127',
  description: '나의 독서 데이터 관리',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>
        <AuthSession>
          <Navbar />
          {children}
        </AuthSession>
      </body>
    </html>
  );
}
