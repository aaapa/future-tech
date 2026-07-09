import { Contacts } from '@/widgets/Contacts';
import { Opportunities } from '@/widgets/Opportunities';
import { PageLayout } from '@/widgets/PageLayout';

export const ContactsPage = () => {
  return (
    <PageLayout
      activeHref="/contacts"
      labelledBy="contacts-page-scroll-title"
      scrollLabel="Содержимое страницы контактов"
    >
      <Contacts />
      <Opportunities />
    </PageLayout>
  );
};
