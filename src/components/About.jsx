// src/components/About.jsx
import { motion } from 'framer-motion';
import SectionWrapper, { fadeInUp } from './SectionWrapper';
import Button from './Button';
import { HiCode, HiLightningBolt, HiHeart, HiArrowRight } from 'react-icons/hi';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Delivered', value: '40+' },
  { label: 'Happy Clients', value: '25+' },
  { label: 'GitHub Stars', value: '1.2k' },
];

const traits = [
  { icon: HiCode, label: 'Clean Code Advocate' },
  { icon: HiLightningBolt, label: 'Performance Obsessed' },
  { icon: HiHeart, label: 'UX Passionate' },
];

const About = () => {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Passionate developer crafting digital experiences"
      className="bg-gray-50 dark:bg-dark-800/50"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <motion.div variants={fadeInUp} className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop"
              alt="Developer workspace"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Floating traits */}
          <div className="absolute -bottom-6 left-6 right-6 flex flex-wrap gap-2 justify-center">
            {traits.map(({ icon: Icon, label }) => (
              <motion.span
                key={label}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 bg-white dark:bg-dark-700 shadow-lg border border-gray-100 dark:border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200"
              >
                <Icon className="text-primary-500" size={13} />
                {label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div variants={fadeInUp} className="mt-8 lg:mt-0">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            I build things for the web — and I love what I do
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I&apos;m a Full Stack Developer based in Chennai, India, with 5+ years of
              experience building scalable web applications. I specialize in React,
              Node.js, and cloud-native architectures.
            </p>
            <p>
              My journey started with a Computer Science degree, and over the years I&apos;ve
              worked with startups and enterprise clients to deliver products used by
              millions. I care deeply about code quality, performance, and user experience.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me contributing to open source, writing
              tech articles, or experimenting with the latest web technologies.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 mb-8">
            {stats.map(({ label, value }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 rounded-xl bg-white dark:bg-dark-700 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-white/10"
              >
                <div className="text-2xl font-bold gradient-text">{value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</div>
              </motion.div>
            ))}
          </div>

          <Button
            variant="primary"
            href="#projects"
            icon={<HiArrowRight />}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See My Work
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
