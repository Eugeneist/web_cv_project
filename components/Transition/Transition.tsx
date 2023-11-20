'use client';

import { motion } from 'framer-motion';
import styles from './Transition.module.scss';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className={styles.wall_1}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.3, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className={styles.wall_2}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.3, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className={styles.wall_3}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.3, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;
