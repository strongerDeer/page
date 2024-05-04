'use client';
import withAuth from '@hooks/withAuth';

import { signOut } from 'next-auth/react';

function MyPage() {
  return (
    <div>
      <button type="button" onClick={() => signOut({ callbackUrl: '/' })}>
        로그아웃
      </button>
    </div>
  );
}

export default withAuth(MyPage);
