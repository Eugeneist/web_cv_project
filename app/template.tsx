'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { BurgerMenu, Transition } from '@/components';
import { menuItems } from '@/data/data';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <Transition />
        <BurgerMenu menuItems={menuItems} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
