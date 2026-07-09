import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Logo } from '@/shared/ui/Logo';
import { MenuButton } from '@/shared/ui/MenuButton';
import { getPageHref } from '@/shared/lib/routing';

import './Header.scss';

const navigationItems = [
  { label: 'Главная', href: '/' },
  { label: 'Новости', href: '/news' },
  { label: 'Подкасты', href: '/podcasts' },
  { label: 'Ресурсы', href: '/resources' },
];

export const Header = ({ activeHref = '/', isScrolled = false, onHeightChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuId = 'header-menu';

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement || !onHeightChange) {
      return undefined;
    }

    const observer = new ResizeObserver(([entry]) => {
      onHeightChange(entry.borderBoxSize?.[0]?.blockSize ?? headerElement.offsetHeight);
    });

    observer.observe(headerElement);
    onHeightChange(headerElement.offsetHeight);

    return () => observer.disconnect();
  }, [onHeightChange]);

  useEffect(() => {
    document.documentElement.classList.toggle('is-lock', isMenuOpen);

    return () => document.documentElement.classList.remove('is-lock');
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!(event.target instanceof Node)) {
        return;
      }

      const isInsideMenu = menuRef.current?.contains(event.target);
      const isInsideButton = menuButtonRef.current?.contains(event.target);

      if (!isInsideMenu && !isInsideButton) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className={clsx('header', isScrolled && 'header--scrolled')}>
      <div className="header__promo">
        <a className="header__promo-link" href="#resources">
          <span>Подпишитесь на нашу рассылку о новых блогах и ресурсах</span>
          <Icon name="arrow-top-right" />
        </a>
      </div>
      <div className="header__inner container">
        <div className="header__content">
          <Logo className="header__logo" href="/" />

          <div
            ref={menuRef}
            className={clsx('header__menu', isMenuOpen && 'header__menu--open')}
            id={menuId}
          >
            <div className="header__menu-inner">
              <nav className="header__nav" aria-label="Основная навигация">
                <ul className="header__list">
                  {navigationItems.map((item) => {
                    const isActive = item.href === activeHref;

                    return (
                      <li className="header__list-item" key={item.href}>
                        <a
                          className={clsx('header__link', 'button', 'button--transparent', isActive && 'button--active')}
                          href={getPageHref(item.href)}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <Button variant="accent" href="/contacts" onClick={() => setIsMenuOpen(false)}>
                Контакты
              </Button>
            </div>
          </div>

          <MenuButton
            ref={menuButtonRef}
            controls={menuId}
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          />
        </div>
      </div>
    </header>
  );
};
