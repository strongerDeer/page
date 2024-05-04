import AuthSession from '@components/AuthSession';
import QueryWrap from '@components/QueryWrap';
import Navbar from '@components/shared/Navbar';
import { AlertContextProvider } from '@context/AlertContext';
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
        <QueryWrap>
          <AlertContextProvider>
            <AuthSession>
              <Navbar />
              {children}

              <div id="root-portal"></div>
            </AuthSession>
          </AlertContextProvider>
        </QueryWrap>
      </body>
    </html>
  );
}
