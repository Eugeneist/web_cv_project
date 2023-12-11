'use client';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Transition, NavButton } from '@/components';
import styles from './template.module.scss';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <Transition />
        {children}
        <nav className={styles.navbox}>
          <NavButton title="Next chapter" />
        </nav>
      </motion.div>
    </AnimatePresence>
  );
}
