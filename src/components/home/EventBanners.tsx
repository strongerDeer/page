import withSuspense from '@components/shared/hocs/withSuspense';
import useEventBanners from './hooks/useEventBanners';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@components/shared/Skeleton';

function EventBanners({ props }: { props?: any }) {
  const { data } = useEventBanners();

  return (
    <Swiper spaceBetween={8}>
      {data?.map((banner) => (
        <SwiperSlide
          key={banner.id}
          style={{ backgroundColor: banner.backgroundColor }}
        >
          <Link href={banner.link}>
            <p>{banner.title}</p>
            <p>{banner.subTitle}</p>
            <Image src={banner.iconUrl} width={40} height={40} alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default withSuspense(EventBanners, {
  fallback: <Skeleton width="100%" height={100} />,
});
