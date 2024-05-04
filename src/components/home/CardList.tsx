import withSuspense from '@hooks/withSuspense';
import useCards from './hooks/useCards';
import { Skeleton } from '@components/shared/Skeleton';

import Link from 'next/link';

function CardList() {
  const { data } = useCards();

  const isShowMoreButton = data?.items.length ?? 0 > 5;

  return (
    <div className="py-6">
      <h2 className="font-bold py-3 px-6">추천 카드</h2>
      <ul>
        {data?.items.slice(0, 5).map((card, index) => (
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
      {isShowMoreButton && <Link href="/card">더보기</Link>}
    </div>
  );
}

export function CardListSkeleton() {
  return (
    <div className="py-6">
      <h2 className="font-bold py-3 px-6">추천 카드</h2>
      <ul>
        {[...new Array(5)].map((card, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-2 px-6"
          >
            <div>
              <Skeleton width={30} height={25} />
              <Skeleton width={45} height={20} />
            </div>
            <div className="flex gap-4">
              <span>&gt;</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withSuspense(CardList, { fallback: <CardListSkeleton /> });
