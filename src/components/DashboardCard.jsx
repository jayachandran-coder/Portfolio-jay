// src/components/DashboardCard.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { fadeInUp } from './SectionWrapper';
import { HiPlus, HiMinus, HiRefresh, HiCheckCircle } from 'react-icons/hi';

/* ── Water Tracker ─────────────────────────────────────── */
const WATER_GOAL = 8;

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(0);

  const add = () => setGlasses((p) => Math.min(p + 1, WATER_GOAL));
  const sub = () => setGlasses((p) => Math.max(p - 1, 0));
  const reset = () => setGlasses(0);

  const percent = Math.round((glasses / WATER_GOAL) * 100);
  const done = glasses === WATER_GOAL;

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-white/10 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
          💧 Water Tracker
        </h3>
        <motion.button
          onClick={reset}
          whileTap={{ scale: 0.9 }}
          className="p-1.5 rounded-lg text-gray-400 hover:text-primary-500 hover:bg-primary-500/10 transition-colors"
        >
          <HiRefresh size={16} />
        </motion.button>
      </div>

      {/* Circular progress */}
      <div className="flex items-center justify-center py-2">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor"
              className="text-gray-100 dark:text-dark-600" strokeWidth="2.5" />
            <motion.circle
              cx="18" cy="18" r="15.9" fill="none"
              stroke="url(#water-grad)" strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={`${percent} ${100 - percent}`}
              initial={{ strokeDasharray: '0 100' }}
              animate={{ strokeDasharray: `${percent} ${100 - percent}` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="water-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold gradient-text">{glasses}</span>
            <span className="text-xs text-gray-400">/ {WATER_GOAL} glasses</span>
          </div>
        </div>
      </div>

      {/* Glass dots */}
      <div className="flex justify-center gap-2 flex-wrap">
        {Array.from({ length: WATER_GOAL }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.04 }}
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-base transition-all duration-200 ${
              i < glasses
                ? 'bg-gradient-to-br from-blue-400 to-primary-500 shadow-md'
                : 'bg-gray-100 dark:bg-dark-600'
            }`}
          >
            {i < glasses ? '💧' : ''}
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-1">
        <motion.button
          onClick={sub}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={glasses === 0}
          className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-600 flex items-center justify-center text-gray-600 dark:text-gray-300 disabled:opacity-40 transition-colors hover:bg-primary-100 dark:hover:bg-primary-900/30"
        >
          <HiMinus size={18} />
        </motion.button>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {percent}% of daily goal
        </span>
        <motion.button
          onClick={add}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={done}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white disabled:opacity-40 shadow-md"
        >
          <HiPlus size={18} />
        </motion.button>
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2 text-green-500 text-sm font-semibold"
          >
            <HiCheckCircle size={18} /> Goal reached! Great job! 🎉
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ── Productivity Stats ─────────────────────────────────── */
const tasks = [
  { label: 'Design assets', done: true },
  { label: 'Write unit tests', done: true },
  { label: 'Review PRs', done: false },
  { label: 'Deploy to staging', done: false },
  { label: 'Team standup notes', done: true },
];

const ProductivityCard = () => {
  const [items, setItems] = useState(tasks);
  const completed = items.filter((t) => t.done).length;
  const percent = Math.round((completed / items.length) * 100);

  const toggle = (idx) =>
    setItems((prev) =>
      prev.map((t, i) => (i === idx ? { ...t, done: !t.done } : t))
    );

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-white/10 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-800 dark:text-white">
          ⚡ Today&apos;s Tasks
        </h3>
        <span className="text-xs font-semibold text-primary-500 bg-primary-500/10 px-2 py-1 rounded-full">
          {completed}/{items.length} done
        </span>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Progress</span><span>{percent}%</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-dark-600 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
          />
        </div>
      </div>

      {/* Task list */}
      <ul className="space-y-2">
        {items.map((task, idx) => (
          <motion.li
            key={task.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.06 }}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors text-left group"
            >
              <motion.div
                animate={{ scale: task.done ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.2 }}
                className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                  task.done
                    ? 'bg-gradient-to-br from-primary-500 to-purple-500 text-white'
                    : 'border-2 border-gray-300 dark:border-gray-500'
                }`}
              >
                {task.done && <HiCheckCircle size={12} />}
              </motion.div>
              <span
                className={`text-sm transition-all ${
                  task.done
                    ? 'line-through text-gray-400 dark:text-gray-500'
                    : 'text-gray-700 dark:text-gray-200 group-hover:text-primary-500'
                }`}
              >
                {task.label}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

/* ── Streak Card ────────────────────────────────────────── */
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const defaultStreak = [true, true, true, true, false, false, false];

const StreakCard = () => {
  const [streak, setStreak] = useState(defaultStreak);
  const count = streak.filter(Boolean).length;

  const toggle = (i) =>
    setStreak((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-white/10"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800 dark:text-white">🔥 Coding Streak</h3>
        <span className="text-2xl font-black gradient-text">{count} days</span>
      </div>
      <div className="flex justify-between gap-2">
        {DAYS.map((day, i) => (
          <motion.button
            key={day}
            onClick={() => toggle(i)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <div
              className={`w-full aspect-square rounded-lg flex items-center justify-center text-sm transition-all duration-200 ${
                streak[i]
                  ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-dark-600 text-gray-400'
              }`}
            >
              {streak[i] ? '🔥' : ''}
            </div>
            <span className="text-xs text-gray-400">{day}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

/* ── Dashboard Section ──────────────────────────────────── */
const DashboardCard = () => (
  <SectionWrapper
    id="dashboard"
    title="Interactive Dashboard"
    subtitle="A peek at my daily productivity widgets — fully interactive"
    className="bg-gray-50 dark:bg-dark-800/50"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <WaterTracker />
      <ProductivityCard />
      <StreakCard />
    </div>
  </SectionWrapper>
);

export default DashboardCard;
