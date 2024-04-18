import { getEventBanners } from '@remote/banner';
import { useQuery } from 'react-query';

export default function useEventBanners() {
  //  TODO: user가 계좌를 보유하고 있는가?
  return useQuery(
    ['event-banners'],
    () => getEventBanners({ hasAccount: false }),
    {
      suspense: true,
    },
  );
}
