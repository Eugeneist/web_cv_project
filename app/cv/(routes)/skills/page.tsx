import { SkillList } from '@/components';
import { skills } from '@/data/data';
import styles from './page.module.scss';

const SkillsPage = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__titlebox}>
        <h1 className={styles.skills__pagetitle}>/Skills:/</h1>
      </div>
      <SkillList skillsByGroup={skills} />
    </section>
  );
};

export default SkillsPage;
