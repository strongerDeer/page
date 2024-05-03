'use client';
import Preview from '@components/event/Preview';
import { COLLECTIONS } from '@constants/collection';
import { store } from '@remote/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { ChangeEvent, useCallback, useState } from 'react';

export default function EventForm() {
  const [formValues, setFormValues] = useState({
    title: '',
    subTitle: '',
    contents: '',
    buttionLabel: '',
    link: '',
    startDate: '',
    endDate: '',
  });

  const handleFormValues = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [e.target.name]: e.target.value,
      }));
    },
    [],
  );

  const handleSubmit = async () => {
    await setDoc(doc(collection(store, COLLECTIONS.EVENT)), formValues);
    alert('이벤트 정보를 추가하였습니다.');
  };

  // 빈값이 없는지 확인
  const isNotEmpty = Object.values(formValues).every((value) => value !== '');
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <section className="basis-1/3">
          <h2>form</h2>
          <label htmlFor="event-title">이벤트 제목</label>
          <input
            type="text"
            name="title"
            id="event-title"
            value={formValues.title}
            onChange={handleFormValues}
          />

          <label htmlFor="event-sub">이벤트 부제목</label>
          <input
            type="text"
            name="subTitle"
            id="event-sub"
            value={formValues.subTitle}
            onChange={handleFormValues}
          />

          <label htmlFor="event-contents">컨텐츠</label>
          <textarea
            name="contents"
            id="event-contents"
            onChange={handleFormValues}
            value={formValues.contents}
          />

          <label htmlFor="event-buttion">버튼 라벨</label>
          <input
            type="text"
            name="buttionLabel"
            id="event-buttion"
            value={formValues.buttionLabel}
            onChange={handleFormValues}
          />

          <label htmlFor="event-link">링크</label>
          <input
            type="text"
            name="link"
            id="event-link"
            value={formValues.link}
            onChange={handleFormValues}
          />

          <label htmlFor="event-start">시작일</label>
          <input
            type="text"
            name="startDate"
            id="event-start"
            value={formValues.startDate}
            onChange={handleFormValues}
          />
          <label htmlFor="event-end">종료일</label>
          <input
            type="text"
            name="endDate"
            id="event-end"
            value={formValues.endDate}
            onChange={handleFormValues}
          />
        </section>
        <section className="basis-2/3">
          <h2>preview</h2>
          <Preview data={formValues} editMode />
        </section>
      </div>
      <button
        type="submit"
        className="bg-blue-500 py-2 px-4 rounded-md text-white disabled:bg-blue-200"
        disabled={!isNotEmpty}
      >
        저장하기
      </button>
    </form>
  );
}
