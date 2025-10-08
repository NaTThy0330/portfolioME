import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  video?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Restaurant Reservation Web Service',
    category: 'Backend Web Service',
    description:
      'Backend services for customer portal (menu, reservation, review, promotions) and restaurant management (booking queue, menu & promotion control). Designed RESTful endpoints for booking and availability, integrated two services for real-time updates, with unit/integration testing.',
    image: '/Restaurant Reservation Web Service.png',
    tags: ['Node.js', 'Express.js', 'REST API', 'Postman', 'JavaScript'],
    link: '#',
    github: 'https://github.com/Yolwadee6509650070/restaurant_reservation_webservice',
  },
  {
    id: 2,
    title: 'Microservices-based Food Delivery System',
    category: 'Enterprise Software Architecture',
    description:
      'Designed and implemented microservices for restaurant data and order management. Integrated Kafka for async messaging, built REST APIs for order/payment/rider operations, containerized with Docker, and validated with Postman.',
    image: '/food-delivery-solution.png',
    tags: ['Spring Boot', 'Kafka', 'REST API', 'SQL Server', 'Docker', 'Postman'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'DevOps-Driven Web Platform for Personalized Food',
    category: 'DevOps / Full Stack',
    description:
      'Profile management with secure auth and access control. Wrote unit/middleware and integration tests (85%+ coverage). Automated CI with GitHub Actions, deployed backend via Docker and tested on AWS EC2.',
    image: '/foodadvisor.png',
    tags: ['AWS EC2', 'React', 'Strapi', 'Docker', 'GitHub Actions', 'Jest', 'CI/CD'],
    link: '#',
    github: 'https://github.com/Yolwadee6509650070/cs360_group',
  },
  {
    id: 4,
    title: 'Meeting Transcript Summarizer Web App',
    category: 'AI Application',
    description:
      'Integrated Google Drive API to fetch meeting files and extract text. Built an LLM-based summarization system with RAG + keyword search for contextual Q&A, generating key points and action items automatically.',
    image: '/aimeeting.png',
    tags: ['LLM', 'RAG', 'Google Drive API', 'React', 'Node.js'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Pixcel Automate Webservice',
    category: 'Side Project',
    description:
      'Secure Express REST API with PostgreSQL, JWT auth, Helmet/CORS hardening, and HMAC validation for LINE webhooks. Integrated LINE Messaging & Google Drive APIs for per-user uploads, with a worker queue and usage/quota/activity endpoints.',
    image: '/pixcel.png',
    tags: ['React', 'TypeScript', 'Vite', 'Radix UI', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Helmet', 'CORS', 'LINE API', 'Google Drive API', 'Docker'],
    link: '#',
    github: '#',
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section id="projects" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 217, 61, 0.3) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
            className="text-accent-red mb-4 tracking-widest"
          >
            FEATURED WORK
          </motion.p>
          <h2 className="text-5xl md:text-7xl tracking-tight mb-6">
            Selected Projects
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            A showcase of my recent work, from concept to deployment
          </p>
        </motion.div>

        {/* Projects Grid - Fullscreen Cards */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <motion.div
        className={`relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group ${isEven ? '' : 'md:col-start-2'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="w-full h-full"
        >
          {project.video ? (
            <video
              src={project.video}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-red/30 via-transparent to-accent-yellow/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: '0 0 60px rgba(255, 107, 107, 0.4), 0 0 100px rgba(255, 217, 61, 0.3)',
          }}
        />

        {/* Quick Links on Hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-accent-red flex items-center justify-center text-white"
          >
            <ExternalLink size={24} />
          </motion.a>
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-accent-yellow flex items-center justify-center text-black"
          >
            <Github size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className={`space-y-6 ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-accent-yellow mb-2 tracking-wider">{project.category}</p>
          <h3 className="text-4xl md:text-5xl tracking-tight mb-4">{project.title}</h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-3"
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + tagIndex * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-card border border-border rounded-full text-sm"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex gap-4 pt-4"
        >
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-accent-red hover:text-accent-yellow transition-colors flex items-center gap-2"
          >
            View Project <ExternalLink size={18} />
          </motion.a>
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-muted-foreground hover:text-accent-red transition-colors flex items-center gap-2"
          >
            Source Code <Github size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
