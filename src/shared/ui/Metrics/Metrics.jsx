import clsx from 'clsx';

import './Metrics.scss';

export const Metrics = ({ className, items }) => {
  return (
    <div className={clsx('metrics', className)}>
      <ul className="metrics__list">
        {items.map((item) => (
          <li className="metrics__list-item" key={item.label}>
            <div className="metrics__card">
              <span className="metrics__key">{item.label}</span>
              <span className="metrics__value">
                {item.value} <span className="metrics__sign">+</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
