'use client';
import Account from '@components/home/Account';
import { BannerSkeleton } from '@components/home/EventBanners';

import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from 'react-query';

const EventBanners = dynamic(() => import('@components/home/EventBanners'), {
  loading: () => <BannerSkeleton />,
  ssr: false,
});

const client = new QueryClient({});
export default function Home() {
  return (
    <main>
      <QueryClientProvider client={client}>
        <EventBanners />
        <Account />
      </QueryClientProvider>
    </main>
  );
}
