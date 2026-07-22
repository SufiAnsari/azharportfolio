'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollTarget?: React.RefObject<HTMLElement | null>;
  progress?: MotionValue<number>;
}

/**
 * AnimatedLetter
 *
 * Each character's opacity transitions from 0.2 → 1 based on
 * scroll position within the parent section.
 * Accepts a shared `progress` MotionValue from parent to avoid 300+ hook listeners.
 */
export function AnimatedLetter({
  char,
  index,
  totalChars,
  scrollTarget,
  progress,
}: AnimatedLetterProps) {
  const fallbackScroll = useScroll({
    target: scrollTarget,
    offset: ['start 0.8', 'end 0.2'],
  });

  const scrollYProgress = progress ?? fallbackScroll.scrollYProgress;
  const charProgress = index / totalChars;

  const opacity = useTransform(
    scrollYProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );

  if (char === ' ') {
    return <span>&nbsp;</span>;
  }

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
}
