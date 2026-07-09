import { useEffect, useRef, useState } from 'react';

import { PageScroll } from '@/shared/ui/PageScroll';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export const PageLayout = ({
  activeHref = '/',
  children,
  labelledBy,
  scrollLabel,
  withFooter = true,
  withHeader = true,
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const simpleBarRef = useRef(null);

  useEffect(() => {
    const simpleBarInstance = simpleBarRef.current;
    if (!simpleBarInstance) {
      return undefined;
    }

    const scrollElement = simpleBarInstance.getScrollElement();
    if (!scrollElement) {
      return undefined;
    }

    const handleScroll = () => {
      setIsScrolled(scrollElement.scrollTop > 10);
    };

    const handleAnchorClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const anchorElement = event.target.closest('a[href^="#"]');
      const href = anchorElement?.getAttribute('href');
      const targetIdentifier = href?.slice(1);
      if (!targetIdentifier || targetIdentifier === '!') {
        return;
      }

      const targetElement = document.getElementById(targetIdentifier);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    handleScroll();
    scrollElement.addEventListener('scroll', handleScroll, { passive: true });
    scrollElement.addEventListener('click', handleAnchorClick);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
      scrollElement.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="page">
      <PageScroll ref={simpleBarRef} labelledBy={labelledBy}>
        <span className="visually-hidden" id={labelledBy}>
          {scrollLabel}
        </span>
        {withHeader && (
          <Header
            activeHref={activeHref}
            isScrolled={isScrolled}
            onHeightChange={setHeaderHeight}
          />
        )}
        <main className="main" style={withHeader ? { paddingTop: `${headerHeight}px` } : undefined}>
          {children}
        </main>
        {withFooter && <Footer />}
      </PageScroll>
    </div>
  );
};
