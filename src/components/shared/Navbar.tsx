'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const showSignButton = ['/auth/signin'].includes(pathname) === false;

  const renderButton = useCallback(() => {
    if (session !== null) {
      return (
        <Link href="my">
          {session?.user && (
            <Image
              width={40}
              height={40}
              className="rounded"
              src={session.user?.image ?? ''}
              alt=""
            />
          )}
        </Link>
      );
    }
    if (showSignButton) {
      return <Link href="/auth/signin">로그인/회원가입</Link>;
    }
    return null;
  }, [session, showSignButton]);
  return (
    <div className="flex justify-between">
      <Link href="/">홈</Link>
      {renderButton()}
    </div>
  );
}
