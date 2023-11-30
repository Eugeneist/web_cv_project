import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Button } from '@/components';
import { menuItems } from '@/data/data';
import styles from './page.module.scss';
import author from '../assets/hero_author.png';

export default function Home() {
  return (
    <>
      <header>
        <Navbar menuItems={menuItems} />
      </header>
      <main className={styles.mainpage}>
        <section className={styles.home}>
          <div className={styles.home__inner}>
            <div>
              <div className={styles.home__textbox}>
                <p>Hello!</p>
                <p className={styles.home__text}>My name is</p>
                <h1>Yevhen Rudofylov</h1>
                <p className={styles.home__text}>and I am</p>
                <h2>a Frontend Developer</h2>
              </div>
              <Link className={styles.home__button} href="/cv">
                <Button label="Watch CV" />
              </Link>
            </div>
            <div>
              <Image
                src={author}
                quality={100}
                height={463}
                alt="Picture of the author"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
