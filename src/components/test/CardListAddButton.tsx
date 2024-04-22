'use client';
import { store } from '@remote/firebase';
import { collection, doc, writeBatch } from 'firebase/firestore';

import { COLLECTIONS } from '@constants/collection';
import { CARD_LIST } from '@/mock/card';

export default function CardListAddButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store);

    CARD_LIST.forEach((card) => {
      const docRef = doc(collection(store, COLLECTIONS.CARD));

      batch.set(docRef, card);
    });

    await batch.commit();

    alert('카드 리스트가 추가되었습니다');
  };

  return (
    <button
      type="button"
      className="bg-blue-500 py-2 px-4 rounded-md text-white"
      onClick={handleButtonClick}
    >
      카드 리스트 추가하기
    </button>
  );
}
