import Link from 'next/link';
import Image from 'next/image';
import styles from './Project.module.scss';
import { link, github_social } from '@/assets/images';

export interface ProjectProps {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  links: string[];
  isFull?: boolean;
  picture?: any;
  variant?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  subtitle,
  description,
  technologies,
  links,
  isFull = false,
  picture,
  variant,
}) => {
  if (isFull) {
    return (
      <article className={styles.project_max}>
        <div
          className={`${styles.project_max__content} ${
            variant ? styles.project_max__left : styles.project_max__right
          }`}
        >
          <h3 className={styles.project_max__title}>
            {id + 1}. {title}
          </h3>
          <div className={styles.project_max__subtitle}>
            <p>{subtitle}</p>
          </div>
          <div className={styles.project_max__description}>
            <p>{description}</p>
          </div>
          <ul className={styles.project_max__techlist}>
            {technologies.map((tech) => (
              <li key={technologies.indexOf(tech)}>
                <p>{tech}</p>
              </li>
            ))}
          </ul>
          <div className={styles.project_min__linkbox}>
            <div className={styles.project_max__link}>
              <Link
                className={styles.project_max__icon}
                target="_blank"
                href={links[0]}
              >
                <Image
                  src={github_social}
                  width={30}
                  height={30}
                  alt="github link"
                />
              </Link>
            </div>
            <div className={styles.project_max__link}>
              <Link
                className={styles.project_max__icon}
                target="_blank"
                href={links[1]}
              >
                <Image src={link} width={32} height={32} alt="website link" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${styles.project_max__imagebox} ${
            variant ? styles.project_max__right : styles.project_max__left
          }`}
        >
          <Link target="_blank" href={links[1]}>
            <Image
              className={styles.project_max__image}
              src={picture}
              width={633}
              height={315}
              quality={100}
              alt="project pic"
            />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.project_min}>
      <div>
        <h3 className={styles.project_min__title}>
          {id + 1}. {title}
        </h3>
        <p>{subtitle}</p>
      </div>
      <div className={styles.project_min__techbox}>
        <h4 className={styles.project_min__title_tech}>Technoligies:</h4>
        <ul className={styles.project_min__techlist}>
          {technologies.map((tech) => (
            <li key={technologies.indexOf(tech)}>
              <p>{tech}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.project_min__linkbox}>
        <div className={styles.project_min__link}>
          <p>Code:</p>
          <Link
            className={styles.project_min__icon}
            target="_blank"
            href={links[0]}
          >
            <Image
              src={github_social}
              width={30}
              height={30}
              alt="github link"
            />
          </Link>
        </div>
        <div className={styles.project_min__link}>
          <p>Deploy:</p>
          <Link
            className={styles.project_min__icon}
            target="_blank"
            href={links[1]}
          >
            <Image src={link} width={32} height={32} alt="website link" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
