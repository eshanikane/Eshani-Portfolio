import { motion } from 'framer-motion';

export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-dark-100 mb-10">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}
