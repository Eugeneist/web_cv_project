import styles from './page.module.scss';
import { about_author, first_website, facts } from '@/assets/images';
import { AnimatedBlob } from '@/components';
import Link from 'next/link';

const AboutPage = () => {
  const chess = 'https://www.chess.com/member/walgul';
  const leetcode = 'https://leetcode.com/Eugenist/';

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
          background={about_author}
        />
      </article>
      <article className={styles.about__summary}>
        <AnimatedBlob
          id={'2'}
          width={600}
          height={600}
          index={25}
          title=""
          background={first_website}
        />
        <div className={styles.about__text}>
          <h2 className={styles.about__title}>My road</h2>
          <p>
            If I think about my first steps into web development, it would have
            been my last year at school. I was have a subject – computer
            science. Usually, the teacher told us about Word, Excel, Power Point
            and stuff like that. One day, we had a class on Microsoft Publisher
            and each of the students created their own website. I had built a
            movie portal and I like it. (look the picture in the bubble) And
            after a lot of years, when I finished university and worked in
            public catering I remembered this. I decided to switch my career
            path and started to learn about web development by myself. However,
            I quickly realized that I needed a study structure and mentorship.
            So I finished courses where I learned HTML, CSS, JavaScript and
            React. Now I continue my self-education and actively searching for
            my first job as a Frontend developer!
          </p>
        </div>
      </article>
      <article className={styles.about__summary}>
        <div className={styles.about__text}>
          <h2 className={styles.about__title}>Random facts</h2>
          <ol className={styles.about__list}>
            <li
              className={styles.about__list_item}
            >{`I am a barista in the past, so about coffee that's for me!`}</li>
            <li>I like books, especially paper books. How they smell!</li>
            <li>
              Chess lover! Wanna{' '}
              <Link className={styles.colored} target="_blank" href={chess}>
                PLAY
              </Link>{' '}
              with me?
            </li>
            <li>Huge fan of space and technology progress.</li>
            <li>
              Sometimes I solve problems on{' '}
              <Link className={styles.colored} target="_blank" href={chess}>
                Leetcode
              </Link>{' '}
              , have 303 days streak.
            </li>
            <li>I cook well.</li>
            <li>Birthday: 18 June 1995</li>
          </ol>
        </div>
        <AnimatedBlob
          id={'3'}
          width={600}
          height={600}
          index={58}
          title=""
          background={facts}
        />
      </article>
    </section>
  );
};

export default AboutPage;
