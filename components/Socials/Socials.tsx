import Link from 'next/link';
import Image from 'next/image';
import styles from './Socials.module.scss';

interface Social {
  id: number;
  title: string;
  link: string;
  image: string;
  description: string;
}

export enum FlexDirection {
  ROW = 'row',
  COLUMN = 'column',
  ROW_REVERSE = 'row-reverse',
  COLUMN_REVERSE = 'column-reverse',
}

interface SocialsProps {
  socials: Social[];
  direction?: FlexDirection;
  width: number;
  height: number;
  gap: number;
}

const Socials: React.FC<SocialsProps> = ({
  socials,
  direction = FlexDirection.ROW,
  gap,
  width,
  height,
}) => {
  return (
    <nav className={styles.socials__nav}>
      <ul
        className={styles.socials__navlist}
        style={{ flexDirection: direction, gap: gap }}
      >
        {socials.map(({ id, link, image, description }) => (
          <li className={styles.socials__navitem} key={id}>
            <Link
              className={styles.socials__navlink}
              target="_blank"
              href={link}
            >
              <Image
                className={styles.socials__navicon}
                src={image}
                quality={20}
                width={width}
                height={height}
                alt={description}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Socials;
