import styles from './page.module.scss';
import { projects } from '@/data/data';
import { ProjectsList } from '@/components';

const ProjectsPage = () => {
  return (
    <section className={styles.projects}>
      <ProjectsList projects={projects} isFull={true} />
    </section>
  );
};

export default ProjectsPage;
