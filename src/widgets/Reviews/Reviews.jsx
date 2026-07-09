import { Rating } from '@/shared/ui/Rating';
import { getAssetHref } from '@/shared/lib/routing';

import './Reviews.scss';

const reviews = [
  ['Sarah-Thompson.webp', 'Сара Томпсон', 'Сан-Франциско, США', 'Электронные книги по ИИ в образовании изменили ход моих исследований. Они содержат глубокие идеи и тематические исследования, которые помогают постоянно обновлять знания.'],
  ['Raj-Patel.webp', 'Радж Патель', 'Мумбаи, Индия', 'Технические документы по стратегиям использования возобновляемых источников энергии оказали большое влияние на мою работу и помогли принимать обоснованные решения.'],
  ['Emily-Adams.webp', 'Эмили Адамс', 'Лондон, Великобритания', 'Отчеты об использовании искусственного интеллекта в здравоохранении стали важным ресурсом для нашей больницы и улучшают уход за пациентами.'],
  ['Alan-Jackson.webp', 'Алан Джексон', 'Хьюстон, США', 'Доклады о перспективах космической добычи полезных ископаемых подогрели мою страсть к исследованию космоса.'],
  ['Jessica-Miller.webp', 'Джессика Миллер', 'Бостон, США', 'Научные статьи о прорывах в геноме стали для меня кладезем информации и определили направление моих исследований.'],
  ['Diego-Lopez.webp', 'Диего Лопес', 'Барселона, Испания', 'Электронные книги по стратегиям использования возобновляемых источников энергии дали знания, необходимые для устойчивого развития нашего стартапа.'],
];

export const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__inner">
        <ul className="reviews__list container">
          {reviews.map(([image, name, location, text]) => (
            <li className="reviews__list-item" key={name}>
              <div className="reviews__card">
                <div className="reviews__author">
                  <img
                    className="reviews__author-image"
                    src={getAssetHref(`/imgs/reviews/${image}`)}
                    width="60"
                    height="60"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <span className="reviews__author-name">{name}</span>
                  <span className="reviews__author-location">{location}</span>
                </div>
                <div className="reviews__card-content">
                  <Rating />
                  <p className="reviews__card-text">{text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
