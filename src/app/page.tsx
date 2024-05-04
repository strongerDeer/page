'use client';
import AuthGuard from '@components/auth/AuthGuard';
import Account from '@components/home/Account';
import { CardListSkeleton } from '@components/home/CardList';
import { CreditScoreSkeleton } from '@components/home/CreditScore';
import { BannerSkeleton } from '@components/home/EventBanners';

import dynamic from 'next/dynamic';

const EventBanners = dynamic(() => import('@components/home/EventBanners'), {
  ssr: false,
  loading: () => <BannerSkeleton />,
});

const CreditScore = dynamic(() => import('@components/home/CreditScore'), {
  ssr: false,
  loading: () => <CreditScoreSkeleton />,
});

const CardList = dynamic(() => import('@components/home/CardList'), {
  ssr: false,
  loading: () => <CardListSkeleton />,
});

export default function Home() {
  return (
    <main>
      <AuthGuard>
        <EventBanners />
        <Account />
        <div className="bg-slate-200 h-2"></div>
        <CreditScore />
        <div className="bg-slate-200 h-2"></div>
        <CardList />
      </AuthGuard>
    </main>
  );
}
