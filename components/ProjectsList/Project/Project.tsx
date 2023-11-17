import Link from 'next/link';
import Image from 'next/image';
import styles from './Project.module.scss';
import github from '../../../assets/github.svg';
import website from '../../../assets/website.png';

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  links: string[];
}

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  description,
  technologies,
  links,
}) => {
  return (
    <article className={styles.project_min}>
      <div>
        <h3 className={styles.project_min__title}>
          {id + 1}. {title}
        </h3>
        <p>{description}</p>
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
            className={styles.project_min__image}
            target="_blank"
            href={links[0]}
          >
            <Image src={github} width={30} height={30} alt="github link" />
          </Link>
        </div>
        <div className={styles.project_min__link}>
          <p>Deploy:</p>
          <Link
            className={styles.project_min__image}
            target="_blank"
            href={links[1]}
          >
            <Image src={website} width={32} height={32} alt="website link" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
