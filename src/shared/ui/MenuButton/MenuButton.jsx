import { forwardRef } from 'react';
import clsx from 'clsx';

import './MenuButton.scss';

export const MenuButton = forwardRef(({
  className,
  controls,
  isOpen,
  onClick,
}, ref) => {
  return (
    <button
      ref={ref}
      className={clsx('menu-button', 'visible-tablet', className)}
      type="button"
      aria-controls={controls}
      aria-expanded={isOpen}
      aria-haspopup="menu"
      onClick={onClick}
    >
      <span className={clsx('menu-button__icon', isOpen && 'menu-button__icon--open')} aria-hidden="true">
        <span className="menu-button__icon-line" />
        <span className="menu-button__icon-line" />
        <span className="menu-button__icon-line" />
      </span>
      <span>{isOpen ? 'Закрыть меню' : 'Открыть меню'}</span>
    </button>
  );
});

MenuButton.displayName = 'MenuButton';
