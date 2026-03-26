// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { HiArrowUp, HiHeart } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
const socials = [
  { icon: SiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com', label: 'X / Twitter' },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-white/10">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTop(); }}
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            &lt;JayaDev /&gt;
          </motion.a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Socials + back-to-top */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-dark-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-500/10 hover:text-primary-500 transition-all"
              >
                <Icon size={16} />
              </motion.a>
            ))}
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
              className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center text-white shadow-md hover:bg-primary-600 transition-colors"
            >
              <HiArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Jaya Chandran. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiHeart className="text-red-500" size={14} />
            </motion.span>{' '}
            in Chennai, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
