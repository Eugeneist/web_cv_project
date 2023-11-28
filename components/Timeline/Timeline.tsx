import { TimelineItem } from './TimelineItem';
import { TimelineItemProps } from './TimelineItem/TimelineItem';
import styles from './Timeline.module.scss';

interface TimelineProps {
  data: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const sorted = data.slice().sort((a, b) => {
    const yearA = parseInt(a.date.start, 10);
    const yearB = parseInt(b.date.start, 10);

    return yearB - yearA;
  });

  return (
    <section className={styles.timeline}>
      <ul className={styles.timeline__container}>
        {sorted.map(({ id, text, title, image, link, date }) => (
          <li key={id} className={styles.timeline__item}>
            <TimelineItem
              id={id}
              text={text}
              title={title}
              image={image}
              link={link}
              date={date}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
