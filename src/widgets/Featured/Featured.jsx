import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Rating } from '@/shared/ui/Rating';
import { getAssetHref } from '@/shared/lib/routing';

import './Featured.scss';

const featuredPodcasts = [
  {
    title: 'AI Revolution',
    label: 'Революция ИИ',
    rating: '5.0',
    host: 'Доктор Сара Митчелл',
    image: '/imgs/podcasts/podcast-ai-revolution.webp',
    heading: 'Погрузитесь в трансформационную силу ИИ',
    text: 'Доктор Сара Митчелл рассказывает, как искусственный интеллект меняет отрасли, экономику и повседневную жизнь. Слушайте экспертные идеи, тренды и практические сценарии.',
    stats: [
      ['Всего эпизодов', '50'],
      ['Средняя длина', '30 мин'],
      ['Частота выхода', 'Еженедельно'],
    ],
  },
  {
    title: 'AI Conversations',
    label: 'AI Conversations',
    rating: '4.9',
    host: 'Марк Андерсон',
    image: '/imgs/podcasts/podcast-ai-conversations.webp',
    heading: 'Участвуйте в глубоких разговорах с ведущими экспертами',
    text: 'Марк обсуждает будущее ИИ, влияние на общество и то, как технологии меняют индустрии по всему миру.',
    stats: [
      ['Всего эпизодов', '40'],
      ['Средняя длина', '40 мин'],
      ['Частота выхода', 'Ежемесячно'],
    ],
  },
];

const PlayButton = ({ label }) => (
  <button className="featured__play" type="button" aria-label={label}>
    <Icon name="play" />
  </button>
);

export const Featured = () => {
  return (
    <section className="featured" aria-labelledby="featured-title">
      <h2 className="visually-hidden" id="featured-title">Рекомендуемые подкасты FutureTech</h2>
      <div className="featured__list">
        {featuredPodcasts.map((podcast) => (
          <article className="featured__item container" key={podcast.title}>
            <div className="featured__aside">
              <div className="featured__mark" aria-hidden="true" />
              <div className="featured__heading">
                <h3 className="featured__title">{podcast.label}</h3>
                <div className="featured__rating">
                  <Rating value={podcast.rating} />
                </div>
              </div>
              <Button className="featured__button" href="#!">
                <span>{podcast.host}</span>
                <Icon name="arrow-top-right" />
              </Button>
            </div>

            <div className="featured__main">
              <div className="featured__media">
                <img className="featured__media-image" src={getAssetHref(podcast.image)} loading="lazy" decoding="async" alt="" />
                <PlayButton label={`Слушать ${podcast.label}`} />
              </div>
              <div className="featured__copy">
                <h3 className="featured__copy-title">{podcast.heading}</h3>
                <p className="featured__copy-text">{podcast.text}</p>
              </div>
              <dl className="featured__stats">
                {podcast.stats.map(([label, value]) => (
                  <div className="featured__stat" key={label}>
                    <dt className="featured__stat-label">{label}</dt>
                    <dd className="featured__stat-value">{value}</dd>
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
