// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import { fadeInUp } from './SectionWrapper';

/**
 * Reusable project card.
 * All data comes via props from projects.js
 */
const ProjectCard = ({ title, description, tags, image, github, live }) => (
  <motion.article
    variants={fadeInUp}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.25 }}
    style={{ willChange: "transform, opacity" }}
    className="group bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-gray-100 dark:border-white/10 flex flex-col h-full"
  >
    {/* Image */}
    <div className="relative overflow-hidden h-48">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover overlay links */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiGithub size={20} />
          </motion.a>
        )}
        {live && (
          <motion.a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiExternalLink size={20} />
          </motion.a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5">
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer links */}
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-white/10">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <SiGithub size={14} />
            Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <HiExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
