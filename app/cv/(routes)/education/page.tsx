import { Timeline } from '@/components';
import { education } from '@/data/data';
import styles from './page.module.scss';

const EducationPage = () => {
  return (
    <section className={styles.education}>
      <Timeline data={education} />
    </section>
  );
};

export default EducationPage;
