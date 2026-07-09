import { useState } from 'react';
import clsx from 'clsx';
import SimpleBar from 'simplebar-react';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { getAssetHref } from '@/shared/lib/routing';
import '@/shared/ui/Tabs/Tabs.scss';
import './BlogPreview.scss';

const tabs = [
  { id: 'all', label: 'Все' },
  { id: 'quantum', label: 'Квантовые вычисления' },
  { id: 'ai-ethics', label: 'Этика ИИ' },
  { id: 'space', label: 'Освоение космоса' },
  { id: 'biotech', label: 'Биотехнология' },
  { id: 'energy', label: 'Возобновляемые источники энергии' },
];

const articles = [
  {
    author: 'Джон Тексон',
    department: 'Квантовые вычисления',
    image: '/imgs/blog-preview/John-Techson.webp',
    date: '15 октября 2023 года',
    datetime: '2023-10-15',
    title: 'Квантовый скачок в вычислительной технике',
    text: 'Изучите революцию в квантовых вычислениях, их применение и потенциальное влияние на различные отрасли.',
    likes: '24.5k',
    comments: '50',
    shares: '20',
    isLiked: true,
    categories: ['all', 'quantum', 'biotech'],
  },
  {
    author: 'Сара Специалист по этике',
    department: 'Этика ИИ',
    image: '/imgs/blog-preview/Sarah-Ethicist.webp',
    date: '5 ноября 2023 года',
    datetime: '2023-11-05',
    title: 'Этические дилеммы ИИ',
    text: 'Глубокое погружение в этические проблемы искусственного интеллекта, включая предвзятость, конфиденциальность и прозрачность.',
    likes: '32k',
    comments: '72',
    shares: '18',
    categories: ['all', 'ai-ethics', 'energy'],
  },
  {
    author: 'Астроном X',
    department: 'Освоение космоса',
    image: '/imgs/blog-preview/Astronomer-X.webp',
    date: '10 декабря 2023 года',
    datetime: '2023-12-10',
    title: 'Задача колонизации Марса',
    text: 'Изучение технических и логистических проблем, связанных с колонизацией Марса человеком.',
    likes: '20k',
    comments: '31',
    shares: '12',
    categories: ['all', 'space', 'energy'],
  },
];

const statItems = [
  { key: 'likes', icon: 'like', label: 'Понравилось' },
  { key: 'comments', icon: 'comments', label: 'Комментарии' },
  { key: 'shares', icon: 'shares', label: 'Поделиться' },
];

const BlogArticle = ({ article }) => {
  return (
    <article className="blog-preview__article container">
      <div className="blog-preview__article-author">
        <img
          className="blog-preview__article-author-image"
          width="80"
          height="80"
          src={getAssetHref(article.image)}
          loading="lazy"
          decoding="async"
          alt=""
        />
        <div className="blog-preview__article-author-column">
          <span className="blog-preview__article-author-name">{article.author}</span>
          <span className="blog-preview__article-author-department">{article.department}</span>
        </div>
      </div>
      <div className="blog-preview__article-main">
        <time className="blog-preview__article-date" dateTime={article.datetime}>{article.date}</time>
        <div className="blog-preview__article-content">
          <h3 className="blog-preview__article-title">{article.title}</h3>
          <p className="blog-preview__article-text">{article.text}</p>
        </div>
        <menu className="blog-preview__article-stats">
          {statItems.map((item) => (
            <li className="blog-preview__article-stats-item" key={item.key}>
              <button
                className="blog-preview__article-stats-button"
                type="button"
                aria-pressed={item.key === 'likes' ? Boolean(article.isLiked) : undefined}
                title={item.label}
              >
                <Icon
                  className={clsx('blog-preview__article-icon', item.key === 'likes' && article.isLiked && 'icon--active')}
                  name={item.icon}
                />
                <span aria-hidden="true">{article[item.key]}</span>
                <span className="visually-hidden">{item.label}</span>
              </button>
            </li>
          ))}
        </menu>
      </div>
      <Button className="blog-preview__article-button" href="/blog-open">
        <span>Посмотреть блог</span>
        <Icon name="arrow-top-right" />
      </Button>
    </article>
  );
};

export const BlogPreview = () => {
  const [activeTabId, setActiveTabId] = useState('all');
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTabId);

  const handleTabsKeyDown = (event) => {
    const actionByKey = {
      ArrowLeft: activeIndex === 0 ? tabs.length - 1 : activeIndex - 1,
      ArrowRight: activeIndex === tabs.length - 1 ? 0 : activeIndex + 1,
      Home: 0,
      End: tabs.length - 1,
    };

    if (event.key in actionByKey) {
      event.preventDefault();
      setActiveTabId(tabs[actionByKey[event.key]].id);
    }
  };

  return (
    <section className="blog-preview" aria-labelledby="blog-preview-title">
      <div className="blog-preview__inner">
        <h2 className="blog-preview__title visually-hidden" id="blog-preview-title">Предпросмотр блога</h2>
        <div className="blog-preview__tabs-wrapper">
          <header className="blog-preview__header">
            <div className="blog-preview__tabs container">
              <h3 className="visually-hidden" id="blog-preview-tabs-title">Фильтр статей по темам</h3>
              <SimpleBar className="blog-preview__tabs-scroll" autoHide={false} forceVisible="x">
                <menu
                  className="blog-preview__tabs-actions tabs"
                  role="tablist"
                  aria-labelledby="blog-preview-tabs-title"
                  onKeyDown={handleTabsKeyDown}
                >
                  {tabs.map((tab) => {
                    const isActive = tab.id === activeTabId;

                    return (
                      <li className="blog-preview__tabs-actions-item" role="none" key={tab.id}>
                        <button
                          className={clsx(
                            'blog-preview__tab',
                            'tabs__tab',
                            isActive && 'blog-preview__tab--open',
                          )}
                          tabIndex={isActive ? 0 : -1}
                          title={tab.label}
                          id={`blog-preview-tab-${tab.id}`}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-controls={`blog-preview-tabpanel-${tab.id}`}
                          onClick={() => setActiveTabId(tab.id)}
                        >
                          <span className="blog-preview__tab-text">{tab.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </menu>
              </SimpleBar>
            </div>
          </header>
          <div className="blog-preview__main">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              const filteredArticles = articles.filter((article) => article.categories.includes(tab.id));

              return (
                <div
                  className={clsx('blog-preview__tabpanel', 'tabs__tabpanel', isActive && 'tabs__tabpanel--open')}
                  tabIndex={isActive ? 0 : -1}
                  id={`blog-preview-tabpanel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`blog-preview-tab-${tab.id}`}
                  key={tab.id}
                >
                  <ul className="blog-preview__list">
                    {filteredArticles.map((article) => (
                      <li className="blog-preview__list-item" key={article.title}>
                        <BlogArticle article={article} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
