import withSuspense from '@components/shared/hocs/withSuspense';
import useEventBanners from './hooks/useEventBanners';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
// import Image from 'next/image';
import { Skeleton } from '@components/shared/Skeleton';

function EventBanners() {
  const { data } = useEventBanners();

  return (
    <div className="p-6">
      <Swiper spaceBetween={8}>
        {data?.map((banner) => (
          <SwiperSlide
            key={banner.id}
            style={{ backgroundColor: banner.backgroundColor }}
            className="p-6 rounded-md"
          >
            <Link href={banner.link} className="flex justify-between">
              <div>
                <p className="text-white text-lg font-bold">{banner.title}</p>
                <p className="text-slate-200">{banner.subTitle}</p>
              </div>
              {/* <Image src={banner.iconUrl} width={40} height={40} alt="" /> */}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export const BannerSkeleton = () => {
  return (
    <div className="p-6">
      <Skeleton width="100%" height={100} className="rounded-md" />
    </div>
  );
};

export default withSuspense(EventBanners, {
  fallback: <BannerSkeleton />,
});
