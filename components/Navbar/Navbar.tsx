'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.scss';
import { burger_open, burger_close } from '@/assets/images';
import Link from 'next/link';
import Image from 'next/image';
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
  const [isScrolled, setScrolled] = useState(false);

  const bodyRef = useRef(document.documentElement);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setTimeout(() => {
      toggleMobileMenu();
      bodyRef.current.style.overflow = 'visible';
    }, 300);
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.overflow = isMobileMenuOpen ? 'hidden' : 'visible';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;
      const shouldSetScrolled = scrollPercentage >= 30;

      if (shouldSetScrolled !== isScrolled) {
        setScrolled(shouldSetScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

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

      <div
        className={`${styles.mobilemenu} ${
          isMobileMenuOpen ? styles.open : ''
        } ${isScrolled ? styles.visible : ''}`}
      >
        <button
          className={`${
            isMobileMenuOpen
              ? styles.navigation__openbutton
              : styles.navigation__closebutton
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
                <Link onClick={handleCloseMenu} href={url}>
                  <Button
                    style={{
                      width: '20rem',
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

export default Navbar;
