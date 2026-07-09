import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { getAssetHref } from '@/shared/lib/routing';

import './Products.scss';

const products = [
  {
    icon: '/imgs/products/products__ebooks-icon.svg',
    title: 'Электронные книги',
    description: 'Выбирайте наши электронные книги о технологиях будущего',
    usersPrefix: 'products__ebooks-user',
    image: '/imgs/products/products__ebooks.webp',
    cardTitle: 'Разнообразие тем',
    cardDescription: 'Темы: образование (25%), космос (25%), возобновляемая энергия (20%), биотехнологии (15%) и здравоохранение (15%)',
    totalLabel: 'Более 100 книг',
    authorLevel: 'Книги написаны известными экспертами со средним опытом работы в 15 лет',
  },
  {
    icon: '/imgs/products/products__whitepapers-icon.svg',
    title: 'Технические документы',
    description: 'Читайте наши аналитические отчёты и экспертные доклады',
    usersPrefix: 'products__whitepapers-user',
    image: '/imgs/products/products__whitepapers.webp',
    cardTitle: 'Охват тем',
    cardDescription: 'Доклады охватывают возобновляемую энергию (30%), квантовые вычисления (20%), освоение космоса (20%), этику ИИ (15%) и ИИ в медицине (15%)',
    totalLabel: 'Более 50 документов',
    authorLevel: 'Технические документы составляются экспертами в данной области со средним опытом работы более 20 лет',
  },
];

export const Products = () => {
  return (
    <section className="products" id="resources">
      <div className="products__inner">
        {products.map((product) => (
          <div className="products__item" key={product.title}>
            <div className="products__item-content container">
              <div className="products__info">
                <div className="products__info-main">
                  <img className="products__icon" src={getAssetHref(product.icon)} width="80" height="80" loading="lazy" decoding="async" alt="" />
                  <div className="products__column">
                    <h3 className="products__title">{product.title}</h3>
                    <p className="products__desc">{product.description}</p>
                  </div>
                  <Button className="products__button" variant="dark-grey" href="#!">
                    <span>Скачать</span>
                    <Icon name="arrow-top-right" />
                  </Button>
                </div>
                <div className="products__downloads">
                  <div className="products__downloads-column">
                    <h4 className="products__downloads-title">Загрузили</h4>
                    <span className="products__downloads-text">10000+</span>
                  </div>
                  <div className="products__downloads-users">
                    {[1, 2, 3, 4].map((index) => (
                      <img
                        className="products__downloads-user"
                        src={getAssetHref(`/imgs/products/${product.usersPrefix}-${index}.webp`)}
                        width="50"
                        height="50"
                        loading="lazy"
                        decoding="async"
                        alt=""
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="products__card">
                <header className="products__card-header">
                  <h3 className="products__card-title">{product.cardTitle}</h3>
                  <p className="products__card-desc">{product.cardDescription}</p>
                </header>
                <div className="products__card-main">
                  <img
                    className="products__card-image"
                    src={getAssetHref(product.image)}
                    width="920"
                    height="332"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <footer className="products__card-footer">
                  <div className="products__card-details">
                    <div className="products__card-detail">
                      <h4 className="products__card-detail-title">Всего книг</h4>
                      <p className="products__card-detail-desc">{product.totalLabel}</p>
                    </div>
                    <div className="products__card-detail">
                      <h4 className="products__card-detail-title">Форматы загрузки</h4>
                      <p className="products__card-detail-desc">PDF</p>
                      <Button className="products__card-detail-button" href="#!">
                        <span>Предпросмотр</span>
                        <Icon name="eye" />
                      </Button>
                    </div>
                    <div className="products__card-detail">
                      <h4 className="products__card-detail-title">Средний уровень знаний автора</h4>
                      <p className="products__card-detail-desc">{product.authorLevel}</p>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
