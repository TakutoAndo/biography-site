'use client';

import { useMemo } from 'react';
import { Experience } from '@/types';
import ExperienceCard from '@/components/sections/biography/ExperienceCard';
import { ExperienceCardSkeleton } from '@/components/sections/biography/ExperienceCardSkeleton';

interface BiographySectionProps {
  experiences: Experience[];
  loading: boolean;
}

export function BiographySection({ experiences, loading }: BiographySectionProps) {
  const SKELETON_COUNT = 2;
  const containerClass = 'space-y-8';
  const items = useMemo(
    () => (loading ? Array.from({ length: SKELETON_COUNT }) : experiences),
    [loading, experiences]
  );

  return (
    <section className="py-16" id="biography">
      <h2 className="text-3xl font-bold text-center mb-12">Biography</h2>
      <div className={containerClass}>
        {loading
          ? items.map((_, index) => <ExperienceCardSkeleton key={index} />)
          : (items as Experience[]).map((exp) => <ExperienceCard key={exp.id} {...exp} />)}
      </div>
    </section>
  );
} 
