import { CustomVideo } from '@/shared/ui/CustomVideo';

import './Videos.scss';

const videoStubSrc = '/videos/videos/video.mp4';

const videos = [
  {
    poster: '/imgs/videos/videos-1.webp',
    src: videoStubSrc,
    duration: '2:30 мин',
    title: 'Исследование Марса: открытие инопланетных ландшафтов',
    text: 'Отправляйтесь в путешествие по захватывающим пейзажам Красной планеты и раскройте тайны Марса.',
  },
  {
    poster: '/imgs/videos/videos-2.webp',
    src: videoStubSrc,
    duration: '2:30 мин',
    title: 'Объяснение блокчейна: революция в финансах',
    text: 'Окунитесь в мир технологии блокчейн и её преобразующего влияния на финансовую индустрию.',
  },
  {
    poster: '/imgs/videos/videos-3.webp',
    src: videoStubSrc,
    duration: '2:30 мин',
    title: 'Нарушая тишину: психическое здоровье на рабочем месте',
    text: 'Исследование инициатив, которые помогают менять рабочую среду в интересах благополучия сотрудников.',
  },
  {
    poster: '/imgs/videos/videos-4.webp',
    src: videoStubSrc,
    duration: '2:30 мин',
    title: 'Революционизирующие инвестиционные стратегии',
    text: 'Углубленный анализ глобальных усилий по сохранению биоразнообразия и защите уязвимых видов.',
  },
];

export const Videos = () => {
  return (
    <section className="videos" aria-label="Рекомендуемые видеоролики">
      <div className="videos__inner">
        <ul className="videos__list">
          {videos.map((video) => (
            <li className="videos__list-item" key={video.title}>
              <div className="videos__card">
                <header className="videos__card-header">
                  <CustomVideo src={video.src} poster={video.poster} duration={video.duration} />
                </header>
                <div className="videos__card-main">
                  <h3 className="videos__card-title">{video.title}</h3>
                  <p className="videos__card-desc">{video.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
