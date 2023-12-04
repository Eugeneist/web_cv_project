import { clearAllBodyScrollLocks, enableBodyScroll } from 'body-scroll-lock';
import { useEffect } from 'react';

type useScrollLockProps = {
  ref: React.RefObject<HTMLElement>;
  skip?: boolean;
};

const useScrollLock = ({ ref, skip }: useScrollLockProps): void => {
  useEffect(() => {
    if (ref.current && !skip) {
      enableBodyScroll(ref.current);
    } else {
      clearAllBodyScrollLocks();
    }

    return clearAllBodyScrollLocks;
  }, [ref, skip]);
};

export default useScrollLock;
