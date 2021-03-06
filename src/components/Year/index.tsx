import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useIsSafari } from '~/utils/useIsSafari';

const Year = ({ year, color = 'black' }: { year: string; color?: string }) => {
  const isSafari = useIsSafari();
  return (
    <AnimatePresence>
      <motion.p
        key={year}
        exit={{ y: 75, opacity: 0, position: 'absolute' }}
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1, position: isSafari ? 'absolute' : 'unset' }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
        }}
        className="text-4xl md:text-7xl font-ouroboros"
        style={{ color }}
        dangerouslySetInnerHTML={{ __html: year }}
      />
    </AnimatePresence>
  );
};

export default Year;
