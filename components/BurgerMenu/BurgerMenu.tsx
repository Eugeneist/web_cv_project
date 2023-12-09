'use client';

import { useState, useEffect, useCallback } from 'react';
import { NavigationProps } from '../Navbar/Navbar';
import { Button } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { burger_open, burger_close } from '@/assets/images';
import styles from './BurgerMenu.module.scss';

const BurgerMenu: React.FC<NavigationProps> = ({ menuItems }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    if (typeof window != 'undefined' && window.document) {
      document.documentElement.style.overflow = isMobileMenuOpen
        ? 'visible'
        : 'hidden';
      document.body.style.overflow = isMobileMenuOpen ? 'visible' : 'hidden';
    }
    setMobileMenuOpen((prevState) => !prevState);
  }, [isMobileMenuOpen]);

  return (
    <nav id="burger_menu" className={styles.burgermenu}>
      <button
        className={styles.burgermenu__openbutton}
        onClick={toggleMobileMenu}
      >
        <Image
          className={styles.burgermenu__icon}
          src={burger_open}
          width={50}
          height={50}
          alt="image"
        />
      </button>
      <div
        className={`${styles.mobilemenu}
        ${isMobileMenuOpen ? styles.open : styles.close}
        `}
      >
        {isMobileMenuOpen && (
          <section className={styles.mobilemenu__inner}>
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
            <button
              className={styles.burgermenu__closebutton}
              onClick={toggleMobileMenu}
            >
              <Image
                className={styles.burgermenu__icon}
                src={burger_close}
                width={50}
                height={50}
                alt="image"
              />
            </button>
          </section>
        )}
      </div>
    </nav>
  );
};

export default BurgerMenu;
