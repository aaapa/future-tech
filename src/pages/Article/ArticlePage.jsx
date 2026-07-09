import { Article } from '@/widgets/Article';
import { Opportunities } from '@/widgets/Opportunities';
import { PageLayout } from '@/widgets/PageLayout';

export const ArticlePage = () => {
  return (
    <PageLayout
      activeHref="/blog-open"
      labelledBy="article-page-scroll-title"
      scrollLabel="Содержимое статьи"
    >
      <Article />
      <Opportunities />
    </PageLayout>
  );
};
