import styles from './not-found.module.scss';
import { Navbar } from '@/components';
import { menuItems } from '@/data/data';

const NotFound = () => {
  return (
    <>
      <Navbar menuItems={menuItems} />
      <section className={styles.notfound}>
        <div className={styles.notfound__inner}>
          <p className={styles.notfound__title}>
            Wooops! You find a secret place!
          </p>
          <p className={styles.notfound__title2}>
            We called it <span>«404 Not Found»</span> room
          </p>
          <p>Come back later, maybe something change {`;)`}</p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
