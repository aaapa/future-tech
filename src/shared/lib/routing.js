const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

const pagePathByLegacyFile = {
  '/index.html': '/',
  '/news.html': '/news',
  '/blog-open.html': '/blog-open',
  '/podcasts.html': '/podcasts',
  '/resources.html': '/resources',
  '/contacts.html': '/contacts',
};

export const getPageHref = (path = '/') => {
  if (!path.startsWith('/')) {
    return path;
  }

  return path === '/' ? `${basePath}/` : `${basePath}${path}`;
};

export const getAssetHref = (path) => {
  if (!path.startsWith('/')) {
    return path;
  }

  return `${basePath}${path}`;
};

export const normalizeRoutePath = (pathname) => {
  const pathWithoutBase = basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname;

  const cleanPath = pathWithoutBase.replace(/\/$/, '') || '/';

  return pagePathByLegacyFile[cleanPath] ?? cleanPath;
};
