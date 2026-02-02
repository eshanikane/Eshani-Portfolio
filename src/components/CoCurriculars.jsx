import { motion } from 'framer-motion';
import Section from './Section';
import { cocurriculars } from '../data/portfolioData';

export default function CoCurriculars() {
  return (
    <Section id="cocurriculars" title="Co-curriculars & Activities">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          className="p-6 rounded-xl bg-dark-800/40 border border-dark-700/30 hover:border-dark-600/50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-dark-100 mb-2">
            {cocurriculars.kathak.activity}
          </h3>
          <p className="text-dark-400 text-sm mb-1">
            Completed {cocurriculars.kathak.duration}
          </p>
          <p className="text-dark-300 text-sm">
            {cocurriculars.kathak.note}
          </p>
        </motion.div>

        <div>
          <h3 className="text-sm font-medium text-dark-400 uppercase tracking-wider mb-4">
            Hobbies
          </h3>
          <div className="flex flex-wrap gap-3">
            {cocurriculars.hobbies.map((hobby, i) => (
              <motion.span
                key={hobby}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="px-4 py-3 rounded-lg bg-dark-800/70 border border-dark-700/50 text-dark-200 text-sm hover:border-accent-500/30 transition-colors"
              >
                {hobby}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
