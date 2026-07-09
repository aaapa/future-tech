import clsx from 'clsx';

import { getAssetHref, getPageHref } from '@/shared/lib/routing';

import './Logo.scss';

export const Logo = ({ className, href = '/', ...props }) => {
  return (
    <a
      className={clsx('logo', className)}
      href={getPageHref(href)}
      title="На главную"
      {...props}
    >
      <img
        className="logo__image"
        src={getAssetHref('/imgs/logo/logo.svg')}
        width="180"
        height="50"
        alt="FutureTech"
      />
      <span className="visually-hidden">На главную</span>
    </a>
  );
};
