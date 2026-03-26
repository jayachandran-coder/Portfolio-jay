// src/components/TimelineItem.jsx
import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';
import { fadeInUp } from './SectionWrapper';

/**
 * Reusable timeline item for work and education entries.
 * Props come from experience.js data array.
 */
const TimelineItem = ({ role, company, period, description, tags, type, isLast }) => (
  <motion.div
    variants={fadeInUp}
    className="relative flex gap-4 sm:gap-6"
  >
    {/* Timeline line + dot */}
    <div className="flex flex-col items-center flex-shrink-0">
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 ${
          type === 'work'
            ? 'bg-gradient-to-br from-primary-500 to-purple-600 text-white'
            : 'bg-gradient-to-br from-accent-500 to-orange-400 text-white'
        }`}
      >
        {type === 'work' ? <HiBriefcase size={18} /> : <HiAcademicCap size={18} />}
      </motion.div>
      {!isLast && (
        <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-primary-300 to-transparent dark:from-primary-700" />
      )}
    </div>

    {/* Content card */}
    <motion.div
      whileHover={{ x: 4 }}
      className="flex-1 bg-white dark:bg-dark-700 rounded-2xl p-5 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-white/10 mb-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <h3 className="font-bold text-base text-gray-900 dark:text-white">{role}</h3>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 whitespace-nowrap">
          {period}
        </span>
      </div>
      <p className="text-sm font-semibold text-primary-500 dark:text-primary-400 mb-3">
        {company}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
        {description}
      </p>
      {tags && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  </motion.div>
);

export default TimelineItem;
