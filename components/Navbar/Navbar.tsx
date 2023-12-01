'use client';

import styles from './Navbar.module.scss';
import Link from 'next/link';
import { Button } from '@/components';

interface MenuItem {
  id: number;
  label: string;
  url: string;
}

export interface NavigationProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavigationProps> = ({ menuItems }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.desktopmenu}>
        {menuItems.map(({ id, url, label }) => (
          <li key={id}>
            <Link href={url}>
              <Button label={label} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
