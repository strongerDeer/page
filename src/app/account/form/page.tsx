'use client';
import { FORMS } from '@constants/account';
import { AccountForm } from '@models/account';

import { Fragment, useCallback } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  [key: string]: string;
};

export default function Form() {
  const { register, formState, handleSubmit } = useForm<FormData>({
    mode: 'onBlur',
  });

  const component = useCallback((form: AccountForm) => {
    if (form.type === 'TEXT_FIELD') {
      return (
        <>
          <label htmlFor={form.id}>{form.label}</label>
          <input
            id={form.id}
            type="text"
            placeholder={form.helpMessage}
            required={form.required}
            aria-invalid={formState.errors[form.id] !== null}
            {...register(form.id, {
              required: form.required,
              pattern: VALIDATION_MESSAGE_MAP[form.id],
            })}
          />
        </>
      );
    } else if (form.type === 'SELECT') {
    } else {
      return null;
    }
  }, []);
  return (
    <form>
      {FORMS.map((form) => {
        return <Fragment key={form.id}>{component(form)}</Fragment>;
      })}
    </form>
  );
}

const VALIDATION_MESSAGE_MAP: {
  [key: string]: {
    value: RegExp;
    message: string;
  };
} = {
  name: {
    value: /^[가-힣]+$/,
    message: '한글명을 확인해주세요',
  },
  email: {
    value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: '이메일 형식을 확인해주세요',
  },
  phone: {
    value: /^\d+$/,
    message: '휴대전화번호를 확인해주세요',
  },
};
