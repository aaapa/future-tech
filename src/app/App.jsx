import { useEffect } from 'react';

import { ArticlePage } from '@/pages/Article';
import { ContactsPage } from '@/pages/Contacts';
import { HomePage } from '@/pages/Home';
import { NewsPage } from '@/pages/News';
import { PodcastsPage } from '@/pages/Podcasts';
import { ResourcesPage } from '@/pages/Resources';
import { normalizeRoutePath } from '@/shared/lib/routing';

const pageTitleByPath = {
  '/': 'Главная',
  '/news': 'Новости',
  '/blog-open': 'Статья',
  '/podcasts': 'Подкасты',
  '/resources': 'Ресурсы',
  '/contacts': 'Контакты',
};

export const App = () => {
  const normalizedPathname = normalizeRoutePath(window.location.pathname);
  const pageTitle = pageTitleByPath[normalizedPathname] ?? pageTitleByPath['/'];

  useEffect(() => {
    document.documentElement.lang = 'ru';
    document.title = `FutureTech | ${pageTitle}`;
  }, [pageTitle]);

  if (normalizedPathname === '/news') {
    return <NewsPage />;
  }

  if (normalizedPathname === '/blog-open') {
    return <ArticlePage />;
  }

  if (normalizedPathname === '/podcasts') {
    return <PodcastsPage />;
  }

  if (normalizedPathname === '/resources') {
    return <ResourcesPage />;
  }

  if (normalizedPathname === '/contacts') {
    return <ContactsPage />;
  }

  return <HomePage />;
};
