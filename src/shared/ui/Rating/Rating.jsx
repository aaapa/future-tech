import clsx from 'clsx';

import './Rating.scss';

export const Rating = ({ value = 5, max = 5 }) => {
  const numericValue = Number(value);
  const filledStars = Math.min(max, Math.max(0, Math.round(Number.isFinite(numericValue) ? numericValue : 0)));

  return (
    <div className="rating">
      <span className="visually-hidden">Рейтинг {value} из {max} звёзд</span>
      {Array.from({ length: max }).map((_, index) => (
        <span
          className={clsx('rating__star', index < filledStars && 'rating__star--filled')}
          key={index}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};
