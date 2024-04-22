import CardListAddButton from '@components/test/CardListAddButton';
import EventBannerAddButton from '@components/test/EventBannerAddButton';

export default function TestPage() {
  return (
    <div className="flex gap-2 p-4">
      <EventBannerAddButton />
      <CardListAddButton />
    </div>
  );
}
