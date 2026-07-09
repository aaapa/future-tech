import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { getAssetHref } from '@/shared/lib/routing';
import { Promo } from '@/widgets/Promo';

import './Episodes.scss';

const episodes = [
  {
    image: '/imgs/podcasts/episode-healthcare.webp',
    title: 'ИИ в здравоохранении',
    duration: '2.30 мин',
    text: 'Доктор Лиза Адамс обсуждает, как ИИ меняет диагностику, уход за пациентами и работу врачей.',
  },
  {
    image: '/imgs/podcasts/episode-ethics.webp',
    title: 'Этика ИИ',
    duration: '2.30 мин',
    text: 'Разбор этических дилемм искусственного интеллекта вместе с доктором Майклом Тернером.',
  },
  {
    image: '/imgs/podcasts/episode-machine-learning.webp',
    title: 'Машинное обучение простыми словами',
    duration: '2.30 мин',
    text: 'Эксперт Сара Дэвис объясняет ключевые принципы машинного обучения и реальные области применения.',
  },
  {
    image: '/imgs/podcasts/episode-future-work.webp',
    title: 'ИИ и будущее работы',
    duration: '2.30 мин',
    text: 'Доктор Оливия Уайт говорит о новой роли ИИ на рабочем месте и навыках будущего.',
  },
  {
    image: '/imgs/podcasts/episode-education.webp',
    title: 'ИИ в образовании',
    duration: '2.30 мин',
    text: 'Эмили Тернер рассказывает, как ИИ помогает персонализировать обучение и ускоряет развитие студентов.',
  },
  {
    image: '/imgs/podcasts/episode-entertainment.webp',
    title: 'ИИ в развлечениях',
    duration: '2.30 мин',
    text: 'Дэвид Смит исследует, как алгоритмы уже влияют на музыку, кино, игры и создание контента.',
  },
];

const PlayButton = ({ label }) => (
  <button className="episodes__play" type="button" aria-label={label}>
    <Icon name="play" />
  </button>
);

export const Episodes = () => {
  return (
    <section className="episodes" aria-labelledby="episodes-title">
      <Promo
        className="episodes__promo"
        id="episodes-title"
        eyebrow="Будьте в курсе свежего контента"
        title="Последние эпизоды подкастов"
      />
      <ul className="episodes__list container">
        {episodes.map((episode) => (
          <li className="episodes__item" key={episode.title}>
            <article className="episodes__card">
              <div className="episodes__media">
                <img className="episodes__image" src={getAssetHref(episode.image)} loading="lazy" decoding="async" alt="" />
                <PlayButton label={`Слушать эпизод: ${episode.title}`} />
                <span className="episodes__duration">{episode.duration}</span>
              </div>
              <div className="episodes__main">
                <h3 className="episodes__title">{episode.title}</h3>
                <p className="episodes__text">{episode.text}</p>
              </div>
              <Button className="episodes__button" href="#!">
                <span>Слушать подкаст</span>
                <Icon name="arrow-top-right" />
              </Button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
