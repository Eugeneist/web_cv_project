import Image from 'next/image';
import Link from 'next/link';
import styles from './TimelineItem.module.scss';

export interface TimelineItemProps {
  id: number;
  title: string;
  text: string;
  date: { start: string; end?: string };
  image: any;
  link?: { url: string; name: string };
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  text,
  title,
  image,
  link,
  date,
}) => {
  return (
    <article className={styles.timeline_item}>
      <div className={styles.timeline_item__imagebox}>
        <Image src={image} width={50} height={50} alt="image" />
      </div>
      <div className={styles.timeline_item__textbox}>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <p>
            {date.start} {date.end && <span>- {date.end}</span>}
          </p>
        </div>
        {link && (
          <div>
            <Link target="_blank" href={link.url}>
              {link.name}
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default TimelineItem;
