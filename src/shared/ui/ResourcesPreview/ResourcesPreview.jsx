import clsx from 'clsx';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { getAssetHref } from '@/shared/lib/routing';

import './ResourcesPreview.scss';

export const ResourcesPreview = ({
  buttonHref,
  buttonLabel,
  className,
  description,
  images,
  isLazy = false,
  title,
}) => {
  const imageAttrs = isLazy ? { loading: 'lazy', decoding: 'async' } : {};

  return (
    <div className={clsx('resources-preview', className)}>
      <div className="resources-preview__team">
        {images.map((image) => (
          <img
            className="resources-preview__team-person"
            width="60"
            height="60"
            src={getAssetHref(image)}
            {...imageAttrs}
            alt=""
            key={image}
          />
        ))}
      </div>
      <div className="resources-preview__main">
        <h2 className="resources-preview__title">{title}</h2>
        <p className="resources-preview__desc">{description}</p>
      </div>
      <Button className="resources-preview__button" href={buttonHref}>
        <span>{buttonLabel}</span>
        <Icon name="arrow-top-right" />
      </Button>
    </div>
  );
};
