import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent-400 text-sm font-medium mb-4 uppercase tracking-wider"
        >
          AI & Data Science Student
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-100 mb-4"
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-dark-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          {personalInfo.location}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-600 text-white hover:bg-accent-500 transition-colors text-sm font-medium"
          >
            Get in Touch
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-dark-600 text-dark-300 hover:border-accent-500 hover:text-accent-400 transition-colors text-sm font-medium"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
