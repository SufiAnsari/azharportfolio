import { ElementType, ReactNode } from 'react';

/**
 * Container Component
 * Provides consistent max-width and padding across the site
 * Based on DESIGN_DOC.md spacing system
 */

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: ElementType;
}

const containerSizes: Record<ContainerSize, string> = {
  sm: 'max-w-2xl', // 672px
  md: 'max-w-4xl', // 896px
  lg: 'max-w-6xl', // 1152px
  xl: 'max-w-7xl', // 1280px
  full: 'max-w-full',
};

export function Container({
  children,
  size = 'xl',
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={`
        mx-auto w-full px-4 sm:px-6 lg:px-8
        ${containerSizes[size]}
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  );
}
