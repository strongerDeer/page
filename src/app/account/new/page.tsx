'use client';
import Terms from '@components/account/Terms';
import useUser from '@hooks/useUser';
import withAuth from '@hooks/withAuth';
import { setTerms, getTerms } from '@remote/account';
import { useEffect, useState } from 'react';
import Form from '../form/page';

// STEP 0 : 약관동의
// STEP 1 : 계좌 개설 폼 페이지
// STEP 2 : 완료페이지

const LAST_STEP = 2;

function AccountNew() {
  const [step, setStep] = useState(0);
  const user = useUser();

  useEffect(() => {
    if (user) {
      const abcd = async () => {
        const abc = await getTerms(user?.id as string);

        if (abc === null) {
          setStep(0);
        } else {
          setStep(1);
        }
      };

      abcd();
    }
  }, [user]);

  return (
    <>
      {step === 0 ? (
        <Terms
          onNext={async (termIds) => {
            await setTerms({ userId: user?.id as string, termIds });
            setStep(step + 1);
          }}
        />
      ) : null}

      {step === 1 ? <Form /> : null}
    </>
  );
}

export default withAuth(AccountNew);
