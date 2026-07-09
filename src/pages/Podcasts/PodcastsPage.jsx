import { Episodes } from '@/widgets/Episodes';
import { Featured } from '@/widgets/Featured';
import { Opportunities } from '@/widgets/Opportunities';
import { PageHeader } from '@/widgets/PageHeader';
import { PageLayout } from '@/widgets/PageLayout';

export const PodcastsPage = () => {
  return (
    <PageLayout
      activeHref="/podcasts"
      labelledBy="podcasts-page-scroll-title"
      scrollLabel="Содержимое страницы подкастов"
    >
      <PageHeader
        title="Откройте мир искусственного интеллекта через"
        hiddenWord="подкасты"
        visibleWord="подкасты"
        description="Погрузитесь в экспертные разговоры о будущем ИИ, его влиянии на отрасли и практических сценариях применения технологий."
      />
      <Featured />
      <Episodes />
      <Opportunities />
    </PageLayout>
  );
};
