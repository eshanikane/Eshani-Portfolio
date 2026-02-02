import { motion } from 'framer-motion';
import Section from './Section';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <motion.article
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -2 }}
        className="p-6 rounded-xl bg-dark-800/40 border border-dark-700/30 hover:border-dark-600/50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-dark-100 mb-1">
          {education.degree}
        </h3>
        <p className="text-accent-400 font-medium mb-4">
          {education.institution}
        </p>
        <p className="text-dark-400 text-sm mb-6">{education.period}</p>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-dark-400 uppercase tracking-wider mb-3">
            Semester-wise SGPA
          </h4>
          <div className="flex flex-wrap gap-4">
            {education.semesters.map((sem) => (
              <div
                key={sem.label}
                className="px-4 py-2 rounded-lg bg-dark-900/60 border border-dark-700/50"
              >
                <span className="text-dark-400 text-sm">{sem.label}:</span>
                <span className="text-dark-100 font-medium ml-2">
                  {sem.sgpa}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-dark-700/50">
          <span className="text-dark-400 text-sm">Honours in </span>
          <span className="text-accent-400 font-medium">
            {education.honours.subject}
          </span>
          <span className="text-dark-400 text-sm"> — CGPA: </span>
          <span className="text-dark-100 font-semibold">
            {education.honours.cgpa}
          </span>
        </div>
      </motion.article>
    </Section>
  );
}
