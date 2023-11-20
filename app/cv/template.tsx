'use client';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Transition } from '@/components';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
