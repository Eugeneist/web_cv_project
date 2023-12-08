import styles from './page.module.scss';
import { Socials, Form } from '@/components';
import { socials } from '@/data/data';
import { FlexDirection } from '@/components/Socials/Socials';

const ContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__titlebox}>
        <h2 className={styles.contacts__title}>
          Want to contact me? / Have questions?
        </h2>
      </div>
      <section className={styles.contacts__contactbox}>
        <div className={styles.contacts__socials}>
          <h3 className={styles.contacts__title}>Write on socials:</h3>
          <Socials
            socials={socials}
            direction={FlexDirection.COLUMN}
            width={60}
            height={60}
            gap={85}
          />
        </div>
        <div className={styles.contacts__form}>
          <h3 className={styles.contacts__title}>Fill out the form:</h3>
          <Form />
        </div>
      </section>
    </section>
  );
};

export default ContactsPage;
