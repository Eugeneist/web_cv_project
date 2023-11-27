import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components';
import { Certificate } from '@/components';
import { ProjectsList } from '@/components';
import styles from './page.module.scss';
import { cv } from '@/assets/images';

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
      'Material UI',
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
      <section className={styles.info__sections}>
        <section className={styles.info__section_about}>
          <div className={styles.info__section_box}>
            <article className={styles.info__about}>
              <h2 className={styles.info__title}>
                <Link className={styles.info__link} href="/cv/about">
                  <Button label="About" />
                </Link>
              </h2>
              <p className={styles.info__about_text}>
                Hi! My name is <span className={styles.colored}>Yevhen</span>!{' '}
                <br />I am enthusiastic and dedicated{' '}
                <span className={styles.colored}>
                  Frontend (React) Developer
                </span>{' '}
                from Ukraine! I have a passion for creating engaging,
                user-friendly and beautiful web applications and websites. I
                have completed courses and have a higher technical education. I
                am learning new things every day! I am actively seeking
                opportunities to contribute my skills for creating amazing
                projects!
              </p>
            </article>
          </div>
          <article className={styles.info__education}>
            <h2 className={styles.info__title}>
              <Link className={styles.info__link} href="/cv/education">
                <Button label="Education" />
              </Link>
            </h2>
            <ol className={styles.info__education_list}>
              <li className={styles.info__education_main}>
                <h4 className={styles.colored}>
                  National Technical University «Kharkiv Polytechnic Institute»
                </h4>
                <p className={styles.info__education_text}>
                  Mechanical Engineering, Masters Degree
                </p>
              </li>
              <li>
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
              </li>
            </ol>
          </article>
          <article className={styles.info__more}>
            <h2 className={styles.info__title}>
              <Link className={styles.info__link} href="/cv/more">
                <Button label="More" />
              </Link>
            </h2>
            <div className={styles.info__more_box}>
              <div className={styles.info__more_cv}>
                <h4
                  className={`${styles.colored} + ${styles.info__more_title}`}
                >
                  Download CV:
                </h4>
                <Link
                  className={styles.info__more_image}
                  target="_blank"
                  href="https://drive.google.com/file/d/1ABvaEYNwM-2YcJgSYJnCfGAgJVt4X-QY/view"
                >
                  <Image src={cv} width={32} height={32} alt="cv link" />
                </Link>
              </div>
              <Link className={styles.info__link} href="/">
                <Button label="GO HOME" />
              </Link>
            </div>
          </article>
        </section>
        <section>
          <h2 className={styles.info__title}>
            <Link className={styles.info__link} href="/cv/projects">
              <Button label="Projects" />
            </Link>
          </h2>
          <ProjectsList projects={projects} isFull={false} />
        </section>
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
              <li>Material UI/Chakra UI</li>
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
              <li>
                <span className={styles.colored}>English</span> -
                Intermediate(B2)
              </li>
              <li>
                <span className={styles.colored}>Ukrainian</span> - Native
              </li>
            </ul>
          </article>
          <nav className={styles.info__contacts}>
            <h2 className={styles.info__title}>
              <Link className={styles.info__link} href="/cv/contacts">
                <Button label="Contacts" />
              </Link>
            </h2>
            <ul className={styles.info__contacts_list}>
              <li className={styles.info__contacts_link}>
                <Link target="_blank" href="tel:+380508336633">
                  +38 (050) 833-66-33
                </Link>
              </li>
              <li className={styles.info__contacts_link}>
                <Link target="_blank" href="mailto:rudofiloveugene@gmail.com">
                  rudofiloveugene@gmail.com
                </Link>
              </li>
              <li className={styles.info__contacts_link}>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/yevhen-rudofylov-ba8010166/"
                >
                  LinkedIn
                </Link>
              </li>
              <li className={styles.info__contacts_link}>
                <Link target="_blank" href="https://github.com/Eugeneist">
                  GitHub
                </Link>
              </li>
              <li className={styles.info__contacts_link}>
                <Link target="_blank" href="tg://resolve?domain=rudofylov">
                  Telegram
                </Link>
              </li>
              <li className={styles.info__contacts_link}>Ukraine</li>
            </ul>
          </nav>
        </section>
      </section>
    </section>
  );
};

export default CV;
