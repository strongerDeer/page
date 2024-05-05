import { 약관목록 } from '@constants/account';
import { Term } from '@models/account';
import { ChangeEvent, useState } from 'react';

export default function Terms({
  onNext,
}: {
  onNext: (termIds: string[]) => void;
}) {
  const [termsAgreements, setTermsAgreements] = useState(() =>
    generateInitialValues(약관목록),
  );
  const handleAgreement = (id: string, checked: boolean) => {
    setTermsAgreements((prevTerms) => {
      return prevTerms.map((term) =>
        term.id === id ? { ...term, checked } : term,
      );
    });
  };
  const handleAllAgreement = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setTermsAgreements((prevTerms) => {
      return prevTerms.map((term) => ({ ...term, checked }));
    });
  };

  const isAllCheck = termsAgreements.every((term) => term.checked);
  const isRequireCheck = termsAgreements
    .filter((term) => term.mandatory)
    .every((term) => term.checked);
  return (
    <>
      <input
        type="checkbox"
        id="all-chk"
        checked={isAllCheck}
        onChange={handleAllAgreement}
      />
      <label htmlFor="all-chk">약관 모두동의</label>

      <ul>
        {termsAgreements.map((term) => (
          <li key={term.id}>
            <input
              type="checkbox"
              id={term.id}
              checked={term.checked}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleAgreement(term.id, e.target.checked)
              }
            />
            <label htmlFor={term.id}>
              {term.title} {term.mandatory ? '(필수)' : '(선택)'}
            </label>
          </li>
        ))}
      </ul>
      <button
        type="button"
        disabled={!isRequireCheck}
        onClick={() => {
          onNext(
            termsAgreements.filter((term) => term.checked).map(({ id }) => id),
          );
        }}
        className="bg-blue-500 text-white w-full py-2 rounded disabled:bg-blue-100 disabled:text-slate-400"
      >
        약관동의
      </button>
    </>
  );
}

const generateInitialValues = (terms: Term[]) => {
  return terms.map((term) => ({ ...term, checked: false }));
};
