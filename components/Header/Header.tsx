import styles from './Header.module.scss';
import Image from 'next/image';
import author from '../../assets/author.png';
import glasses from '../../assets/glasses.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Image
          className={styles.header__image}
          src={author}
          height={260}
          alt="Picture of the author"
        />
        <Image
          id="glasses"
          className={styles.header__image__glasses}
          src={glasses}
          height={260}
          alt="Picture of the author"
        />
        <div className={styles.header__inner_textbox}>
          <h1 className={styles.header__title}>Yevhen Rudofylov</h1>
          <h4 className={styles.header__text}>Frontend Developer</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
