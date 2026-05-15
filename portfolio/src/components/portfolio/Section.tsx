import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
  contentClassName,
}) => {
  return (
    <section id={id} className={cn("section-padding relative overflow-hidden", className)}>
      <div className="container mx-auto max-w-7xl">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={cn(contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
