'use client';

import { motion } from "framer-motion";
import { CodeBracketIcon, CommandLineIcon, ServerIcon } from "@heroicons/react/24/outline";

interface SkillCardProps {
  title: string;
  description: string;
  iconType: 'code' | 'server' | 'terminal';
}

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'code':
      return <CodeBracketIcon className="w-8 h-8" />;
    case 'server':
      return <ServerIcon className="w-8 h-8" />;
    case 'terminal':
      return <CommandLineIcon className="w-8 h-8" />;
    default:
      return <CodeBracketIcon className="w-8 h-8" />;
  }
};

export default function SkillCard({ title, description, iconType }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="text-blue-600 mb-4">{getIcon(iconType)}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
} 
