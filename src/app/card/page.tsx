'use client';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCallback } from 'react';

import { getCards } from '@remote/card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CardListPage() {
  const navigator = useRouter();
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(['cards'], ({ pageParam }) => getCards(pageParam), {
    getNextPageParam: (snapshot) => {
      return snapshot.lastVisible;
    },
  });

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return;
    }
    fetchNextPage();
  }, [hasNextPage, fetchNextPage, isFetching]);

  if (data == null) {
    return null;
  }

  const cards = data?.pages.map(({ items }) => items).flat();

  return (
    <div>
      <h2>추천카드</h2>
      <p>회원님을 위해 준비했어요</p>
      <input
        type="search"
        className="border border-slate-300  rounded-md"
        onFocus={() => navigator.push('/card/search')}
      />
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
        <ul>
          {cards.map((card, index) => (
            <li key={card.id}>
              <Link
                className="flex items-center justify-between py-2 px-6"
                href={`/card/${card.id}`}
              >
                <div>
                  <p className="font-bold">{index + 1}위</p>
                  <p>{card.name}</p>
                </div>
                <div className="flex gap-4">
                  {card.payback != null ? (
                    <p className="bg-blue-400 text-white rounded-xl px-2 text-sm flex items-center">
                      {card.payback}
                    </p>
                  ) : (
                    <></>
                  )}
                  <span>&gt;</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}
