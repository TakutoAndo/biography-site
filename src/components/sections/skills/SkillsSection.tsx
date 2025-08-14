'use client';

import { useMemo } from 'react';
import { Skill } from '@/types';
import SkillCard from '@/components/sections/skills/SkillCard';
import { SkillCardSkeleton } from '@/components/sections/skills/SkillCardSkeleton';

interface SkillsSectionProps {
  skills: Skill[];
  loading: boolean;
}

function computeColumnClass(count: number): string {
  let numCols = 1;
  if (count <= 3) {
    numCols = count || 1;
  } else {
    numCols = Math.max(2, Math.floor(Math.sqrt(count)));
  }
  const map: Record<number, string> = {
    1: 'columns-1',
    2: 'columns-2',
    3: 'columns-3',
    4: 'columns-4',
    5: 'columns-5',
    6: 'columns-6',
  };
  return map[Math.min(numCols, 6)];
}

export function SkillsSection({ skills, loading }: SkillsSectionProps) {
  const SKELETON_COUNT = 3;
  const itemCount = loading ? SKELETON_COUNT : skills.length;
  const isRow = itemCount <= 3;

  const columnsClass = useMemo(() => computeColumnClass(itemCount), [itemCount]);
  const rowColsMap: Record<number, string> = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3' };
  const rowColsClass = rowColsMap[Math.max(1, Math.min(itemCount, 3))];
  const containerClass = isRow ? `grid ${rowColsClass} gap-6` : `${columnsClass} gap-x-6`;

  return (
    <section className="py-16" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className={containerClass}>
        {loading
          ? Array.from({ length: SKELETON_COUNT }).map((_, index) => <SkillCardSkeleton key={index} />)
          : skills.map((skill) => <SkillCard key={skill.id} {...skill} />)}
      </div>
    </section>
  );
} 
