import CardListAddButton from '@components/test/CardListAddButton';
import EventBannerAddButton from '@components/test/EventBannerAddButton';
import EventForm from '@components/test/EventForm';

export default function TestPage() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="border-b-8 pb-4 p-2">
        <EventBannerAddButton />
      </div>
      <div className="mb-3 border-b-8 pb-4 p-2">
        <CardListAddButton />
      </div>
      <EventForm />
    </div>
  );
}
