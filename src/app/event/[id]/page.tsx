import Preview from '@components/event/Preview';

import { getEvent } from '@remote/event';

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await getEvent(id);

  if (data === null) {
    return null;
  } else {
    return <Preview data={data} />;
  }
}
