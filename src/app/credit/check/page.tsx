'use client';
import useCreditCheck from '@components/credit/hooks/useCreditCheck';
import CreditScore from '@components/home/CreditScore';
import { CHECK_STATUS } from '@constants/credit';
import { useAlertContext } from '@context/AlertContext';
import useUser from '@hooks/useUser';
import updateCredit from '@remote/credit';
import { useState } from 'react';
import { useMutation } from 'react-query';

export default function CreditCheckPage() {
  const { open } = useAlertContext();
  const [readyToPoll, setReadyToPoll] = useState(true);
  const user = useUser();

  const { mutate } = useMutation((creditScore: number) =>
    updateCredit({ creditScore, userId: user?.id as string }),
  );
  const { data: status } = useCreditCheck({
    onSucess: (creditScore) => {
      setReadyToPoll(false);
      mutate(creditScore);
    },
    onError: () => {
      open({
        title: '신용점수 조회에 실패했어요',
        description: '잠시 후 다시 시도해주세요',
        onButtonClick: () => {
          window.history.back();
        },
      });
      setReadyToPoll(false);
    },
    enabled: readyToPoll,
  });

  return (
    <div className="px-4 flex flex-col min-h-screen">
      <p>{STATUS_CHECK_MESSAGE[status ?? 'READY']}</p>
      {status === CHECK_STATUS.COMPLETE ? (
        <button type="button" onClick={() => window.history.back()}>
          확인
        </button>
      ) : null}
    </div>
  );
}
const STATUS_CHECK_MESSAGE = {
  [CHECK_STATUS.READY]: '신용점수 조회를 위해 정보를 준비하고 있어요',
  [CHECK_STATUS.PROGRESS]: '신용점수를 조회중입니다. 잠시만 기다려주세요',
  [CHECK_STATUS.COMPLETE]: '신용점수 조회가 완료되었습니다.',
};
