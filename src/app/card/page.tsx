'use client';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCallback } from 'react';

import { getCards } from '@remote/card';
import Link from 'next/link';

export default function CardListPage() {
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
