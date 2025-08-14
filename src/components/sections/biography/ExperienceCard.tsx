'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '@/types';

type ExperienceCardProps = Pick<Experience, 'title' | 'period' | 'company' | 'description' | 'technologies'>;

function ExperienceCardBase({ title, company, period, description = [], technologies = [] }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
      role="group"
      aria-label={`${title} (${period})`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          {company && <p className="text-gray-600">{company}</p>}
        </div>
        <span className="text-sm text-gray-500">{period}</span>
      </div>

      {description.length > 0 && (
        <ul className="list-disc list-inside space-y-2 mb-3" aria-label="Responsibilities and achievements">
          {description.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      )}

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((tech, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default memo(ExperienceCardBase); 
