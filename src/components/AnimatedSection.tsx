'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/src/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}