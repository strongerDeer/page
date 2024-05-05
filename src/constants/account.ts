import { Term, AccountForm } from '@models/account';

export const 약관목록 = [
  {
    id: '01',
    title: '계좌계설 관련 안내 및 필수 동의',
    link: null,
    mandatory: true,
  },
  {
    id: '02',
    title: '개인정보 요약 동의서',
    link: null,
    mandatory: true,
  },
  {
    id: '03',
    title: '마케팅 수신 동의',
    link: null,
    mandatory: false,
  },
] as Term[];

export const FORMS = [
  {
    id: 'name',
    label: '한글명',
    required: true,
    type: 'TEXT_FIELD',
  },
  {
    id: 'phone',
    label: '휴대전화번호',
    required: true,
    type: 'TEXT_FIELD',
  },
  {
    id: 'email',
    label: '이메일',
    required: true,
    type: 'TEXT_FIELD',
  },
  {
    id: 'accountName',
    label: '통장이름',
    required: true,
    type: 'TEXT_FIELD',
  },
] as AccountForm[];
