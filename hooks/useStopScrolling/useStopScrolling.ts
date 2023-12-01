import { useEffect, useRef } from 'react';

interface UseStopScrollingProps {
  trigger: boolean;
}

const useStopScrolling = ({ trigger }: UseStopScrollingProps) => {
  const bodyRef = useRef(document?.documentElement);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) {
      body.style.overflow = trigger ? 'hidden' : 'visible';
    }
  }, [trigger]);

  return { bodyRef };
};

export default useStopScrolling;
