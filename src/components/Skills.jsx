// src/components/Skills.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { fadeInUp } from './SectionWrapper';
import { skills } from '../data/skills';

const SkillCard = ({ name, icon: Icon, level, color }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.04, y: -4 }}
    className="bg-white dark:bg-dark-700 rounded-2xl p-5 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-white/10 group cursor-default"
  >
    <div className="flex items-center gap-3 mb-3">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <div className="flex-1">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{name}</span>
      </div>
      <span className="text-xs font-bold text-primary-500">{level}%</span>
    </div>
    {/* Progress bar */}
    <div className="h-1.5 bg-gray-100 dark:bg-dark-600 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
      />
    </div>
  </motion.div>
);

const tabs = Object.keys(skills);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="A curated collection of the tools I use to build great products"
    >
      {/* Tabs */}
      <motion.div variants={fadeInUp} className="flex justify-center gap-2 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 ${
              activeTab === tab
                ? 'text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === tab && (
              <motion.span
                layoutId="skill-tab"
                className="absolute inset-0 rounded-xl gradient-bg"
              />
            )}
            <span className="relative z-10">{tab}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Skill cards grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, staggerChildren: 0.05 },
            },
            exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skills[activeTab].map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Skills;
