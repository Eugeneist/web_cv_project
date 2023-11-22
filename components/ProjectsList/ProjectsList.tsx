import { Project } from './Project';
import { ProjectProps } from './Project/Project';
import styles from './ProjectsList.module.scss';

interface ProjectsListProps {
  projects: ProjectProps[];
  isFull: boolean;
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  isFull = false,
}) => {
  return (
    <ul className={styles.projectslist}>
      {projects.map(
        ({
          id,
          title,
          subtitle,
          description,
          technologies,
          links,
          picture,
        }) => (
          <li
            style={{ paddingBottom: `${isFull ? '10rem' : '0.625rem'}` }}
            className={styles.projectslist__item}
            key={id}
          >
            <Project
              id={id}
              title={title}
              subtitle={subtitle}
              description={description}
              technologies={technologies}
              links={links}
              picture={picture}
              isFull={isFull}
            />
          </li>
        ),
      )}
    </ul>
  );
};

export default ProjectsList;
