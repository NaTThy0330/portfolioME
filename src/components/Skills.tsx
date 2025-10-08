import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import {
  Code2,
  Database,
  Palette,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Package,
  Layers,
  Zap,
  Globe,
  Terminal,
  Cpu,
  Box,
  FileCode,
  Layout,
  Shield,
  MessageSquare,
} from 'lucide-react';

const skills = [
  // Frontend
  { name: 'React', icon: Code2, color: 'from-blue-500 to-cyan-500', category: 'Frontend', frequent: true, level: 5 },
  { name: 'TypeScript', icon: FileCode, color: 'from-blue-600 to-blue-400', category: 'Frontend', frequent: true, level: 5 },
  { name: 'Tailwind CSS', icon: Palette, color: 'from-cyan-500 to-teal-500', category: 'Frontend', frequent: true, level: 5 },
  { name: 'Vite', icon: Zap, color: 'from-purple-500 to-pink-500', category: 'Frontend', level: 4 },
  { name: 'Radix UI', icon: Layout, color: 'from-gray-700 to-gray-500', category: 'Frontend', level: 4 },

  // Backend
  { name: 'Node.js', icon: Server, color: 'from-green-600 to-green-400', category: 'Backend', frequent: true, level: 5 },
  { name: 'Express', icon: Layers, color: 'from-slate-600 to-slate-400', category: 'Backend', frequent: true, level: 5 },
  { name: 'REST API', icon: Globe, color: 'from-pink-600 to-pink-400', category: 'Backend', frequent: true, level: 5 },
  { name: 'PostgreSQL', icon: Database, color: 'from-blue-700 to-blue-500', category: 'Backend', frequent: true, level: 5 },
  { name: 'MySQL', icon: Database, color: 'from-sky-600 to-cyan-500', category: 'Backend', level: 4 },
  { name: 'MongoDB', icon: Database, color: 'from-green-700 to-green-500', category: 'Backend', level: 4 },
  { name: 'SQL Server', icon: Database, color: 'from-indigo-700 to-indigo-500', category: 'Backend', level: 4 },
  { name: 'Spring Boot', icon: Cpu, color: 'from-emerald-600 to-emerald-400', category: 'Backend', level: 4 },
  { name: 'Kafka', icon: Box, color: 'from-orange-500 to-amber-400', category: 'Backend', level: 4 },
  { name: 'Strapi', icon: Package, color: 'from-violet-600 to-violet-400', category: 'Backend', level: 4 },
  { name: 'JWT', icon: Shield, color: 'from-red-600 to-orange-500', category: 'Backend', level: 4 },

  // DevOps
  { name: 'Docker', icon: Box, color: 'from-blue-500 to-blue-400', category: 'DevOps', frequent: true, level: 5 },
  { name: 'GitHub Actions', icon: GitBranch, color: 'from-orange-600 to-red-500', category: 'DevOps', frequent: true, level: 5 },
  { name: 'AWS EC2', icon: Cloud, color: 'from-orange-500 to-yellow-500', category: 'DevOps', level: 4 },
  { name: 'CI/CD', icon: Package, color: 'from-sky-600 to-cyan-400', category: 'DevOps', level: 4 },

  // APIs & Integrations
  { name: 'Google Drive API', icon: Globe, color: 'from-rose-500 to-fuchsia-400', category: 'APIs & Integrations', level: 4 },
  { name: 'LINE Messaging API', icon: MessageSquare, color: 'from-lime-600 to-green-500', category: 'APIs & Integrations', level: 4 },

  // Tools
  { name: 'Postman', icon: Terminal, color: 'from-stone-600 to-stone-400', category: 'Tools', level: 4 },
  { name: 'Jira', icon: Layers, color: 'from-blue-700 to-indigo-500', category: 'Tools', level: 4 },
  { name: 'Trello', icon: Package, color: 'from-cyan-600 to-sky-500', category: 'Tools', level: 4 },
];

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'APIs & Integrations', 'Tools'];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground mb-4">My expertise</p>
          <h2 className="text-5xl md:text-6xl tracking-tight mb-6">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit honed through years of building modern web applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent hover:bg-accent/70'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Vercel', 'Render', 'Jest', 'n8n', 'Odoo', 'Docker Compose', 'Bash'].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="px-5 py-2 bg-muted/50 rounded-full border border-border/50 hover:border-primary/50 transition-colors cursor-default backdrop-blur-sm"
                >
                  {tech}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: {
    name: string;
    icon: any;
    color: string;
    category: string;
    frequent?: boolean;
    level: number;
  };
  index: number;
  isInView: boolean;
}

function SkillCard({ skill, index, isInView }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.5 + index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-default"
    >
      <div className="relative bg-card border border-border rounded-2xl p-6 h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        {/* Gradient Background on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          initial={false}
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}
            animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          {/* Skill Name */}
          <h3 className="mb-3">{skill.name}</h3>

          {/* Skill level chart removed as requested */}

          {/* Category + Frequently Used tags */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {skill.frequent && (
              <span className="px-3 py-1 rounded-full bg-accent-yellow/20 text-accent-yellow text-xs border border-accent-yellow/40">
                Core
              </span>
            )}
            <motion.div
              className="inline-block px-3 py-1 bg-accent/50 rounded-full text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {skill.category}
            </motion.div>
          </div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          animate={isHovered ? { x: '200%' } : { x: '-100%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
