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
  const displayedProjects = isFull ? projects : projects.slice(0, 3);

  return (
    <ul className={styles.projectslist}>
      {displayedProjects.map(
        ({
          id,
          title,
          subtitle,
          description,
          technologies,
          links,
          picture,
          variant = true,
        }) => (
          <li
            style={{ paddingBottom: `${isFull ? '10rem' : '1.3rem'}` }}
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
              variant={id % 2 === 0}
            />
          </li>
        ),
      )}
    </ul>
  );
};

export default ProjectsList;
