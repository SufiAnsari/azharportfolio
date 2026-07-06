'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollTarget: React.RefObject<HTMLElement | null>;
}

/**
 * AnimatedLetter
 *
 * Each character's opacity transitions from 0.2 → 1 based on
 * scroll position within the parent section. Creates a progressive
 * text reveal effect as the user scrolls through the About section.
 *
 * Uses useScroll with target offset ['start 0.8', 'end 0.2']
 * Character staggering: charProgress = index / totalChars
 * Range: [charProgress - 0.1, charProgress + 0.05]
 */
export function AnimatedLetter({
  char,
  index,
  totalChars,
  scrollTarget,
}: AnimatedLetterProps) {
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start 0.8', 'end 0.2'],
  });

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
