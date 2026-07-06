'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
  delay?: number;
}

/**
 * WordsPullUpMultiStyle
 *
 * Takes an array of {text, className} segments.
 * Splits all into individual words preserving per-word className.
 * Each word slides up from y:20 with staggered 0.08s delay.
 * Triggered once when in view.
 */
export function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
  delay = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  // Flatten segments into individual words with their className
  const words: Array<{ word: string; className: string }> = [];
  for (const segment of segments) {
    const segWords = segment.text.split(' ').filter(Boolean);
    for (const word of segWords) {
      words.push({ word, className: segment.className ?? '' });
    }
  }

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {words.map(({ word, className }, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: '0.25em' }}
        >
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
