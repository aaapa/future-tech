import clsx from 'clsx';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { getAssetHref } from '@/shared/lib/routing';

import './News.scss';

const actions = [
  { icon: 'like', label: 'Понравилось' },
  { icon: 'shares', label: 'Поделиться' },
];

export const newsCards = [
  {
    image: '/imgs/news/news-1.webp',
    title: 'Решающая победа прогрессивной политики',
    category: 'Политика',
    likes: '2.2k',
    shares: '204',
  },
  {
    image: '/imgs/news/news-2.webp',
    title: 'Технологические гиганты представляют передовые разработки в области искусственного интеллекта',
    category: 'Технологии',
    likes: '6k',
    shares: '92',
  },
  {
    image: '/imgs/news/news-3.webp',
    title: 'Варианты COVID-19',
    category: 'Здоровье',
    likes: '10k',
    shares: '124',
  },
];

const NewsActions = ({ likes, shares }) => {
  const values = { like: likes, shares };

  return (
    <menu className="news__card-actions">
      {actions.map((action) => (
        <li className="news__card-actions-item" key={action.icon}>
          <button className="news__card-actions-button" type="button" title={action.label}>
            <Icon className="news__card-icon" name={action.icon} />
            <span aria-hidden="true">{values[action.icon]}</span>
            <span className="visually-hidden">{action.label}</span>
          </button>
        </li>
      ))}
    </menu>
  );
};

export const NewsCard = ({ card }) => {
  return (
    <article className="news__card">
      <div className="news__card-content">
        <header className="news__card-header">
          <img className="news__card-preview" src={getAssetHref(card.image)} width="406" height="185" loading="lazy" decoding="async" alt="" />
          <div className="news__card-info">
            <h3 className="news__card-title">{card.title}</h3>
            <a className="news__card-link" href="#!">{card.category}</a>
          </div>
        </header>
        <footer className="news__card-footer">
          <NewsActions likes={card.likes} shares={card.shares} />
          <Button href="#!">
            <span>Подробнее</span>
            <Icon name="arrow-top-right" />
          </Button>
        </footer>
      </div>
    </article>
  );
};

export const NewsList = ({ className }) => {
  return (
    <ul className={clsx('news__list', className)}>
      {newsCards.map((card) => (
        <li className="news__list-item" key={card.title}>
          <NewsCard card={card} />
        </li>
      ))}
    </ul>
  );
};

export const News = () => {
  return (
    <section className="news" aria-labelledby="news-title">
      <div className="news__inner">
        <h2 className="visually-hidden" id="news-title">Новости</h2>
        <div className="news__item">
          <article className="news__card container">
            <img
              className="news__card-preview"
              src={getAssetHref('/imgs/news/news-main.webp')}
              width="515"
              height="427"
              loading="lazy"
              decoding="async"
              alt=""
            />
            <div className="news__card-content">
              <header className="news__card-header">
                <div className="news__card-info">
                  <h3 className="news__card-title">
                    Глобальный климатический саммит посвящен неотложным действиям в области изменения климата
                  </h3>
                  <p className="news__card-desc">
                    Мировые лидеры собрались на Глобальный климатический саммит, чтобы обсудить сокращение выбросов и
                    цели в области возобновляемых источников энергии.
                  </p>
                </div>
              </header>
              <div className="news__card-main">
                <ul className="news__meta">
                  <li className="news__meta-item">
                    <div className="news__meta-card">
                      <span className="news__meta-label">Категория</span>
                      <a className="news__meta-link" href="#!">Окружающая среда</a>
                    </div>
                  </li>
                  <li className="news__meta-item">
                    <div className="news__meta-card">
                      <span className="news__meta-label">Дата публикации</span>
                      <time className="news__meta-value" dateTime="2023-10-10">10 октября 2023 года</time>
                    </div>
                  </li>
                  <li className="news__meta-item">
                    <div className="news__meta-card">
                      <span className="news__meta-label">Автор</span>
                      <a className="news__meta-link" href="#!">Джейн Смит</a>
                    </div>
                  </li>
                </ul>
              </div>
              <footer className="news__card-footer">
                <NewsActions likes="14k" shares="204" />
                <Button href="#!">Подробнее</Button>
              </footer>
            </div>
          </article>
        </div>
        <div className="news__item">
          <NewsList className="container" />
        </div>
      </div>
    </section>
  );
};
