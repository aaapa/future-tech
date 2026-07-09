import SimpleBar from 'simplebar-react';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { getAssetHref } from '@/shared/lib/routing';
import { Promo } from '@/widgets/Promo';

import './Reports.scss';

const tabs = ['Технические документы', 'Электронные книги', 'Отчёты'];

const reports = [
  {
    icon: '/imgs/resources/resources-whitepaper-icon.svg',
    title: 'Технический документ о квантовых вычислениях',
    description: 'Технические спецификации и требования для внедрения систем квантовых вычислений.',
    image: '/imgs/resources/resource-quantum.webp',
    summary: 'Глубокий разбор принципов, применений и потенциального влияния квантовых вычислений.',
    date: 'Июль 2023',
    category: 'Квантовые вычисления',
    author: 'Доктор Квант',
  },
  {
    icon: '/imgs/resources/resources-space-icon.svg',
    title: 'Технический документ об освоении космоса',
    description: 'Исследует колонизацию Марса, потенциал астероидных ресурсов и развитие космического туризма.',
    image: '/imgs/resources/resource-space.webp',
    summary: 'Аналитический документ о последних достижениях в космических миссиях и добыче ресурсов.',
    date: 'Сентябрь 2023',
    category: 'Освоение космоса',
    author: 'FutureTech Space Division',
  },
];

export const Reports = () => {
  return (
    <section className="reports" aria-labelledby="reports-title">
      <Promo
        className="reports__promo"
        id="reports-title"
        eyebrow="Погрузитесь в детали"
        title="Подробные отчёты и аналитика"
      >
        <SimpleBar className="reports__tabs-scroll" autoHide={false} forceVisible="x">
          <menu className="reports__tabs" aria-label="Тип материала">
            {tabs.map((tab, index) => (
              <li className="reports__tabs-item" key={tab}>
                <button className="reports__tab" type="button" aria-pressed={index === 0}>
                  <span className="reports__tab-text">{tab}</span>
                </button>
              </li>
            ))}
          </menu>
        </SimpleBar>
      </Promo>

      <div className="reports__list">
        {reports.map((report) => (
          <article className="reports__item container" key={report.title}>
            <aside className="reports__aside">
              <img className="reports__icon" src={getAssetHref(report.icon)} width="80" height="80" loading="lazy" decoding="async" alt="" />
              <div className="reports__info">
                <h3 className="reports__title">{report.title}</h3>
                <p className="reports__description">{report.description}</p>
              </div>
            </aside>

            <div className="reports__main">
              <img className="reports__image" src={getAssetHref(report.image)} loading="lazy" decoding="async" alt="" />
              <div className="reports__row">
                <div className="reports__copy">
                  <h3 className="reports__subtitle">{report.title}</h3>
                  <p className="reports__text">{report.summary}</p>
                </div>
                <Button className="reports__button" href="#!">
                  <span>Скачать PDF</span>
                  <Icon name="arrow-top-right" />
                </Button>
              </div>
              <dl className="reports__details">
                {[
                  ['Дата публикации', report.date],
                  ['Категория', report.category],
                  ['Автор', report.author],
                ].map(([label, value]) => (
                  <div className="reports__detail" key={label}>
                    <dt className="reports__detail-label">{label}</dt>
                    <dd className="reports__detail-value">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
