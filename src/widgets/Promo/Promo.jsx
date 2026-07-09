import clsx from 'clsx';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import './Promo.scss';

export const Promo = ({ buttonHref = '#!', buttonLabel, children, className, eyebrow, id, title }) => {
  return (
    <section className={clsx('promo', className)} aria-labelledby={id}>
      <div className="promo__inner container">
        <div className="promo__info">
          <h2 className="tag" id={id}>{eyebrow}</h2>
          <p className="promo__title title title--medium">{title}</p>
        </div>
        {children && <div className="promo__aside">{children}</div>}
        {!children && buttonLabel && (
          <Button className="promo__button" href={buttonHref}>
            <span>{buttonLabel}</span>
            <Icon name="arrow-top-right" />
          </Button>
        )}
      </div>
    </section>
  );
};
