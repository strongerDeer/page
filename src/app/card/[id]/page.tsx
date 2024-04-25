import { getCard } from '@remote/card';

export default async function CardDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { name, corpName, promotion, tags, benefit } = await getCard(params.id);

  const subTitle =
    promotion != null ? removeHtmlTags(promotion?.title) : tags.join(',');
  return (
    <div className="">
      <p>
        {corpName} <strong>{name}</strong>
      </p>
      <p>{subTitle}</p>

      <p>{tags}</p>
      {benefit.length > 0 && (
        <ul>
          {benefit.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      )}
      {promotion != null && (
        <div>
          <h3 className="font-bold">유의사항</h3>

          <div dangerouslySetInnerHTML={{ __html: promotion.terms }}></div>
        </div>
      )}

      <button type="button">1분만에 신청하고 혜택받기</button>
    </div>
  );
}
function removeHtmlTags(text: string) {
  return text.replace(/<\/?[^>]+(>|$)/g, '');
}
