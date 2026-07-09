import { BlogPreview } from '@/widgets/BlogPreview';
import { News } from '@/widgets/News';
import { Opportunities } from '@/widgets/Opportunities';
import { PageLayout } from '@/widgets/PageLayout';
import { PageHeader } from '@/widgets/PageHeader';
import { Promo } from '@/widgets/Promo';
import { Videos } from '@/widgets/Videos';

export const NewsPage = () => {
  return (
    <PageLayout
      activeHref="/news"
      labelledBy="news-page-scroll-title"
      scrollLabel="Содержимое страницы новостей"
    >
      <PageHeader
        title="Сегодняшние заголовки: Будьте в курсе"
        hiddenWord="событий"
        visibleWord="событий"
        description="Следите за последними новостями со всего мира. Мы предоставляем самую свежую информацию о значимых событиях, тенденциях и историях."
      />
      <News />
      <Promo
        id="news-blog-promo-title"
        eyebrow="Добро пожаловать на страницу новостей"
        title="Откройте для себя мир новостей"
        buttonLabel="Посмотреть все новости"
      />
      <BlogPreview />
      <Promo
        id="videos-promo-title"
        eyebrow="Рекомендуемые видеоролики"
        title="Визуальные идеи для современного зрителя"
        buttonLabel="Посмотреть всё"
      />
      <Videos />
      <Opportunities />
    </PageLayout>
  );
};
