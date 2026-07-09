import clsx from 'clsx';

import './Icon.scss';

export const Icon = ({ className, name, ...props }) => {
  return <span className={clsx('icon', name && `icon--${name}`, className)} aria-hidden="true" {...props} />;
};
