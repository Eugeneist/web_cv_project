import Link from 'next/link';
import { Button } from '@/components';
import { Certificate } from '@/components';
import { ProjectsList } from '@/components';
import styles from './page.module.scss';

const cerificates = [
  {
    id: 0,
    title: 'Hillel IT School',
    description: 'Frontend Basic (HTML, CSS/SCSS)',
    link: 'https://certificate.ithillel.ua/view/44227142',
  },
  {
    id: 1,
    title: 'Hillel IT School',
    description: 'Frontend Pro (JavaScript, React)',
    link: 'https://certificate.ithillel.ua/ru/view/12754162',
  },
];

const projects = [
  {
    id: 0,
    title: 'CV Website',
    description: 'My CV website',
    technologies: ['React', 'Next.js', 'TypeScript', 'SCSS modules'],
    links: [
      'https://github.com/Eugeneist/web_cv_project',
      'https://github.com/Eugeneist/web_cv_project',
    ],
  },
  {
    id: 1,
    title: 'Dizhka Store',
    description: 'eCommerce Application',
    technologies: [
      'React',
      'Redux',
      'Chakra UI',
      'AXIOS',
      'Redux Persist',
      'React Hook Form',
      'Styled Components',
      'NodeJS',
      'Express',
    ],
    links: [
      'https://github.com/Eugeneist/Dizhka-Store',
      'https://eugeneist.github.io/Dizhka-Store/',
    ],
  },
  {
    id: 2,
    title: 'Fresh News App',
    description: 'Small news application',
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'MUI',
      'SCSS modules',
      'AXIOS',
      'React Router',
    ],
    links: [
      'https://github.com/Eugeneist/fresh-news',
      'https://eugeneist.github.io/fresh-news/',
    ],
  },
];

const CV = () => {
  return (
    <section className={styles.info}>
      <article className={styles.info__about}>
        <h2 className={styles.info__title}>
          <Link className={styles.info__link} href="/cv/about">
            <Button label="About" />
          </Link>
        </h2>
        <p className={styles.info__about_text}>
          Enthusiastic and dedicated Frontend (React) Developer with a passion
          for creating engaging and user-friendly web applications. My name is
          Yevhen, and I completed courses at Hillel IT-School, have a higher
          technical education. I am actively seeking opportunities to contribute
          my skills for crafting seamless and interactive user experiences.
        </p>
      </article>
      <section className={styles.info__columns}>
        <section>
          <article className={styles.info__skills}>
            <h2 className={styles.info__title}>
              <Link className={styles.info__link} href="/cv/skills">
                <Button label="skills" />
              </Link>
            </h2>
            <ul className={styles.info__skills_list}>
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
          </article>
          <article className={styles.info__languages}>
            <h2 className={styles.info__title}>
              <Link className={styles.info__link} href="/cv/languages">
                <Button label="Languages" />
              </Link>
            </h2>
            <ul className={styles.info__languages_list}>
              <li>English - Intermediate(B2)</li>
              <li>Ukrainian - Native</li>
              <li>Russian - Native</li>
            </ul>
          </article>
          <article className={styles.info__education}>
            <h2 className={styles.info__title}>
              <Link className={styles.info__link} href="/cv/education">
                <Button label="Education" />
              </Link>
            </h2>
            <div className={styles.info__education_list}>
              <div className={styles.info__education_main}>
                <h4>
                  National Technical University «Kharkiv Polytechnic Institute»
                </h4>
                <p className={styles.info__education_text}>
                  Mechanical Engineering, Masters Degree
                </p>
              </div>
              <div>
                <ul className={styles.info__certificatelist}>
                  {cerificates.map((cerificate) => (
                    <li key={cerificate.id}>
                      <Certificate
                        title={cerificate.title}
                        description={cerificate.description}
                        link={cerificate.link}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>
        <section>
          <h2 className={styles.info__title}>
            <Link className={styles.info__link} href="/cv/projects">
              <Button label="Projects" />
            </Link>
          </h2>
          <ProjectsList projects={projects} />
        </section>
        <section>
          <nav className={styles.info__contacts}>
            <h2 className={styles.info__title}>
              <Link className={styles.info__link} href="/cv/contacts">
                <Button label="Contacts" />
              </Link>
            </h2>
            <ul className={styles.info__contacts_list}>
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
