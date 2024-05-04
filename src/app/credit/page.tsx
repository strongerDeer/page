'use client';
import CreditScoreChart from '@components/shared/CreditScoreChart';
import { useAlertContext } from '@context/AlertContext';
import useUser from '@hooks/useUser';
import { User } from '@models/user';
import { getCredit } from '@remote/credit';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { QueryClient } from 'react-query';

export default function CreditPage() {
  const 신용점수를조회했는가 = true;
  const user = useUser();
  const { open } = useAlertContext();
  const navigate = useRouter();

  // const client = new QueryClient();
  // await client.prefetchQuery(['credit', user?.id], () =>
  //   getCredit(user?.id as string),
  // );

  const handleCheck = useCallback(() => {
    if (user === null) {
      // 로그인 X
      open({
        title: '로그인이 필요한 기능이에요',
        description:
          '정확한 신용정보를 확인하기 위해 로그인을 먼저 진행해주세요',
        onButtonClick: () => {
          navigate.push('/auth/signin');
        },
      });

      return;
    }

    navigate.push('/credit/check');
  }, [user, navigate, open]);

  return 신용점수를조회했는가 ? (
    <div className="px-4 flex flex-col min-h-screen">
      <div className="flex-grow">
        <h2 className="text-center font-bold text-2xl">
          나의 신용점수
          <br /> 조회하기
        </h2>
        {/* 나의 실제 점수 */}
        <CreditScoreChart score={999} className="m-auto" />

        <div className="py-4">
          <h3 className="font-bold">추천카드</h3>
          <p>나에게 맞는 카드 찾아보기</p>
        </div>
      </div>
      <button
        type="button"
        className="bg-blue-500 text-white w-full rounded h-12"
        onClick={handleCheck}
      >
        신용점수 올리기
      </button>
    </div>
  ) : (
    <div className="px-4 flex flex-col min-h-screen">
      <div className="flex-grow">
        <h2 className="text-center font-bold text-2xl">
          내 신용점수를
          <br /> 조회하고 관리해보세요
        </h2>
        <CreditScoreChart score={0} className="m-auto" />
        <div className="py-4">
          <h3 className="font-bold">정확한 신용평점</h3>
          <p>대표 신용 평가 기관의 데이터로 관리해요</p>
        </div>
        <div className="py-4">
          <h3 className="font-bold">신용점수 무료 조회</h3>
          <p>신용접수에 영향없이 무료로 조회가 가능해요</p>
        </div>
      </div>
      <button
        type="button"
        className="bg-blue-500 text-white w-full rounded h-12"
        onClick={handleCheck}
      >
        30초만에 신용점수 확인하기
      </button>
    </div>
  );
}
