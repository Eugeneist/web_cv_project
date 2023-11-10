import styles from './Header.module.scss';
import Image from 'next/image';
import author from '../../assets/author.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Image src={author} height={260} alt="Picture of the author" />
        <div className={styles.header__inner_textbox}>
          <h1 className={styles.header__title}>Yevhen Rudofylov</h1>
          <h4 className={styles.header__text}>Frontend Developer</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
