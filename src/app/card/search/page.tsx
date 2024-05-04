'use client';

import { useDebounce } from '@hooks/useDebounce';
import { getSearchCards } from '@remote/card';
import Link from 'next/link';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

export default function SearchPage() {
  const [keyword, setKeyword] = useState<string>('');
  const debouncedkeyword = useDebounce(keyword);

  const inputRef = useRef<HTMLInputElement>(null);

  const { data } = useQuery(
    ['cards', debouncedkeyword],
    () => getSearchCards(debouncedkeyword),
    {
      enabled: debouncedkeyword !== '',
    },
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);
  return (
    <div>
      <h2>추천카드</h2>
      <p>회원님을 위해 준비했어요</p>
      <input
        ref={inputRef}
        type="search"
        className="border border-slate-300  rounded-md"
        value={keyword}
        onChange={handleKeyword}
      />
      {keyword !== '' && data?.length === 0 ? (
        <p>찾는 카드가 없어요!</p>
      ) : (
        <ul>
          {data?.map((card, index) => (
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
      )}
    </div>
  );
}
