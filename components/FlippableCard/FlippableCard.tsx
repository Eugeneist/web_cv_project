'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './FlippableCard.module.scss';

interface FlippableCardProps {
  title: string;
  image: string;
  description: string;
}

const FlippableCard: React.FC<FlippableCardProps> = ({
  image,
  description,
  title,
}) => {
  const [side, setSide] = useState(false);

  const handleFlipEnter = () => {
    setSide(true);
  };

  const handleFlipLeave = () => {
    setSide(false);
  };

  return (
    <li
      onMouseEnter={handleFlipEnter}
      onMouseLeave={handleFlipLeave}
      className={`${styles.flippable_card__container} ${
        side ? styles.flipped : ''
      }`}
    >
      <div className={styles.flippable_card__front}>
        <div className={styles.flippable_card__front_imagebox}>
          {/* <Image src={image} width={32} height={32} alt="technology logo" /> */}
        </div>
      </div>
      <div className={styles.flippable_card__back}>
        <h3 className={styles.flippable_card__back_title}>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default FlippableCard;
