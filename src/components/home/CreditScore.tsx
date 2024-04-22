import CreditScoreChart from '@components/shared/CreditScoreChart';
import { Skeleton } from '@components/shared/Skeleton';
import Link from 'next/link';

export default function CreditScore() {
  return (
    <div className="flex justify-between p-6 rounded-md bg-white">
      <div className="flex flex-col gap-2">
        <p className="font-bold">
          나의 신용도를 증명하고
          <br /> 점수를 올리세요
        </p>
        <Link
          href="#"
          className="inline-flex bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          내 신용점수 보러가기
        </Link>
      </div>
      <CreditScoreChart width={80} height={80} score={500} />
    </div>
  );
}

export const CreditScoreSkeleton = () => {
  return (
    <div className="flex justify-between p-6 rounded-md bg-white">
      <div className="flex flex-col gap-2">
        <Skeleton width={155} height={50} />
        <Skeleton width={155} height={31} />
      </div>
    </div>
  );
};
