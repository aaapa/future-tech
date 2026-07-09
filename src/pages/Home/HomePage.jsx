import { About } from '@/widgets/About';
import { BlogPreview } from '@/widgets/BlogPreview';
import { Features } from '@/widgets/Features';
import { Opportunities } from '@/widgets/Opportunities';
import { PageLayout } from '@/widgets/PageLayout';
import { Products } from '@/widgets/Products';
import { Promo } from '@/widgets/Promo';
import { Reviews } from '@/widgets/Reviews';

export const HomePage = () => {
  return (
    <PageLayout
      activeHref="/"
      labelledBy="home-page-scroll-title"
      scrollLabel="Содержимое главной страницы"
    >
      <About />
      <Promo id="features-promo-title" eyebrow="Раскройте силу" title="Особенности FutureTech" />
      <Features />
      <Promo
        id="blog-promo-title"
        eyebrow="Блог"
        title="Ознакомьтесь с подробными публикациями в блоге FutureTech"
        buttonLabel="Просмотреть блог"
      />
      <BlogPreview />
      <Promo
        id="resources-promo-title"
        eyebrow="Ваш доступ к подробной информации"
        title="Получите ценные знания с помощью ресурсов FutureTech"
        buttonLabel="Просмотреть ресурсы"
      />
      <Products />
      <Promo
        id="reviews-promo-title"
        eyebrow="Что говорят наши читатели"
        title="Реальные слова от реальных читателей"
        buttonLabel="Отзывы"
      />
      <Reviews />
      <Opportunities />
    </PageLayout>
  );
};
