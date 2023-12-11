import styles from './page.module.scss';
import { projects } from '@/data/data';
import { ProjectsList } from '@/components';

const ProjectsPage = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projects__titlebox}>
        <h1 className={styles.projects__pagetitle}>/Projects:/</h1>
      </div>
      <ProjectsList projects={projects} isFull={true} />
    </section>
  );
};

export default ProjectsPage;
