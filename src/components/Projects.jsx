// src/components/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { fadeInUp } from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { projects, categories } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A selection of projects I'm proud to have built"
      className="bg-gray-50 dark:bg-dark-800/50"
    >
      {/* Category filter */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              activeCategory === cat
                ? 'text-white'
                : 'text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-700 border border-gray-200 dark:border-white/10 hover:border-primary-500/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeCategory === cat && (
              <motion.span
                layoutId="proj-filter"
                className="absolute inset-0 rounded-full gradient-bg"
              />
            )}
            <span className="relative z-10">{cat}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Project grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">
          No projects in this category yet.
        </p>
      )}
    </SectionWrapper>
  );
};

export default Projects;
