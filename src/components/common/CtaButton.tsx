'use client';

import React from 'react';

interface CtaButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  ariaLabel?: string;
}

export function CtaButton({ href, label, icon, ariaLabel }: CtaButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel ?? label}
      className="w-32 px-6 py-3 bg-white text-black rounded-xl border border-gray-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-out inline-flex flex-col items-center gap-1 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
} 
