import styles from './Footer.module.scss';
import { socials } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';

let currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__inner}>
        <nav className={styles.footer__nav}>
          <ul className={styles.footer__navlist}>
            {socials.map(({ id, link, image, description }) => (
              <li className={styles.footer__navitem} key={id}>
                <Link
                  className={styles.footer__navlink}
                  target="_blank"
                  href={link}
                >
                  <Image
                    className={styles.footer__navicon}
                    src={image}
                    quality={20}
                    height={20}
                    alt={description}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.footer__copyright}>
          <p>Designed & developed by Yevhen Rudofylov</p>
          <p>{currentYear > 2023 ? `2023 - ${currentYear}` : currentYear}</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
