'use client';

import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { useEffect } from 'react';

type useScrollLockProps = {
  ref: React.RefObject<HTMLElement>;
  skip?: boolean;
};

const useScrollLock = (): void => {
  useEffect(() => {
    disableBodyScroll(document.body);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);
};

export default useScrollLock;
