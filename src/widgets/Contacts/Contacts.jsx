import Tippy from '@tippyjs/react';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { getAssetHref } from '@/shared/lib/routing';

import './Contacts.scss';

const contactsCards = [
  {
    title: 'Общие вопросы',
    links: ['contact@ai-podcasts.com', '+1 (123) 456-7890'],
  },
  {
    title: 'Техническая поддержка',
    links: ['contact@ai-podcasts.com', '+1 (123) 456-7890'],
  },
  {
    title: 'Наш офис',
    text: 'Адрес: 123 AI Tech Avenue, Techville, 54321',
    button: 'Построить маршрут',
  },
];

const socialLinks = [
  { label: 'Twitter', icon: 'twitter' },
  { label: 'Medium', icon: 'medium' },
  { label: 'LinkedIn', icon: 'linked-in' },
];

const faqs = [
  {
    question: 'Что такое ИИ?',
    answer: 'ИИ означает искусственный интеллект: имитацию человеческого мышления в машинах. Он помогает системам решать задачи, обучаться и принимать решения.',
  },
  {
    question: 'Как слушать ваши подкасты?',
    answer: 'Вы можете запускать эпизоды прямо на странице подкастов или перейти к выбранной платформе через карточку выпуска.',
  },
  {
    question: 'Ваши подкасты бесплатные?',
    answer: 'Да, базовые выпуски доступны бесплатно. Для расширенных материалов могут появляться отдельные форматы доступа.',
  },
  {
    question: 'Можно ли скачать эпизоды офлайн?',
    answer: 'Да, если выпуск доступен для скачивания, рядом с ним будет отдельная ссылка или кнопка загрузки.',
  },
  {
    question: 'Как часто выходят новые эпизоды?',
    answer: 'Основные серии выходят еженедельно, а специальные интервью и аналитические выпуски появляются по мере подготовки.',
  },
];

export const Contacts = () => {
  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <div className="contacts__cards container">
        {contactsCards.map((card) => (
          <article className="contacts__card" key={card.title}>
            <h2 className="contacts__card-title">{card.title}</h2>
            {'links' in card && (
              <div className="contacts__card-actions">
                {card.links.map((link) => (
                  <Button className="contacts__card-button" variant="dark-grey" href="#!" key={link}>
                    <span>{link}</span>
                    <Icon name="arrow-top-right" />
                  </Button>
                ))}
              </div>
            )}
            {'text' in card && (
              <div className="contacts__card-actions">
                <p className="contacts__card-text">{card.text}</p>
                <Button className="contacts__card-button" variant="dark-grey" href="#!">
                  <span>{card.button}</span>
                  <Icon name="arrow-top-right" />
                </Button>
              </div>
            )}
          </article>
        ))}

        <article className="contacts__card">
          <h2 className="contacts__card-title">Свяжитесь с нами</h2>
          <div className="contacts__socials">
            {socialLinks.map((social) => (
              <Tippy content={social.label} theme="futuretech" placement="top" delay={[120, 0]} key={social.label}>
                <a className="contacts__social" href="#!" aria-label={social.label}>
                  <Icon name={social.icon} />
                </a>
              </Tippy>
            ))}
          </div>
        </article>
      </div>

      <div className="contacts__form-section container">
        <div className="contacts__form-aside">
          <div className="contacts__form-mark" aria-hidden="true" />
          <h1 className="contacts__title title title--medium" id="contacts-title">
            Свяжитесь с AI Podcasts
          </h1>
        </div>

        <form className="contacts__form" onSubmit={(event) => event.preventDefault()}>
          <div className="contacts__form-row">
            <label className="contacts__field">
              <span className="contacts__label">Имя</span>
              <input className="contacts__input" name="firstName" placeholder="Введите имя" autoComplete="given-name" />
            </label>
            <label className="contacts__field">
              <span className="contacts__label">Фамилия</span>
              <input className="contacts__input" name="lastName" placeholder="Введите фамилию" autoComplete="family-name" />
            </label>
          </div>
          <div className="contacts__form-row">
            <label className="contacts__field">
              <span className="contacts__label">Email</span>
              <input className="contacts__input" name="email" type="email" placeholder="Введите email" autoComplete="email" />
            </label>
            <label className="contacts__field">
              <span className="contacts__label">Телефон</span>
              <span className="contacts__phone">
                <span className="contacts__country" aria-hidden="true">
                  <img src={getAssetHref('/imgs/contacts/contacts-country.webp')} alt="" />
                  <Icon name="chevron-down" />
                </span>
                <input className="contacts__input" name="phone" type="tel" placeholder="Введите телефон" autoComplete="tel" />
              </span>
            </label>
          </div>
          <label className="contacts__field">
            <span className="contacts__label">Сообщение</span>
            <textarea className="contacts__input contacts__textarea" name="message" placeholder="Введите сообщение" />
          </label>
          <div className="contacts__form-footer">
            <label className="contacts__agreement">
              <input className="contacts__checkbox" type="checkbox" name="agreement" />
              <span>Я согласен с условиями использования и политикой конфиденциальности</span>
            </label>
            <Button variant="accent" type="submit">Отправить</Button>
          </div>
        </form>
      </div>

      <div className="contacts__faq container">
        <aside className="contacts__faq-aside">
          <div className="contacts__faq-mark" aria-hidden="true" />
          <h2 className="contacts__faq-title">Частые вопросы</h2>
          <p className="contacts__faq-text">
            Если нужного вопроса нет в FAQ, напишите нам напрямую, и мы поможем разобраться.
          </p>
          <Button href="#contacts-title">
            <span>Задать вопрос</span>
            <Icon name="arrow-top-right" />
          </Button>
        </aside>

        <div className="contacts__faq-list">
          {faqs.map((faq, index) => (
            <details className="contacts__faq-item" open={index === 0} key={faq.question}>
              <summary className="contacts__faq-question">
                <span>{faq.question}</span>
              </summary>
              <p className="contacts__faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
