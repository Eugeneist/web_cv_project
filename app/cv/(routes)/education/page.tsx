import { Timeline } from '@/components';
import { education } from '@/data/data';
import styles from './page.module.scss';

const EducationPage = () => {
  return (
    <section className={styles.education}>
      <div className={styles.education__titlebox}>
        <h1 className={styles.education__pagetitle}>/Education:/</h1>
      </div>
      <Timeline data={education} />
    </section>
  );
};

export default EducationPage;
