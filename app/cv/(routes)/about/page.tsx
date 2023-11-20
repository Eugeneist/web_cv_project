import styles from './page.module.scss';
import Image from 'next/image';
import { AnimatedBlob } from '@/components';
import author from '../../../../assets/about_author.png';

const AboutPage = () => {
  return (
    <section className={styles.about}>
      <article className={styles.about__summary}>
        <div className={styles.about__text}>
          <h2 className={styles.about__title}>Summary</h2>
          <p>
            Hey, traveler!
            <br />
            Glad to see you at my CV website! I hope you like it.
            <br />
            So, who am I? My name is Yevhen and I am a Frontend (React)
            Developer from Ukraine! I have a passion for creating engaging,
            user-friendly and beautiful web applications and websites. I have
            completed courses and have a higher technical education. I am
            learning new things every day! I am actively seeking opportunities
            to contribute my skills for creating amazing projects!
          </p>
        </div>
        <AnimatedBlob
          id={'1'}
          width={600}
          height={600}
          index={50}
          title=""
          backgroundImage="/_next/static/media/about_author.32365f4b.png"
        />
      </article>
      <article className={styles.about__summary}>
        <AnimatedBlob id={'2'} width={600} height={600} index={25} title="" />
        <div className={styles.about__text}>
          <h2 className={styles.about__title}>My road</h2>
          <p>hehehe!</p>
        </div>
      </article>
      <article className={styles.about__summary}>
        <div className={styles.about__text}>
          <h2 className={styles.about__title}>Random facts</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <AnimatedBlob id={'3'} width={600} height={600} index={58} title="" />
      </article>
    </section>
  );
};

export default AboutPage;
