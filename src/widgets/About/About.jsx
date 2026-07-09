import { Advantages } from '@/shared/ui/Advantages';
import { Metrics } from '@/shared/ui/Metrics';
import { ResourcesPreview } from '@/shared/ui/ResourcesPreview';

import './About.scss';

const metrics = [
  { label: 'Доступные ресурсы', value: '300' },
  { label: 'Загрузки', value: '12k' },
  { label: 'Активные пользователи', value: '10k' },
];

const teamImages = [1, 2, 3, 4].map((index) => `/imgs/resources-preview/resources-preview__team-${index}.webp`);

const advantages = [
  {
    icon: '/imgs/advantages/advantages__icon-1.svg',
    title: 'Последние новости',
    text: 'Оставайтесь в курсе событий',
    description: 'Ежемесячно публикуется более 1000 статей',
  },
  {
    icon: '/imgs/advantages/advantages__icon-2.svg',
    title: 'Авторы-эксперты',
    text: 'Надежные инсайты',
    description: 'В нашей команде более 50 известных экспертов в области искусственного интеллекта',
  },
  {
    icon: '/imgs/advantages/advantages__icon-3.svg',
    title: 'Глобальная аудитория',
    text: 'Влияние на весь мир',
    description: '2 миллиона читателей в месяц',
  },
];

export const About = () => {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__inner container">
        <div className="about__main">
          <div className="about__info">
            <div className="about__info-main">
              <h2 className="about__subtitle">Ваше путешествие в завтрашний день начинается здесь</h2>
              <h1 className="about__title title title--big" id="about-title">
                Исследуйте границы искусственного интеллекта
              </h1>
              <p className="about__desc">
                Добро пожаловать в эпицентр инноваций в области искусственного интеллекта. FutureTech AI - это ваш
                пропуск в мир, где машины думают, учатся и формируют будущее.
              </p>
            </div>

            <Metrics
              className="about__metrics full-vw-line full-vw-line--top full-vw-line--bottom full-vw-line--left"
              items={metrics}
            />
          </div>

          <ResourcesPreview
            className="about__resources-preview full-vw-line full-vw-line--bottom full-vw-line--right"
            images={teamImages}
            title="Исследуйте более 1000 ресурсов"
            description="Более 1000 статей о новых технологических тенденциях и прорывах"
            buttonHref="#resources"
            buttonLabel="Исследуйте ресурсы"
          />
        </div>

        <Advantages className="about__advantages" items={advantages} label="Преимущества" />
      </div>
    </section>
  );
};
