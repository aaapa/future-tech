import { Icon } from '@/shared/ui/Icon';
import { getAssetHref } from '@/shared/lib/routing';

import './Opportunities.scss';

const cards = [
  ['Доступ к ресурсам', 'Посетители могут получить доступ к широкому спектру ресурсов, включая электронные книги, информационные бюллетени и отчеты.'],
  ['Форум сообщества', 'Присоединяйтесь к активному форуму сообщества, чтобы обсуждать отраслевые тенденции, делиться идеями и сотрудничать с коллегами.'],
  ['Технические мероприятия', 'Будьте в курсе предстоящих технических мероприятий, вебинаров и конференций, чтобы расширить свои знания.'],
];

export const Opportunities = () => {
  return (
    <section className="opportunities" id="opportunities" aria-labelledby="opportunities-title">
      <div className="opportunities__inner container">
        <header className="opportunities__header">
          <img
            className="opportunities__icon"
            src={getAssetHref('/imgs/opportunities/opportunities__icon.svg')}
            width="150"
            height="150"
            loading="lazy"
            decoding="async"
            alt=""
          />
          <div className="opportunities__info">
            <span className="opportunities__tag tag">Учитесь, подключайтесь и внедряйте инновации</span>
            <h2 className="opportunities__title title title--medium" id="opportunities-title">
              Станьте частью будущей технической революции
            </h2>
            <p className="opportunities__desc">
              Погрузитесь в мир технологий будущего. Ознакомьтесь с нашими ресурсами, общайтесь с коллегами-энтузиастами
              технологий и внедряйте инновации в отрасли.
            </p>
          </div>
        </header>
        <ul className="opportunities__list">
          {cards.map(([title, text]) => (
            <li className="opportunities__list-item" key={title}>
              <div className="opportunities__card">
                <a className="opportunities__card-link" href="#!">
                  <span className="visually-hidden">Перейти к разделу</span>
                </a>
                <header className="opportunities__card-header">
                  <h3 className="opportunities__card-title">{title}</h3>
                  <Icon className="opportunities__card-icon" name="arrow-top-right" />
                </header>
                <p className="opportunities__card-desc">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
