'use client';

import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { Button } from '@/components';

interface MenuItem {
  id: number;
  label: string;
  url: string;
}

interface NavigationProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavigationProps> = ({ menuItems }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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

      {/* <div className={styles.mobilemenu}>
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        {isMobileMenuOpen && (
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link onClick={toggleMobileMenu} href={item.url}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
