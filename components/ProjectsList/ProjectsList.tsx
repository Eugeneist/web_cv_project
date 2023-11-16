import { Project } from './Project';
import { ProjectProps } from './Project/Project';
import styles from './ProjectsList.module.scss';

interface ProjectsListProps {
  projects: ProjectProps[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <ul className={styles.projectslist}>
      {projects.map((project) => (
        <li className={styles.projectslist__item} key={project.id}>
          <Project
            id={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            links={project.links}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
