import Image from 'next/image';

export default function Account() {
  const hasAccount = false;
  const 계좌개설상태 = 'READY';
  const title =
    계좌개설상태 === 'READY'
      ? `만들고 있으신\n계좌가 있으시군요`
      : `계좌 계설이\n더 쉽고 빨라졌어요`;
  const buttonLabel =
    계좌개설상태 === 'READY' ? '이어만들기' : '3분만에 개설하기';

  return (
    <>
      <div className="flex justify-between items-center gap-4 p-6">
        <div className="flex flex-col items-start gap-2">
          {hasAccount ? (
            <>
              <p className="text-slate-600 text-sm">홍길동 회원님의 자산</p>
              <p className="text-slate-900 text-xl font-bold">7,000원</p>
            </>
          ) : (
            <>
              <p className="text-slate-900 text-xl font-bold whitespace-pre-wrap">
                {title}
              </p>
              <button
                type="button"
                className="py-2 px-4 rounded-md bg-blue-600 text-white"
              >
                {buttonLabel}
              </button>
            </>
          )}
        </div>

        {hasAccount ? (
          <button
            type="button"
            className="py-2 px-4 rounded-md bg-blue-600 text-white"
          >
            분석
          </button>
        ) : (
          <Image src="" width="40" height="40" alt="계좌" />
        )}
      </div>
    </>
  );
}
