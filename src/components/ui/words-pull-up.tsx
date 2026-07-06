'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}

/**
 * WordsPullUp
 *
 * Splits text by spaces. Each word slides up from y:20 with
 * a staggered 0.08s delay per word. Triggered once when in view.
 *
 * If showAsterisk is true, a superscript asterisk (*) is rendered
 * after the last character "a" of the final word.
 */
export function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  delay = 0,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(' ');

  return (
    <span ref={ref} className="inline-flex flex-wrap">
      {words.map((word, i) => {
        const isLast = i === words.length - 1;

        return (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ marginRight: i < words.length - 1 ? '0.2em' : 0 }}
          >
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {isLast && showAsterisk ? (
                <span className="relative">
                  {/* Render word with asterisk superscript after final "a" */}
                  <AsteriskWord word={word} className={className} />
                </span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

/** Renders a word, appending a superscript asterisk after the last "a" */
function AsteriskWord({ word, className }: { word: string; className?: string }) {
  // Find last index of "a" in the word
  const lastA = word.toLowerCase().lastIndexOf('a');

  if (lastA === -1) {
    return (
      <>
        {word}
        <sup
          className="absolute"
          style={{
            top: '0.65em',
            right: '-0.3em',
            fontSize: '0.31em',
            lineHeight: 1,
          }}
        >
          *
        </sup>
      </>
    );
  }

  return (
    <>
      {word.slice(0, lastA + 1)}
      <sup
        className="absolute"
        style={{
          top: '0.65em',
          right: '-0.3em',
          fontSize: '0.31em',
          lineHeight: 1,
        }}
      >
        *
      </sup>
      {word.slice(lastA + 1)}
    </>
  );
}
