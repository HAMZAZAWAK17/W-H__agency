import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title.split(' ').map((word, i) => (
          <span key={i} className={i === title.split(' ').length - 1 ? 'neon-text' : ''}>
            {word}{' '}
          </span>
        ))}
      </h2>
      {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;
