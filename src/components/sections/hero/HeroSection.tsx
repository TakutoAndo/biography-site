'use client';

import { motion } from "framer-motion";
import { EnvelopeIcon, FolderIcon, WrenchScrewdriverIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { CtaButton } from "@/components/common/CtaButton";

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-black"
        >
          Takuto Ando
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-6"
        >
          Web Application Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex justify-center items-center gap-5 mb-6"
        >
          <a
            href="https://github.com/TakutoAndo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.159-1.11-1.468-1.11-1.468-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.947 0-1.092.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.687 0 3.844-2.338 4.691-4.566 4.94.359.31.678.92.678 1.855 0 1.338-.012 2.416-.012 2.744 0 .268.18.58.688.481A10.004 10.004 0 0 0 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <EnvelopeIcon className="w-7 h-7" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <CtaButton href="#skills" label="Skills" icon={<WrenchScrewdriverIcon className="w-5 h-5" />} />
          <CtaButton href="#biography" label="Biography" icon={<BriefcaseIcon className="w-5 h-5" />} />
          <CtaButton href="#projects" label="Projects" icon={<FolderIcon className="w-5 h-5" />} />
        </motion.div>
      </motion.div>
    </section>
  );
} 
