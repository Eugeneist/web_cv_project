import { FlippableCard } from '../FlippableCard/';
import styles from './SkillList.module.scss';

interface SkillListProps {
  skillsByGroup: Record<
    string,
    { id: number; title: string; description: string; image: string }[]
  >;
}

const SkillList: React.FC<SkillListProps> = ({ skillsByGroup }) => (
  <ul className={styles.groups__list}>
    {Object.entries(skillsByGroup).map(([group, skills]) => (
      <li className={styles.groups__item} key={group}>
        <article key={group}>
          <h2 className={styles.groups__title}>{group}</h2>
          <ul className={styles.skills__list}>
            {skills.map(({ id, title, description, image }) => (
              <FlippableCard
                key={id}
                title={title}
                image={image}
                description={description}
              />
            ))}
          </ul>
        </article>
      </li>
    ))}
  </ul>
);

export default SkillList;
