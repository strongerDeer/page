'use client';
import { Skeleton } from '@components/shared/Skeleton';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from 'react-query';

const EventBanners = dynamic(() => import('@components/home/EventBanners'), {
  loading: () => <Skeleton width="100%" height={100} />,
  ssr: false,
});

const client = new QueryClient({});
export default function Home() {
  return (
    <main>
      <QueryClientProvider client={client}>
        <p className="bg-blue-100">Hello</p>
        <EventBanners />
      </QueryClientProvider>
    </main>
  );
}
