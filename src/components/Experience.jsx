// src/components/Experience.jsx
import { motion } from 'framer-motion';
import SectionWrapper, { fadeInUp } from './SectionWrapper';
import TimelineItem from './TimelineItem';
import { experience } from '../data/experience';

const Experience = () => {
  const work = experience.filter((e) => e.type === 'work');
  const education = experience.filter((e) => e.type === 'education');

  return (
    <SectionWrapper
      id="experience"
      title="Experience & Education"
      subtitle="My professional journey and academic background"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Work experience */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-primary-500/20 flex items-center justify-center text-primary-500 text-sm">💼</span>
            Work Experience
          </h3>
          {work.map((item, idx) => (
            <TimelineItem key={item.id} {...item} isLast={idx === work.length - 1} />
          ))}
        </motion.div>

        {/* Education */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-accent-500/20 flex items-center justify-center text-accent-500 text-sm">🎓</span>
            Education
          </h3>
          {education.map((item, idx) => (
            <TimelineItem key={item.id} {...item} isLast={idx === education.length - 1} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
