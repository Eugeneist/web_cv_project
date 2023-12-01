import { useState, useEffect } from 'react';

interface useScrollPointProps {
  point: number;
}

const useScrollPoint = ({ point = 30 }: useScrollPointProps) => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;
      const shouldSetScrolled = scrollPercentage >= point;

      if (shouldSetScrolled !== isScrolled) {
        setScrolled(shouldSetScrolled);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isScrolled, point]);

  return isScrolled;
};

export default useScrollPoint;
