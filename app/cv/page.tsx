import Link from 'next/link';
import { Button } from '@/components';
import styles from './page.module.scss';

const CV = () => {
  return (
    <section className={styles.info}>
      <article className={styles.info__about}>
        <h2>
          <Link className={styles.info__link} href="/cv/about">
            <Button label="About" />
          </Link>
        </h2>
        <p>
          Enthusiastic and dedicated Frontend (React) Developer with a passion
          for creating engaging and user-friendly web applications. My name is
          Yevhen, and I completed courses at Hillel IT-School, have a higher
          technical education. I am actively seeking opportunities to contribute
          my skills for crafting seamless and interactive user experiences.
        </p>
      </article>
      <section className={styles.info__columns}>
        <section>
          <div>
            <h2>
              <Link className={styles.info__link} href="/cv/skills">
                <Button label="skills" />
              </Link>
            </h2>
            <ul>
              <li>HTML,CSS,SASS/SCSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>GIT</li>
              <li>MUI/Chakra UI</li>
              <li>Figma</li>
              <li>responsible/adaptive design</li>
              <li>semantic layout</li>
              <li>Flex/GRID technologies</li>
            </ul>
          </div>
          <div>
            <h2>
              <Link className={styles.info__link} href="/cv/languages">
                <Button label="Languages" />
              </Link>
            </h2>
            <ul>
              <li>English - Intermediate(B2)</li>
              <li>Ukrainian - Native</li>
              <li>Russian - Native</li>
            </ul>
          </div>
          <article>
            <h2>
              <Link className={styles.info__link} href="/cv/education">
                <Button label="Education" />
              </Link>
            </h2>
            <div>
              <p>
                National Technical University «Kharkiv Polytechnic Institute»
              </p>
              <p>Mechanical Engineering, Masters Degree</p>
            </div>
            <div>
              <div>
                <p>Hillel Basic</p>
              </div>
              <div>
                <p>Hillel Pro</p>
              </div>
            </div>
          </article>
        </section>
        <section>
          <h2>
            <Link className={styles.info__link} href="/cv/projects">
              <Button label="Projects" />
            </Link>
          </h2>
          <ol>
            <li>Dizhka Store</li>
            <li>CV website</li>
            <li>Fresh News</li>
            <li>Currency Converter</li>
          </ol>
        </section>
        <section>
          <nav>
            <h2>
              <Link className={styles.info__link} href="/cv/contacts">
                <Button label="Contacts" />
              </Link>
            </h2>
            <ul>
              <li>
                <a href="tel:+380508336633">+38 (050) 833-66-33</a>
              </li>
              <li>
                <a href="mailto:rudofiloveugene@gmail.com">
                  rudofiloveugene@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yevhen-rudofylov-ba8010166/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Eugeneist" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="tg://resolve?domain=rudofylov" target="_blank">
                  Telegram
                </a>
              </li>
              <li>Kharkiv, Ukraine</li>
            </ul>
          </nav>
          <div>QR</div>
        </section>
      </section>
    </section>
  );
};

export default CV;
