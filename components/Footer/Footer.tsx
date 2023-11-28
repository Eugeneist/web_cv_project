import styles from './Footer.module.scss';
import {
  github_social,
  instagram_social,
  linkedin_social,
  telegram_social,
} from '@/assets/images';
import Link from 'next/link';
import Image from 'next/image';

const socials = [
  {
    id: 0,
    title: 'github',
    link: 'https://github.com/Eugeneist',
    image: github_social,
    description: 'github link',
  },
  {
    id: 1,
    title: 'instagram',
    link: 'https://www.instagram.com/eugene_lufever/',
    image: instagram_social,
    description: 'instagram link',
  },
  {
    id: 2,
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/yevhen-rudofylov-ba8010166/',
    image: linkedin_social,
    description: 'linkedin link',
  },
  {
    id: 3,
    title: 'telegram',
    link: 'tg://resolve?domain=rudofylov',
    image: telegram_social,
    description: 'telegram link',
  },
];

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
