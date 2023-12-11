'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Chivo_Mono } from 'next/font/google';
import styles from './NavButton.module.scss';

export const chivo_mono = Chivo_Mono({
  subsets: ['latin'],
  weight: '400',
});

interface NavButtonProps {
  title: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title }) => {
  const pathname = usePathname();

  const currentPage = pathname.split('/').pop();

  const nextPage = `/cv/${getNextPage(currentPage)}`;

  function getNextPage(currentPage: string | undefined): string {
    switch (currentPage) {
      case 'about':
        return 'skills';
      case 'skills':
        return 'education';
      case 'education':
        return 'projects';
      case 'projects':
        return 'contacts';
      case 'contacts':
        return '';
      default:
        return 'about';
    }
  }

  return (
    <Link href={nextPage}>
      <button className={`${styles.navbutton} ${chivo_mono.className}`}>
        {title}
      </button>
    </Link>
  );
};

export default NavButton;
