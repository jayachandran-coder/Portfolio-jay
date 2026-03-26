// src/data/skills.js
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiDocker,
  SiFirebase,
  SiVercel,
  SiFigma,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const skills = {
  Frontend: [
    { name: 'React', icon: SiReact, level: 95, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, level: 88, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, level: 98, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss, level: 93, color: '#1572B6' },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs, level: 88, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, level: 85, color: '#000000' },
    { name: 'Python', icon: SiPython, level: 75, color: '#3776AB' },
    { name: 'GraphQL', icon: SiGraphql, level: 70, color: '#E10098' },
    { name: 'MongoDB', icon: SiMongodb, level: 82, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 78, color: '#4169E1' },
    { name: 'Redis', icon: SiRedis, level: 68, color: '#DC382D' },
  ],
  Tools: [
    { name: 'Git', icon: SiGit, level: 93, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, level: 75, color: '#2496ED' },
    { name: 'AWS', icon: FaAws, level: 65, color: '#FF9900' },
    { name: 'Firebase', icon: SiFirebase, level: 80, color: '#FFCA28' },
    { name: 'Vercel', icon: SiVercel, level: 88, color: '#000000' },
    { name: 'Figma', icon: SiFigma, level: 72, color: '#F24E1E' },
  ],
};
