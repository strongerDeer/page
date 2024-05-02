import ProviderButton from '@components/ProviderButton';
import { getProviders } from 'next-auth/react';

export default async function page() {
  const providers = await getProviders();

  return (
    <div>
      <h2> My Account</h2>
      {providers && <ProviderButton providers={providers} />}
    </div>
  );
}
