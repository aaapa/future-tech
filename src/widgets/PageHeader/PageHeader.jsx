import './PageHeader.scss';

export const PageHeader = ({ description, hiddenWord, title, visibleWord }) => {
  return (
    <section className="page-header" aria-labelledby="page-header-title">
      <div className="page-header__inner container">
        <div className="page-header__info">
          <h1 className="page-header__title title title--bigest" id="page-header-title">
            {title} <span className="page-header__title-last-word visually-hidden">{hiddenWord}</span>
          </h1>
          <span className="page-header__subtitle title title--bigest" aria-hidden="true">{visibleWord}</span>
          <p className="page-header__desc">{description}</p>
        </div>
      </div>
    </section>
  );
};
