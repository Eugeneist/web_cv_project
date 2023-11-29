import { SkillList } from '@/components';
import { skills } from '@/data/data';
import styles from './page.module.scss';

const SkillsPage = () => {
  return (
    <section className={styles.skills}>
      <SkillList skillsByGroup={skills} />
    </section>
  );
};

export default SkillsPage;
