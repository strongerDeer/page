'use client';
import Alert from '@components/shared/Alert';
import { useAlertContext } from '@context/AlertContext';
import { Event } from '@models/event';
import { isAfter, parseISO } from 'date-fns';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';

export default function Preview({
  data,
  editMode,
}: {
  data: Event;
  editMode?: boolean;
}) {
  const { title, subTitle, contents, buttionLabel, link, startDate, endDate } =
    data;

  const { open } = useAlertContext();

  useEffect(() => {
    const isEndEvent = isAfter(new Date(), endDate);
    if (isEndEvent) {
      console.log('ddd');
      open({
        title: `${title}이 종료되었습니다.`,
        description: `아ㅇㅇㅇ`,
        onButtonClick: () => {
          window.history.back();
        },
      });
    }
  }, [title, endDate, open]);

  return (
    <div className="flex flex-col min-h-screen p-10">
      <div>
        <h2 className="font-bold text-2xl">{title}</h2>
        <h3 className="text-xl">{subTitle}</h3>
        <p className="text-slate-500">
          이벤트 기간:{startDate} ~{endDate}
        </p>
      </div>

      <ReactMarkdown className={!editMode ? 'flex-grow' : null}>
        {contents}
      </ReactMarkdown>
      <Link
        className="bg-blue-600 text-white h-10 w-28 inline-flex justify-center items-center rounded"
        href={link}
      >
        {buttionLabel}
      </Link>
    </div>
  );
}
