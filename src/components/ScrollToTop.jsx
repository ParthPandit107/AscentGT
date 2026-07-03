import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that resets the window scroll position to the top
 * on every route navigation.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const snapToTop = () => {
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      } catch (e) {
        window.scrollTo(0, 0);
      }
    };

    // Scroll immediately
    snapToTop();

    // Scroll again after tiny timeouts to override any Suspense layout shifts when code-split components mount
    const t1 = setTimeout(snapToTop, 50);
    const t2 = setTimeout(snapToTop, 150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
