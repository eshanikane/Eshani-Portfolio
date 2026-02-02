import { motion } from 'framer-motion';
import Section from './Section';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experience.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.role}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -2 }}
            className="p-6 rounded-xl bg-dark-800/40 border border-dark-700/30 hover:border-dark-600/50 transition-colors"
          >
            <div className="flex flex-wrap items-baseline gap-2 mb-4">
              <h3 className="text-lg font-semibold text-dark-100">
                {job.role}
              </h3>
              <span className="text-dark-500">·</span>
              <span className="text-accent-400 font-medium">{job.company}</span>
              {job.type === 'internship' && (
                <span className="text-xs px-2 py-0.5 rounded bg-accent-600/20 text-accent-400">
                  Internship
                </span>
              )}
            </div>
            <ul className="space-y-2">
              {(job.responsibilities || job.contributions || []).map(
                (item, i) => (
                  <li
                    key={i}
                    className="text-dark-300 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-accent-500 mt-1.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
