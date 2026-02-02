import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-dark-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-dark-500 text-sm">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-dark-500 hover:text-accent-400 text-sm transition-colors"
          >
            Email
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="text-dark-500 hover:text-accent-400 text-sm transition-colors"
          >
            Phone
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
