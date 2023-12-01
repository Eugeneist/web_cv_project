'use client';

import { useState, useCallback } from 'react';
import { NavigationProps } from '../Navbar/Navbar';
import { useScrollPoint } from '@/hooks';
import { Button } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { burger_open, burger_close } from '@/assets/images';
import styles from './BurgerMenu.module.scss';

const BurgerMenu: React.FC<NavigationProps> = ({ menuItems }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScrolled = useScrollPoint({ point: 30 });

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prevState) => !prevState);
    if (typeof window != 'undefined' && window.document) {
      document.documentElement.style.overflow = isMobileMenuOpen
        ? 'auto'
        : 'hidden';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav>
      <div
        className={`${styles.mobilemenu} ${
          isMobileMenuOpen ? styles.open : ''
        } ${isScrolled ? styles.visible : ''}`}
      >
        <button
          className={`${
            isMobileMenuOpen
              ? styles.mobilemenu__closebutton
              : styles.mobilemenu__openbutton
          }`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <Image
              className={styles.mobilemenu__icon}
              src={burger_close}
              width={50}
              height={50}
              alt="image"
            />
          ) : (
            <Image
              className={styles.mobilemenu__icon}
              src={burger_open}
              width={50}
              height={50}
              alt="image"
            />
          )}
        </button>
        {isMobileMenuOpen && (
          <ul className={styles.mobilemenu__list}>
            {menuItems.map(({ id, url, label }) => (
              <li className={styles.mobilemenu__buttonbox} key={id}>
                <Link onClick={toggleMobileMenu} href={url}>
                  <Button
                    style={{
                      width: '22rem',
                      fontSize: '3rem',
                    }}
                    label={label}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default BurgerMenu;
