'use client';

import styles from './Navbar.module.scss';
import Link from 'next/link';
import { Button, BurgerMenu } from '@/components';
import { menuItems } from '@/data/data';

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
      <section className={styles.navigation__inner}>
        <ul className={styles.desktopmenu}>
          {menuItems.map(({ id, url, label }) => (
            <li key={id}>
              <Link href={url}>
                <Button label={label} />
              </Link>
            </li>
          ))}
        </ul>
        <BurgerMenu menuItems={menuItems} />
      </section>
    </nav>
  );
};

export default Navbar;
