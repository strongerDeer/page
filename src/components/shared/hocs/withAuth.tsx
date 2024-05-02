import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ComponentType } from 'react';

export default function withAuth<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
) {
  return function AuthenticatedComponent(props: Props) {
    const { data, status } = useSession();
    const router = useRouter();
    if (status !== 'loading' && data === null) {
      router.replace('/auth/signin');
      return null;
    }
    return <WrappedComponent {...(props as any)} />;
  };
}
