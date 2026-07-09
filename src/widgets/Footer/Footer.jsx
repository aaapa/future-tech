import Tippy from '@tippyjs/react';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { getPageHref } from '@/shared/lib/routing';

import './Footer.scss';

const footerSections = [
  {
    title: 'Главная',
    links: ['Особенности', 'Блог', 'Ресурсы', 'Рекомендации', 'Контакты', 'Новостная рассылка'],
  },
  {
    title: 'Новости',
    links: ['Актуальные истории', 'Рекомендуемые видеоролики', 'Технологии', 'Здоровье', 'Политика', 'Окружающая среда'],
  },
  {
    title: 'Блог',
    links: ['Квантовые вычисления', 'Этика искусственного интеллекта', 'Освоение космоса', 'Биотехнология', 'Возобновляемые источники энергии', 'Биохакинг'],
  },
  {
    title: 'Подкасты',
    links: ['Революция в области ИИ', 'TechTalk AI', 'Разговоры с искусственным интеллектом'],
  },
];

const resourceLinks = ['Технические документы', 'Электронные книги', 'Отчеты', 'Исследовательские работы'];

const footerHrefByLink = {
  Блог: '/blog-open',
  Ресурсы: '/resources',
  Контакты: '/contacts',
  'Актуальные истории': '/news',
  'Рекомендуемые видеоролики': '/news',
  'Революция в области ИИ': '/podcasts',
  'TechTalk AI': '/podcasts',
  'Разговоры с искусственным интеллектом': '/podcasts',
};

const socialLinks = [
  { label: 'Twitter', icon: 'twitter' },
  { label: 'Medium', icon: 'medium' },
  { label: 'LinkedIn', icon: 'linked-in' },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__menu">
          {footerSections.map((section) => (
            <section className="footer__menu-section" key={section.title}>
              <h2 className="footer__menu-title">{section.title}</h2>
              <nav className="footer__nav" aria-label={section.title}>
                <ul className="footer__list">
                  {section.links.map((link, index) => (
                    <li className="footer__list-item" key={link}>
                      <a
                        className="footer__link"
                        href={footerHrefByLink[link] ? getPageHref(footerHrefByLink[link]) : '#!'}
                      >
                        <span>{link}</span>
                        {(link === 'Ресурсы' || link === 'Биотехнология') && <span className="badge">Новое</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          ))}

          <section className="footer__menu-section resources" id="resources">
            <h2 className="footer__menu-title">Ресурсы</h2>
            <nav className="footer__nav" aria-label="Ресурсы">
              <ul className="footer__list resources-list">
                {resourceLinks.map((link) => (
                  <li className="footer__list-item" key={link}>
                    <Button className="footer__button" href="/resources">
                      <span>{link}</span>
                      <Icon name="arrow-top-right" />
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>

        <div className="footer__copyright">
          <nav className="footer__copyright-nav" aria-label="Правовая информация">
            <ul className="footer__copyright-list">
              <li className="footer__copyright-list-item">
                <a className="footer__copyright-link" href="#!">Правила и условия</a>
              </li>
              <li className="footer__copyright-list-item">
                <a className="footer__copyright-link" href="#!">Политика конфиденциальности</a>
              </li>
            </ul>
          </nav>

          <div className="footer__socials">
            <nav className="footer__socials-nav" aria-label="Социальные сети">
              <ul className="footer__socials-list">
                {socialLinks.map((social) => (
                  <li className="footer__socials-list-item" key={social.label}>
                    <Tippy content={social.label} theme="futuretech" placement="top" delay={[120, 0]}>
                      <a className="footer__socials-link" href="#!" aria-label={social.label}>
                        <Icon name={social.icon} />
                      </a>
                    </Tippy>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <span className="footer__copyright-text">© 2024 FutureTech. Все права защищены.</span>
        </div>
      </div>
    </footer>
  );
};
