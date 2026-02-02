import { motion } from 'framer-motion';
import Section from './Section';
import { technicalSkills, programmingSkills } from '../data/portfolioData';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-10">
        <div>
          <h3 className="text-sm font-medium text-dark-400 uppercase tracking-wider mb-4">
            Technical & Professional
          </h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="px-4 py-3 rounded-lg bg-dark-800/70 border border-dark-700/50 text-dark-200 text-sm hover:border-accent-500/30 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-dark-400 uppercase tracking-wider mb-4">
            Programming & Engineering
          </h3>
          <div className="flex flex-wrap gap-3">
            {programmingSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="px-4 py-3 rounded-lg bg-dark-800/70 border border-dark-700/50 text-dark-200 text-sm hover:border-accent-500/30 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
