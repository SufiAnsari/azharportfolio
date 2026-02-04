import { ReactNode } from 'react';

/**
 * Section Component
 * Provides consistent vertical spacing for page sections
 * Based on DESIGN_DOC.md: Section padding = 96px
 */

type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  children: ReactNode;
  id?: string;
  padding?: SectionPadding;
  className?: string;
  as?: 'section' | 'div' | 'article';
}

// Vertical padding based on 8pt system
const paddingClasses: Record<SectionPadding, string> = {
  none: 'py-0',
  sm: 'py-8 md:py-12', // 32px / 48px
  md: 'py-12 md:py-16', // 48px / 64px
  lg: 'py-16 md:py-24', // 64px / 96px
  xl: 'py-24 md:py-32', // 96px / 128px
};

export function Section({
  children,
  id,
  padding = 'lg',
  className = '',
  as: Component = 'section',
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`${paddingClasses[padding]} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
