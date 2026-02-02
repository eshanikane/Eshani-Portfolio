import { motion } from 'framer-motion';
import Section from './Section';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/40 border border-dark-700/30 hover:border-accent-500/50 hover:bg-dark-800/60 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent-600/20 flex items-center justify-center group-hover:bg-accent-600/30 transition-colors">
              <svg
                className="w-5 h-5 text-accent-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-dark-400 text-sm">Email</p>
              <p className="text-dark-100 font-medium group-hover:text-accent-400 transition-colors">
                {personalInfo.email}
              </p>
            </div>
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/40 border border-dark-700/30 hover:border-accent-500/50 hover:bg-dark-800/60 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent-600/20 flex items-center justify-center group-hover:bg-accent-600/30 transition-colors">
              <svg
                className="w-5 h-5 text-accent-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-dark-400 text-sm">Phone</p>
              <p className="text-dark-100 font-medium group-hover:text-accent-400 transition-colors">
                {personalInfo.phone}
              </p>
            </div>
          </a>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/30 border border-dark-700/20">
          <p className="text-dark-400 text-sm">Location</p>
          <p className="text-dark-200">{personalInfo.location}</p>
        </div>
      </motion.div>
    </Section>
  );
}
