import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Zap, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';



const features = [
  {
    icon: Code2,
    title: 'Practical Development',
    description: 'Turning ideas into functional products through hands-on coding and experimentation.',
  },
  {
    icon: Palette,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time',
  },
  {
    icon: Zap,
    title: 'Automation & AI',
    description: 'Building smarter systems with Odoo, n8n, and AI-powered integrations.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description: 'Constantly exploring new technologies and frameworks to keep improving.',
  },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent-red/5 blur-3xl"
        style={{ y: textY }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-yellow/5 blur-3xl"
        style={{ y: imageY }}
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
            GET TO KNOW ME
          </motion.p>
          <h2 className="text-5xl md:text-7xl tracking-tight">About Me</h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1OTgzMzY4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-red/20 via-transparent to-accent-yellow/20" />
              
              {/* Glowing Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: '0 0 40px rgba(255, 107, 107, 0.3)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(255, 107, 107, 0.3)',
                    '0 0 60px rgba(255, 217, 61, 0.4)',
                    '0 0 40px rgba(255, 107, 107, 0.3)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-card border border-border rounded-2xl p-6 backdrop-blur-lg"
            >
              <div className="flex gap-6">
                <div>
                  <div className="text-3xl text-accent-red mb-1">Graduating 2026</div>
                  <div className="text-sm text-muted-foreground">Software Engineering</div>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <div className="text-3xl text-accent-yellow mb-1">Natthida Saetang</div>
                  <div className="text-sm text-muted-foreground">Computer Science TU</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: 100 }}
            animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl md:text-4xl tracking-tight"
            >
              Passionate about creating{' '}
              <span className="text-accent-red">innovative</span> digital solutions
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              I'm a fourth-year Computer Science student, graduating in 2026, 
              passionate about creating innovative digital solutions that 
              make a real impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Throughout my academic journey, I’ve built hands-on experience 
              through university projects and personal side projects driven 
              by curiosity and creativity. Occasionally, I also take on small 
              freelance coding tasks, which allow me to explore different 
              real-world use cases and improve my technical adaptability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              I’m a continuous learner who enjoys exploring new technologies 
              through online courses and self-study. I thrive in environments 
              where I can challenge myself, learn broadly, and grow both 
              technically and personally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-accent-red hover:text-accent-yellow transition-colors"
              >
                Let's work together
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative group"
    >
      <div className="bg-card border border-border rounded-2xl p-6 h-full relative overflow-hidden">
        {/* Hover Gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 217, 61, 0.1) 100%)',
          }}
        />

        <div className="relative z-10">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center mb-4 text-accent-red"
          >
            <feature.icon size={24} />
          </motion.div>

          <h4 className="text-xl mb-2">{feature.title}</h4>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>

        {/* Glow on Hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: '0 0 30px rgba(255, 107, 107, 0.2)',
          }}
        />
      </div>
    </motion.div>
  );
}
