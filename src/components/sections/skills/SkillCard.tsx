'use client';

import { memo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowsRightLeftIcon,
  CodeBracketIcon,
  CloudIcon,
  CubeTransparentIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import type { SkillIconType } from '@/types/skill';

interface SkillCardProps {
  id: number;
  title: string;
  description: string;
  iconType: SkillIconType;
  highlights?: string[];
}

function getIcon(iconType: SkillIconType) {
  switch (iconType) {
    case 'code':
      return <CodeBracketIcon className="w-6 h-6" />;
    case 'infrastructure':
      return <CloudIcon className="w-6 h-6" />; // インフラ: クラウド
    case 'container':
      return <CubeIcon className="w-6 h-6" />; // コンテナ: 立方体
    case 'architecture':
      return <CubeTransparentIcon className="w-6 h-6" />; // アーキテクチャ: 抽象的な立方体
    default:
      return <CodeBracketIcon className="w-6 h-6" />;
  }
}

function SkillCardBase({ title, description, iconType, highlights }: SkillCardProps) {
  const [flipped, setFlipped] = useState(false);
  const hasHighlights = !!(highlights && highlights.length > 0);

  const handleToggle = useCallback(() => {
    if (!hasHighlights) return;
    setFlipped((v) => !v);
  }, [hasHighlights]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  }, [handleToggle]);

  return (
    <div
      className="relative mb-4 cursor-pointer select-none max-w-sm md:max-w-md mx-auto px-2 break-inside-avoid"
      role={hasHighlights ? 'button' : undefined}
      tabIndex={hasHighlights ? 0 : -1}
      onClick={handleToggle}
      onKeyDown={onKeyDown}
      style={{ perspective: '1000px' }}
      aria-pressed={flipped}
      aria-label={flipped ? 'カードを戻す' : 'カードを反転'}
    >
      <motion.div
        className="relative h-56 md:h-64"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
      >
        <div
          className="absolute inset-0 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          style={{ backfaceVisibility: 'hidden' as React.CSSProperties['backfaceVisibility'] }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-blue-600 mb-1">{getIcon(iconType)}</div>
              <h3 className="text-sm md:text-base font-semibold mb-1 text-gray-800">{title}</h3>
            </div>
            {hasHighlights && (
              <span className="mt-1 inline-flex items-center justify-center text-gray-500">
                <ArrowsRightLeftIcon className="w-5 h-5" />
              </span>
            )}
          </div>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div
          className="absolute inset-0 bg-white p-3 rounded-lg shadow-md border border-gray-200"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          } as React.CSSProperties}
        >
          <div className="flex items-start justify-between mb-1">
            <h4 className="text-sm md:text-base font-semibold text-gray-800">{title}</h4>
            <span className="mt-1 inline-flex items-center justify-center text-gray-500">
              <ArrowsRightLeftIcon className="w-5 h-5" />
            </span>
          </div>
          {hasHighlights ? (
            <ul className="list-disc list-inside text-gray-700 space-y-1 overflow-y-auto pr-1 h-36 md:h-44">
              {highlights!.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-xs">No details</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default memo(SkillCardBase); 
