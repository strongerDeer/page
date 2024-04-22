import addDelimiter from '@utils/addDelimiter';
import { useRef, useEffect, useState, memo } from 'react';

const 신용점수_최대값 = 1_000;

interface CreditScoreChartProps {
  width?: number;
  height?: number;
  score: number;
}

function CreditScoreChart({
  score,
  width = 100,
  height = 100,
}: CreditScoreChartProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [totalLenght, setTotalLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setTotalLength(pathRef.current.getTotalLength());
    }
  }, []);

  const dashoffset = totalLenght - (score / 신용점수_최대값) * totalLenght;

  return (
    <div className="relative" style={{ width: width, height: height }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 223 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 회색 배경 경로 */}
        <path
          ref={pathRef}
          d="M18.421 154C12.3741 140.971 9 126.458 9 111.159C9 54.7382 54.8908 9 111.5 9C168.109 9 214 54.7382 214 111.159C214 126.458 210.626 140.971 204.579 154"
          className="stroke-slate-200"
          strokeWidth="18"
          strokeLinecap="round"
        ></path>
        {/* 파란색 경로 */}
        <path
          className="stroke-blue-500"
          d="M18.421 154C12.3741 140.971 9 126.458 9 111.159C9 54.7382 54.8908 9 111.5 9C168.109 9 214 54.7382 214 111.159C214 126.458 210.626 140.971 204.579 154"
          strokeWidth="18"
          strokeLinecap="round"
          // 전체 길이
          strokeDasharray={totalLenght}
          // 움직일 길이
          strokeDashoffset={dashoffset}
        ></path>
      </svg>
      <p className="font-bold absolute left-1/2 bottom-1/4 -translate-x-1/2">
        {addDelimiter(score)}
      </p>
    </div>
  );
}

export default memo(CreditScoreChart);
