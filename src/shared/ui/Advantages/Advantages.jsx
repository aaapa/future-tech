import clsx from 'clsx';

import { Icon } from '@/shared/ui/Icon';
import { getAssetHref } from '@/shared/lib/routing';

import './Advantages.scss';

export const Advantages = ({ className, isLazy = false, items, label }) => {
  const imageAttrs = isLazy ? { loading: 'lazy', decoding: 'async' } : {};

  return (
    <div className={clsx('advantages', className)}>
      {label && <span className="visually-hidden">{label}</span>}
      <ul className="advantages__list">
        {items.map((item) => (
          <li className="advantages__list-item" key={item.title}>
            <div className="advantages__card">
              <img
                className="advantages__card-icon"
                width="50"
                height="50"
                src={getAssetHref(item.icon)}
                {...imageAttrs}
                alt=""
              />
              <div className="advantages__card-main">
                <div className="advantages__card-info">
                  <a className="advantages__card-link" href={item.href ?? '#!'}>
                    <span className="visually-hidden">Перейти к разделу</span>
                  </a>
                  <h3 className="advantages__card-title">{item.title}</h3>
                  <p className="advantages__card-text">{item.text}</p>
                </div>
                <Icon className="advantages__card-icon" name="arrow-top-right" />
              </div>
              <p className="advantages__card-desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
