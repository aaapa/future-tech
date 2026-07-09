import './TableOfContents.scss';

export const TableOfContents = ({ items }) => {
  return (
    <div className="table-of-contents">
      <h2 className="table-of-contents__title">Содержимое</h2>
      <div className="table-of-contents__main">
        <ul className="table-of-contents__list">
          {items.map((item) => (
            <li className="table-of-contents__list-item" key={item}>
              <a className="table-of-contents__link" href="#!">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
