'use client';
import { store } from '@remote/firebase';
import { collection, doc, writeBatch } from 'firebase/firestore';

import { COLLECTIONS } from '@constants/collection';
import { EVENT_BANNERS } from '@mock/banner';

export default function EventBannerAddButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store);

    EVENT_BANNERS.forEach((banner) => {
      const bannerRef = doc(collection(store, COLLECTIONS.EVENT_BANNERS));

      batch.set(bannerRef, banner);
    });

    await batch.commit();

    alert('배너 데이터가 추가되었습니다');
  };
  return (
    <button
      type="button"
      className="bg-indigo-500 py-2 px-4 rounded-md text-white"
      onClick={handleButtonClick}
    >
      이벤트 배너 데이터 추가
    </button>
  );
}
