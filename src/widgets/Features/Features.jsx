import { getAssetHref } from '@/shared/lib/routing';

import './Features.scss';

const featureGroups = [
  {
    icon: '/imgs/features/features__icon-1.svg',
    title: 'Блог о технологиях будущего',
    subtitle: 'Будьте в курсе событий в нашем разделе блога, посвященном технологиям будущего.',
    cards: [
      ['Количество', 'Более 1000 статей о новых технологических тенденциях и прорывах.'],
      ['Разнообразие', 'Статьи посвящены искусственному интеллекту, робототехнике, биотехнологиям и многим другим областям.'],
      ['Частота', 'Свежий контент добавляется ежедневно, чтобы держать вас в курсе событий.'],
      ['Авторитетность', 'Материалы написаны нашей командой технических экспертов и профессионалов отрасли.'],
    ],
  },
  {
    icon: '/imgs/features/features__icon-2.svg',
    title: 'Блоги с аналитической информацией об исследованиях',
    subtitle: 'Погрузитесь глубже в будущие технологические концепции с помощью исследовательского раздела.',
    cards: [
      ['Глубина', 'Более 500 исследовательских статей для более глубокого понимания.'],
      ['Графика', 'Наглядные пособия и инфографика для улучшения понимания.'],
      ['Тенденции', 'Изучайте новые тенденции в будущих технологических исследованиях.'],
      ['Авторы', 'Материалы технических исследователей и представителей академической среды.'],
    ],
  },
];

export const Features = () => {
  return (
    <section className="features">
      <div className="features__inner">
        {featureGroups.map((group) => (
          <div className="features__item" key={group.title}>
            <div className="features__item-content container">
              <div className="features__main">
                <img className="features__icon" src={getAssetHref(group.icon)} width="80" height="80" loading="lazy" decoding="async" alt="" />
                <h2 className="features__title">{group.title}</h2>
                <p className="features__subtitle">{group.subtitle}</p>
              </div>
              <ul className="features__list">
                {group.cards.map(([title, text]) => (
                  <li className="features__list-item" key={title}>
                    <div className="features__card">
                      <h3 className="features__card-title">{title}</h3>
                      <p className="features__card-text">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
