import clsx from 'clsx';

import { getPageHref } from '@/shared/lib/routing';

import './Button.scss';

export const Button = ({
  additionalClasses,
  children,
  className,
  href,
  variant,
  ...props
}) => {
  const classNames = clsx('button', variant && `button--${variant}`, className, additionalClasses);

  if (href) {
    return (
      <a className={classNames} href={href.startsWith('/') ? getPageHref(href) : href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} type={props.type || 'button'} {...props}>
      {children}
    </button>
  );
};
