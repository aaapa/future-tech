import { useState } from 'react';
import clsx from 'clsx';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { TableOfContents } from '@/shared/ui/TableOfContents';
import { NewsList } from '@/widgets/News';
import { getAssetHref } from '@/shared/lib/routing';

import './Article.scss';

const articleActions = [
  { icon: 'like', value: '24.5k', label: 'Понравилось', isActive: true },
  { icon: 'comments', value: '50', label: 'Комментарии' },
  { icon: 'shares', value: '20', label: 'Поделиться' },
];

const meta = [
  ['Дата публикации', <time dateTime="2023-10-15">15 октября 2023 года</time>],
  ['Категория', <a className="article__meta-link" href="#!">Здравоохранение</a>],
  ['Время чтения', '10 минут'],
  ['Имя автора', <a className="article__meta-link" href="#!">Доктор Эмили Уокер</a>],
];

const tocItems = [
  'Введение',
  'ИИ в диагностической визуализации',
  'Прогностическая аналитика и профилактика заболеваний',
  'Персонализированные планы лечения',
  'Разработка лекарств и исследования',
  'ИИ в телемедицине',
  'Этические соображения',
  'Будущее ИИ в здравоохранении',
  'Заключение',
];

const diagnosticText = 'Одним из наиболее заметных применений ИИ в здравоохранении является диагностическая визуализация. Алгоритмы ИИ демонстрируют замечательное мастерство в интерпретации медицинских изображений: рентгеновских снимков, МРТ и компьютерной томографии. Они помогают выявлять аномалии, которые могут быть не замечены человеческим глазом, и особенно ценны для раннего обнаружения заболеваний.';

export const Article = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="article" aria-labelledby="article-banner-title">
      <div className="article__inner">
        <header
          className="article__banner"
          style={{ '--background': `url("${getAssetHref('/imgs/article/article-banner-background.webp')}")` }}
        >
          <div className="article__banner-inner container">
            <div className="article__banner-background" />
            <h1 className="article__banner-title" id="article-banner-title">
              Развитие искусственного интеллекта в здравоохранении
            </h1>
          </div>
        </header>

        <div className="article__main">
          <div className="article__main-inner container">
            <div className="article__content">
              <div className="article__intro">
                <h2 className="article__intro-title">Вступление</h2>
                <div className="article__text">
                  <p>
                    Искусственный интеллект превратился в преобразующую силу в отрасли здравоохранения, изменив уход за
                    пациентами, диагностику и научные исследования. В этом блоге мы исследуем глубокое влияние ИИ на
                    здравоохранение.
                  </p>
                </div>
              </div>

              <div className={clsx('article__texts', !isExpanded && 'article__texts--collapsed')}>
                <div className="article__text">
                  <h2 className="article__title title title--small">Искусственный интеллект</h2>
                  <p>
                    ИИ помогает медицинским командам быстрее анализировать данные, находить закономерности и принимать
                    более точные решения. Он не заменяет врача, но усиливает диагностику и делает персонализированную
                    помощь доступнее.
                  </p>
                  <p>
                    В клиниках такие системы уже применяются для сортировки снимков, прогнозирования рисков и поддержки
                    исследовательских команд, которые работают над новыми лекарствами.
                  </p>
                </div>

                <div className="article__text">
                  <h2 className="article__title title title--small">Прогнозная аналитика и профилактика заболеваний</h2>
                  <p>{diagnosticText}</p>
                  <p>{diagnosticText}</p>
                  {isExpanded && (
                    <>
                      <p>{diagnosticText}</p>
                      <p>
                        В будущем такие инструменты будут теснее связаны с телемедициной, носимыми устройствами и
                        персональными планами лечения. Главная задача отрасли - сохранить прозрачность решений,
                        безопасность данных и доверие пациентов.
                      </p>
                    </>
                  )}
                  <Button className="article__read-full-button" onClick={() => setIsExpanded((value) => !value)}>
                    <span>{isExpanded ? 'Свернуть' : 'Показать больше'}</span>
                    <Icon
                      className="article__read-full-button-icon"
                      name="arrow-bottom"
                      style={{ rotate: isExpanded ? '180deg' : undefined }}
                    />
                  </Button>
                </div>
              </div>
            </div>

            <aside className="article__info" aria-label="Информация о статье">
              <header className="article__info-header">
                <menu className="article__actions">
                  {articleActions.map((action) => (
                    <li className="article__actions-item" key={action.icon}>
                      <button
                        className="article__actions-button"
                        type="button"
                        aria-pressed={action.icon === 'like' ? action.isActive : undefined}
                        title={action.label}
                      >
                        <Icon
                          className={clsx('article__actions-button-icon', action.isActive && 'icon--active')}
                          name={action.icon}
                        />
                        <span aria-hidden="true">{action.value}</span>
                        <span className="visually-hidden">{action.label}</span>
                      </button>
                    </li>
                  ))}
                </menu>
              </header>
              <div className="article__info-main">
                <dl className="article__meta">
                  {meta.map(([name, value]) => (
                    <div className="article__meta-item" key={name}>
                      <dt className="article__meta-name">{name}</dt>
                      <dd className="article__meta-desc">{value}</dd>
                    </div>
                  ))}
                </dl>
                <TableOfContents items={tocItems} />
              </div>
            </aside>
          </div>
        </div>

        <section className="article__news news">
          <div className="news__inner container">
            <header className="news__header">
              <h2 className="title title--small">Похожие новости</h2>
              <Button href="/news">
                <span>Посмотреть все новости</span>
                <Icon name="arrow-top-right" />
              </Button>
            </header>
            <NewsList />
          </div>
        </section>
      </div>
    </article>
  );
};
