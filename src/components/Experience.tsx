import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  // Work — Internship
  {
    type: 'work',
    icon: Briefcase,
    company: 'Ascend Commerce (WeOmni)',
    position: 'Software Development Intern',
    period: 'July – Oct 2025',
    description:
      'CRM and workflow automation (Odoo/n8n) and an AI meeting summarizer to improve team efficiency.',
    achievements: [
      'Developed Odoo CRM automations and n8n workflows to reduce manual work.',
      'Integrated Google Drive API and built an LLM-based summarization system (RAG + keyword search).',
      'Enabled the team to capture insights and action items without reading full notes.',
    ],
    color: 'red',
  },
  // Education
  {
    type: 'education',
    icon: GraduationCap,
    company: 'Thammasat University',
    position: 'Bachelor of Computer Science (GPA 3.25)',
    period: '2022 – Present',
    description:
      'Pursuing B.Sc. in Computer Science focusing on web services and backend systems, software architecture, and software quality/testing.',
    achievements: [
      'Academic projects: Restaurant Reservation Web Service (Node/Express, REST).',
      'Microservices-based Food Delivery (Spring Boot, Kafka, Docker).',
      'DevOps-driven Web Platform (React, Strapi, CI/CD, AWS EC2).',
      'Participated in hackathons during study.',
    ],
    color: 'yellow',
  },
  // Certifications
  {
    type: 'certification',
    icon: Award,
    company: 'Professional Certifications',
    position: 'Certificates & Courses',
    period: '2021 – 2024',
    description: 'Courses and professional certificates pursued for continuous upskilling.',
    achievements: [
      'freeCodeCamp — JavaScript Algorithms and Data Structures (Beta).',
      'Google — Foundations: Data, Data, Everywhere.',
      'IBM — Introduction to Data Analytics.',
    ],
    color: 'yellow',
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 107, 107, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 107, 107, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent-yellow mb-4 tracking-widest"
          >
            MY JOURNEY
          </motion.p>
          <h2 className="text-5xl md:text-7xl tracking-tight">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-red via-accent-yellow to-accent-red" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ 
  experience, 
  index 
}: { 
  experience: typeof experiences[0]; 
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  const accentColor = experience.color === 'red' ? 'accent-red' : 'accent-yellow';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 relative group"
        >
          {/* Glow Effect on Hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: experience.color === 'red' 
                ? '0 0 40px rgba(255, 107, 107, 0.3)'
                : '0 0 40px rgba(255, 217, 61, 0.3)',
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`inline-block px-3 py-1 bg-${accentColor}/10 text-${accentColor} rounded-full text-sm mb-4`}
            >
              {experience.period}
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl tracking-tight mb-2"
            >
              {experience.position}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`text-${accentColor} mb-4`}
            >
              {experience.company}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted-foreground mb-4 leading-relaxed"
            >
              {experience.description}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={`space-y-2 ${isEven ? 'md:text-right' : ''}`}
            >
              {experience.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="text-muted-foreground text-sm flex items-start gap-2"
                  style={{ flexDirection: isEven ? 'row-reverse' : 'row' }}
                >
                  <span className={`text-${accentColor} mt-1`}>•</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 z-20"
      >
        <motion.div
          whileHover={{ scale: 1.3, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-12 h-12 rounded-full bg-${accentColor} flex items-center justify-center text-background relative`}
          style={{
            boxShadow: experience.color === 'red'
              ? '0 0 30px rgba(255, 107, 107, 0.6)'
              : '0 0 30px rgba(255, 217, 61, 0.6)',
          }}
        >
          <experience.icon size={20} />
          
          {/* Pulse Animation */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-${accentColor}`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Spacer for even layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
