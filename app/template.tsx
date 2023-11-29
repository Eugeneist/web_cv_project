'use client';
import { motion, AnimatePresence } from 'framer-motion';
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
