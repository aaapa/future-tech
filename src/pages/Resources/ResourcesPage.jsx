import { Opportunities } from '@/widgets/Opportunities';
import { PageHeader } from '@/widgets/PageHeader';
import { PageLayout } from '@/widgets/PageLayout';
import { ResourcesCatalog } from '@/widgets/ResourcesCatalog';

export const ResourcesPage = () => {
  return (
    <PageLayout
      activeHref="/resources"
      labelledBy="resources-page-scroll-title"
      scrollLabel="Содержимое страницы ресурсов"
    >
      <PageHeader
        title="Откройте мир"
        hiddenWord="знаний"
        visibleWord="знаний"
        description="Откройте для себя глубокие исследования, технические документы и практичные материалы о технологиях будущего."
      />
      <ResourcesCatalog />
      <Opportunities />
    </PageLayout>
  );
};
