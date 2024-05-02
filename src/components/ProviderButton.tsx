'use client';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';

export default function ProviderButton({
  providers,
}: {
  providers: Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider>;
}) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <button
          key={provider.id}
          onClick={() => signIn(provider.id, { callbackUrl: '/' })}
        >
          {provider.name} Login
        </button>
      ))}
    </>
  );
}
