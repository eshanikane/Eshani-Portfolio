import { motion } from 'framer-motion';
import { profileSummary, languages } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-dark-100 mb-6">About</h2>
        <p className="text-dark-300 leading-relaxed mb-8">{profileSummary}</p>
        <div>
          <h3 className="text-sm font-medium text-dark-400 uppercase tracking-wider mb-4">
            Languages
          </h3>
          <ul className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="px-4 py-2 rounded-lg bg-dark-800/50 text-dark-200 text-sm"
              >
                {lang.name}
                {lang.level && (
                  <span className="text-dark-500 ml-1">({lang.level})</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
