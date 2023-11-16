import styles from './Project.module.scss';

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
        <h4>Technoligies:</h4>
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
          <a href={links[0]} target="_blank">
            icon
          </a>
        </div>
        <div className={styles.project_min__link}>
          <p>Deploy:</p>
          <a href={links[1]} target="_blank">
            icon
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
