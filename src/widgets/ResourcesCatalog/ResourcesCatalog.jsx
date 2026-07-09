import { Button } from '@/shared/ui/Button';
import { getAssetHref } from '@/shared/lib/routing';
import { Reports } from '@/widgets/Reports';

import './ResourcesCatalog.scss';

const metrics = [
  ['300+', 'Доступных ресурсов'],
  ['12k+', 'Всего загрузок'],
  ['10k+', 'Активных пользователей'],
  ['100+', 'Стран, где нас читают'],
];

const resourceCards = [
  {
    image: '/imgs/resources/resource-trends.webp',
    title: 'Тренды FutureTech 2024',
    text: 'Электронная книга с прогнозами технологических трендов на год: ИИ, космос, биотех и новые рынки.',
  },
  {
    image: '/imgs/resources/resource-space-ebook.webp',
    title: 'Электронная книга об освоении космоса',
    text: 'Практичный обзор космических исследований, коммерческих запусков и инфраструктуры будущего.',
  },
  {
    image: '/imgs/resources/resource-quantum-small.webp',
    title: 'Отчёт о квантовых вычислениях',
    text: 'Сжатая версия ключевых принципов и сценариев применения квантовых технологий.',
  },
];

export const ResourcesCatalog = () => {
  return (
    <section className="resources-catalog" aria-labelledby="resources-catalog-title">
      <h2 className="visually-hidden" id="resources-catalog-title">Каталог материалов FutureTech</h2>

      <div className="resources-catalog__metrics container">
        {metrics.map(([value, label]) => (
          <div className="resources-catalog__metric" key={label}>
            <span className="resources-catalog__metric-value">{value}</span>
            <span className="resources-catalog__metric-label">{label}</span>
          </div>
        ))}
      </div>

      <Reports />

      <ul className="resources-catalog__cards container">
        {resourceCards.map((card) => (
          <li className="resources-catalog__cards-item" key={card.title}>
            <article className="resources-catalog__card">
              <img className="resources-catalog__card-image" src={getAssetHref(card.image)} loading="lazy" decoding="async" alt="" />
              <div className="resources-catalog__card-main">
                <h3 className="resources-catalog__card-title">{card.title}</h3>
                <p className="resources-catalog__card-text">{card.text}</p>
              </div>
              <div className="resources-catalog__card-actions">
                <Button href="#!">Подробнее</Button>
                <Button variant="dark-grey" href="#!">Скачать PDF</Button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
