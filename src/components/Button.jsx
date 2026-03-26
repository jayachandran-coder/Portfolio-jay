// src/components/Button.jsx
import { motion } from 'framer-motion';

/**
 * Reusable Button component
 * @param {string} variant - 'primary' | 'secondary' | 'ghost'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} href - renders as <a> if provided
 * @param {ReactNode} icon - optional leading icon
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-900';

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };

  const variants = {
    primary:
      'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg hover:shadow-glow hover:from-primary-500 hover:to-purple-500',
    secondary:
      'border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-500/10 bg-transparent',
    ghost:
      'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 bg-transparent',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...rest}
    >
      {content}
    </motion.button>
  );
};

export default Button;
